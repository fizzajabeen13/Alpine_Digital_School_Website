import RevealOnScroll from "@/components/animations/RevealOnScroll";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { aboutAchievementsData } from "@/lib/constants/about";

export default function AboutAchievements() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-blue-50 py-32">
      {/* ====================================================== */}
      {/* Background Decorations */}
      {/* ====================================================== */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-400/15 blur-[150px]" />

        <div className="absolute -right-24 bottom-10 h-[30rem] w-[30rem] rounded-full bg-cyan-300/15 blur-[170px]" />

        <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300/10 blur-[180px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f008_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f008_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <Container>
        {/* ====================================================== */}
        {/* Section Heading */}
        {/* ====================================================== */}

        <RevealOnScroll>
          <SectionTitle
            eyebrow="School Achievements"
            title="A Culture of Excellence and Recognition"
            description="Our students continue to excel in academics, STEM, robotics, sports, leadership, innovation, and co-curricular activities, reflecting our commitment to holistic education."
            center
          />
        </RevealOnScroll>

        {/* ====================================================== */}
        {/* Achievement Cards */}
        {/* ====================================================== */}

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {aboutAchievementsData.map((achievement, index) => {
            const Icon = achievement.icon;

            return (
              <RevealOnScroll
                key={achievement.title}
                delay={index * 0.08}
              >
                <Card
                  className="
                    group
                    relative
                    h-full
                    overflow-hidden
                    rounded-[30px]
                    border
                    border-white/70
                    bg-white/80
                    p-8
                    text-center
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

                  {/* Achievement Number */}

                  <div className="absolute right-6 top-6 select-none text-6xl font-black text-slate-100">
                    0{index + 1}
                  </div>
                                    {/* ====================================================== */}
                  {/* Premium Icon */}
                  {/* ====================================================== */}

                  <div
                    className="
                      relative
                      mx-auto
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

                  {/* ====================================================== */}
                  {/* Title */}
                  {/* ====================================================== */}

                  <h3 className="text-2xl font-black tracking-tight text-slate-900">
                    {achievement.title}
                  </h3>

                  {/* ====================================================== */}
                  {/* Description */}
                  {/* ====================================================== */}

                  <p className="mt-4 text-base leading-8 text-slate-600">
                    {achievement.description}
                  </p>

                  {/* ====================================================== */}
                  {/* Bottom Accent */}
                  {/* ====================================================== */}

                  <div className="mx-auto mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-blue-700 via-cyan-500 to-yellow-400 transition-all duration-500 group-hover:w-28" />

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
                </Card>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* ====================================================== */}
        {/* Excellence Banner */}
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

            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />

            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-yellow-400/10 blur-[120px]" />
                        {/* ====================================================== */}
            {/* Decorative Pattern */}
            {/* ====================================================== */}

            <div className="absolute inset-0 opacity-10">
              <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>

            <div className="relative z-10 grid gap-10 md:grid-cols-3 md:items-center">
              {/* Left Content */}

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.35em] text-yellow-400">
                  Hall of Excellence
                </p>

                <h3 className="mt-4 text-4xl font-black tracking-tight">
                  Celebrating Every Achievement
                </h3>

                <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400" />
              </div>

              {/* Right Content */}

              <div className="space-y-6 md:col-span-2">
                <p className="text-lg leading-9 text-slate-300">
                  At Alpine Digital School, excellence extends beyond academics.
                  We proudly celebrate achievements in STEM, robotics, coding,
                  sports, leadership, debates, creative arts, innovation, and
                  community service, encouraging every learner to discover their
                  strengths and reach their highest potential.
                </p>

                {/* Statistics */}

                <div className="grid grid-cols-3 gap-6 pt-4">
                  <div>
                    <h4 className="text-4xl font-black text-white">100+</h4>
                    <p className="mt-2 text-sm uppercase tracking-wider text-slate-400">
                      Awards
                    </p>
                  </div>

                  <div>
                    <h4 className="text-4xl font-black text-white">25+</h4>
                    <p className="mt-2 text-sm uppercase tracking-wider text-slate-400">
                      Competitions
                    </p>
                  </div>

                  <div>
                    <h4 className="text-4xl font-black text-white">100%</h4>
                    <p className="mt-2 text-sm uppercase tracking-wider text-slate-400">
                      Dedication
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