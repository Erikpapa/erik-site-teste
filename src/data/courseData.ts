import { FaqItem, MethodPillar, TheologicalPrinciple } from '../types';

export const BRAND_INFO = {
  brandName: "Vereda & Página",
  brandTagline: "Leitura cristã com direção para a vida real.",
  productName: "Da Página à Vida",
  format: "Guia + Caderno em PDF",
  totalPages: 52,
  guidePages: 26,
  notebookPages: 26,
  priceFormatted: "R$ 27,90",
  priceNumeric: 27.90,
  paymentType: "pagamento único",
  processor: "Cakto",
  supportEmail: "contato@veredaepagina.com.br",
};

export const getCaktoCheckoutUrl = (): string => {
  const envUrl = import.meta.env.VITE_CAKTO_CHECKOUT_URL;
  if (envUrl && typeof envUrl === 'string' && envUrl.trim().length > 0) {
    return envUrl.trim();
  }
  return "#oferta";
};

export const IMAGES = {
  hero: {
    imgur: "https://i.imgur.com/75zpMor_d.webp?maxwidth=1520&fidelity=grand",
    local: `${import.meta.env.BASE_URL}images/hero-vereda-pagina.webp`,
    alt: "Leitura tranquila com caderno de anotações e reflexão em ambiente iluminado",
    width: 1200,
    height: 750,
  },
  problem: {
    imgur: "https://i.imgur.com/SMFvMxJ_d.webp?maxwidth=1520&fidelity=grand",
    local: `${import.meta.env.BASE_URL}images/reflexao-leitura-vereda.webp`,
    alt: "Pausa reflexiva durante a leitura de um livro",
    width: 800,
    height: 800,
  },
  ornament: {
    imgur: "https://i.imgur.com/2CNqx4i_d.webp?maxwidth=1520&fidelity=grand",
    local: `${import.meta.env.BASE_URL}images/ornamento-vereda-pagina.webp`,
    alt: "Ornamento editorial clássico e discreto",
    width: 600,
    height: 120,
  },
  theology: {
    imgur: "https://i.imgur.com/3j84seh_d.webp?maxwidth=1520&fidelity=grand",
    local: `${import.meta.env.BASE_URL}images/curso-da-pagina-a-vida.webp`,
    alt: "Ambiente sereno de estudo, leitura bíblica e notas",
    width: 1000,
    height: 625,
  },
  materials: {
    imgur: "https://i.imgur.com/jqzQMEV_d.webp?maxwidth=1520&fidelity=grand",
    local: `${import.meta.env.BASE_URL}images/materiais-da-pagina-a-vida.webp`,
    alt: "Mesa organizada com caderno de prática e caneta para leitura reflexiva",
    width: 800,
    height: 800,
  },
  offer: {
    imgur: "https://i.imgur.com/91qGktK_d.webp?maxwidth=1520&fidelity=grand",
    local: `${import.meta.env.BASE_URL}images/cta-final-vereda-pagina.webp`,
    alt: "Momento sereno de leitura com livro aberto e luz natural suave",
    width: 800,
    height: 1000,
  },
};

export const METHOD_STEPS: MethodPillar[] = [
  {
    step: "1",
    name: "Compreender",
    description: "encontre a ideia central, observe o contexto e avalie a leitura à luz das Escrituras.",
  },
  {
    step: "2",
    name: "Registrar",
    description: "transforme grifos soltos em notas curtas que você consegue lembrar e consultar.",
  },
  {
    step: "3",
    name: "Aplicar",
    description: "leve o aprendizado para a oração, os relacionamentos e uma decisão possível para hoje.",
  },
];

export const THEOLOGICAL_PRINCIPLES: TheologicalPrinciple[] = [
  { title: "A Escritura como referência." },
  { title: "Cristo no centro." },
  { title: "Graça antes de desempenho." },
  { title: "Aplicação em comunidade." },
];

export const FOR_WHOM_ITEMS = [
  "Para quem começa livros com vontade e perde o ritmo.",
  "Para quem sublinha muito, mas não organiza o aprendizado.",
  "Para quem deseja unir leitura, Palavra, oração e prática.",
  "Para quem quer um método cristão simples e aplicável.",
  "Para quem deseja ler com mais intenção, sem transformar a leitura em mais uma cobrança.",
];

export const FAQS: FaqItem[] = [
  {
    question: "O que eu recebo?",
    answer: "Você recebe o Guia Da Página à Vida e o Caderno Da Página à Vida, ambos em PDF. São 52 páginas ao todo, organizadas para leitura e prática.",
  },
  {
    question: "Preciso ter hábito de leitura?",
    answer: "Não. O método foi criado para quem quer começar com clareza e também para quem já lê, mas sente dificuldade em guardar e aplicar o conteúdo.",
  },
  {
    question: "Preciso comprar um livro específico?",
    answer: "Não. O método pode ser usado com um livro cristão que a pessoa já tenha.",
  },
  {
    question: "Posso imprimir o Caderno?",
    answer: "Sim. A pessoa pode imprimir as páginas que desejar ou preenchê-las com um aplicativo compatível com PDF.",
  },
  {
    question: "Como recebo os arquivos?",
    answer: "Depois da aprovação do pagamento, a Cakto enviará as instruções de acesso para o e-mail usado na compra.",
  },
  {
    question: "Como funciona a garantia?",
    answer: "O prazo e as instruções de reembolso devem seguir exatamente as condições apresentadas no checkout oficial da Cakto. Não invente um prazo.",
  },
];
