"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@workspace/ui/components/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Eliminate Manual Tasks", "Run Smoother", "Personalize the Stay", "Be More Efficient", "Save Hours", ],
    []
  );

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
        <div className="flex gap-8 py-20 lg:py-32 items-start justify-start flex-col">
        
          <div className="flex gap-4 flex-col items-start text-left">
            <h1 className="text-4xl md:text-6xl max-w-2xl tracking-tighter text-left font-regular leading-[1.1]">
              <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent"> Automations Workflows that Help Hotels to</span>
              <span className="relative flex w-full justify-start overflow-hidden text-left md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
              Stop wasting hours on repetitive tasks. We build the digital infrastructure that powers your hotel’s guest journey and housekeeping logistics. From the first booking to the final check-out, we ensure your operations run flawlessly, and automatically.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button size="lg" className="gap-2.5" variant="outline">
              <PhoneCall className="w-1 h-1"/>Jump on a call
            </Button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
