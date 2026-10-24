import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { categoryLabel, getProject, img, projects } from "@/lib/content";
import { Reveal, RevealImage, SplitHeadline } from "@/components/site/Motion";
import { ProjectCard } from "@/components/site/ProjectCard";

export const Route = createFileRoute("/projetos/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    const p = loaderData?.project;
    const title = p ? `${p.title} — Projeto demonstrativo | TAVARES` : "Projeto não encontrado — TAVARES";
    const meta = [
      { title },
      { name: "description", content: p?.summary ?? "Projeto não encontrado." },
      { property: "og:title", content: title },
      { property: "og:description", content: p?.summary ?? "Projeto não encontrado." },
      { property: "og:type", content: "article" },
    ];
    if (p) meta.push({ property: "og:image", content: img(p.cover, 1200) + "&h=630" }, { name: "twitter:image", content: img(p.cover, 1200) + "&h=630" } as never);
    return { meta, links: [{ rel: "canonical", href: `/projetos/${params.slug}` }] };
  },
  notFoundComponent: () => (
    <section className="container-x pb-32 pt-48">
      <h1 className="text-6xl">Projeto não encontrado.</h1>
      <Link to="/projetos" search={{ categoria: "todos" }} className="eyebrow mt-10 inline-flex bg-forest px-8 py-4 text-ivory">Ver projetos</Link>
    </section>
  ),
  errorComponent: () => <section className="container-x pt-48 pb-32"><h1 className="text-5xl">Não foi possível carregar o projeto.</h1></section>,
  component: Case,
});

function Case() {
  const { project: p } = Route.useLoaderData();
  const reduce = useReducedMotion();
  const others = projects.filter((x) => x.slug !== p.slug).slice(0, 2);
  const facts = [
    ["Categoria", categoryLabel(p.category)],
    ["Tipologia", p.typology],
    ["Localização", p.location],
    ["Etapa", p.stage],
    ["Área", p.area],
  ];
  return (
    <article>
      <section className="relative h-[92svh] min-h-[560px] overflow-hidden bg-forest text-ivory">
        <motion.img
          src={img(p.cover, 2400)}
          alt={`${p.title} — imagem ilustrativa de ${p.typology.toLowerCase()}`}
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
          initial={reduce ? false : { scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="container-x relative flex h-full flex-col justify-end pb-16">
          <p className="eyebrow text-champagne">Projeto fictício · {categoryLabel(p.category)}</p>
          <SplitHeadline as="h1" text={p.title} delay={0.2} className="mt-5 text-[clamp(3rem,8vw,7.5rem)] leading-none" />
        </div>
      </section>

      <section className="container-x grid gap-16 py-24 md:grid-cols-12 md:py-32">
        <aside className="md:col-span-4">
          <h2 className="eyebrow text-muted-foreground">Ficha do projeto</h2>
          <dl className="mt-8 divide-y divide-border border-y border-border">
            {facts.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-6 py-4 text-sm">
                <dt className="text-muted-foreground">{k}</dt>
                <dd className="text-right">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-xs text-muted-foreground">Projeto de demonstração. Dados e imagens ilustrativos.</p>
        </aside>
        <div className="md:col-span-7 md:col-start-6">
          <Reveal><p className="font-serif text-3xl leading-snug md:text-4xl">{p.summary}</p></Reveal>
        </div>
      </section>

      <section className="container-x grid gap-6 md:grid-cols-12">
        <RevealImage src={img(p.gallery[0], 2000)} alt={`${p.title} — vista ilustrativa 1`} className="md:col-span-12" ratio="aspect-[16/9]" />
        <RevealImage src={img(p.gallery[1], 1200)} alt={`${p.title} — vista ilustrativa 2`} className="md:col-span-5" ratio="aspect-[4/5]" />
        <RevealImage src={img(p.gallery[2], 1400)} alt={`${p.title} — vista ilustrativa 3`} className="md:col-span-7 md:mt-24" ratio="aspect-[4/3]" />
      </section>

      <section className="bg-sand py-24 md:py-32 mt-24">
        <div className="container-x">
          <h2 className="text-5xl md:text-6xl">Soluções</h2>
          <div className="mt-14 grid gap-12 md:grid-cols-3">
            {p.solutions.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1} className="border-t border-forest/20 pt-8">
                <span className="font-serif text-xl text-graphite">0{i + 1}</span>
                <h3 className="mt-4 text-3xl">{s.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <RevealImage src={img(p.gallery[3], 2000)} alt={`${p.title} — vista ilustrativa 4`} ratio="aspect-[21/9]" />
      </section>

      <section className="container-x border-t border-border py-24">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-4xl md:text-5xl">Outros projetos</h2>
          <Link to="/projetos" search={{ categoria: "todos" }} className="eyebrow underline decoration-champagne underline-offset-8">Todos</Link>
        </div>
        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {others.map((o) => <ProjectCard key={o.slug} p={o} ratio="aspect-[4/3]" />)}
        </div>
      </section>
    </article>
  );
}
