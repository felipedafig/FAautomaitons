"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import { PopupModal } from "react-calendly";
import { Button } from "@workspace/ui/components/button";
import { useT } from "../i18n/context";

function Hero({ calendlyUrl }: { calendlyUrl?: string }) {
  const [titleNumber, setTitleNumber] = useState(0);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const t = useT();
  const titles = t.hero.titles;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto mt-10 px-4">
        <div className="flex gap-4 sm:gap-6 py-10 sm:py-16 lg:py-24 items-start justify-start flex-col">
          <div className="flex gap-4 sm:gap-5 flex-col items-start text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl max-w-4xl tracking-tighter text-left font-regular leading-[1.15]">
              <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">{t.hero.headingPrefix}</span>
              <span className="relative inline-block bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent font-semibold">
                {t.hero.headingHighlight}
              </span>
              <span className="relative flex w-full justify-start overflow-hidden text-left h-[1.3em] mt-1">
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold whitespace-nowrap"
                    initial={{ opacity: 0, y: -150 }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
              {t.hero.subtitle}
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button
              size="lg"
              className="gap-2.5"
              variant="outline"
              onClick={() => calendlyUrl && setIsCalendlyOpen(true)}
            >
              <PhoneCall className="w-4 h-4" />
              {t.hero.callButton}
            </Button>
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
    </div>
  );
}

export { Hero };
