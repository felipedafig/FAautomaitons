"use client"

import { useState } from "react"
import { PopupModal } from "react-calendly"
import { useAppT } from "@/i18n"

export function LaunchBanner({ calendlyUrl }: { calendlyUrl?: string }) {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false)
  const t = useAppT().launchBanner

  return (
    <div className="relative overflow-hidden mx-auto max-w-4xl my-16 px-4">
      <div className="relative rounded-2xl border border-red-500/30 bg-red-950/20 backdrop-blur-sm p-5 sm:p-8 md:p-10">
        {/* Subtle glow */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-40 bg-red-500/10 blur-3xl rounded-full pointer-events-none" />

        <div className="relative flex flex-col items-center text-center gap-5">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-red-500/15 border border-red-500/30 px-4 py-1.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-red-400">
              {t.badge}
            </span>
          </div>

          {/* Heading */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white/90">
            {t.heading}{" "}
            <span className="text-red-400">{t.headingHighlight}</span>
            {" "}{t.headingSuffix}
          </h3>

          {/* Body */}
          <p className="max-w-2xl text-sm md:text-base leading-relaxed text-white/50">
            {t.body}{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent font-semibold">{t.bodyHighlight}</span>
            {t.bodyEnd}
          </p>

          {/* CTA */}
          <button
            onClick={() => calendlyUrl && setIsCalendlyOpen(true)}
            className="mt-2 inline-flex items-center gap-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 text-sm transition-all duration-200 shadow-lg shadow-red-500/20 hover:shadow-red-500/30"
          >
            {t.cta}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </button>

          {calendlyUrl && isCalendlyOpen && (
            <PopupModal
              url={calendlyUrl}
              onModalClose={() => setIsCalendlyOpen(false)}
              open={isCalendlyOpen}
              rootElement={document.body}
            />
          )}
        </div>
      </div>
    </div>
  )
}
