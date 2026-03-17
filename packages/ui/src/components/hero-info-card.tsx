"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Shield, BarChart3, Code2 } from "lucide-react";
import { Card } from "@workspace/ui/components/card";

const features = [
  {
    icon: Sparkles,
    title: "Automated Guest Communication",
    description: "We automate pre-arrival welcomes, check-in instructions, and post-stay review requests via WhatsApp or Email. Personalize the guest journey without sending a single manual message.",
  },
  {
    icon: Zap,
    title: "24/7 AI Virtual Receptionist",
    description: "Instant support, any time of day. We Deploy a custom AI agent that handles guest inquiries, provides local info, and resolves issues in real-time. Free up your front desk for high-value tasks while maintaining a 5-star response time.",
  },
  {
    icon: Shield,
    title: "Integrated Housekeeping Management",
    description: "We bridge the gap between front-of-house and maintenance. Automatically trigger cleaning tasks upon check-out and track room readiness in your central dashboard.",
  },
  {
    icon: BarChart3,
    title: "Performance & Growth Analytics",
    description: "Get monthly performance reports that track guest satisfaction, upselling success, and operational efficiency. Your data is structured in PostgreSQL, ready for professional analysis.",
  },
];

export function HeroInfoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.6, 0.05, 0.01, 0.9] }}
      className="w-full max-w-xll"
    >
      <Card className="overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-2xl shadow-black/20 backdrop-blur-xl ring-1 ring-white/10">
        <div className="relative p-8">
          {/* Decorative gradient blob */}
          <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
          
          {/* Header */}
          <div className="relative mb-7 mt-2 border-b border-white/20 pb-4">
            <h3 className="mb-1 text-3xl font-semibold tracking-tight text-white">
              How Can We Help You?
            </h3>
          </div>

          {/* Features List */}
          <div className="relative space-y-5">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                className="group flex items-start gap-3"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 transition-colors group-hover:bg-white/20">
                  <feature.icon className="h-5 w-8 text-white/90" />
                </div>
                <div className="flex-1">
                  <h4 className="mb-0.5 text-xl font-medium text-white">
                    {feature.title}
                  </h4>
                  <p className="text-x leading-relaxed text-white/70">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
