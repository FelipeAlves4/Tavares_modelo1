import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { img, photos } from "@/lib/content";
import { RevealImage, SplitHeadline } from "@/components/site/Motion";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — TAVARES Construção" },
      { name: "description", content: "Conte sobre a sua obra: residencial de alto padrão, corporativo ou gerenciamento." },
      { property: "og:title", content: "Contato — TAVARES Construção" },
      { property: "og:description", content: "Conte sobre a sua obra." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: Contato,
});

export const contactSchema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100, "Máximo de 100 caracteres"),
  email: z.string().trim().email("E-mail inválido").max(255),
  telefone: z.string().trim().max(30).regex(/^[\d\s()+-]*$/, "Use apenas números e símbolos de telefone").optional().or(z.literal("")),
  tipo: z.enum(["residencial", "corporativo", "gerenciamento", "outro"], { message: "Selecione um tipo" }),
  mensagem: z.string().trim().min(10, "Conte um pouco mais (mín. 10 caracteres)").max(1500, "Máximo de 1500 caracteres"),
});

type Errors = Partial<Record<keyof z.infer<typeof contactSchema>, string>>;

const field = "w-full border-0 border-b border-input bg-transparent py-4 text-lg outline-none transition-colors focus:border-forest focus-visible:outline-none";

function Contato() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "valid">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = contactSchema.safeParse(data);
    if (!r.success) {
      const errs: Errors = {};
      for (const i of r.error.issues) errs[i.path[0] as keyof Errors] ??= i.message;
      setErrors(errs);
      setStatus("idle");
      return;
    }
    setErrors({});
    setStatus("valid");
  }

  const Err = ({ k }: { k: keyof Errors }) =>
    errors[k] ? <p id={`${k}-err`} className="mt-2 text-sm text-destructive">{errors[k]}</p> : null;
  const a = (k: keyof Errors) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-err` : undefined });

  return (
    <section className="pb-32 pt-36 md:pt-48">
      <div className="container-x grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="eyebrow text-muted-foreground">Contato</p>
          <SplitHeadline as="h1" text="Conte sobre a sua obra." className="mt-6 text-[clamp(2.75rem,6vw,5.5rem)] leading-[1.02]" />
          <p className="mt-8 max-w-md text-muted-foreground">Telefone, e-mail e endereço da TAVARES serão inseridos quando fornecidos. Este formulário valida os dados, mas ainda não envia mensagens.</p>
          <RevealImage src={img(photos.houseC, 1200)} alt="Fachada de residência contemporânea (imagem ilustrativa)" ratio="aspect-[4/3]" className="mt-12 hidden md:block" />
        </div>
        <form noValidate onSubmit={onSubmit} className="space-y-10 md:col-span-6 md:col-start-7">
          <div>
            <label htmlFor="nome" className="eyebrow text-muted-foreground">Nome *</label>
            <input id="nome" name="nome" autoComplete="name" className={field} {...a("nome")} />
            <Err k="nome" />
          </div>
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className="eyebrow text-muted-foreground">E-mail *</label>
              <input id="email" name="email" type="email" autoComplete="email" className={field} {...a("email")} />
              <Err k="email" />
            </div>
            <div>
              <label htmlFor="telefone" className="eyebrow text-muted-foreground">Telefone</label>
              <input id="telefone" name="telefone" type="tel" autoComplete="tel" className={field} {...a("telefone")} />
              <Err k="telefone" />
            </div>
          </div>
          <div>
            <label htmlFor="tipo" className="eyebrow text-muted-foreground">Tipo de obra *</label>
            <select id="tipo" name="tipo" defaultValue="" className={field} {...a("tipo")}>
              <option value="" disabled>Selecione</option>
              <option value="residencial">Residencial de alto padrão</option>
              <option value="corporativo">Construção corporativa</option>
              <option value="gerenciamento">Engenharia e gerenciamento</option>
              <option value="outro">Outro</option>
            </select>
            <Err k="tipo" />
          </div>
          <div>
            <label htmlFor="mensagem" className="eyebrow text-muted-foreground">Mensagem *</label>
            <textarea id="mensagem" name="mensagem" rows={5} className={`${field} resize-none`} {...a("mensagem")} />
            <Err k="mensagem" />
          </div>
          <button type="submit" className="eyebrow bg-forest px-10 py-5 text-ivory transition-colors hover:bg-graphite">Validar mensagem</button>
          <div aria-live="polite">
            {status === "valid" && (
              <p className="border-l-2 border-champagne bg-sand p-5 text-sm">
                Dados válidos. <strong>A mensagem não foi enviada</strong>: o envio será ativado quando o canal de contato da TAVARES for configurado.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
