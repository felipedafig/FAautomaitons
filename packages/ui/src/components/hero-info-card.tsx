"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Shield } from "lucide-react";
import { Card } from "@workspace/ui/components/card";

const features = [
  {
    icon: Sparkles,
    title: "Automated Guest Communication",
    description:
      "Pre-arrival welcomes, check-in instructions, and review requests — all sent automatically via WhatsApp or Email.",
  },
  {
    icon: Zap,
    title: "24/7 AI Virtual Receptionist",
    description:
      "A custom AI agent that handles guest inquiries, provides local info, and resolves issues in real-time.",
  },
  {
    icon: Shield,
    title: "Integrated Housekeeping Management",
    description:
      "Cleaning tasks trigger on check-out automatically. Track room readiness from your central dashboard.",
  },
];

export function HeroInfoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.6, 0.05, 0.01, 0.9] }}
      className="w-full max-w-md"
    >
      <Card className="overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-2xl shadow-black/20 backdrop-blur-xl ring-1 ring-white/10">
        <div className="relative p-6">
          {/* Decorative gradient blob */}
          <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />

          {/* Header */}
          <div className="relative mb-5 border-b border-white/20 pb-3">
            <h3 className="text-2xl font-semibold tracking-tight text-white">
              How Can We Help You?
            </h3>
          </div>

          {/* Features List */}
          <div className="relative space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                className="group flex items-start gap-3"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10 transition-colors group-hover:bg-white/20">
                  <feature.icon className="h-4 w-4 text-white/90" />
                </div>
                <div className="flex-1">
                  <h4 className="mb-0.5 text-base font-medium text-white">
                    {feature.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-white/60">
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
