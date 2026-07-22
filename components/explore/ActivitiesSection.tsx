import Image from "next/image";

import {
  Bot,
  Bus,
  Code2,
  FlaskConical,
  Medal,
  PartyPopper,
  Trophy,
} from "lucide-react";

import RevealOnScroll from "@/components/animations/RevealOnScroll";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";


const activityCards = [
  {
    title: "Sports Activities",
    description:
      "Students participate in cricket, football, athletics, team games, races, and sports competitions to develop discipline, teamwork, and confidence.",
    image: "/images/gallery/sports.webp",
    icon: Trophy,
    badge: "Sports",
  },
  {
    title: "Educational Trips",
    description:
      "Field trips to museums, universities, science centers, industries, and historical places help students connect classroom learning with real-world experiences.",
    image: "/images/gallery/trips.webp",
    icon: Bus,
    badge: "Trips",
  },
  {
    title: "Annual Functions",
    description:
      "Annual functions, award ceremonies, cultural programs, speeches, performances, and celebrations build confidence and creativity.",
    image: "/images/gallery/Annual_Function.webp",
    icon: PartyPopper,
    badge: "Functions",
  },
  {
    title: "Competitions",
    description:
      "Debates, quizzes, art contests, science competitions, IT contests, and academic challenges encourage healthy competition and excellence.",
    image: "/images/gallery/Competitions.webp",
    icon: Medal,
    badge: "Competitions",
  },
  {
    title: "Science Activities",
    description:
      "Science fairs, experiments, model making, demonstrations, and exhibitions help students understand concepts through practical learning.",
    image: "/images/gallery/Classroom_Activities.webp",
    icon: FlaskConical,
    badge: "Science",
  },
  {
    title: "IT Activities",
    description:
      "Coding practice, computer literacy sessions, typing, office applications, web development basics, and IT quizzes build digital confidence.",
    image: "/images/gallery/IT_1.webp",
    icon: Code2,
    badge: "IT",
  },
  {
    title: "Robotics Activities",
    description:
      "Robotics sessions introduce Arduino, sensors, motors, logic building, engineering challenges, and project-based learning.",
    image: "/images/gallery/Robotics_Lab.webp",
    icon: Bot,
    badge: "Robotics",
  },
];


export default function ActivitiesSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#faf9f6]
        py-32
      "
    >

      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">

        <div
          className="
            absolute
            left-0
            top-40
            h-96
            w-96
            rounded-full
            bg-yellow-500/10
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            right-0
            bottom-20
            h-[30rem]
            w-[30rem]
            rounded-full
            bg-blue-950/10
            blur-[160px]
          "
        />

      </div>



      <Container>


        {/* Header */}

        <RevealOnScroll>

          <SectionTitle
            eyebrow="Student Activities"
            title="Life Beyond The Classroom"
            description="Students discover their talents through sports, creativity, technology, competitions, and experiences that shape confidence and leadership."
            center
          />

        </RevealOnScroll>



        {/* Featured Experience */}

        <RevealOnScroll delay={0.1}>

          <div
            className="
              mt-20
              grid
              gap-12
              lg:grid-cols-[1.1fr_0.9fr]
              lg:items-center
            "
          >

            <div
              className="
                relative
                h-[560px]
                overflow-hidden
                rounded-[2rem]
                shadow-2xl
              "
            >

              <Image
                src="/images/gallery/Leadership.webp"
                alt="Student Activities"
                fill
                className="
                  object-cover
                  transition
                  duration-700
                  hover:scale-105
                "
              />


              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#071A33]/80
                  via-transparent
                  to-transparent
                "
              />

            </div>
            {/* Featured Content */}

            <div>

              <Badge variant="secondary">
                Student Experience
              </Badge>


              <h2
                className="
                  mt-6
                  text-5xl
                  font-black
                  leading-[1.1]
                  tracking-tight
                  text-[#071A33]
                "
              >
                Developing Skills,
                <br />
                Confidence & Character
              </h2>


              <div
                className="
                  mt-8
                  h-[2px]
                  w-24
                  bg-yellow-600
                "
              />


              <p
                className="
                  mt-8
                  text-lg
                  leading-9
                  text-slate-600
                "
              >
                At Alpine Digital School, students learn beyond textbooks.
                Through activities, projects, competitions, and collaborative
                experiences, they develop creativity, leadership, teamwork,
                communication skills, and confidence.
              </p>



              {/* Experience Points */}

              <div className="mt-10 space-y-5">


                {[
                  "Creative expression and leadership development",
                  "Practical STEM and technology experiences",
                  "Teamwork through sports and competitions",
                  "Real-world learning opportunities",
                ].map((item) => (

                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-4
                    "
                  >

                    <div
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        bg-yellow-500/10
                      "
                    >

                      <span
                        className="
                          h-2
                          w-2
                          rounded-full
                          bg-yellow-600
                        "
                      />

                    </div>


                    <p
                      className="
                        font-semibold
                        text-slate-700
                      "
                    >
                      {item}
                    </p>


                  </div>

                ))}


              </div>


            </div>


          </div>


        </RevealOnScroll>



        {/* ====================================================== */}
        {/* Activity Collection */}
        {/* ====================================================== */}


        <div className="mt-32">

          <RevealOnScroll>

            <div className="mb-12">

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.45em]
                  text-yellow-700
                "
              >
                Explore Activities
              </p>


              <h2
                className="
                  mt-4
                  text-4xl
                  font-black
                  text-[#071A33]
                "
              >
                Experiences That Inspire Growth
              </h2>


            </div>

          </RevealOnScroll>
            <div
            className="
              grid
              gap-8
              md:grid-cols-2
              xl:grid-cols-3
            "
          >

            {activityCards.map((activity, index) => {

              const Icon = activity.icon;


              return (

                <RevealOnScroll
                  key={activity.title}
                  delay={index * 0.06}
                >

                  <article
                    className="
                      group
                      flex
                      h-[600px]
                      flex-col
                      overflow-hidden
                      rounded-[2rem]
                      bg-white
                      shadow-sm
                      transition-all
                      duration-500
                      hover:-translate-y-2
                      hover:shadow-2xl
                      hover:border-yellow-500/20
                    "
                  >


                    {/* Image */}

                    <div
                      className="
                        relative
                        h-64
                        shrink-0
                        overflow-hidden
                      "
                    >

                      <Image
                        src={activity.image}
                        alt={activity.title}
                        fill
                        className="
                          object-cover
                          transition
                          duration-700
                          group-hover:scale-110
                        "
                      />


                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-[#071A33]/70
                          via-transparent
                          to-transparent
                        "
                      />


                      <div
                        className="
                          absolute
                          left-6
                          top-6
                        "
                      >

                        <Badge variant="secondary">
                          {activity.badge}
                        </Badge>


                      </div>


                    </div>




                    {/* Content */}


                    <div className="flex flex-1 flex-col p-7">


                      <div
                        className="
                          flex
                          h-14
                          w-14
                          items-center
                          justify-center
                          rounded-2xl
                          bg-[#071A33]
                          text-yellow-500
                        "
                      >

                        <Icon size={26} />

                      </div>




                      <h3
                        className="
                          mt-6
                          text-2xl
                          min-h-[64px]
                          font-black
                          text-[#071A33]
                        "
                      >
                        {activity.title}
                      </h3>



                      <p
                        className="
                          mt-4
                          flex-1
                          text-sm
                          leading-7
                          line-clamp-4
                          text-slate-600
                        "
                      >
                        {activity.description}
                      </p>



                      <div
                        className="
                          mt-6
                          h-px
                          bg-slate-200
                        "
                      />

                    </div>

                  </article>

                </RevealOnScroll>

              );

            })}

          </div>

        </div>
                {/* ====================================================== */}
        {/* STEM & Innovation Highlight */}
        {/* ====================================================== */}

        <RevealOnScroll delay={0.2}>

          <div
            className="
              relative
              mt-28
              overflow-hidden
              rounded-[2.5rem]
              bg-[#071A33]
              px-8
              py-16
              text-white
              md:px-14
              lg:px-20
            "
          >

            {/* Decorative Glow */}

            <div
              className="
                absolute
                -right-40
                -top-40
                h-[30rem]
                w-[30rem]
                rounded-full
                bg-yellow-500/10
                blur-[150px]
              "
            />


            <div
              className="
                absolute
                -bottom-40
                -left-40
                h-[25rem]
                w-[25rem]
                rounded-full
                bg-blue-400/10
                blur-[150px]
              "
            />



            <div
              className="
                relative
                grid
                gap-10
                lg:grid-cols-2
                lg:items-center
              "
            >


              {/* Text */}

              <div>


                <Badge variant="secondary">
                  Future Skills
                </Badge>



                <h2
                  className="
                    mt-6
                    text-4xl
                    font-black
                    leading-tight
                    md:text-5xl
                  "
                >
                  Building Tomorrow&apos;s
                  <br />
                  Innovators
                </h2>



                <p
                  className="
                    mt-6
                    text-lg
                    leading-9
                    text-slate-300
                  "
                >
                  Through robotics, coding, science experiments, and
                  technology-based projects, students develop problem-solving
                  abilities and creative thinking skills needed for the future.
                </p>


              </div>



              {/* Innovation Areas */}


              <div
                className="
                  grid
                  gap-5
                  sm:grid-cols-2
                "
              >

                {[
                  {
                    title: "Robotics",
                    icon: Bot,
                  },
                  {
                    title: "Coding",
                    icon: Code2,
                  },
                  {
                    title: "Science",
                    icon: FlaskConical,
                  },
                  {
                    title: "Competitions",
                    icon: Medal,
                  },
                ].map((item) => {

                  const Icon = item.icon;


                  return (

                    <div
                      key={item.title}
                      className="
                        rounded-3xl
                        border
                        border-white/10
                        bg-white/5
                        p-6
                        backdrop-blur-sm
                        transition
                        hover:bg-white/10
                      "
                    >

                      <Icon
                        className="
                          h-8
                          w-8
                          text-yellow-400
                        "
                      />


                      <p
                        className="
                          mt-4
                          font-bold
                        "
                      >
                        {item.title}
                      </p>


                    </div>

                  );

                })}

              </div>

            </div>

          </div>

        </RevealOnScroll>
      </Container>

    </section>
  );
}

