"use client"

import { useState, useEffect } from "react"
import { Mail } from "lucide-react"

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)
import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import { ScrollArea } from "@workspace/ui/components/scroll-area"
import { Input } from "@workspace/ui/components/input"
import { Textarea } from "@workspace/ui/components/textarea"
import { Label } from "@workspace/ui/components/label"
import { useT } from "../i18n/context"

function LegalDialog({
  trigger,
  title,
  lastUpdated,
  sections,
}: {
  trigger: string
  title: string
  lastUpdated: string
  sections: { title: string; body: string }[]
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="transition-colors hover:text-primary">
          {trigger}
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg md:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl">{title}</DialogTitle>
          <DialogDescription>{lastUpdated}</DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-6 text-sm text-muted-foreground [&_h3]:mb-2 [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:text-foreground [&_p]:leading-6">
            {sections.map((s, i) => (
              <section key={i}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </section>
            ))}
          </div>
        </ScrollArea>
        <DialogFooter showCloseButton />
      </DialogContent>
    </Dialog>
  )
}

function Footerdemo() {
  const [currentUrl, setCurrentUrl] = useState("")
  const t = useT()
  useEffect(() => {
    setCurrentUrl(window.location.href)
  }, [])

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-2xl font-bold tracking-tight">
              {t.footer.stillHaveQuestions}
            </h2>
            <p className="mb-6 text-muted-foreground">
              {t.footer.subtitle}
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="rounded-full bg-primary px-6 text-primary-foreground shadow-lg shadow-primary/25 transition-transform duration-300 hover:translate-y-[-2px]"
                >
                  {t.footer.askUs}
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{t.footer.contactUsTitle}</DialogTitle>
                  <DialogDescription>
                    {t.footer.contactUsDescription}
                  </DialogDescription>
                </DialogHeader>
                <form
                  action="https://formsubmit.co/filip.almeida@faautomations.com"
                  method="POST"
                  className="space-y-5"
                >
                  <input
                    type="hidden"
                    name="_subject"
                    value="New contact from FA Automations website"
                  />
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_next"
                    value={currentUrl}
                  />
                  <div className="space-y-2.5">
                    <Label htmlFor="contact-name">{t.footer.nameLabel}</Label>
                    <Input
                      id="contact-name"
                      name="name"
                      placeholder={t.footer.namePlaceholder}
                      required
                    />
                  </div>
                  <div className="space-y-2.5">
                    <Label htmlFor="contact-email">{t.footer.emailLabel}</Label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder={t.footer.emailPlaceholder}
                      required
                    />
                  </div>
                  <div className="space-y-2.5">
                    <Label htmlFor="contact-message">{t.footer.messageLabel}</Label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      placeholder={t.footer.messagePlaceholder}
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    {t.footer.sendMessage}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t.footer.quickLinks}</h3>
            <nav className="space-y-2 text-sm">
              {t.footer.quickLinkItems.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t.footer.contactUs}</h3>
            <div className="flex gap-6">
              <div className="flex flex-col items-center gap-2 text-center">
                <img
                  src="/team/member-1.jpg"
                  alt="Filip Almeida"
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-border"
                />
                <div>
                  <p className="text-sm font-medium">Filip</p>
                  <a
                    href="mailto:filip.almeida@faautomations.com"
                    className="flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Mail className="h-3 w-3" />
                    filip.almeida@faautomations.com
                  </a>
                  <a
                    href="https://wa.me/4561448587"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary"
                  >
                    <WhatsAppIcon className="h-3 w-3" />
                    (+45) 61448587
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <img
                  src="/team/member-2.jpg"
                  alt="Alexander Dewhurst"
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-border"
                />
                <div>
                  <p className="text-sm font-medium">Alex</p>
                  <a
                    href="mailto:contact@faautomations.com"
                    className="flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Mail className="h-3 w-3" />
                    contact@faautomations.com
                  </a>
                  <a
                    href="https://wa.me/4520943990"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary"
                  >
                    <WhatsAppIcon className="h-3 w-3" />
                    (+45) 20943990
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            {t.footer.copyright}
          </p>
          <nav className="flex gap-4 text-sm">
            <LegalDialog
              trigger={t.footer.privacyPolicy}
              title={t.footer.privacyPolicy}
              lastUpdated={t.footer.lastUpdated}
              sections={t.footer.privacyContent}
            />
            <LegalDialog
              trigger={t.footer.termsOfService}
              title={t.footer.termsOfService}
              lastUpdated={t.footer.lastUpdated}
              sections={t.footer.termsContent}
            />
            <LegalDialog
              trigger={t.footer.cookieSettings}
              title={t.footer.cookieSettings}
              lastUpdated={t.footer.lastUpdated}
              sections={t.footer.cookieContent}
            />
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }
