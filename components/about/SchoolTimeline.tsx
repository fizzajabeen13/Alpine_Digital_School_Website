import { CalendarDays } from "lucide-react";

import RevealOnScroll from "@/components/animations/RevealOnScroll";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { timelineData } from "@/lib/constants/about";

export default function SchoolTimeline() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-blue-50 py-32">
      {/* ====================================================== */}
      {/* Background Decorations */}
      {/* ====================================================== */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-400/15 blur-[150px]" />

        <div className="absolute -right-24 bottom-0 h-[30rem] w-[30rem] rounded-full bg-cyan-300/15 blur-[170px]" />

        <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300/10 blur-[190px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f008_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f008_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <Container>
        {/* ====================================================== */}
        {/* Section Heading */}
        {/* ====================================================== */}

        <RevealOnScroll>
          <SectionTitle
            eyebrow="Our Journey"
            title="The Story of Growth and Excellence"
            description="From our humble beginnings to becoming a future-ready institution, every milestone reflects our commitment to academic excellence, innovation, and student success."
            center
          />
        </RevealOnScroll>

        {/* ====================================================== */}
        {/* Timeline */}
        {/* ====================================================== */}

        <div className="relative mx-auto mt-20 max-w-6xl">
          {/* Premium Timeline Line */}

          <div className="absolute left-5 top-0 h-full w-[3px] rounded-full bg-gradient-to-b from-blue-700 via-cyan-500 to-yellow-400 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-16">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <RevealOnScroll
                  key={item.year}
                  delay={index * 0.1}
                >
                  <div className="relative md:grid md:grid-cols-2 md:gap-16">
                    <div
                      className={
                        isEven
                          ? "hidden md:block"
                          : "hidden md:col-start-2 md:block"
                      }
                    />

                    <div
                      className={
                        isEven
                          ? "ml-16 md:ml-0"
                          : "ml-16 md:col-start-1 md:row-start-1 md:ml-0"
                      }
                    >
                      <Card
                        className="
                          group
                          relative
                          overflow-hidden
                          rounded-[30px]
                          border
                          border-white/70
                          bg-white/80
                          p-8
                          backdrop-blur-xl
                          shadow-[0_20px_70px_rgba(15,23,42,0.08)]
                          transition-all
                          duration-500
                          hover:-translate-y-3
                          hover:border-blue-200
                          hover:shadow-[0_35px_90px_rgba(37,99,235,0.16)]
                        "
                      >
                        {/* Decorative Glow */}

                        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl transition-all duration-700 group-hover:scale-150" />

                        {/* Premium Border */}

                        <div className="absolute inset-0 rounded-[30px] border border-blue-200/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                        {/* Timeline Number */}

                        <div className="absolute right-8 top-6 select-none text-6xl font-black text-slate-100">
                          0{index + 1}
                        </div>
                                              {/* ====================================================== */}
                        {/* Timeline Icon */}
                        {/* ====================================================== */}

                        <div className="absolute -left-[4rem] top-8 flex h-12 w-12 items-center justify-center rounded-full border-[5px] border-white bg-gradient-to-br from-blue-700 via-blue-800 to-slate-950 text-white shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 md:left-auto md:right-[-5rem]">
                          <CalendarDays size={20} />
                        </div>

                        {!isEven && (
                          <div className="absolute -left-[5rem] top-8 hidden h-12 w-12 items-center justify-center rounded-full border-[5px] border-white bg-gradient-to-br from-blue-700 via-blue-800 to-slate-950 text-white shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 md:flex md:right-auto">
                            <CalendarDays size={20} />
                          </div>
                        )}

                        {/* ====================================================== */}
                        {/* Year */}
                        {/* ====================================================== */}

                        <p className="text-sm font-extrabold uppercase tracking-[0.35em] text-blue-700">
                          {item.year}
                        </p>

                        {/* ====================================================== */}
                        {/* Title */}
                        {/* ====================================================== */}

                        <h3 className="mt-4 text-3xl font-black tracking-tight text-slate-900">
                          {item.title}
                        </h3>

                        {/* ====================================================== */}
                        {/* Description */}
                        {/* ====================================================== */}

                        <p className="mt-5 text-base leading-8 text-slate-600">
                          {item.description}
                        </p>

                        {/* ====================================================== */}
                        {/* Bottom Accent */}
                        {/* ====================================================== */}

                        <div className="mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-blue-700 via-cyan-500 to-yellow-400 transition-all duration-500 group-hover:w-32" />
                                                  {/* ====================================================== */}
                        {/* Hover Shine Effect */}
                        {/* ====================================================== */}

                        <div
                          className="
                            pointer-events-none
                            absolute
                            inset-0
                            -translate-x-full
                            bg-gradient-to-r
                            from-transparent
                            via-white/30
                            to-transparent
                            transition-transform
                            duration-1000
                            group-hover:translate-x-full
                          "
                        />
                      </Card>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}