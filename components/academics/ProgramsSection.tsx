import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import RevealOnScroll from "@/components/animations/RevealOnScroll";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { academicPrograms } from "@/lib/constants/academics";

export default function ProgramsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50 py-20 lg:py-28">

      {/* Background Blobs */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl" />
      <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-indigo-200/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-cyan-200/20 blur-3xl" />

      <Container className="relative z-10">

        <RevealOnScroll>
          <SectionTitle
            eyebrow="Academic Programs"
            title="Programs Designed for Every Learning Stage"
            description="From early childhood education to senior classes, every program is thoughtfully designed to inspire curiosity, strengthen character, and prepare students for future success."
            center
          />
        </RevealOnScroll>

        <div className="mt-16 lg:mt-24 space-y-12 lg:space-y-20">

          {academicPrograms.map((program, index) => {
            const Icon = program.icon;

            return (
              <RevealOnScroll
                key={program.slug}
                delay={index * 0.08}
              >
                <Card className="group overflow-hidden rounded-[28px] lg:rounded-[34px] border border-slate-200 bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-100">

                  {/* ================= HERO IMAGE ================= */}

                  <div className="relative h-56 sm:h-72 lg:h-[420px] overflow-hidden">

                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    {/* Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                    {/* Badge */}

                    <div className="absolute left-4 top-4 sm:left-6 sm:top-6 lg:left-8 lg:top-8">
                      <Badge variant="secondary">
                        {program.level}
                      </Badge>
                    </div>

                    {/* Hero Content */}

                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 lg:p-10">

                      <div>

                        <div className="mb-3 flex h-12 w-12 sm:h-14 sm:w-14 lg:mb-6 lg:h-20 lg:w-20 items-center justify-center rounded-2xl lg:rounded-3xl bg-white/90 backdrop-blur">

                          <div className="flex h-8 w-8 sm:h-10 sm:w-10 lg:h-14 lg:w-14 items-center justify-center rounded-xl lg:rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white">

                            <Icon size={24} className="lg:h-[30px] lg:w-[30px]" />

                          </div>

                        </div>

                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                          {program.title}
                        </h2>

                        {/* Desktop Description */}

                        <p className="hidden lg:block mt-4 max-w-2xl text-lg leading-8 text-slate-200">
                          {program.description}
                        </p>

                      </div>

                    </div>

                  </div>

                  {/* Mobile Description */}

                  <div className="block lg:hidden px-5 pt-5">

                    <p className="text-sm leading-7 text-slate-600">
                      {program.description}
                    </p>

                  </div>

                  {/* ================= CONTENT ================= */}

                  <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[1fr_1.2fr] lg:gap-12 lg:p-14">
                                      {/* ================= LEFT SIDE ================= */}

                    <div className="space-y-6">

                      {/* Subjects */}

                      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 lg:p-6">

                        <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-slate-900">
                          Subjects
                        </h4>

                        <div className="mt-5 flex flex-wrap gap-2.5">

                          {program.subjects.map((subject) => (
                            <span
                              key={subject}
                              className="
                                rounded-full
                                border
                                border-blue-100
                                bg-gradient-to-r
                                from-blue-50
                                to-indigo-50
                                px-3
                                py-1.5
                                text-xs
                                font-semibold
                                text-blue-700
                                transition-all
                                duration-300
                                hover:bg-blue-600
                                hover:text-white
                                sm:px-4
                                sm:py-2
                                sm:text-sm
                              "
                            >
                              {subject}
                            </span>
                          ))}

                        </div>

                      </div>

                      {/* Why Choose */}

                      <div
                        className="
                          rounded-3xl
                          bg-gradient-to-br
                          from-blue-600
                          via-indigo-600
                          to-indigo-700
                          p-5
                          text-white
                          shadow-xl
                          sm:p-6
                          lg:p-8
                        "
                      >

                        <h5 className="text-xl font-bold lg:text-2xl">
                          Why Choose This Program?
                        </h5>

                        <p
                          className="
                            mt-3
                            text-sm
                            leading-7
                            text-blue-100
                            sm:text-base
                        "
                        >
                          Designed with a balanced curriculum,
                          engaging classroom activities,
                          experienced teachers,
                          and modern learning techniques
                          to help every child grow
                          academically, socially,
                          emotionally,
                          and confidently.
                        </p>

                        <Link
                          href="/admissions"
                          className="
                            mt-6
                            inline-flex
                            items-center
                            gap-2
                            rounded-xl
                            bg-white
                            px-5
                            py-3
                            text-sm
                            font-bold
                            text-blue-700
                            transition-all
                            duration-300
                            hover:scale-105
                        "
                        >
                          Learn More

                          <ArrowRight size={16} />

                        </Link>

                      </div>

                    </div>

                    {/* ================= RIGHT SIDE ================= */}
                                        {/* ================= RIGHT SIDE ================= */}

                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 lg:p-6">

                      <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-slate-900">
                        Learning Outcomes
                      </h4>

                      <div className="mt-5 space-y-3">

                        {program.outcomes.map((outcome) => (
                          <div
                            key={outcome}
                            className="
                              group/outcome
                              flex
                              items-start
                              gap-3
                              rounded-2xl
                              border
                              border-slate-200
                              bg-white
                              p-4
                              shadow-sm
                              transition-all
                              duration-300
                              hover:-translate-y-1
                              hover:border-blue-200
                              hover:bg-blue-50
                              hover:shadow-lg
                            "
                          >

                            <div
                              className="
                                flex
                                h-9
                                w-9
                                shrink-0
                                items-center
                                justify-center
                                rounded-xl
                                bg-green-100
                                transition-all
                                duration-300
                                group-hover/outcome:bg-green-500
                              "
                            >

                              <CheckCircle2
                                className="
                                  h-4
                                  w-4
                                  text-green-600
                                  transition-all
                                  duration-300
                                  group-hover/outcome:text-white
                                "
                              />

                            </div>

                            <p className="text-sm leading-7 text-slate-600 sm:text-base">
                              {outcome}
                            </p>

                          </div>
                        ))}

                      </div>

                    </div>

                  </div>

                  {/* Decorative Border Glow */}

                  <div className="pointer-events-none absolute inset-0 rounded-[28px] lg:rounded-[34px] opacity-0 transition-opacity duration-500 group-hover:opacity-100">

                    <div className="absolute inset-0 rounded-[28px] lg:rounded-[34px] ring-1 ring-blue-200" />

                  </div>

                </Card>

              </RevealOnScroll>
            );
          })}

        </div>

      </Container>

    </section>
  );
}