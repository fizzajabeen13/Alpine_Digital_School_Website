"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { PlayCircle } from "lucide-react";
import { heroSlides } from "@/lib/constants/homepage";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils/cn";

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[activeSlide];

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {heroSlides.map((item, index) => (
        <div
          key={item.title}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === activeSlide ? "opacity-100" : "opacity-0",
          )}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            priority={index === 0}
            className="object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-slate-950/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/50 to-transparent" />

      {/* Optional Video Background Placeholder */}
      <div className="absolute bottom-8 left-8 hidden items-center gap-3 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold backdrop-blur-md lg:flex">
        <PlayCircle size={20} />
        Campus Tour Video Coming Soon
      </div>

      <Container className="relative flex min-h-screen items-center py-28">
        <div className="max-w-4xl">
          <Badge variant="secondary">{slide.badge}</Badge>

          <p className="mt-8 text-sm font-bold uppercase tracking-[0.35em] text-yellow-400">
            {slide.subtitle}
          </p>

          <h1 className="mt-5 text-5xl font-extrabold leading-tight md:text-7xl lg:text-8xl">
            {slide.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
            {slide.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href={slide.primaryCta.href} size="lg">
              {slide.primaryCta.label}
            </Button>

            <Button href={slide.secondaryCta.href} variant="outline" size="lg">
              {slide.secondaryCta.label}
            </Button>
          </div>

          <div className="mt-12 flex gap-3">
            {heroSlides.map((item, index) => (
              <button
                key={item.title}
                onClick={() => setActiveSlide(index)}
                className={cn(
                  "h-3 rounded-full transition-all",
                  index === activeSlide
                    ? "w-10 bg-yellow-500"
                    : "w-3 bg-white/40 hover:bg-white",
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}