"use client"

import { Button } from "@workspace/ui/components/button"

function Footerdemo() {
  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-2xl font-bold tracking-tight">Still have questions?</h2>
            <p className="mb-6 text-muted-foreground">
              We&apos;re here to help you. Reach out to our support team.
            </p>
            <Button
              size="lg"
              className="rounded-full bg-primary px-6 text-primary-foreground shadow-lg shadow-primary/25 transition-transform duration-300 hover:translate-y-[-2px]"
            >
              Contact Support
            </Button>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <a href="#" className="block transition-colors hover:text-primary">
                Home
              </a>
              <a href="#" className="block transition-colors hover:text-primary">
                About Us
              </a>
              <a href="#" className="block transition-colors hover:text-primary">
                Services
              </a>
              <a href="#" className="block transition-colors hover:text-primary">
                Products
              </a>
              <a href="#" className="block transition-colors hover:text-primary">
                Contact
              </a>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic">
              
              <p>Phone: (+45) 61448587</p>
              <p>Email: contact@faautomations.com</p>
            </address>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 Your Company. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Cookie Settings
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }
