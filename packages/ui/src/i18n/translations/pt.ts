import type { UITranslations } from "../types"

export const pt: UITranslations = {
  dialog: {
    close: "Fechar",
  },
  header: {
    links: [
      { label: "Como Funciona", href: "/#how-we-do-it" },
      { label: "Testemunhos", href: "/#testimonials" },
      { label: "Pre\u00e7os", href: "/#pricing" },
      { label: "FAQ", href: "/#faqs" },
      { label: "Equipa", href: "/team" },
    ],
    getStarted: "Come\u00e7ar",
    toggleMenu: "Alternar menu",
  },
  hero: {
    titles: [
      "Automatizar Tarefas",
      "Funcionar Melhor",
      "Personalizar a Estadia",
      "Ser Mais Eficiente",
      "Poupar Horas",
    ],
    headingPrefix: "Workflows de Automa\u00e7\u00e3o que Ajudam ",
    headingHighlight: "Hot\u00e9is",
    subtitle:
      "Automatizamos as opera\u00e7\u00f5es repetitivas da sua propriedade, desde a reserva inicial at\u00e9 \u00e0 gest\u00e3o p\u00f3s-estadia.",
    callButton: "Agendar chamada",
  },
  heroInfoCard: {
    sectionLabel: "Parte do que fazemos",
    features: [
      {
        title: "Comunica\u00e7\u00e3o com H\u00f3spedes",
        description:
          "Boas-vindas autom\u00e1ticas, instru\u00e7\u00f5es de check-in e pedidos de avalia\u00e7\u00e3o via WhatsApp ou Email.",
      },
      {
        title: "Rececionista Virtual IA",
        description:
          "Agente IA 24/7 respondendo a d\u00favidas, dicas locais e resolu\u00e7\u00e3o de problemas em tempo real.",
      },
      {
        title: "Gest\u00e3o de Limpeza",
        description:
          "Tarefas de limpeza acionadas automaticamente no check-out com acompanhamento do estado dos quartos.",
      },
      {
        title: "Upselling Inteligente",
        description:
          "Ofertas autom\u00e1ticas pr\u00e9-chegada para upgrades de quarto, check-in antecipado, checkout tardio e extras.",
      },
    ],
  },
  faq: {
    badge: "FAQ",
    heading: "Perguntas ",
    headingHighlight: "Frequentes",
    subtitle:
      "Tudo o que precisa de saber sobre os nossos servi\u00e7os de automa\u00e7\u00e3o. N\u00e3o encontra a resposta? Fale connosco \u2014 teremos todo o gosto em ajudar.",
    items: [
      {
        question: "O que faz exatamente a FA Automations?",
        answer:
          "Criamos workflows de automa\u00e7\u00e3o personalizados para hot\u00e9is, alojamentos locais e gestores de propriedades. Inclui mensagens autom\u00e1ticas para h\u00f3spedes, sincroniza\u00e7\u00e3o de reservas em plataformas como Airbnb e Booking.com, agendamento de limpezas e manuten\u00e7\u00e3o, gest\u00e3o de avalia\u00e7\u00f5es e muito mais \u2014 tudo adaptado ao funcionamento da sua propriedade.",
        category: "Servi\u00e7os",
      },
      {
        question: "Com que plataformas de reservas integram?",
        answer:
          "Integramos com todas as principais plataformas, incluindo Airbnb, Booking.com, Vrbo, Expedia e a maioria dos sistemas de gest\u00e3o de propriedades (PMS). Os nossos workflows sincronizam reservas, calend\u00e1rios e dados dos h\u00f3spedes em todos os seus canais.",
        category: "Integra\u00e7\u00f5es",
      },
      {
        question: "Quanto tempo demora a configurar?",
        answer:
          "A maioria das propriedades fica totalmente operacional em 1\u20132 semanas. Tratamos de todo o processo de configura\u00e7\u00e3o \u2014 ligar as plataformas, configurar os modelos de mensagens e testar tudo antes de ativar. N\u00e3o \u00e9 necess\u00e1rio qualquer conhecimento t\u00e9cnico da sua parte.",
        category: "Come\u00e7ar",
      },
      {
        question: "Como funciona o pre\u00e7o?",
        answer:
          "Oferecemos tr\u00eas planos a partir de \u20ac29/m\u00eas com base no n\u00famero de propriedades e funcionalidades que necessita. A fatura\u00e7\u00e3o anual poupa-lhe 20%. Todos os planos incluem um per\u00edodo de experimenta\u00e7\u00e3o gratuito para ver os resultados antes de se comprometer.",
        category: "Pre\u00e7os",
      },
      {
        question: "Os h\u00f3spedes v\u00e3o saber que as mensagens s\u00e3o autom\u00e1ticas?",
        answer:
          "N\u00e3o \u2014 as nossas mensagens s\u00e3o criadas para parecerem pessoais e naturais. Pode personalizar cada modelo com o seu tom de voz, detalhes da propriedade e recomenda\u00e7\u00f5es locais. Os h\u00f3spedes v\u00e3o pensar que est\u00e1 a responder pessoalmente.",
        category: "Funcionalidades",
      },
      {
        question: "E se eu precisar de algo personalizado para a minha propriedade?",
        answer:
          "\u00c9 exatamente nisso que nos especializamos. Cada propriedade \u00e9 diferente, por isso trabalhamos consigo para desenhar workflows que correspondam \u00e0s suas opera\u00e7\u00f5es espec\u00edficas \u2014 seja coordenar v\u00e1rias equipas de limpeza, gerir pre\u00e7os sazonais ou integrar com ferramentas que j\u00e1 utiliza.",
        category: "Suporte",
      },
    ],
  },
  pricing: {
    monthly: "Mensal",
    annual: "Anual",
    savePct: " (Poupe 20%)",
    mostPopular: "Mais Popular",
    billedMonthly: "Faturado Mensalmente",
    billedAnnually: "Faturado Anualmente",
    youChooseWeBuild: "Voc\u00ea escolhe, n\u00f3s criamos",
    signupTitle: (planName: string) => `Come\u00e7ar com o plano ${planName}`,
    signupDescription:
      "Conte-nos um pouco sobre si e n\u00f3s tratamos de tudo.",
    nameLabel: "Nome",
    emailLabel: "Email",
    propertyLabel: "Nome da Propriedade / Hotel",
    namePlaceholder: "O seu nome",
    emailPlaceholder: "voce@exemplo.com",
    propertyPlaceholder: "ex. Hotel Boutique \u00e0 Beira-Mar",
    sending: "A enviar...",
    continue: "Continuar",
    signedUpTitle: "Est\u00e1 inscrito!",
    signedUpDescription:
      "Agora vamos agendar uma chamada r\u00e1pida para ativar as suas automa\u00e7\u00f5es.",
    fallbackMessage:
      "Entraremos em contacto brevemente para agendar a sua chamada de integra\u00e7\u00e3o.",
  },
  footer: {
    stillHaveQuestions: "Ainda tem d\u00favidas?",
    subtitle: "Estamos aqui para ajudar. Fale com a nossa equipa.",
    askUs: "Pergunte-nos",
    contactUsTitle: "Contacte-nos",
    contactUsDescription:
      "Envie-nos uma mensagem e responderemos o mais r\u00e1pido poss\u00edvel.",
    nameLabel: "Nome",
    emailLabel: "Email",
    messageLabel: "Mensagem",
    namePlaceholder: "O seu nome",
    emailPlaceholder: "voce@exemplo.com",
    messagePlaceholder: "Como podemos ajud\u00e1-lo?",
    sendMessage: "Enviar Mensagem",
    quickLinks: "Links R\u00e1pidos",
    quickLinkItems: [
      { label: "In\u00edcio", href: "#" },
      { label: "Como Funciona", href: "#how-we-do-it" },
      { label: "Testemunhos", href: "#testimonials" },
      { label: "Pre\u00e7os", href: "#pricing" },
      { label: "FAQ", href: "#faqs" },
      { label: "Equipa", href: "/team" },
    ],
    contactUs: "Contacte-nos",
    copyright: "\u00a9 2026 FA Automations. Todos os direitos reservados.",
    privacyPolicy: "Pol\u00edtica de Privacidade",
    termsOfService: "Termos de Servi\u00e7o",
    cookieSettings: "Defini\u00e7\u00f5es de Cookies",
    lastUpdated: "\u00daltima atualiza\u00e7\u00e3o: 30 de mar\u00e7o de 2026",
    privacyContent: [
      {
        title: "1. Introdu\u00e7\u00e3o",
        body: 'A FA Automations ("n\u00f3s", "nosso/a" ou "nos") est\u00e1 empenhada em proteger a privacidade dos nossos clientes e visitantes do website. Esta Pol\u00edtica de Privacidade explica como recolhemos, utilizamos, divulgamos e protegemos as suas informa\u00e7\u00f5es quando visita o nosso website ou utiliza os nossos servi\u00e7os de automa\u00e7\u00e3o hoteleira.',
      },
      {
        title: "2. Informa\u00e7\u00f5es que Recolhemos",
        body: "Podemos recolher informa\u00e7\u00f5es pessoais que fornece voluntariamente quando nos contacta, solicita uma demonstra\u00e7\u00e3o ou utiliza os nossos servi\u00e7os. Isto inclui o seu nome, endere\u00e7o de email, n\u00famero de telefone, nome da empresa e qualquer outra informa\u00e7\u00e3o que opte por fornecer. Tamb\u00e9m recolhemos automaticamente certos dados t\u00e9cnicos como o seu endere\u00e7o IP, tipo de navegador e padr\u00f5es de utiliza\u00e7\u00e3o atrav\u00e9s de cookies e tecnologias semelhantes.",
      },
      {
        title: "3. Como Utilizamos as Suas Informa\u00e7\u00f5es",
        body: "Utilizamos as informa\u00e7\u00f5es que recolhemos para fornecer e melhorar os nossos servi\u00e7os de automa\u00e7\u00e3o hoteleira, responder \u00e0s suas consultas, enviar atualiza\u00e7\u00f5es relevantes sobre os nossos servi\u00e7os, personalizar a sua experi\u00eancia e cumprir obriga\u00e7\u00f5es legais. N\u00e3o vendemos as suas informa\u00e7\u00f5es pessoais a terceiros.",
      },
      {
        title: "4. Partilha de Dados",
        body: "Podemos partilhar as suas informa\u00e7\u00f5es com prestadores de servi\u00e7os terceiros de confian\u00e7a que nos auxiliam na opera\u00e7\u00e3o do nosso neg\u00f3cio, como fornecedores de alojamento, servi\u00e7os de an\u00e1lise e plataformas de comunica\u00e7\u00e3o. Estes prestadores s\u00e3o contratualmente obrigados a proteger os seus dados e s\u00f3 podem utiliz\u00e1-los para os fins que especificamos.",
      },
      {
        title: "5. Reten\u00e7\u00e3o de Dados",
        body: "Retemos as suas informa\u00e7\u00f5es pessoais apenas durante o tempo necess\u00e1rio para cumprir os objetivos descritos nesta pol\u00edtica, salvo se um per\u00edodo de reten\u00e7\u00e3o mais longo for exigido ou permitido por lei.",
      },
      {
        title: "6. Os Seus Direitos",
        body: "Ao abrigo do Regulamento Geral sobre a Prote\u00e7\u00e3o de Dados (RGPD), tem o direito de aceder, corrigir, eliminar ou restringir o processamento dos seus dados pessoais. Pode tamb\u00e9m retirar o consentimento a qualquer momento. Para exercer estes direitos, contacte-nos em contact@faautomations.com.",
      },
      {
        title: "7. Seguran\u00e7a",
        body: "Implementamos medidas t\u00e9cnicas e organizacionais adequadas para proteger as suas informa\u00e7\u00f5es pessoais contra acesso n\u00e3o autorizado, altera\u00e7\u00e3o, divulga\u00e7\u00e3o ou destrui\u00e7\u00e3o.",
      },
      {
        title: "8. Contacte-nos",
        body: "Se tiver quest\u00f5es sobre esta Pol\u00edtica de Privacidade, contacte-nos em contact@faautomations.com ou ligue para (+45) 61448587.",
      },
    ],
    termsContent: [
      {
        title: "1. Aceita\u00e7\u00e3o dos Termos",
        body: "Ao aceder ou utilizar os servi\u00e7os fornecidos pela FA Automations, concorda em ficar vinculado a estes Termos de Servi\u00e7o. Se n\u00e3o concordar com estes termos, n\u00e3o pode aceder ou utilizar os nossos servi\u00e7os.",
      },
      {
        title: "2. Descri\u00e7\u00e3o dos Servi\u00e7os",
        body: "A FA Automations fornece solu\u00e7\u00f5es de automa\u00e7\u00e3o de workflows hoteleiros, incluindo, mas n\u00e3o se limitando a, comunica\u00e7\u00e3o autom\u00e1tica com h\u00f3spedes, integra\u00e7\u00f5es de gest\u00e3o de reservas e automa\u00e7\u00e3o de workflows operacionais. As funcionalidades e \u00e2mbito espec\u00edficos dos servi\u00e7os s\u00e3o definidos em acordos de servi\u00e7o individuais.",
      },
      {
        title: "3. Obriga\u00e7\u00f5es do Utilizador",
        body: "Concorda em utilizar os nossos servi\u00e7os apenas para fins legais e de acordo com estes termos. \u00c9 respons\u00e1vel por manter a confidencialidade das suas credenciais de conta e por todas as atividades que ocorram na sua conta.",
      },
      {
        title: "4. Propriedade Intelectual",
        body: "Todo o conte\u00fado, funcionalidades e funcionalidade dos nossos servi\u00e7os, incluindo, mas n\u00e3o se limitando a, texto, gr\u00e1ficos, logotipos e software, s\u00e3o propriedade exclusiva da FA Automations e est\u00e3o protegidos por leis de direitos de autor, marcas registadas e outras leis de propriedade intelectual.",
      },
      {
        title: "5. Termos de Pagamento",
        body: "As taxas pelos nossos servi\u00e7os est\u00e3o descritas no seu acordo de servi\u00e7o. O pagamento \u00e9 devido de acordo com o calend\u00e1rio de fatura\u00e7\u00e3o especificado no seu plano. Reservamo-nos o direito de modificar os pre\u00e7os com aviso pr\u00e9vio de 30 dias por escrito.",
      },
      {
        title: "6. Limita\u00e7\u00e3o de Responsabilidade",
        body: "Na medida m\u00e1xima permitida por lei, a FA Automations n\u00e3o ser\u00e1 respons\u00e1vel por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos resultantes da utiliza\u00e7\u00e3o dos nossos servi\u00e7os. A nossa responsabilidade total n\u00e3o exceder\u00e1 o montante pago por si pelos servi\u00e7os nos doze meses anteriores \u00e0 reclama\u00e7\u00e3o.",
      },
      {
        title: "7. Rescis\u00e3o",
        body: "Qualquer das partes pode rescindir o acordo de servi\u00e7o com aviso pr\u00e9vio de 30 dias por escrito. Podemos imediatamente rescindir ou suspender o acesso aos nossos servi\u00e7os se violar estes termos. Ap\u00f3s a rescis\u00e3o, o seu direito de utilizar os servi\u00e7os cessar\u00e1 imediatamente.",
      },
      {
        title: "8. Lei Aplic\u00e1vel",
        body: "Estes termos ser\u00e3o regidos e interpretados de acordo com as leis da Dinamarca, sem consider\u00e7\u00e3o pelas disposi\u00e7\u00f5es sobre conflitos de leis. Quaisquer lit\u00edgios decorrentes destes termos estar\u00e3o sujeitos \u00e0 jurisdi\u00e7\u00e3o exclusiva dos tribunais da Dinamarca.",
      },
      {
        title: "9. Contacte-nos",
        body: "Se tiver quest\u00f5es sobre estes Termos de Servi\u00e7o, contacte-nos em contact@faautomations.com ou ligue para (+45) 61448587.",
      },
    ],
    cookieContent: [
      {
        title: "1. O que s\u00e3o Cookies",
        body: "Cookies s\u00e3o pequenos ficheiros de texto que s\u00e3o armazenados no seu dispositivo quando visita um website. S\u00e3o amplamente utilizados para fazer os websites funcionar de forma mais eficiente, proporcionar uma melhor experi\u00eancia ao utilizador e fornecer informa\u00e7\u00f5es aos proprietários dos sites.",
      },
      {
        title: "2. Como Utilizamos Cookies",
        body: "A FA Automations utiliza cookies e tecnologias de rastreamento semelhantes para operar e melhorar o nosso website, analisar tr\u00e1fego, personalizar conte\u00fado e lembrar as suas prefer\u00eancias. Utilizamos cookies de sess\u00e3o (que expiram quando fecha o navegador) e cookies persistentes (que permanecem no seu dispositivo durante um per\u00edodo definido).",
      },
      {
        title: "3. Tipos de Cookies que Utilizamos",
        body: "Cookies essenciais: Necess\u00e1rios para o website funcionar corretamente. N\u00e3o podem ser desativados. Cookies de an\u00e1lise: Ajudam-nos a compreender como os visitantes interagem com o nosso website, recolhendo dados de utiliza\u00e7\u00e3o an\u00f3nimos. Cookies funcionais: Lembram as suas prefer\u00eancias e defini\u00e7\u00f5es, como idioma e tema. Cookies de marketing: Utilizados para apresentar an\u00fancios relevantes e acompanhar a efic\u00e1cia das nossas campanhas de marketing. S\u00f3 s\u00e3o definidos com o seu consentimento.",
      },
      {
        title: "4. Cookies de Terceiros",
        body: "Alguns cookies s\u00e3o colocados por servi\u00e7os de terceiros que aparecem nas nossas p\u00e1ginas, como fornecedores de an\u00e1lise e parceiros de publicidade. N\u00e3o controlamos estes cookies. Consulte as respetivas pol\u00edticas de privacidade de terceiros para mais informa\u00e7\u00f5es.",
      },
      {
        title: "5. Gerir Cookies",
        body: "Pode controlar e gerir cookies atrav\u00e9s das defini\u00e7\u00f5es do seu navegador. A maioria dos navegadores permite bloquear ou eliminar cookies. No entanto, tenha em aten\u00e7\u00e3o que desativar certos cookies pode afetar a funcionalidade do nosso website. Pode tamb\u00e9m retirar o seu consentimento para cookies n\u00e3o essenciais a qualquer momento.",
      },
      {
        title: "6. Atualiza\u00e7\u00f5es a Esta Pol\u00edtica",
        body: "Podemos atualizar esta Pol\u00edtica de Cookies periodicamente para refletir mudan\u00e7as na tecnologia, legisla\u00e7\u00e3o ou nas nossas pr\u00e1ticas de dados. Encorajamo-lo a rever esta p\u00e1gina periodicamente.",
      },
      {
        title: "7. Contacte-nos",
        body: "Se tiver quest\u00f5es sobre a nossa utiliza\u00e7\u00e3o de cookies, contacte-nos em contact@faautomations.com ou ligue para (+45) 61448587.",
      },
    ],
  },
}
