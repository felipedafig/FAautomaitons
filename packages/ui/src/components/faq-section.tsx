"use client"

import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import { Card } from "@workspace/ui/components/card";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  HelpCircle,
  MessageCircle,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a comprehensive suite of AI-powered tools including natural language processing, computer vision, predictive analytics, and custom machine learning solutions tailored to your business needs.",
    category: "Services",
  },
  {
    question: "How does the pricing work?",
    answer: "Our pricing is subscription-based with three tiers: Starter ($50/month), Professional ($99/month), and Enterprise ($299/month). Annual billing offers a 20% discount. All plans include core features with varying levels of support and API access.",
    category: "Pricing",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes! We offer a 14-day free trial on all plans. No credit card required to start. You can explore all features and upgrade when you're ready.",
    category: "Pricing",
  },
  {
    question: "How do I get started?",
    answer: "Getting started is easy. Simply sign up for an account, choose your plan, and you'll have immediate access to our platform. Our documentation and onboarding guides will help you integrate our APIs in minutes.",
    category: "Getting Started",
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer tiered support: Starter plans get community support and 48-hour response times, Professional plans get 24-hour priority email support, and Enterprise plans get dedicated account managers and 24/7 phone support.",
    category: "Support",
  },
  {
    question: "Can I customize the AI models?",
    answer: "Absolutely! Enterprise customers can work with our team to fine-tune models for specific use cases. Professional users have access to model configuration options, and all users can leverage our pre-trained models out of the box.",
    category: "Features",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, 0.05, 0.01, 0.9],
    },
  },
};

function FAQCard({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div variants={itemVariants}>
      <Card
        className="relative overflow-hidden rounded-2xl border border-border/60 bg-card backdrop-blur-xl transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/2 to-transparent"
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        />

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-10 w-full p-6 text-left"
        >
          <div className="flex items-start gap-4">
            <motion.div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10"
              animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <HelpCircle className="h-5 w-5 text-primary" />
            </motion.div>

            <div className="flex-1">
              <div className="mb-2 flex items-center gap-2">
                <Badge
                  variant="secondary"
                  className="bg-primary/10 text-xs uppercase tracking-wider text-primary"
                >
                  {faq.category}
                </Badge>
              </div>

              <h3 className="text-lg font-semibold text-foreground">
                {faq.question}
              </h3>
            </div>

            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="shrink-0"
            >
              <ChevronDown className="h-5 w-5 text-muted-foreground" />
            </motion.div>
          </div>

          <motion.div
            initial={false}
            animate={{
              height: isOpen ? "auto" : 0,
              opacity: isOpen ? 1 : 0,
            }}
            transition={{
              height: { duration: 0.3, ease: "easeInOut" },
              opacity: { duration: 0.2, delay: isOpen ? 0.1 : 0 },
            }}
            className="overflow-hidden"
          >
            <div className="pt-4 pl-14">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        </button>
      </Card>
    </motion.div>
  );
}

export function FAQSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="faq-section-heading"
      className="relative w-full overflow-hidden px-4 py-20 sm:px-6 lg:px-10"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: shouldReduceMotion ? 1 : [1, 1.1, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: shouldReduceMotion ? 0.6 : 12,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: "linear",
          }}
          className="absolute right-0 top-0 h-72 w-72 rounded-full bg-primary/20 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: shouldReduceMotion ? 1 : [1.1, 1, 1.1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: shouldReduceMotion ? 0.6 : 10,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: "linear",
          }}
          className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-emerald-400/15 blur-[120px]"
        />
      </div>

      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="mb-12 text-center"
        >
          <motion.div className="mb-4 inline-block">
            <Badge
              className="gap-2 bg-primary/10 text-primary backdrop-blur"
              variant="secondary"
            >
              <Sparkles className="h-3 w-3" aria-hidden />
              FAQ
            </Badge>
          </motion.div>

          <motion.h2
            id="faq-section-heading"
            className="mb-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Frequently Asked{" "}
            <span className="text-primary">
              Questions
            </span>
          </motion.h2>

          <motion.p
            className="mx-auto max-w-xl text-lg text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Everything you need to know about our platform. Can&apos;t find what you&apos;re looking for? Feel free to reach out.
          </motion.p>
        </motion.div>

        {/* FAQ Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-4"
        >
          {faqs.map((faq, index) => (
            <FAQCard key={index} faq={faq} index={index} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 text-center"
        >

        </motion.div>
      </div>
    </section>
  );
}
