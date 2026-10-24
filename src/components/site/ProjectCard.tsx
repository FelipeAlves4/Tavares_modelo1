import { Link } from "@tanstack/react-router";
import { categoryLabel, img, type Project } from "@/lib/content";

export function ProjectCard({ p, ratio = "aspect-[4/5]" }: { p: Project; ratio?: string }) {
  return (
    <Link to="/projetos/$slug" params={{ slug: p.slug }} className="group block">
      <div className={`relative overflow-hidden bg-sand ${ratio}`}>
        <img
          src={img(p.cover, 1200)}
          alt={`${p.title} — imagem ilustrativa de ${p.typology.toLowerCase()}`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
        />
        <span className="eyebrow absolute left-4 top-4 bg-ivory/90 px-3 py-1.5 text-[0.6rem] text-forest">Projeto fictício</span>
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="text-2xl md:text-3xl">{p.title}</h3>
        <span className="eyebrow shrink-0 text-muted-foreground">{categoryLabel(p.category)}</span>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">{p.location}</p>
    </Link>
  );
}
