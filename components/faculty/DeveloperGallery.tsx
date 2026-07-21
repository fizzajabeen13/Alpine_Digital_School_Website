"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Images } from "lucide-react";

import RevealOnScroll from "@/components/animations/RevealOnScroll";
import Lightbox from "@/components/shared/Lightbox";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { developerGallery } from "@/lib/constants/faculty";

export default function DeveloperGallery() {
  const [activeImage, setActiveImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const lightboxImages = developerGallery.map((item) => ({
    src: item.image,
    alt: item.title,
  }));

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 py-28">
        {/* Background Glow */}
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-purple-100/40 blur-3xl" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(to_right,#0f172a_1px,transparent_1px)] [background-size:42px_42px]" />

        <Container className="relative">
          <RevealOnScroll>
            <SectionTitle
              eyebrow="Portfolio Gallery"
              title="Teaching, Innovation & Technology"
              description="A collection of classroom sessions, coding workshops, AI demonstrations, student mentoring, robotics activities, and technology-driven learning experiences."
              center
            />
          </RevealOnScroll>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {developerGallery.map((item, index) => (
              <RevealOnScroll
                key={item.title}
                delay={index * 0.07}
              >
                <Card className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-0 transition-all duration-500 hover:-translate-y-3 hover:border-blue-300 hover:shadow-[0_30px_70px_rgba(37,99,235,0.18)]">

                  {/* Decorative Glow */}
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition-all duration-500 group-hover:bg-blue-500/20" />

                  <button
                    onClick={() => {
                      setActiveImage(index);
                      setIsLightboxOpen(true);
                    }}
                    className="relative block h-80 w-full overflow-hidden"
                    aria-label={`Open ${item.title}`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.08]"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent opacity-70 transition-all duration-500 group-hover:opacity-90" />

                    {/* Gallery Badge */}
                    <div className="absolute left-5 top-5">
                      <Badge variant="secondary">
                        Gallery
                      </Badge>
                    </div>

                    {/* Image Number */}
                    <div className="absolute right-5 top-5 text-5xl font-black tracking-tight text-white/20 transition-all duration-500 group-hover:text-white/30">
                      {(index + 1).toString().padStart(2, "0")}
                    </div>

                    {/* Zoom Button */}
                    <div className="absolute bottom-5 right-5 flex h-12 w-12 translate-y-4 items-center justify-center rounded-full bg-white/90 text-slate-900 opacity-0 shadow-xl backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <Images size={18} />
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute inset-x-0 bottom-0 translate-y-6 p-6 transition-all duration-500 ease-out group-hover:translate-y-0">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-white">
                          {item.title}
                        </h3>

                        <ArrowUpRight
                          size={20}
                          className="text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </div>
                    </div>
                  </button>

                  <div className="p-6">
                    <p className="leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

            <Lightbox
        images={lightboxImages}
        currentIndex={activeImage}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        onNext={() =>
          setActiveImage((prev) =>
            prev === lightboxImages.length - 1 ? 0 : prev + 1
          )
        }
        onPrev={() =>
          setActiveImage((prev) =>
            prev === 0 ? lightboxImages.length - 1 : prev - 1
          )
        }
      />
    </>
  );
}   