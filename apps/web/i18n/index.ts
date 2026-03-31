"use client"

import { useLanguage } from "@workspace/ui/i18n"
import { en } from "./translations/en"
import { pt } from "./translations/pt"

const translations = { en, pt } as const

export function useAppT() {
  const { locale } = useLanguage()
  return translations[locale]
}
