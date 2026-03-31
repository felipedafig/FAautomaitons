"use client"

import { Header } from "@workspace/ui/components/header-1"
import { Footerdemo } from "@workspace/ui/components/footer-section"
import { useAppT } from "@/i18n"

const teamMeta = [
  {
    image: "/team/member-1.jpg",
    email: "filip.almeida@faautomations.com",
    linkedin: "https://www.linkedin.com/in/felipe-figueiredo-924244228",
  },
  {
    image: "/team/member-2.jpg",
    email: "contact@faautomations.com",
    linkedin: "#",
  },
]

export default function TeamPage() {
  const t = useAppT().team

  return (
    <div className="relative min-h-svh">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-violet-400">
            {t.subtitle}
          </p>
          <h1 className="mx-auto max-w-2xl text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {t.title}
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-lg text-muted-foreground">
            {t.description}
          </p>
        </div>
      </section>

      {/* Team members */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:gap-8 lg:gap-16">
            {t.members.map((member, i) => {
              const meta = teamMeta[i]!
              return (
                <div
                  key={member.name}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm"
                >
                  {/* Top accent */}
                  <div className="h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />

                  {/* Photo */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={meta.image}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  </div>

                  {/* Info */}
                  <div className="relative -mt-16 px-6 pb-8">
                    <h2 className="text-2xl font-bold text-foreground">
                      {member.name}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-violet-400">
                      {member.role}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {member.bio}
                    </p>

                    {/* Education */}
                    <div className="mt-6">
                      <p className="text-xs font-medium uppercase tracking-wider text-white/30">
                        {t.educationLabel}
                      </p>
                      <p className="mt-1.5 text-sm text-muted-foreground">
                        {member.education}
                      </p>
                    </div>

                    {/* Experience */}
                    <div className="mt-5">
                      <p className="text-xs font-medium uppercase tracking-wider text-white/30">
                        {t.experienceLabel}
                      </p>
                      <ul className="mt-1.5 space-y-1">
                        {member.experience.map((item) => (
                          <li
                            key={item}
                            className="text-sm text-muted-foreground"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Links */}
                    <div className="mt-6 flex flex-col gap-2.5">
                      <a
                        href={meta.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-violet-400"
                      >
                        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        {t.linkedinLabel}
                      </a>
                      <a
                        href={`mailto:${meta.email}`}
                        className="inline-flex items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-violet-400"
                      >
                        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="currentColor">
                          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                        </svg>
                        {meta.email}
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footerdemo />
    </div>
  )
}
