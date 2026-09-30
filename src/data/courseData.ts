export const BRAND_INFO = {
  brandName: 'Vereda & Página',
  productName: 'Da Página à Vida',
  format: 'Guia + caderno prático em PDF',
  priceFormatted: 'R$ 27,90',
  paymentType: 'Pagamento único',
};

// Checkout aprovado: uma variável antiga de publicação não deve apontar
// os compradores para outra oferta.
export const CAKTO_CHECKOUT_URL = 'https://pay.cakto.com.br/ni7jvkp_1127223';
export const getCaktoCheckoutUrl = () => CAKTO_CHECKOUT_URL;
export const CHECKOUT_LABEL = 'Quero começar minha leitura com mais clareza';

const imagePath = (filename: string) => `${import.meta.env.BASE_URL}images/${filename}`;
export const APPROVED_IMAGES = {
  hero: {
    src: imagePath('hero-com-biblia.png'),
    alt: 'Mulher escrevendo ao lado da Bíblia aberta, com um detalhe da Bíblia no canto da foto',
    width: 590,
    height: 271,
  },
  reading: {
    src: imagePath('leitura-biblia.png'),
    alt: 'Mulher lendo a Bíblia à mesa, perto da janela',
    width: 600,
    height: 173,
  },
  covers: {
    src: imagePath('capas-guia-caderno.png'),
    alt: 'Capas ilustrativas do guia Da Página à Vida e do Caderno Prático em PDF',
    width: 279,
    height: 211,
  },
};

export const FAQS = [
  {
    question: 'O que vou receber?',
    answer: 'Um guia de leitura e um caderno prático, ambos em PDF, para apoiar suas leituras, dúvidas e reflexões.',
  },
  {
    question: 'Como recebo o material?',
    answer: 'Após a aprovação do pagamento, siga as orientações de acesso disponibilizadas pela plataforma de compra.',
  },
];
