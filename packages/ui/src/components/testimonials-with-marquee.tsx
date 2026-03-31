import { cn } from "@workspace/ui/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@workspace/ui/components/testimonial-card"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  // Take only first 3 testimonials
  const displayTestimonials = testimonials.slice(0, 3)

  return (
    <section className={cn(
      "bg-background text-foreground",
      "py-12 sm:py-24 md:py-32 px-4",
      className
    )}>
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-md max-w-[720px] font-medium text-muted-foreground sm:text-xl">
            {description}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 justify-center items-center max-w-6xl">
          {displayTestimonials.map((testimonial, i) => (
            <TestimonialCard 
              key={`static-${i}`}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
