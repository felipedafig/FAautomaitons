"use client"

import { createContext, useContext, useState, useEffect } from "react"
import type { Locale, UITranslations } from "./types"
import { en } from "./translations/en"
import { pt } from "./translations/pt"

const translations: Record<Locale, UITranslations> = { en, pt }

const LanguageContext = createContext<{
  locale: Locale
  setLocale: (l: Locale) => void
  t: UITranslations
}>({ locale: "en", setLocale: () => {}, t: en })

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en")

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Locale | null
    if (stored === "en" || stored === "pt") setLocaleState(stored)
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = (l: Locale) => {
    setLocaleState(l)
    localStorage.setItem("lang", l)
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
export const useT = () => useContext(LanguageContext).t
