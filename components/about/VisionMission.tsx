import RevealOnScroll from "@/components/animations/RevealOnScroll";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { coreValuesData, visionMissionData } from "@/lib/constants/about";

export default function VisionMission() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50 py-32">
      {/* ====================================================== */}
      {/* Background Decorations */}
      {/* ====================================================== */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-blue-400/20 blur-[140px]" />

        <div className="absolute -right-24 bottom-20 h-[28rem] w-[28rem] rounded-full bg-yellow-300/20 blur-[150px]" />

        <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/15 blur-[170px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f008_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f008_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <Container>
        {/* ====================================================== */}
        {/* Section Heading */}
        {/* ====================================================== */}

        <RevealOnScroll>
          <SectionTitle
            eyebrow="Vision & Mission"
            title="Guided by Purpose, Built on Values"
            description="Our philosophy combines academic excellence, character development, digital innovation, and lifelong learning to prepare students for success in a rapidly evolving world."
            center
          />
        </RevealOnScroll>

        {/* ====================================================== */}
        {/* Vision & Mission Cards */}
        {/* ====================================================== */}

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {visionMissionData.map((item, index) => {
            const Icon = item.icon;

            return (
              <RevealOnScroll
                key={item.title}
                delay={index * 0.12}
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
                    p-10
                    backdrop-blur-xl
                    shadow-[0_20px_70px_rgba(15,23,42,0.08)]
                    transition-all
                    duration-500
                    hover:-translate-y-3
                    hover:border-blue-200
                    hover:shadow-[0_35px_90px_rgba(37,99,235,0.18)]
                  "
                >
                  {/* Decorative Glow */}

                  <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl transition-all duration-700 group-hover:scale-150" />

                  {/* Premium Border */}

                  <div className="absolute inset-0 rounded-[32px] border border-blue-200/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Large Number */}

                  <div className="absolute right-8 top-8 select-none text-6xl font-black text-slate-100">
                    0{index + 1}
                  </div>
                                    {/* Premium Icon */}

                  <div
                    className="
                      relative
                      mb-8
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-3xl
                      bg-gradient-to-br
                      from-blue-700
                      via-blue-800
                      to-slate-950
                      text-white
                      shadow-xl
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:rotate-6
                    "
                  >
                    <Icon size={34} />
                  </div>

                  {/* Title */}

                  <h3 className="text-4xl font-black tracking-tight text-slate-950">
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-6 text-lg leading-9 text-slate-600">
                    {item.description}
                  </p>

                  {/* Bottom Accent */}

                  <div className="mt-10 h-1 w-16 rounded-full bg-gradient-to-r from-blue-700 via-cyan-500 to-sky-400 transition-all duration-500 group-hover:w-32" />
                </Card>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* ====================================================== */}
        {/* Premium Divider */}
        {/* ====================================================== */}

        <div className="relative my-24">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

          <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-700 shadow-lg shadow-blue-500/50" />
        </div>

        {/* ====================================================== */}
        {/* Core Values Heading */}
        {/* ====================================================== */}

        <RevealOnScroll>
          <SectionTitle
            eyebrow="Core Values"
            title="The Values That Shape Our Students"
            description="Every lesson, activity, and experience at our school is guided by principles that inspire integrity, innovation, leadership, respect, and lifelong learning."
            center
          />
        </RevealOnScroll>

        {/* ====================================================== */}
        {/* Core Values Grid */}
        {/* ====================================================== */}

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {coreValuesData.map((value, index) => {
            const Icon = value.icon;

            return (
              <RevealOnScroll
                key={value.title}
                delay={index * 0.08}
              >
                <Card
                  className="
                    group
                    relative
                    h-full
                    overflow-hidden
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                    p-8
                    shadow-lg
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-blue-200
                    hover:shadow-2xl
                  "
                >
                  {/* Background Glow */}

                  <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-100 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100" />
                                     {/* Card Number */}

                  <div className="absolute right-6 top-6 select-none text-5xl font-black text-slate-100 transition-colors duration-500 group-hover:text-blue-50">
                    0{index + 1}
                  </div>

                  {/* Premium Icon */}

                  <div
                    className="
                      relative
                      mb-6
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      from-yellow-400
                      via-amber-500
                      to-orange-500
                      text-white
                      shadow-lg
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:rotate-6
                    "
                  >
                    <Icon size={28} />
                  </div>

                  {/* Title */}

                  <h3 className="text-2xl font-black tracking-tight text-slate-900">
                    {value.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-4 text-base leading-8 text-slate-600">
                    {value.description}
                  </p>

                  {/* Bottom Accent */}

                  <div className="mt-8 h-1 w-12 rounded-full bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 transition-all duration-500 group-hover:w-24" />

                  {/* Hover Shine */}

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
              </RevealOnScroll>
            );
          })}
        </div>
      </Container>
    </section>
  );
}