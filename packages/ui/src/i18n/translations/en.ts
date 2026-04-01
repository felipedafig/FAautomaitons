import type { UITranslations } from "../types"

export const en: UITranslations = {
  dialog: {
    close: "Close",
  },
  header: {
    links: [
      { label: "How We Do It", href: "/#how-we-do-it" },
      { label: "Testimonials", href: "/#testimonials" },
      { label: "Pricing", href: "/#pricing" },
      { label: "FAQs", href: "/#faqs" },
      { label: "Team", href: "/team" },
    ],
    getStarted: "Get Started",
    toggleMenu: "Toggle menu",
  },
  hero: {
    titles: [
      "Cut Manual Work",
      "Run Smoother",
      "Personalize the Stay",
      "Be More Efficient",
      "Save Hours",
    ],
    headingPrefix: "Automation Workflows that Help ",
    headingHighlight: "Hotels",
    subtitle:
      "We automate your property\u2019s repetitive operations, from initial booking through to post-stay management.",
    callButton: "Jump on a call",
  },
  heroInfoCard: {
    sectionLabel: "Some of what we do",
    features: [
      {
        title: "Guest Communication",
        description:
          "Automated welcomes, check-in instructions, and review requests via WhatsApp or Email.",
      },
      {
        title: "AI Virtual Receptionist",
        description:
          "24/7 AI agent handling inquiries, local tips, and real-time issue resolution.",
      },
      {
        title: "Housekeeping Management",
        description:
          "Auto-triggered cleaning tasks on check-out with live room readiness tracking.",
      },
      {
        title: "Smart Upselling",
        description:
          "Automated pre-arrival offers for room upgrades, early check-in, late checkout, and extras.",
      },
    ],
  },
  faq: {
    badge: "FAQ",
    heading: "Frequently Asked ",
    headingHighlight: "Questions",
    subtitle:
      "Everything you need to know about our automation services. Can\u2019t find your answer? Reach out \u2014 we\u2019re happy to help.",
    items: [
      {
        question: "What exactly does FA Automations do?",
        answer:
          "We build custom automation workflows for hotels, vacation rentals, and property managers. This includes automated guest messaging, booking synchronization across platforms like Airbnb and Booking.com, cleaning and maintenance scheduling, review management, and more \u2014 all tailored to how your property operates.",
        category: "Services",
      },
      {
        question: "Which booking platforms do you integrate with?",
        answer:
          "We integrate with all major platforms including Airbnb, Booking.com, Vrbo, Expedia, and most property management systems (PMS). Our workflows sync bookings, calendars, and guest data across all your channels so nothing falls through the cracks.",
        category: "Integrations",
      },
      {
        question: "How long does it take to set up?",
        answer:
          "Most properties are fully up and running within 1\u20132 weeks. We handle the entire setup process \u2014 connecting your platforms, configuring your messaging templates, and testing everything before going live. No technical knowledge required on your end.",
        category: "Getting Started",
      },
      {
        question: "How does the pricing work?",
        answer:
          "We offer three plans starting at \u20ac29/month based on the number of properties and features you need. Annual billing saves you 20%. All plans include a free trial so you can see the results before committing.",
        category: "Pricing",
      },
      {
        question: "Will guests know the messages are automated?",
        answer:
          "No \u2014 our messages are crafted to feel personal and natural. You can fully customize every template with your tone of voice, property details, and local recommendations. Guests will think you\u2019re personally replying every time.",
        category: "Features",
      },
      {
        question: "What if I need something custom for my property?",
        answer:
          "That\u2019s exactly what we specialize in. Every property is different, so we work with you to design workflows that match your specific operations \u2014 whether it\u2019s coordinating multiple cleaning teams, managing seasonal pricing, or integrating with tools you already use.",
        category: "Support",
      },
    ],
  },
  pricing: {
    monthly: "Monthly",
    annual: "Annual",
    savePct: " (Save 20%)",
    mostPopular: "Most Popular",
    billedMonthly: "Billed Monthly",
    billedAnnually: "Billed Annually",
    youChooseWeBuild: "You choose, we build",
    signupTitle: (planName: string) => `Get Started with ${planName}`,
    signupDescription:
      "Tell us a bit about yourself and we\u2019ll set everything up for you.",
    nameLabel: "Name",
    emailLabel: "Email",
    propertyLabel: "Property / Hotel Name",
    namePlaceholder: "Your name",
    emailPlaceholder: "you@example.com",
    propertyPlaceholder: "e.g. Seaside Boutique Hotel",
    sending: "Sending...",
    continue: "Continue",
    signedUpTitle: "You\u2019re signed up!",
    signedUpDescription:
      "Now let\u2019s schedule a quick call to get your automations running.",
    fallbackMessage:
      "We\u2019ll be in touch shortly to schedule your onboarding call.",
  },
  footer: {
    stillHaveQuestions: "Still have questions?",
    subtitle: "We\u2019re here to help you. Reach out to our team.",
    askUs: "Ask Us",
    contactUsTitle: "Contact Us",
    contactUsDescription:
      "Send us a message and we\u2019ll get back to you as soon as possible.",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    namePlaceholder: "Your name",
    emailPlaceholder: "you@example.com",
    messagePlaceholder: "How can we help you?",
    sendMessage: "Send Message",
    quickLinks: "Quick Links",
    quickLinkItems: [
      { label: "Home", href: "#" },
      { label: "How It Works", href: "#how-we-do-it" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQs", href: "#faqs" },
      { label: "Team", href: "/team" },
    ],
    contactUs: "Contact Us",
    copyright: "\u00a9 2026 FA Automations. All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    cookieSettings: "Cookie Settings",
    lastUpdated: "Last updated: March 30, 2026",
    privacyContent: [
      {
        title: "1. Introduction",
        body: 'FA Automations ("we", "our", or "us") is committed to protecting the privacy of our clients and website visitors. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our hotel automation services.',
      },
      {
        title: "2. Information We Collect",
        body: "We may collect personal information that you voluntarily provide when you contact us, request a demo, or use our services. This includes your name, email address, phone number, company name, and any other information you choose to provide. We also automatically collect certain technical data such as your IP address, browser type, and usage patterns through cookies and similar technologies.",
      },
      {
        title: "3. How We Use Your Information",
        body: "We use the information we collect to provide and improve our hotel automation services, respond to your inquiries, send you relevant updates about our services, personalize your experience, and comply with legal obligations. We do not sell your personal information to third parties.",
      },
      {
        title: "4. Data Sharing",
        body: "We may share your information with trusted third-party service providers who assist us in operating our business, such as hosting providers, analytics services, and communication platforms. These providers are contractually obligated to protect your data and may only use it for the purposes we specify.",
      },
      {
        title: "5. Data Retention",
        body: "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.",
      },
      {
        title: "6. Your Rights",
        body: "Under the General Data Protection Regulation (GDPR), you have the right to access, correct, delete, or restrict processing of your personal data. You may also withdraw consent at any time. To exercise these rights, contact us at contact@faautomations.com.",
      },
      {
        title: "7. Security",
        body: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
      },
      {
        title: "8. Contact Us",
        body: "If you have questions about this Privacy Policy, please contact us at contact@faautomations.com or call (+45) 61448587.",
      },
    ],
    termsContent: [
      {
        title: "1. Agreement to Terms",
        body: "By accessing or using the services provided by FA Automations, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not access or use our services.",
      },
      {
        title: "2. Description of Services",
        body: "FA Automations provides hotel automation workflow solutions, including but not limited to automated guest communication, booking management integrations, and operational workflow automation. The specific features and scope of services are defined in individual service agreements.",
      },
      {
        title: "3. User Obligations",
        body: "You agree to use our services only for lawful purposes and in accordance with these terms. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
      },
      {
        title: "4. Intellectual Property",
        body: "All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are the exclusive property of FA Automations and are protected by copyright, trademark, and other intellectual property laws.",
      },
      {
        title: "5. Payment Terms",
        body: "Fees for our services are outlined in your service agreement. Payment is due according to the billing schedule specified in your plan. We reserve the right to modify pricing with 30 days' written notice.",
      },
      {
        title: "6. Limitation of Liability",
        body: "To the maximum extent permitted by law, FA Automations shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount paid by you for the services in the twelve months preceding the claim.",
      },
      {
        title: "7. Termination",
        body: "Either party may terminate the service agreement with 30 days' written notice. We may immediately terminate or suspend access to our services if you breach these terms. Upon termination, your right to use the services will immediately cease.",
      },
      {
        title: "8. Governing Law",
        body: "These terms shall be governed by and construed in accordance with the laws of Denmark, without regard to conflict of law provisions. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Denmark.",
      },
      {
        title: "9. Contact Us",
        body: "If you have questions about these Terms of Service, please contact us at contact@faautomations.com or call (+45) 61448587.",
      },
    ],
    cookieContent: [
      {
        title: "1. What Are Cookies",
        body: "Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and supply information to site owners.",
      },
      {
        title: "2. How We Use Cookies",
        body: "FA Automations uses cookies and similar tracking technologies to operate and improve our website, analyze traffic, personalize content, and remember your preferences. We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device for a set period).",
      },
      {
        title: "3. Types of Cookies We Use",
        body: "Essential cookies: Required for the website to function properly. These cannot be disabled. Analytics cookies: Help us understand how visitors interact with our website by collecting anonymous usage data. Functional cookies: Remember your preferences and settings, such as language and theme. Marketing cookies: Used to deliver relevant advertisements and track the effectiveness of our marketing campaigns. These are only set with your consent.",
      },
      {
        title: "4. Third-Party Cookies",
        body: "Some cookies are placed by third-party services that appear on our pages, such as analytics providers and advertising partners. We do not control these cookies. Please refer to the respective third-party privacy policies for more information.",
      },
      {
        title: "5. Managing Cookies",
        body: "You can control and manage cookies through your browser settings. Most browsers allow you to block or delete cookies. However, please note that disabling certain cookies may affect the functionality of our website. You can also withdraw your consent for non-essential cookies at any time.",
      },
      {
        title: "6. Updates to This Policy",
        body: "We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. We encourage you to review this page periodically.",
      },
      {
        title: "7. Contact Us",
        body: "If you have questions about our use of cookies, please contact us at contact@faautomations.com or call (+45) 61448587.",
      },
    ],
  },
}
