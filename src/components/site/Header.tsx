import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const nav = [
  { to: "/projetos", label: "Projetos" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const overHero = (path === "/" || /^\/projetos\/.+/.test(path)) && !scrolled && !open;

  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        overHero ? "text-ivory" : "bg-ivory/90 text-forest backdrop-blur-md border-b border-border"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" aria-label="TAVARES Construção — início" className="relative z-50">
          <Logo onDarkBackground={overHero} />
        </Link>
        <nav className="hidden items-center gap-10 md:flex" aria-label="Principal">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="eyebrow relative py-2 opacity-80 transition-opacity hover:opacity-100 data-[status=active]:opacity-100 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform hover:after:scale-x-100 data-[status=active]:after:scale-x-100">
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          className="eyebrow relative z-50 flex items-center gap-3 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? "Fechar" : "Menu"}
          <span className="relative block h-3 w-6">
            <span className={`absolute left-0 h-px w-6 bg-current transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 h-px w-6 bg-current transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col justify-end bg-forest px-6 pb-16 text-ivory md:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="flex flex-col gap-4" aria-label="Menu móvel">
              {[{ to: "/", label: "Início" }, ...nav].map((n, i) => (
                <motion.div key={n.to} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.07 }}>
                  <Link to={n.to} className="font-serif text-5xl">{n.label}</Link>
                </motion.div>
              ))}
            </nav>
            <p className="eyebrow mt-12 text-champagne">Modelo 01 — demonstrativo</p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
