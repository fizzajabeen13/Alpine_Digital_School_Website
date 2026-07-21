import Image from "next/image";

import RevealOnScroll from "@/components/animations/RevealOnScroll";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { infrastructureData } from "@/lib/constants/about";

export default function Infrastructure() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-blue-50 py-32">
      {/* ====================================================== */}
      {/* Background Decorations */}
      {/* ====================================================== */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-16 h-96 w-96 rounded-full bg-blue-400/15 blur-[150px]" />

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
            eyebrow="Campus Facilities"
            title="A Modern Environment for Better Learning"
            description="Designed to inspire curiosity and innovation, our campus provides students with modern classrooms, advanced laboratories, collaborative spaces, and vibrant learning environments."
            center
          />
        </RevealOnScroll>

        {/* ====================================================== */}
        {/* Infrastructure Grid */}
        {/* ====================================================== */}

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {infrastructureData.map((facility, index) => {
            const Icon = facility.icon;

            return (
              <RevealOnScroll
                key={facility.title}
                delay={index * 0.08}
              >
                <Card
                  className="
                    group
                    relative
                    h-full
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-white/70
                    bg-white/80
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

                  <div className="absolute -right-24 -top-24 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl transition-all duration-700 group-hover:scale-150" />

                  {/* Premium Border */}

                  <div className="absolute inset-0 rounded-[32px] border border-blue-200/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Card Number */}

                  <div className="absolute right-6 top-6 z-20 select-none text-6xl font-black text-white/20">
                    0{index + 1}
                  </div>

                  {/* ====================================================== */}
                  {/* Image */}
                  {/* ====================================================== */}

                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Dark Gradient Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/20 to-transparent" />

                    {/* Top Gradient */}

                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-cyan-400/10 opacity-80" />

                    {/* Floating Icon */}

                    <div
                      className="
                        absolute
                        bottom-6
                        left-6
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-white/20
                        bg-white/10
                        text-white
                        backdrop-blur-xl
                        shadow-xl
                        transition-all
                        duration-500
                        group-hover:scale-110
                        group-hover:rotate-6
                      "
                    >
                      <Icon size={30} />
                    </div>

                    {/* Facility Label */}

                    <div className="absolute bottom-8 right-6 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-white backdrop-blur-xl">
                      Campus
                    </div>
                  </div>

                  {/* ====================================================== */}
                  {/* Content */}
                  {/* ====================================================== */}

                  <div className="relative p-8">
                    <h3 className="text-3xl font-black tracking-tight text-slate-900">
                      {facility.title}
                    </h3>

                    <p className="mt-5 text-base leading-8 text-slate-600">
                      {facility.description}
                    </p>

                    {/* Accent Line */}

                    <div className="mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-blue-700 via-cyan-500 to-yellow-400 transition-all duration-500 group-hover:w-32" />
                                        {/* ====================================================== */}
                    {/* Hover Shine */}
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
                  </div>
                </Card>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* ====================================================== */}
        {/* Premium Bottom Showcase */}
        {/* ====================================================== */}

        <RevealOnScroll delay={0.2}>
          <div
            className="
              relative
              mt-20
              overflow-hidden
              rounded-[2.5rem]
              bg-gradient-to-br
              from-slate-950
              via-blue-950
              to-slate-900
              p-10
              text-white
              shadow-[0_30px_90px_rgba(15,23,42,0.35)]
              md:p-14
            "
          >
            {/* Background Glow */}

            <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />

            <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-cyan-400/15 blur-[120px]" />

            {/* Decorative Grid */}

            <div className="absolute inset-0 opacity-10">
              <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>

            <div className="relative z-10 grid gap-10 md:grid-cols-3 md:items-center">
              {/* Left Side */}

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.35em] text-yellow-400">
                  Premium Campus
                </p>

                <h3 className="mt-4 text-4xl font-black tracking-tight">
                  Built for Learning, Designed for Excellence
                </h3>

                <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400" />
              </div>
                            {/* Right Side */}

              <div className="space-y-6 md:col-span-2">
                <p className="text-lg leading-9 text-slate-300">
                  Our campus is thoughtfully designed to create an inspiring
                  learning environment where students can explore, collaborate,
                  and innovate. From smart classrooms and science laboratories
                  to libraries, sports facilities, and technology-enabled
                  learning spaces, every corner of our school supports academic
                  excellence and holistic development.
                </p>

                {/* Campus Statistics */}

                <div className="grid grid-cols-3 gap-6 pt-4">
                  <div>
                    <h4 className="text-4xl font-black text-white">15+</h4>
                    <p className="mt-2 text-sm uppercase tracking-wider text-slate-400">
                      Facilities
                    </p>
                  </div>

                  <div>
                    <h4 className="text-4xl font-black text-white">100%</h4>
                    <p className="mt-2 text-sm uppercase tracking-wider text-slate-400">
                      Smart Learning
                    </p>
                  </div>

                  <div>
                    <h4 className="text-4xl font-black text-white">24/7</h4>
                    <p className="mt-2 text-sm uppercase tracking-wider text-slate-400">
                      Student Support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
