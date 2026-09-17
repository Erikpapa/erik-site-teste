import { CourseModule, KitItem, FaqItem, MethodPillar } from '../types';

export const BRAND_INFO = {
  brandName: "Vereda & Página",
  brandTagline: "Leitura cristã com direção para a vida real.",
  productName: "Da Página à Vida",
  productShortDescription: "Um mini-curso prático para compreender, registrar e aplicar à vida aquilo que você lê.",
  price: 27.00,
  originalPrice: 67.00,
  installments: "3x de R$ 9,68",
  coupon: "MINI27",
  accessDays: 15,
  eduzzUrl: "https://sun.eduzz.com/Q9N58QNK01?cupom=MINI27&p=1",
  supportEmailPlaceholder: "contato@veredaepagina.com.br",
};

export const REALITY_REFLECTIONS = [
  {
    title: "A sensação de mente vazia ao fechar a última página",
    description: "Você investe horas lendo capítulos edificantes, mas semanas depois mal consegue lembrar os pontos essenciais ou explicar para alguém o que aprendeu.",
  },
  {
    title: "O abismo entre se emocionar com o livro e mudar na prática",
    description: "A leitura toca o coração no momento, mas na manhã seguinte as velhas reações na família, no trabalho e na oração continuam as mesmas.",
  },
  {
    title: "A culpa de acumular livros na estante sem constância",
    description: "Você compra bons livros com sincero desejo de crescer, mas a rotina corrida e a falta de método transformam a estante em motivo de cobrança em vez de paz.",
  },
];

export const METHOD_PILLARS: MethodPillar[] = [
  {
    number: "01",
    title: "Compreender",
    subtitle: "Leitura com intenção e discernimento bíblico",
    description: "Aprenda a desacelerar a leitura apressada para capturar o cerne do argumento do autor, discernindo o que é fundamento bíblico e o que conversa com o seu momento atual.",
    practice: "Como ler atenta sem dispersar a mente a cada dois parágrafos.",
  },
  {
    number: "02",
    title: "Registrar",
    subtitle: "Anotações inteligentes que fixam o essencial",
    description: "Um método elegante de grifos, notas marginais e fichamentos em caderno de leitura. Sem excesso de papelada, apenas o que você precisa para consultar no futuro.",
    practice: "Técnica dos 3 grifos conscientes e síntese em uma única frase reflexiva.",
  },
  {
    number: "03",
    title: "Aplicar",
    subtitle: "Da reflexão para a mesa, a oração e os hábitos",
    description: "O passo que quase ninguém ensina: como criar a ponte deliberada entre a tese do autor e o seu comportamento diário, suas palavras em casa e sua vida devocional.",
    practice: "As 7 perguntas reflexivas de resposta prática imediata.",
  },
];

export const FOR_WHOM_ITEMS = [
  "Mulheres que desejam que suas leituras gerem frutos de maturidade espiritual e vida prática.",
  "Quem sente que esquece rapidamente o conteúdo dos livros que acabou de ler.",
  "Quem lê por obrigação ou culpa e deseja recuperar o prazer sereno de sentar com um bom livro.",
  "Mulheres com rotinas intensas que precisam de um método simples, realizável em 15 ou 20 minutos por dia.",
  "Quem quer aprender a dialogar com o texto cristão sob a ótica das Escrituras com discernimento.",
];

export const NOT_FOR_WHOM_ITEMS = [
  "Quem busca bater metas vazias de ler dezenas de livros por ano sem absorver nada.",
  "Quem procura resumos automáticos para fingir conhecimento em conversas.",
  "Quem não está disposta a reservar breves momentos de pausa e reflexão honesta no dia a dia.",
];

export const MODULES: CourseModule[] = [
  {
    id: 0,
    badge: "Módulo Inicial",
    title: "Por que ler mais não significa viver melhor",
    subtitle: "Desarmando o ciclo da leitura passiva e da culpa por páginas lidas",
    description: "Uma análise franca sobre a armadilha de acumular títulos sem assimilar a verdade. Compreenda o papel de um livro cristão como servo da sua caminhada com Deus e não como objeto de vaidade.",
    duration: "14 min",
    highlights: ["A ilusão do acúmulo de conhecimento", "O ciclo da leitura passiva", "O alinhamento do coração diante do livro"],
  },
  {
    id: 1,
    badge: "Módulo 1 • Direção",
    title: "Como escolher o livro certo para a sua estação atual",
    subtitle: "Critérios de discernimento e fim da leitura desordenada",
    description: "Aprenda a diagnosticar as necessidades da sua estação de vida presente e a filtrar recomendações com sabedoria, selecionando leituras com autoridade bíblica e relevância real.",
    duration: "18 min",
    highlights: ["Diagnóstico do momento de vida pessoal", "Critérios para filtrar boas obras cristãs", "Como abandonar livros ruins sem peso na consciência"],
  },
  {
    id: 2,
    badge: "Módulo 2 • Compreensão",
    title: "Leitura ativa: capturando o cerne sem se perder",
    subtitle: "Vencendo o cansaço mental e a falta de foco ao ler",
    description: "Técnicas acessíveis para manter a mente presente durante a leitura, identificando a tese central do capítulo e conectando cada ideia ao ensino das Escrituras.",
    duration: "20 min",
    highlights: ["Como identificar o argumento central", "O ritmo saudável de leitura por blocos", "A postura de diálogo ativo com o autor"],
  },
  {
    id: 3,
    badge: "Módulo 3 • Registro",
    title: "O método de grifos e notas conscientes",
    subtitle: "Como marcar seus livros e manter um caderno vivo",
    description: "Aprenda a fazer anotações que você realmente vai consultar depois. Sem poluir as páginas e sem criar burocracias: um sistema limpo de registro em margens e fichas pessoais.",
    duration: "22 min",
    highlights: ["O código de cores e sinais reflexivos", "Notas marginais que sintetizam capítulos", "Como estruturar seu caderno de leitura pessoal"],
  },
  {
    id: 4,
    badge: "Módulo 4 • Aplicação",
    title: "Da página para a mesa, a família e a oração",
    subtitle: "A ponte deliberada entre a teoria e o cotidiano",
    description: "O coração do curso: o passo a passo para transformar um princípio lido em oração de resposta, ajuste de conduta em relacionamentos e atitudes práticas no lar e no trabalho.",
    duration: "24 min",
    highlights: ["A matriz de aplicação pessoal", "Transformando insights em orações bíblicas", "O exercício prático das 24 horas"],
  },
  {
    id: 5,
    badge: "Módulo 5 • Constância",
    title: "Constância serena: um ritmo sustentável para a vida real",
    subtitle: "Como ler sem exigir de si mesma uma rotina idealizada",
    description: "Estratégias práticas para mães, profissionais e mulheres atarefadas encaixarem a leitura com naturalidade na semana, sem ansiedade e sem cobranças irreais.",
    duration: "16 min",
    highlights: ["A rotina dos 15 minutos intencionais", "Protegendo o tempo da leitura", "Como retomar o ritmo após dias atípicos"],
  },
  {
    id: 6,
    badge: "Módulo Especial",
    title: "A continuidade da jornada: caminhando acompanhada",
    subtitle: "Próximos passos e o convite para o Clube Vereda & Página",
    description: "Orientações finais para consolidar o hábito e uma condição especial e acolhedora para alunas que desejarem continuar a leitura guiada ao longo do ano.",
    duration: "12 min",
    highlights: ["O papel da comunidade na constância", "Como escolher sua próxima trilha", "Acesso às condições para o Clube"],
  },
];

export const KIT_VEREDA_INFO = {
  title: "Kit Vereda de Aplicação",
  tag: "Oferta opcional no checkout",
  headline: "Quer tornar sua aplicação ainda mais simples?",
  description: "No momento da compra, você poderá adicionar o Kit Vereda de Aplicação ao seu pedido. Ele reúne materiais complementares para registrar aprendizados, organizar sua rotina de leitura e acompanhar sua aplicação prática.",
  subtext: "Materiais complementares para organizar seus registros, acompanhar sua evolução e colocar cada aprendizado em prática com mais facilidade.",
};

export const KIT_VEREDA_ITEMS: KitItem[] = [
  {
    id: 1,
    title: "Caderno de Anotações & Exercícios das Aulas",
    format: "Arquivo em PDF para impressão ou uso digital",
    description: "Um material diagramado com cuidado editorial para acompanhar cada aula, sintetizar os pontos centrais e estruturar seus registros de leitura.",
    iconName: "FileText",
  },
  {
    id: 2,
    title: "Guia com as 7 Perguntas para Aplicação Prática",
    format: "PDF diagramado para leitura rápida ou marcador de páginas",
    description: "Um roteiro reflexivo conciso para deixar dentro do livro em leitura. Ao concluir qualquer capítulo, passe por essas perguntas para extrair frutos concretos para o seu dia a dia.",
    iconName: "CheckSquare",
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "Como recebo o acesso ao mini-curso após a inscrição?",
    answer: "Imediatamente. Assim que a sua inscrição for confirmada pela plataforma Eduzz (no Pix ou no Cartão a confirmação ocorre em instantes), você receberá um e-mail com o link de acesso exclusivo e suas instruções para começar a assistir às aulas agora mesmo.",
  },
  {
    question: "Por quanto tempo terei acesso às aulas?",
    answer: "Você terá 15 dias de acesso integral à área de membros. O mini-curso foi estruturado propositalmente de forma compacta (menos de 2 horas no total) em aulas de 12 a 24 minutos. Esse período de 15 dias é intencional: evita que as aulas fiquem esquecidas e impulsiona você a assistir, aplicar e colher resultados com foco.",
  },
  {
    question: "O que é o Kit Vereda de Aplicação mencionado?",
    answer: "O Kit Vereda de Aplicação é uma oferta complementar e opcional disponível diretamente no checkout da Eduzz. Ele reúne materiais em PDF (Caderno de Anotações e Guia das 7 Perguntas) para quem deseja ter ferramentas prontas para registrar e organizar a rotina de leitura. Sua inclusão é totalmente voluntária na hora do pagamento.",
  },
  {
    question: "Não tenho o hábito de ler ou quase nunca chego ao fim de um livro. Esse curso serve para mim?",
    answer: "Sim, exatamente para você. O mini-curso Da Página à Vida foi pensado para desmistificar a leitura e retirar o peso da culpa. Você não precisa ser acadêmica nem ter horas livres: o método ensina a começar com passos serenos e a valorizar a profundidade sobre a quantidade.",
  },
  {
    question: "Quais são as opções de pagamento?",
    answer: "Você pode realizar o pagamento via Pix (com liberação imediata) ou no Cartão de Crédito em até 3x de R$ 9,68 através da plataforma Eduzz, em ambiente seguro e criptografado.",
  },
  {
    question: "Como funciona a garantia de 7 dias?",
    answer: "Você tem 7 dias completos a partir da confirmação para assistir às aulas e experimentar o método. Se por qualquer razão você sentir que o conteúdo não agregou valor à sua vida, basta solicitar o reembolso pela própria plataforma Eduzz ou pelo suporte. O valor pago será 100% devolvido, com respeito e sem qualquer complicação.",
  },
  {
    question: "O que é a Vereda & Página e como funciona o Clube?",
    answer: "Vereda & Página é uma iniciativa dedicada à leitura cristã com direção para a vida real. O Clube é nossa comunidade contínua de acompanhamento e leitura compartilhada. Dentro do mini-curso, você receberá um convite especial para conhecer o Clube caso deseje seguir caminhando acompanhada.",
  },
  {
    question: "Preciso comprar algum livro específico para fazer o curso?",
    answer: "Não. Você pode aplicar o método com qualquer livro cristão que já tenha na sua estante ou cabeceira, inclusive com sua Bíblia ou a sua leitura devocional atual.",
  },
];
