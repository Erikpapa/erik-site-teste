export const BRAND_INFO = {
  brandName: "Vereda & Página",
  productName: "Da Página à Vida",
  format: "Guia + caderno prático em PDF",
  totalPages: 52,
  guidePages: 26,
  notebookPages: 26,
  priceFormatted: "R$ 27,90",
  priceNumeric: 27.90,
  paymentType: "Pagamento único",
  processor: "Cakto",
  supportEmail: "contato@veredaepagina.com.br",
};

export const CAKTO_CHECKOUT_URL = "https://pay.cakto.com.br/ni7jvkp_1127223";

export const getCaktoCheckoutUrl = (): string => {
  const envUrl = import.meta.env.VITE_CAKTO_CHECKOUT_URL;
  if (envUrl && typeof envUrl === 'string' && envUrl.trim().length > 0) {
    return envUrl.trim();
  }
  return CAKTO_CHECKOUT_URL;
};

// Imagens reais salvas em public/images
export const APPROVED_IMAGES = {
  hero: {
    src: `${import.meta.env.BASE_URL}images/hero-approved.webp`,
    fallback: "https://i.imgur.com/XstOBg3.jpeg",
    alt: "Mulher estudando e escrevendo ao lado da Bíblia aberta",
    width: 1536,
    height: 1024,
  },
  bibleDetail: {
    src: `${import.meta.env.BASE_URL}images/bible-detail.webp`,
    fallback: "https://i.imgur.com/wDs9PIA.jpeg",
    alt: "Pequeno detalhe de mãos sobre a Bíblia aberta (sem tablet)",
    width: 1024,
    height: 1536,
  },
  reading: {
    src: `${import.meta.env.BASE_URL}images/reading-approved.webp`,
    fallback: "https://i.imgur.com/EhO3GGF.jpeg",
    alt: "Leitura da Bíblia à luz da janela com xícara de café",
    width: 1376,
    height: 768,
  },
  covers: {
    src: `${import.meta.env.BASE_URL}images/covers-approved.webp`,
    fallback: `${import.meta.env.BASE_URL}images/covers-approved.webp`,
    alt: "Capas impressas com ramos de trigo do Guia Da Página à Vida e Caderno Prático",
    width: 1200,
    height: 896,
  },
};

export const FAQS = [
  {
    question: "O que vou receber?",
    answer: "Você recebe o material digital completo em PDF (52 páginas ao todo): o Guia de Leitura (26 páginas) com o método em 3 movimentos e jornada de 21 dias, acompanhado do Caderno Prático (26 páginas) para registrar dúvidas, orações e aplicações no cotidiano.",
  },
  {
    question: "Como recebo o material?",
    answer: "A entrega é 100% digital e imediata. Assim que o pagamento for aprovado pela Cakto, você recebe no seu e-mail cadastrado as instruções e o link seguro para download imediato dos arquivos em PDF no celular, tablet ou computador.",
  },
];
