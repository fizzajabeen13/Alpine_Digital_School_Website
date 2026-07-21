import RevealOnScroll from "@/components/animations/RevealOnScroll";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { statsData } from "@/lib/constants/homepage";
import StatsCard from "./StatsCard";

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-[#faf9f6] py-32">

      {/* ====================================================== */}
      {/* Background Details */}
      {/* ====================================================== */}

      <div className="absolute inset-0 -z-10">

        <div
          className="
            absolute
            -left-40
            top-20
            h-96
            w-96
            rounded-full
            bg-yellow-500/10
            blur-[160px]
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-10
            h-[30rem]
            w-[30rem]
            rounded-full
            bg-blue-950/10
            blur-[170px]
          "
        />

      </div>


      <Container>


        {/* ====================================================== */}
        {/* Heading */}
        {/* ====================================================== */}

        <RevealOnScroll>

          <SectionTitle
            eyebrow="Our Impact"
            title="Numbers That Reflect Excellence"
            description="Our achievements represent years of dedication, passionate educators, successful learners, and a commitment to creating future-ready students."
            center
          />

        </RevealOnScroll>


        {/* ====================================================== */}
        {/* Stats Grid */}
        {/* ====================================================== */}

        <div
          className="
            mt-20
            grid
            gap-0
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >

          {statsData.map((stat, index) => (

            <RevealOnScroll
              key={stat.label}
              delay={index * 0.1}
            >

              <div
                className="
                  border-b
                  border-slate-200
                  p-8
                  lg:border-b-0
                  lg:border-r
                  last:border-r-0
                "
              >
                              <StatsCard
                  iconName={stat.iconName}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  description={stat.description}
                />

              </div>

            </RevealOnScroll>

          ))}

        </div>



        {/* ====================================================== */}
        {/* Institutional Statement */}
        {/* ====================================================== */}

        <RevealOnScroll delay={0.2}>

          <div
            className="
              mt-20
              grid
              gap-10
              rounded-[2rem]
              bg-[#071A33]
              p-10
              text-white
              md:grid-cols-3
              md:items-center
              md:p-14
            "
          >

            {/* Left */}

            <div>

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.45em]
                  text-yellow-400
                "
              >
                Our Commitment
              </p>


              <h3
                className="
                  mt-5
                  text-4xl
                  font-black
                  leading-tight
                "
              >
                Building The Future Through Education
              </h3>

            </div>



            {/* Middle */}

            <div className="md:col-span-2">

              <p
                className="
                  text-lg
                  leading-9
                  text-slate-300
                "
              >
                Alpine Digital School combines academic excellence,
                technology-driven learning, character development, and
                innovation to prepare students for a rapidly changing world.
              </p>


              <div className="mt-8 flex flex-wrap gap-8">


                <div>

                  <p
                    className="
                      text-4xl
                      font-black
                      text-white
                    "
                  >
                    10+
                  </p>


                  <p className="mt-2 text-sm text-slate-400">
                    Years of Growth
                  </p>

                </div>



                <div>

                  <p
                    className="
                      text-4xl
                      font-black
                      text-white
                    "
                  >
                    400+
                  </p>


                  <p className="mt-2 text-sm text-slate-400">
                    Students Impacted
                  </p>

                </div>


              </div>

            </div>


          </div>

        </RevealOnScroll>
      </Container>

    </section>
  );
}