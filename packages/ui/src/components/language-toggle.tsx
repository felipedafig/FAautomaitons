"use client"

import { useLanguage } from "../i18n/context"
import { cn } from "@workspace/ui/lib/utils"

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage()

  return (
    <div className="flex items-center rounded-full border border-border/50 bg-muted/50 p-0.5 text-xs font-medium">
      <button
        onClick={() => setLocale("en")}
        className={cn(
          "rounded-full px-2 py-1 transition-colors",
          locale === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground",
        )}
      >
        EN
      </button>
      <button
        onClick={() => setLocale("pt")}
        className={cn(
          "rounded-full px-2 py-1 transition-colors",
          locale === "pt"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground",
        )}
      >
        PT
      </button>
    </div>
  )
}
