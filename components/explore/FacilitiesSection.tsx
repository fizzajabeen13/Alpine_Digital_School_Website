import Image from "next/image";

import {
  BookOpen,
  Bot,
  Building2,
  Dumbbell,
  FlaskConical,
  Laptop,
  Microscope,
  MonitorPlay,
} from "lucide-react";

import RevealOnScroll from "@/components/animations/RevealOnScroll";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";


const facilityItems = [
  {
    title: "Classrooms",
    description:
      "Comfortable classrooms designed for focused learning, student participation, and interactive teaching.",
    image: "/images/gallery/Science_3.webp",
    icon: Building2,
    badge: "Learning Space",
  },
  {
    title: "Smart Classes",
    description:
      "Technology-enabled classrooms with multimedia support, digital lessons, and modern learning tools.",
    image: "/images/gallery/Smart_Classrooms.webp",
    icon: MonitorPlay,
    badge: "Smart Learning",
  },
  {
    title: "Computer Lab",
    description:
      "Hands-on computer learning environment for programming, digital literacy, office tools, and IT skills.",
    image: "/images/gallery/IT_1.webp",
    icon: Laptop,
    badge: "IT Lab",
  },
  {
    title: "Science Lab",
    description:
      "Practical science lab for experiments, demonstrations, observations, and concept-based learning.",
    image: "/images/gallery/Science_1.webp",
    icon: FlaskConical,
    badge: "Science",
  },
  {
    title: "STEM Lab",
    description:
      "Creative project-based lab for science, technology, engineering, mathematics, and innovation.",
    image: "/images/gallery/IT_3.webp",
    icon: Microscope,
    badge: "STEM",
  },
  {
    title: "Robotics Lab",
    description:
      "Robotics learning space for Arduino, sensors, motors, logic building, and engineering activities.",
    image: "/images/gallery/Robotics_Lab.webp",
    icon: Bot,
    badge: "Robotics",
  },
  {
    title: "Sports Ground",
    description:
      "Open sports area for games, physical training, competitions, teamwork, and confidence building.",
    image: "/images/gallery/Sports.webp",
    icon: Dumbbell,
    badge: "Sports",
  },
  {
    title: "Library",
    description:
      "A peaceful reading and research space that encourages curiosity, study habits, and lifelong learning.",
    image: "/images/gallery/Library.webp",
    icon: BookOpen,
    badge: "Library",
  },
];


export default function FacilitiesSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#faf9f6]
        py-32
      "
    >

      {/* ====================================================== */}
      {/* Background */}
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
            bottom-20
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
        {/* Header */}
        {/* ====================================================== */}

        <RevealOnScroll>

          <SectionTitle
            eyebrow="Facilities & Labs"
            title="Spaces Designed For Discovery And Innovation"
            description="From smart classrooms and advanced laboratories to sports and reading spaces, every facility supports creativity, curiosity, and future-ready learning."
            center
          />

        </RevealOnScroll>


        {/* ====================================================== */}
        {/* Featured Facility */}
        {/* ====================================================== */}

        <RevealOnScroll delay={0.1}>

          <div
            className="
              mt-20
              grid
              gap-12
              lg:grid-cols-[1.2fr_0.8fr]
              lg:items-center
            "
          >

            <div
              className="
                relative
                h-[620px]
                overflow-hidden
                rounded-[2rem]
                shadow-2xl
              "
            >

              <Image
                src={facilityItems[0].image}
                alt={facilityItems[0].title}
                fill
                className="
                  object-cover
                  transition
                  duration-700
                  hover:scale-105
                "
              />

            </div>
            {/* Featured Content */}

            <div>

              <Badge variant="secondary">
                {facilityItems[0].badge}
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
                {facilityItems[0].title}
                <br />
                Built For Meaningful Learning
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
                {facilityItems[0].description}
              </p>


              {/* Feature Points */}

              <div className="mt-10 space-y-5">

                {[
                  "Interactive teaching environment",
                  "Student-focused classroom design",
                  "Technology-supported learning",
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
                        h-2
                        w-2
                        rounded-full
                        bg-yellow-600
                      "
                    />


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
        {/* Facility Showcase */}
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
                Explore Facilities
              </p>


              <h2
                className="
                  mt-4
                  text-4xl
                  font-black
                  text-[#071A33]
                "
              >
                Learning Spaces Across Campus
              </h2>

            </div>

          </RevealOnScroll>
          <div
            className="
              grid
              gap-8
              md:grid-cols-2
              xl:grid-cols-4
            "
          >

            {facilityItems.slice(1).map((facility, index) => {

              const Icon = facility.icon;


              return (

                <RevealOnScroll
                  key={facility.title}
                  delay={index * 0.06}
                >

                  <article
                    className="
                      group
                      overflow-hidden
                      rounded-[2rem]
                      bg-white
                      shadow-sm
                      transition-all
                      duration-500
                      hover:-translate-y-2
                      hover:shadow-2xl
                    "
                  >


                    {/* Image */}

                    <div
                      className="
                        relative
                        h-64
                        overflow-hidden
                      "
                    >

                      <Image
                        src={facility.image}
                        alt={facility.title}
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
                          left-5
                          top-5
                        "
                      >

                        <Badge variant="secondary">
                          {facility.badge}
                        </Badge>

                      </div>


                    </div>



                    {/* Content */}

                    <div className="p-7">


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
                          font-black
                          text-[#071A33]
                        "
                      >
                        {facility.title}
                      </h3>


                      <p
                        className="
                          mt-4
                          text-sm
                          leading-7
                          text-slate-600
                        "
                      >
                        {facility.description}
                      </p>



                      <div
                        className="
                          mt-7
                          h-px
                          bg-slate-200
                        "
                      />


                      <p
                        className="
                          mt-5
                          text-xs
                          font-bold
                          uppercase
                          tracking-[0.3em]
                          text-yellow-700
                        "
                      >
                        Discover Space
                      </p>


                    </div>


                  </article>

                </RevealOnScroll>

              );

            })}


          </div>

        </div>
                {/* ====================================================== */}
        {/* Innovation Highlight Banner */}
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

            {/* Decorative Elements */}

            <div
              className="
                absolute
                -right-32
                -top-32
                h-[28rem]
                w-[28rem]
                rounded-full
                bg-yellow-500/10
                blur-[140px]
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
                blur-[140px]
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
                  Future Ready Campus
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
                  Technology,
                  <br />
                  Creativity & Innovation
                </h2>


                <p
                  className="
                    mt-6
                    text-lg
                    leading-9
                    text-slate-300
                  "
                >
                  Our specialized labs including computer science, STEM, and
                  robotics spaces help students transform ideas into practical
                  projects while developing problem-solving and innovation
                  skills.
                </p>


              </div>



              {/* Stats */}

              <div
                className="
                  grid
                  gap-5
                  sm:grid-cols-3
                "
              >

                {[
                  {
                    value: "8+",
                    label: "Learning Facilities",
                  },
                  {
                    value: "3+",
                    label: "Innovation Labs",
                  },
                  {
                    value: "100%",
                    label: "Future Focus",
                  },
                ].map((stat) => (

                  <div
                    key={stat.label}
                    className="
                      rounded-3xl
                      border
                      border-white/10
                      bg-white/5
                      p-6
                      text-center
                      backdrop-blur-sm
                    "
                  >

                    <p
                      className="
                        text-4xl
                        font-black
                        text-yellow-400
                      "
                    >
                      {stat.value}
                    </p>


                    <p
                      className="
                        mt-3
                        text-sm
                        text-slate-300
                      "
                    >
                      {stat.label}
                    </p>


                  </div>

                ))}

              </div>


            </div>


          </div>

        </RevealOnScroll>
      </Container>

    </section>
  );
}