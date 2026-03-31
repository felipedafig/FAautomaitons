export type Locale = "en" | "pt"

export interface UITranslations {
  dialog: {
    close: string
  }
  header: {
    links: { label: string; href: string }[]
    getStarted: string
    toggleMenu: string
  }
  hero: {
    titles: string[]
    headingPrefix: string
    headingHighlight: string
    subtitle: string
    callButton: string
  }
  heroInfoCard: {
    sectionLabel: string
    features: { title: string; description: string }[]
  }
  faq: {
    badge: string
    heading: string
    headingHighlight: string
    subtitle: string
    items: { question: string; answer: string; category: string }[]
  }
  pricing: {
    monthly: string
    annual: string
    savePct: string
    mostPopular: string
    billedMonthly: string
    billedAnnually: string
    youChooseWeBuild: string
    signupTitle: (planName: string) => string
    signupDescription: string
    nameLabel: string
    emailLabel: string
    propertyLabel: string
    namePlaceholder: string
    emailPlaceholder: string
    propertyPlaceholder: string
    sending: string
    continue: string
    signedUpTitle: string
    signedUpDescription: string
    fallbackMessage: string
  }
  footer: {
    stillHaveQuestions: string
    subtitle: string
    askUs: string
    contactUsTitle: string
    contactUsDescription: string
    nameLabel: string
    emailLabel: string
    messageLabel: string
    namePlaceholder: string
    emailPlaceholder: string
    messagePlaceholder: string
    sendMessage: string
    quickLinks: string
    quickLinkItems: { label: string; href: string }[]
    contactUs: string
    copyright: string
    privacyPolicy: string
    termsOfService: string
    cookieSettings: string
    lastUpdated: string
    privacyContent: { title: string; body: string }[]
    termsContent: { title: string; body: string }[]
    cookieContent: { title: string; body: string }[]
  }
}
