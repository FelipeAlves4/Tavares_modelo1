import { createFileRoute, Link } from "@tanstack/react-router";
import { img, photos } from "@/lib/content";
import { Reveal, RevealImage, SplitHeadline } from "@/components/site/Motion";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — TAVARES Construção" },
      { name: "description", content: "Como a TAVARES pensa a construção: rigor técnico, pessoas e permanência." },
      { property: "og:title", content: "Sobre — TAVARES Construção" },
      { property: "og:description", content: "Rigor técnico, pessoas e permanência." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: Sobre,
});

const values = [
  { t: "Rigor", d: "Planejar antes de construir. Cada decisão técnica registrada e justificada." },
  { t: "Pessoas", d: "Equipes seguras, respeitadas e bem orientadas produzem obras melhores." },
  { t: "Permanência", d: "Construímos pensando em décadas, não em entregas." },
];

function Sobre() {
  return (
    <>
      <section className="pb-24 pt-36 md:pt-48">
        <div className="container-x">
          <p className="eyebrow text-muted-foreground">Institucional</p>
          <SplitHeadline as="h1" text="Engenharia com sensibilidade arquitetônica." className="mt-6 max-w-5xl text-[clamp(2.75rem,7vw,6.5rem)] leading-[1.02]" />
        </div>
      </section>
      <section className="container-x">
        <RevealImage src={img(photos.architecture, 2200)} alt="Arquitetura contemporânea em concreto e vidro (imagem ilustrativa)" ratio="aspect-[21/9]" eager />
      </section>
      <section className="container-x grid gap-12 py-24 md:grid-cols-12 md:py-36">
        <p className="eyebrow text-muted-foreground md:col-span-3">Nossa história</p>
        <Reveal className="space-y-6 text-lg leading-relaxed md:col-span-7">
          <p className="font-serif text-3xl leading-snug">Espaço reservado para a história real da TAVARES — fundação, trajetória e pessoas por trás da marca.</p>
          <p className="text-muted-foreground">Neste modelo demonstrativo, não incluímos datas, números de obras, clientes ou certificações. Essas informações serão adicionadas a partir de dados fornecidos pela empresa.</p>
        </Reveal>
      </section>
      <section className="bg-forest py-24 text-ivory md:py-36">
        <div className="container-x grid gap-16 md:grid-cols-2">
          <RevealImage src={img(photos.engineers, 1400)} alt="Engenheiros com capacete revisando projeto em obra (imagem ilustrativa)" ratio="aspect-[4/5]" />
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl md:text-6xl">Princípios</h2>
            <ul className="mt-12 space-y-10">
              {values.map((v, i) => (
                <Reveal key={v.t} delay={i * 0.1}>
                  <li className="border-t border-ivory/15 pt-6">
                    <h3 className="text-3xl text-champagne">{v.t}</h3>
                    <p className="mt-3 text-ivory/70">{v.d}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="container-x py-28 text-center">
        <h2 className="text-4xl md:text-6xl">Conheça os projetos.</h2>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/projetos" search={{ categoria: "todos" }} className="eyebrow bg-forest px-8 py-5 text-ivory hover:bg-graphite">Ver projetos</Link>
          <Link to="/contato" className="eyebrow border border-forest px-8 py-5 hover:bg-sand">Contato</Link>
        </div>
      </section>
    </>
  );
}
