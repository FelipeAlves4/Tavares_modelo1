// Conteúdo DEMONSTRATIVO. Troque fotos e textos aqui quando houver material real da TAVARES.
// Todas as imagens são ilustrativas (Unsplash) e NÃO representam obras da TAVARES.

export const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const photos = {
  hero: "1600596542815-ffad4c1539a9",
  houseA: "1600585154340-be6161a56a0c",
  houseB: "1613490493576-7fde63acd811",
  houseC: "1512917774080-9991f1c4c750",
  houseD: "1580587771525-78b9dba3b914",
  houseE: "1564013799919-ab600027ffc6",
  houseF: "1600047509807-ba8f99d2cdde",
  interiorA: "1600607687939-ce8a6c25118c",
  interiorB: "1600566753190-17f0baa2a6c3",
  interiorC: "1600210492486-724fe5c67fb0",
  plans: "1503387762-592deb58ef4e",
  site: "1541888946425-d81bb19240f5",
  worker: "1504307651254-35680f356dfd",
  workerHelmet: "1621905251189-08b45d6a269e",
  engineers: "1581094794329-c8112a89af12",
  crew: "1531834685032-c34bf0d84c77",
  crane: "1517089596392-fb9a9033e05b",
  cranes: "1429497419816-9ca5cfb4571a",
  tower: "1486406146926-c627a92ad1ab",
  glass: "1460472178825-e5240623afd5",
  office: "1497366216548-37526070297c",
  architecture: "1487958449943-2429e8be8625",
  structure: "1523217582562-09d0def993a6",
  concrete: "1572120360610-d971b9d7767c",
  residenceNight: "1605276374104-dee2a0ed3cd6",
} as const;

export type Category = "residencial" | "corporativo" | "em-execucao";

export const categories: { id: Category | "todos"; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "residencial", label: "Residencial" },
  { id: "corporativo", label: "Corporativo" },
  { id: "em-execucao", label: "Em execução" },
];

export type Project = {
  slug: string;
  title: string;
  category: Category;
  location: string;
  typology: string;
  stage: string;
  area: string;
  summary: string;
  cover: string;
  gallery: string[];
  solutions: { title: string; text: string }[];
};

export const projects: Project[] = [
  {
    slug: "residencia-mirante",
    title: "Residência Mirante",
    category: "residencial",
    location: "Condomínio fictício — Interior de SP",
    typology: "Casa de condomínio",
    stage: "Concluída (exemplo)",
    area: "Área ilustrativa",
    summary:
      "Volumes horizontais em concreto e madeira que se abrem para o jardim. Um estudo de como estrutura e paisagem podem dividir o mesmo gesto.",
    cover: photos.hero,
    gallery: [photos.houseA, photos.interiorA, photos.interiorB, photos.houseF],
    solutions: [
      { title: "Grandes vãos", text: "Estrutura pensada para liberar a fachada e integrar estar e jardim." },
      { title: "Conforto térmico", text: "Beirais profundos e ventilação cruzada como premissas de projeto." },
      { title: "Acabamento", text: "Planejamento de interfaces entre materiais para juntas precisas." },
    ],
  },
  {
    slug: "casa-dos-patios",
    title: "Casa dos Pátios",
    category: "residencial",
    location: "Condomínio fictício — Região Sul",
    typology: "Residência de alto padrão",
    stage: "Concluída (exemplo)",
    area: "Área ilustrativa",
    summary: "Uma casa organizada em torno de pátios internos, onde luz natural e privacidade convivem.",
    cover: photos.houseB,
    gallery: [photos.houseC, photos.interiorC, photos.residenceNight, photos.interiorA],
    solutions: [
      { title: "Pátios de luz", text: "Iluminação natural distribuída sem abrir mão da privacidade." },
      { title: "Piscina estrutural", text: "Coordenação entre estrutura, impermeabilização e paisagismo." },
      { title: "Compatibilização", text: "Modelagem integrada de disciplinas antes do início da obra." },
    ],
  },
  {
    slug: "sede-horizonte",
    title: "Sede Horizonte",
    category: "corporativo",
    location: "Cidade fictícia — Capital",
    typology: "Edifício corporativo",
    stage: "Concluída (exemplo)",
    area: "Área ilustrativa",
    summary: "Torre corporativa com fachada envidraçada e lajes livres, pensada para flexibilidade de uso.",
    cover: photos.tower,
    gallery: [photos.glass, photos.office, photos.architecture, photos.structure],
    solutions: [
      { title: "Lajes livres", text: "Planta flexível para diferentes layouts ao longo do tempo." },
      { title: "Fachada", text: "Sequência de montagem planejada para reduzir interferências." },
      { title: "Gestão de prazo", text: "Cronograma físico-financeiro acompanhado em ciclos curtos." },
    ],
  },
  {
    slug: "campus-atelie",
    title: "Campus Ateliê",
    category: "corporativo",
    location: "Cidade fictícia — Interior",
    typology: "Escritórios e áreas técnicas",
    stage: "Concluída (exemplo)",
    area: "Área ilustrativa",
    summary: "Escritórios de baixa altura com interiores calmos e materiais honestos.",
    cover: photos.office,
    gallery: [photos.architecture, photos.glass, photos.interiorB, photos.tower],
    solutions: [
      { title: "Interiores", text: "Coordenação de forros, instalações e luminotécnica." },
      { title: "Obra em operação", text: "Fases planejadas para conviver com o uso do edifício." },
      { title: "Qualidade", text: "Checklists de verificação por etapa de serviço." },
    ],
  },
  {
    slug: "residencial-encosta",
    title: "Residencial Encosta",
    category: "em-execucao",
    location: "Condomínio fictício — Serra",
    typology: "Casa de condomínio",
    stage: "Em execução (exemplo)",
    area: "Área ilustrativa",
    summary: "Estrutura em andamento sobre terreno em declive. Contenções e fundações como protagonistas.",
    cover: photos.site,
    gallery: [photos.worker, photos.concrete, photos.engineers, photos.crew],
    solutions: [
      { title: "Contenções", text: "Solução de fundações adequada ao perfil do terreno." },
      { title: "Segurança", text: "EPIs, isolamento de áreas e rotina diária de orientação." },
      { title: "Transparência", text: "Relatórios fotográficos periódicos para o cliente." },
    ],
  },
  {
    slug: "edificio-travessa",
    title: "Edifício Travessa",
    category: "em-execucao",
    location: "Cidade fictícia — Centro",
    typology: "Corporativo",
    stage: "Em execução (exemplo)",
    area: "Área ilustrativa",
    summary: "Estrutura de concreto em ciclo de lajes, com logística de canteiro em área urbana densa.",
    cover: photos.cranes,
    gallery: [photos.crane, photos.structure, photos.workerHelmet, photos.plans],
    solutions: [
      { title: "Logística urbana", text: "Janelas de entrega e içamento planejadas com antecedência." },
      { title: "Ciclo de lajes", text: "Sequência de fôrmas e concretagem padronizada." },
      { title: "Engenharia de campo", text: "Equipe técnica presente diariamente no canteiro." },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const categoryLabel = (c: Category) => categories.find((x) => x.id === c)!.label;
