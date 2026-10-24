import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <section className="flex min-h-[80vh] items-center pt-20">
      <div className="container-x">
        <p className="eyebrow text-muted-foreground">Erro 404</p>
        <h1 className="mt-6 max-w-3xl text-6xl md:text-8xl">Esta página ainda não foi construída.</h1>
        <p className="mt-6 max-w-md text-muted-foreground">O endereço que você procurou não existe ou foi movido.</p>
        <Link to="/" className="eyebrow mt-10 inline-flex bg-forest px-8 py-4 text-ivory hover:bg-graphite">Voltar ao início</Link>
      </div>
    </section>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <section className="flex min-h-[80vh] items-center pt-20">
      <div className="container-x">
        <h1 className="text-5xl">Esta página não carregou.</h1>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="eyebrow mt-8 bg-forest px-8 py-4 text-ivory"
        >
          Tentar novamente
        </button>
      </div>
    </section>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "TAVARES Construção" },
      { name: "description", content: "TAVARES Construção — residencial de alto padrão, obras corporativas e engenharia." },
      { property: "og:site_name", content: "TAVARES Construção" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://images.unsplash.com" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@300;400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;1,6..72,300;1,6..72,400&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const path = useRouterState({ select: (s) => s.location.pathname });
  const reduce = useReducedMotion();
  return (
    <QueryClientProvider client={queryClient}>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ivory focus:px-4 focus:py-2">Pular para o conteúdo</a>
      <Header />
      <motion.main
        id="conteudo"
        key={path}
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Outlet />
      </motion.main>
      <Footer />
    </QueryClientProvider>
  );
}
