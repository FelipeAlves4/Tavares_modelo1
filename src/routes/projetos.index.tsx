import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { z } from "zod";
import { categories, projects } from "@/lib/content";
import { ProjectCard } from "@/components/site/ProjectCard";
import { SplitHeadline } from "@/components/site/Motion";

const search = z.object({
  categoria: z.enum(["todos", "residencial", "corporativo", "em-execucao"]).catch("todos").default("todos"),
});

export const Route = createFileRoute("/projetos/")({
  validateSearch: search,
  head: () => ({
    meta: [
      { title: "Projetos — TAVARES Construção" },
      { name: "description", content: "Portfólio demonstrativo: residências de condomínio, obras corporativas e obras em execução." },
      { property: "og:title", content: "Projetos — TAVARES Construção" },
      { property: "og:description", content: "Portfólio demonstrativo com projetos fictícios e imagens ilustrativas." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/projetos" }],
  }),
  component: Projetos,
});

function Projetos() {
  const { categoria } = Route.useSearch();
  const navigate = useNavigate({ from: "/projetos/" });
  const list = categoria === "todos" ? projects : projects.filter((p) => p.category === categoria);
  return (
    <section className="pb-32 pt-36 md:pt-48">
      <div className="container-x">
        <p className="eyebrow text-muted-foreground">Portfólio · Projetos fictícios</p>
        <SplitHeadline as="h1" text="Projetos" className="mt-6 text-[clamp(3.5rem,10vw,9rem)] leading-none" />
        <div role="group" aria-label="Filtrar por categoria" className="mt-14 flex flex-wrap gap-3 border-b border-border pb-8">
          {categories.map((c) => {
            const active = c.id === categoria;
            const count = c.id === "todos" ? projects.length : projects.filter((p) => p.category === c.id).length;
            return (
              <button
                key={c.id}
                aria-pressed={active}
                onClick={() => navigate({ search: { categoria: c.id }, replace: true, resetScroll: false })}
                className={`eyebrow relative px-5 py-3 transition-colors ${active ? "text-ivory" : "text-forest hover:bg-sand"}`}
              >
                {active && <motion.span layoutId="filter" className="absolute inset-0 bg-forest" transition={{ type: "spring", bounce: 0.15, duration: 0.6 }} />}
                <span className="relative">{c.label} <span className="opacity-60">({count})</span></span>
              </button>
            );
          })}
        </div>
        <motion.ul layout className="mt-16 grid gap-x-10 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <motion.li
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard p={p} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}
