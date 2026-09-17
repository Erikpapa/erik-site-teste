import { CourseModule, BonusItem, FaqItem, SocialNotification, OrderBump } from '../types';

export const COURSE_INFO = {
  title: "Leitura Cristã Que Transforma",
  subtitle: "Como aplicar o que você lê à sua vida com direção e profundidade",
  ministry: "Filipenses Quatro Oito",
  instructor: "Naná Castillo",
  tagline: "Em menos de 2 horas, mude completamente a forma como você se relaciona com livros cristãos.",
  price: 27.00,
  originalPrice: 67.00,
  installments: "3x de R$ 9,68",
  coupon: "MINI27",
  accessDays: 15,
  eduzzUrl: "https://sun.eduzz.com/Q9N58QNK01?cupom=MINI27&p=1",
};

export const PROBLEM_QUOTES = [
  {
    quote: "O que foi mesmo que eu aprendi?",
    sub: "Você fecha a última página com a sensação de mente vazia, esquecendo quase tudo dias depois.",
  },
  {
    quote: "Por que eu nunca consigo aplicar o que li?",
    sub: "A teoria parece inspiradora, mas no cotidiano real, você não sabe por onde começar a mudar.",
  },
  {
    quote: "Foi lindo, mas não mudou minha vida em nada…",
    sub: "A emoção do momento passa e a sua rotina cristã continua exatamente no mesmo lugar.",
  },
];

export const FOR_WHOM = [
  "Não lê nada porque nunca consegue chegar até o fim de um livro e, por isso, desistiu de tentar",
  "Está cansada de ler por obrigação, culpa ou cobrança religiosa",
  "Quer desenvolver uma leitura com mais intenção, presença e profundidade bíblica",
  "Deseja aprender a refletir e aplicar o que lê nos relacionamentos, mente e vida real",
  "Deseja viver uma vida cristã mais sólida, prática e verdadeiramente guiada pela Palavra",
];

export const WHAT_YOU_LEARN = [
  {
    title: "Os 5 Pilares da Leitura Transformadora",
    desc: "Propósito, direção, entendimento, prática e comunidade aplicados de forma simples.",
  },
  {
    title: "Leitura com Propósito e Convicção",
    desc: "Aprenda a escolher o livro certo para a sua estação atual, vencendo a leitura vazia por hábito.",
  },
  {
    title: "Técnicas de Fixação & Anotações Práticas",
    desc: "Métodos acessíveis para absorver os pontos-chave sem precisar ser uma acadêmica.",
  },
  {
    title: "Como Fugir das Armadilhas Comuns",
    desc: "Identifique e supere o erro de acumular conhecimento sem gerar frutos no dia a dia.",
  },
  {
    title: "O Poder da Comunidade Cristã",
    desc: "Descubra como caminhar com outras irmãs potencializa sua perseverança e crescimento.",
  },
  {
    title: "Continuidade no Clube Fp4.8",
    desc: "Um caminho contínuo de leitura bíblica guiada para você nunca mais se sentir desamparada.",
  },
];

export const MODULES: CourseModule[] = [
  {
    id: 0,
    badge: "Introdução",
    title: "Por que só ler não transforma",
    subtitle: "O descompasso entre absorver páginas e viver a verdade",
    description: "Desmistifique a ideia de que ler muitos livros é sinônimo de maturidade espiritual e entenda o que realmente gera frutos práticos.",
    duration: "12 min",
    highlights: ["A armadilha da ilusão de conhecimento", "O ciclo da leitura passiva", "O ponto de virada na sua mente"]
  },
  {
    id: 1,
    badge: "Bloco 1",
    title: "Leitura com Propósito",
    subtitle: "Elimine a culpa e defina o 'porquê' de cada livro",
    description: "Aprenda a alinhar suas leituras às necessidades espirituais do seu momento de vida presente.",
    duration: "18 min",
    highlights: ["Diagnóstico do seu momento espiritual", "Como definir objetivos reais de leitura", "Abandonar livros sem culpa"]
  },
  {
    id: 2,
    badge: "Bloco 2",
    title: "Leitura com Direção",
    subtitle: "Como selecionar o que ler em meio a tantas opções",
    description: "Filtros práticos e bíblicos para discernir recomendações e escolher títulos com autoridade teológica e relevância.",
    duration: "16 min",
    highlights: ["Curadoria de bons autores e editoras", "Filtro de discernimento bíblico", "Montando sua trilha anual"]
  },
  {
    id: 3,
    badge: "Bloco 3",
    title: "Leitura com Entendimento",
    subtitle: "Técnicas simples para reter e assimilar o conteúdo",
    description: "Métodos de grifo, marginais inteligentes e síntese que garantem que o conteúdo permaneça com você.",
    duration: "20 min",
    highlights: ["O método dos 3 grifos conscientes", "Notas de rodapé que ativam a memória", "Como resumir em 1 frase"]
  },
  {
    id: 4,
    badge: "Bloco 4",
    title: "Leitura com Aplicação",
    subtitle: "Trazendo as lições para a mesa, a família e a oração",
    description: "A ponte definitiva da reflexão para a prática: como transformar princípios lidos em ações diárias.",
    duration: "22 min",
    highlights: ["A matriz de aplicação pessoal", "Conectando o livro às Escrituras", "Oração deliberada de resposta"]
  },
  {
    id: 5,
    badge: "Bloco 5",
    title: "Leitura em Comunidade",
    subtitle: "O poder de compartilhar experiências e percepções",
    description: "Por que ler isoladamente enfraquece a constância e como a troca fraterna amplia seu crescimento espiritual.",
    duration: "15 min",
    highlights: ["Troca de perspectivas espirituais", "Responsabilidade mútua com leveza", "O ambiente seguro do Clube"]
  },
  {
    id: 6,
    badge: "Bloco 6",
    title: "Convite Especial & Presente",
    subtitle: "A continuação da sua jornada no Clube Fp4.8",
    description: "Um presente exclusivo reservado para as alunas do mini-curso continuarem crescendo juntas com condições nunca antes abertas.",
    duration: "10 min",
    highlights: ["Acesso às condições para o Clube Fp4.8", "Liberação da mini-aula secreta", "Próximos passos práticos"]
  },
];

export const BONUSES: BonusItem[] = [
  {
    id: 1,
    tag: "BÔNUS 1 • PRÁTICO",
    title: "Checklist: 7 Perguntas Para Aplicar o Que Você Lê",
    format: "PDF Imprimível + Versão Mobile",
    originalPrice: "R$ 37,00",
    description: "Um guia de bolso para colocar ao lado do seu livro favorito. Responda a essas 7 perguntas ao final de cada capítulo e nunca mais esqueça o aprendizado.",
    iconName: "CheckSquare",
  },
  {
    id: 2,
    tag: "BÔNUS 2 • MATERIAL DE APOIO",
    title: "Caderno de Anotações & Exercícios das Aulas",
    format: "PDF Diagramado para Impressão",
    originalPrice: "R$ 29,00",
    description: "Folhas de trabalho estruturadas para você acompanhar cada bloco do mini-curso, preencher seus insights e criar seu plano de leitura pessoal.",
    iconName: "FileText",
  },
  {
    id: 3,
    tag: "PRESENTE EXCLUSIVO • SÓ PARA ALUNAS",
    title: "Mini-Aula Secreta: 5 Erros Que Atrapalham a Constância na Leitura",
    format: "Aula Especial em Vídeo",
    originalPrice: "R$ 47,00",
    description: "Descubra como blindar seu tempo e vencer a procrastinação leitora. Liberada com exclusividade durante os 10 dias para quem avançar para o Clube Fp4.8.",
    iconName: "Gift",
  },
];

export const ORDER_BUMP_DATA: OrderBump = {
  id: "devocional-fp48",
  title: "Sim! Adicionar o Caderno Devocional & Leitora Fp4.8 (Digital)",
  price: 14.90,
  originalPrice: 39.90,
  description: "Template pronto em PDF de alta resolução com fichas de leitura, cronograma anual e guia de orações bíblicas. De R$ 39,90 por apenas R$ 14,90!",
  selected: false
};

export const SOCIAL_NOTIFICATIONS: SocialNotification[] = [
  { id: "1", name: "Ana Beatriz M.", city: "São Paulo, SP", timeAgo: "há 2 minutos", action: "garantiu o mini-curso" },
  { id: "2", name: "Juliana Costa", city: "Belo Horizonte, MG", timeAgo: "há 4 minutos", action: "acabou de entrar via Pix" },
  { id: "3", name: "Débora Silveira", city: "Curitiba, PR", timeAgo: "há 7 minutos", action: "iniciou as aulas do mini-curso" },
  { id: "4", name: "Renata Farias", city: "Fortaleza, CE", timeAgo: "há 9 minutos", action: "garantiu a vaga por R$ 27" },
  { id: "5", name: "Mariana Albuquerque", city: "Porto Alegre, RS", timeAgo: "há 12 minutos", action: "garantiu o acesso imediato" },
];

export const FAQS: FaqItem[] = [
  {
    question: "Como e quando recebo o acesso ao mini-curso?",
    answer: "Imediatamente! Assim que o seu pagamento for aprovado (no Pix é instantâneo, no cartão leva segundos), você receberá um e-mail com seus dados de login e link direto para a área de membros exclusiva das alunas."
  },
  {
    question: "Por quanto tempo terei acesso às aulas?",
    answer: "Você terá 15 dias de acesso integral. O curso é rápido e direto ao ponto (menos de 2 horas de duração total), dividido em blocos curtos de 10 a 20 minutos. 15 dias é mais do que suficiente para você maratonar ou assistir com calma e já colocar em prática no seu próximo capítulo!"
  },
  {
    question: "Não tenho o hábito de ler e quase nunca termino um livro. Vai funcionar para mim?",
    answer: "Com certeza! Esse mini-curso foi desenhado exatamente para quem sente que 'não nasceu para ler' ou que vive frustrada por parar no meio. Você vai aprender a desmistificar a leitura e encontrar um ritmo prazeroso e realista, sem culpa ou cobranças irreais."
  },
  {
    question: "Quais são as formas de pagamento disponíveis?",
    answer: "Você pode pagar via Pix (com aprovação imediata), Cartão de Crédito (à vista ou parcelado em até 3x de R$ 9,68) ou Boleto bancário através da plataforma 100% segura da Eduzz."
  },
  {
    question: "E se eu assistir e achar que não foi para mim?",
    answer: "Você conta com nossa Garantia Incondicional de 7 Dias. Se por qualquer motivo você achar que o mini-curso não atendeu às suas expectativas, basta enviar um e-mail para o suporte e devolveremos 100% do seu dinheiro, sem perguntas e sem complicação."
  },
  {
    question: "O que é o Clube Fp4.8 que é mencionado no curso?",
    answer: "O Clube Fp4.8 é a nossa comunidade contínua de leitura cristã e discipulado, liderada por Naná Castillo. Dentro do mini-curso, você receberá um convite especial com presente secreto para quem desejar continuar a caminhada de leitura acompanhada."
  }
];
