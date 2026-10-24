import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { img, photos, projects } from "@/lib/content";
import { Reveal, RevealImage, SplitHeadline } from "@/components/site/Motion";
import { ProjectCard } from "@/components/site/ProjectCard";

const heroUrl = img(photos.hero, 2400);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TAVARES Construção — Construímos o que permanece" },
      { name: "description", content: "Residencial de alto padrão, construção corporativa e engenharia. Modelo demonstrativo 01 — Cinematic Architecture." },
      { property: "og:title", content: "TAVARES Construção — Construímos o que permanece" },
      { property: "og:description", content: "Residencial de alto padrão, construção corporativa e engenharia." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: img(photos.hero, 1200) + "&h=630" },
      { name: "twitter:image", content: img(photos.hero, 1200) + "&h=630" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1.08, 1.18]);
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["0%", "12%"]);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden bg-forest text-ivory">
      <motion.img
        src={heroUrl}
        alt="Casa contemporânea de condomínio ao entardecer, com volumes horizontais e grandes panos de vidro (imagem ilustrativa)"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ scale, y }}
        loading="eager"
        fetchPriority="high"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6 }}
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <motion.div style={{ opacity: fade }} className="container-x relative flex h-full flex-col justify-end pb-16 md:pb-24">
        <motion.p className="eyebrow text-champagne" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 1 }}>
          Residencial · Corporativo · Engenharia
        </motion.p>
        <SplitHeadline as="h1" text="Construímos o que permanece." delay={0.3} className="mt-6 max-w-5xl text-[clamp(3rem,9vw,8.5rem)] leading-[0.95]" />
        <motion.div className="mt-10 flex flex-wrap items-center gap-8" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.9 }}>
          <Link to="/projetos" className="eyebrow group inline-flex items-center gap-4 bg-ivory px-8 py-5 text-forest transition-colors hover:bg-champagne">
            Explorar projetos <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <span className="text-xs text-ivory/60">Imagem ilustrativa · Modelo demonstrativo</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="relative bg-ivory py-28 md:py-44">
      <div className="container-x grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-3"><p className="eyebrow text-muted-foreground">01 — Manifesto</p></Reveal>
        <div className="md:col-span-9">
          <SplitHeadline text="Uma obra é a promessa mais concreta que alguém pode fazer. Tratamos cada uma como permanente." className="text-[clamp(2rem,4.6vw,4.25rem)] leading-[1.08]" />
          <Reveal delay={0.2} className="mt-12 grid gap-8 text-muted-foreground md:grid-cols-2">
            <p className="leading-relaxed">Arquitetura de alto padrão exige mais que execução: exige leitura do projeto, respeito pelo detalhe e uma engenharia que antecipa problemas antes que eles cheguem ao canteiro.</p>
            <p className="leading-relaxed">Este é um modelo visual. O texto final será escrito com a equipe TAVARES, a partir da sua história e dos seus valores reais.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Selected() {
  const [a, b, c] = [projects[0], projects[2], projects[1]];
  return (
    <section className="bg-ivory pb-28 md:pb-40">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 border-t border-border pt-10 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-muted-foreground">02 — Projetos selecionados</p>
            <h2 className="mt-6 text-5xl md:text-7xl">Obras que falam por nós.</h2>
          </div>
          <Link to="/projetos" className="eyebrow underline decoration-champagne underline-offset-8 hover:decoration-forest">Ver todos os projetos</Link>
        </div>
        <div className="mt-16 grid gap-x-10 gap-y-20 md:grid-cols-12">
          <Reveal className="md:col-span-7"><ProjectCard p={a} ratio="aspect-[4/3]" /></Reveal>
          <Reveal className="md:col-span-5 md:mt-40" delay={0.1}><ProjectCard p={b} /></Reveal>
          <Reveal className="md:col-span-5 md:col-start-2"><ProjectCard p={c} /></Reveal>
          <Reveal className="md:col-span-5 md:col-start-8 md:-mt-24" delay={0.1}><ProjectCard p={projects[5]} ratio="aspect-[3/4]" /></Reveal>
        </div>
        <p className="mt-16 text-xs text-muted-foreground">Todos os projetos exibidos são fictícios e utilizam fotografias ilustrativas de banco de imagens.</p>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", t: "Leitura do projeto", d: "Estudo das disciplinas, compatibilização e identificação de riscos antes da obra.", p: photos.plans, alt: "Plantas e ferramentas de desenho sobre mesa de projeto" },
  { n: "02", t: "Planejamento", d: "Orçamento, cronograma e logística de canteiro definidos com clareza.", p: photos.engineers, alt: "Engenheiros com capacete analisando documentos em obra" },
  { n: "03", t: "Execução", d: "Equipe técnica presente, segurança como rotina e controle de qualidade por etapa.", p: photos.worker, alt: "Profissional da construção com equipamento de segurança trabalhando em estrutura" },
  { n: "04", t: "Acabamento e entrega", d: "Detalhes revisados, documentação organizada e acompanhamento pós-obra.", p: photos.interiorA, alt: "Interior finalizado de residência contemporânea com luz natural" },
];

function Process() {
  return (
    <section className="bg-sand py-28 md:py-40">
      <div className="container-x">
        <p className="eyebrow text-muted-foreground">03 — Processo</p>
        <h2 className="mt-6 max-w-3xl text-5xl md:text-7xl">Do desenho ao último detalhe.</h2>
        <div className="mt-20 md:grid md:grid-cols-12 md:gap-16">
          <div className="hidden md:col-span-5 md:block">
            <div className="sticky top-28">
              <RevealImage src={img(photos.site, 1400)} alt="Canteiro de obras com estrutura em execução e trabalhadores (imagem ilustrativa)" ratio="aspect-[3/4]" />
            </div>
          </div>
          <ol className="space-y-20 md:col-span-7 md:space-y-32">
            {steps.map((s) => (
              <li key={s.n}>
                <Reveal>
                  <div className="flex items-baseline gap-6 border-t border-forest/20 pt-8">
                    <span className="font-serif text-2xl text-graphite">{s.n}</span>
                    <div>
                      <h3 className="text-3xl md:text-4xl">{s.t}</h3>
                      <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">{s.d}</p>
                    </div>
                  </div>
                </Reveal>
                <RevealImage src={img(s.p, 1200)} alt={s.alt} ratio="aspect-[16/10]" className="mt-8" />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

const services = [
  { t: "Residencial de alto padrão", d: "Casas de condomínio e residências autorais, executadas com rigor de projeto e cuidado com o acabamento.", p: photos.houseB },
  { t: "Construção corporativa", d: "Sedes, escritórios e edifícios comerciais com gestão de prazo, custo e operação.", p: photos.tower },
  { t: "Engenharia e gerenciamento", d: "Planejamento, compatibilização e gerenciamento de obras de terceiros.", p: photos.engineers },
];

function Services() {
  return (
    <section className="bg-forest py-28 text-ivory md:py-40">
      <div className="container-x">
        <p className="eyebrow text-champagne">04 — Serviços</p>
        <h2 className="mt-6 max-w-3xl text-5xl md:text-7xl">Três frentes, um mesmo padrão.</h2>
        <div className="mt-20 grid gap-12 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.12}>
              <article className="group">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={img(s.p, 1000)} alt={`${s.t} — imagem ilustrativa`} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.05]" />
                  <div className="absolute inset-0 bg-card-overlay" />
                  <span className="absolute bottom-5 left-5 font-serif text-5xl text-champagne">0{i + 1}</span>
                </div>
                <h3 className="mt-8 text-3xl">{s.t}</h3>
                <p className="mt-4 leading-relaxed text-ivory/70">{s.d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function People() {
  return (
    <section className="bg-ivory py-28 md:py-40">
      <div className="container-x grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5 md:pt-24">
          <p className="eyebrow text-muted-foreground">05 — Pessoas</p>
          <SplitHeadline text="Toda obra começa por quem a constrói." className="mt-6 text-5xl leading-[1.05] md:text-6xl" />
          <Reveal delay={0.2}><p className="mt-8 max-w-md leading-relaxed text-muted-foreground">Engenheiros, mestres de obras, técnicos de segurança e equipes de campo. Segurança e respeito como parte do método — não como exceção.</p></Reveal>
        </div>
        <div className="grid grid-cols-2 gap-4 md:col-span-7 md:gap-6">
          <RevealImage src={img(photos.workerHelmet, 1000)} alt="Trabalhador com capacete e equipamentos de proteção em canteiro" className="col-span-2" ratio="aspect-[16/10]" />
          <RevealImage src={img(photos.crew, 800)} alt="Equipe de construção trabalhando em estrutura" ratio="aspect-[4/5]" />
          <RevealImage src={img(photos.engineers, 800)} alt="Engenheiros revisando projeto no canteiro" ratio="aspect-[4/5]" className="mt-12" />
        </div>
      </div>
    </section>
  );
}

const trust = [
  { t: "Transparência", d: "Relatórios de obra claros, com registro fotográfico e cronograma atualizado." },
  { t: "Segurança", d: "Uso de EPIs, treinamento e organização de canteiro como rotina diária." },
  { t: "Responsabilidade técnica", d: "Engenharia presente do planejamento à entrega." },
  { t: "Pós-obra", d: "Manual de uso, documentação organizada e canal de atendimento." },
];

function Trust() {
  return (
    <section className="border-y border-border bg-ivory py-28 md:py-36">
      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow text-muted-foreground">06 — Compromissos</p>
            <h2 className="mt-6 text-4xl md:text-5xl">O que você pode esperar.</h2>
            <p className="mt-6 text-sm text-muted-foreground">Princípios de trabalho — sem números ou selos inventados. Indicadores reais serão adicionados com a equipe TAVARES.</p>
          </div>
          <dl className="grid gap-px bg-border sm:grid-cols-2 md:col-span-8">
            {trust.map((x, i) => (
              <Reveal key={x.t} delay={i * 0.08} className="bg-ivory p-8 md:p-10">
                <dt className="font-serif text-2xl">{x.t}</dt>
                <dd className="mt-4 text-sm leading-relaxed text-muted-foreground">{x.d}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function BehindScenes() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["4%", "-12%"]);
  const shots = [
    { p: photos.cranes, a: "Gruas sobre edifício em construção" },
    { p: photos.concrete, a: "Estrutura de concreto em execução" },
    { p: photos.structure, a: "Detalhe estrutural de edifício" },
    { p: photos.crane, a: "Grua no canteiro ao entardecer" },
    { p: photos.plans, a: "Projeto técnico sobre mesa" },
  ];
  return (
    <section ref={ref} className="overflow-hidden bg-sand py-28 md:py-40">
      <div className="container-x">
        <p className="eyebrow text-muted-foreground">07 — Bastidores</p>
        <h2 className="mt-6 max-w-3xl text-5xl md:text-7xl">O canteiro, sem filtro.</h2>
      </div>
      <motion.div style={{ x }} className="mt-16 flex gap-5 pl-[clamp(1.25rem,4vw,3.5rem)]">
        {shots.map((s, i) => (
          <figure key={i} className={`relative shrink-0 overflow-hidden bg-graphite ${i % 2 ? "aspect-[3/4] w-[60vw] md:w-[24vw]" : "aspect-[4/3] w-[80vw] md:w-[36vw]"}`}>
            <img src={img(s.p, 1000)} alt={`${s.a} (imagem ilustrativa)`} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1400ms] hover:scale-[1.05]" />
          </figure>
        ))}
      </motion.div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-forest text-ivory">
      <img src={img(photos.residenceNight, 2000)} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-35" />
      <div className="container-x relative py-32 md:py-48">
        <p className="eyebrow text-champagne">Próximo capítulo</p>
        <SplitHeadline text="Vamos conversar sobre a sua obra." className="mt-6 max-w-4xl text-[clamp(2.75rem,7vw,6.5rem)] leading-[1]" />
        <Reveal delay={0.3}>
          <Link to="/contato" className="eyebrow mt-12 inline-flex items-center gap-4 bg-champagne px-8 py-5 text-forest transition-colors hover:bg-ivory">
            Falar com a TAVARES →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Selected />
      <Process />
      <Services />
      <People />
      <Trust />
      <BehindScenes />
      <FinalCta />
    </>
  );
}
