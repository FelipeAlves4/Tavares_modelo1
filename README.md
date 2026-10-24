# Tavaras Obra Viva

Crie o primeiro de três modelos comparativos de website para a marca de demonstração "TAVARES Construção": MODELO 01 — CINEMATIC ARCHITECTURE. Faça o site de verdade, não apenas briefing. Português brasileiro, experiência visual editorial de altíssimo nível, responsiva e com motion refinado. Visão do cliente: seu site precisa ser mais bonito que construtoras tradicionais; mostrar casas de condomínio, obras corporativas, pessoas trabalhando na construção, equipes de engenheiros, casas finalizadas, fotos de arquitetura e bastidores reais; um benchmark conceitual são Turner Construction e grandes construtoras, mas não copiar seus sites. Marca TAVARES deve ficar em destaque. Fazer identidade visual própria (wordmark TAVARES, subtítulo CONSTRUÇÃO, símbolo geométrico T inspirado em elementos arquitetônicos, svg vetorial feito via código; logo não pode parecer um ícone genérico). Cores do conceito: verde profundo #17201D, areia #EDE9E0, champagne #D4C4A6, off-white #F8F7F3, grafite #444841. Tipos: elegante sans e tipografia editorial serifada para headlines, grandes e legíveis. Direção luxuosa sem parecer imobiliária genérica.

Foco no conceito homepage: primeira tela cinematográfica full-bleed com fotografia extraordinária de uma casa de condomínio brasileira contemporânea e headline "Construímos o que permanece." e CTA "Explorar projetos"; topbar minimal TAVARES CONSTRUÇÃO + menu. Photo-first architecture editorial. Em seguida transição visual da hero para seção manifesto, projetos selecionados, "Obras que falam por nós", "Do desenho ao último detalhe", serviços (residencial de alto padrão, construção corporativa, engenharia e gerenciamento), fotografias de pessoas efetivamente construindo com equipamentos de segurança, processo em etapas, seção de confiança sem números falsos, bastidores e CTA final para contato. Projetos de demonstração (fictícios, visivelmente identificados como tais) com diversidade arquitetônica, casas de condomínio, corporativo e obras em execução. Fotos ilustrativas de alta qualidade disponíveis legalmente na web, preferencialmente imagens sem marca d'água de Unsplash/Pexels via links diretos funcionais; não induzir usuário a pensar que são obras reais da TAVARES. Preferir imagens bem escolhidas e relevantes, não apenas uma foto repetida.

Construir também rotas /projetos (filtros realmente funcionais por categoria), /projetos/:slug (página de estudo de caso com hero, galeria, ficha de projeto, etapa, soluções) e /contato (formulário com validação; não fingir envio concluído sem backend), /sobre (institucional). Navegação funcionando, sem links mortos. Página 404.

MOTION DESIGN DE ALTO NÍVEL: usar Motion for React (motion/react) quando adequado: entrance stagger de texto, image reveal com máscara, parallax muito sutil por scroll, hover zoom imagens, page transitions discretas, animações no menu, seção sticky storytelling se não prejudicar mobile, transições elegantes de grid. Só usar GSAP se necessário; evitar empilhar libs. respeitar prefers-reduced-motion; não usar scrolljacking, autoplay com som, cursor custom ou animações que prejudiquem performance. Garantir SEO básico meta title/description/OpenGraph, alt text, headings semânticos, contraste e foco teclado. Lazy loading imagens below fold, hero eager, dimensões estáveis, mobile com excelente layout. Usar stack React+TypeScript+Tailwind e componentes limpos. Proporção visual de fotografias grande, espaçamento generoso, sensação de estúdio internacional premiado. Sem provas sociais falsas, logos de cliente inventados, certificações inventadas ou dados empresariais fabricados. Projeto é DEMONSTRATIVO para aprovação visual. Deixar facilmente editável para futura troca de fotos reais e informações. Não criar modelos 02/03 ainda.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://tavaras-obra-viva.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/811e0f8c-be9a-4b65-97ee-8316ef56c325).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
