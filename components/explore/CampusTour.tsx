import Image from "next/image";

import {
  ArrowRight,
  Building2,
  Camera,
  MapPinned,
  School,
  Sparkles,
} from "lucide-react";

import RevealOnScroll from "@/components/animations/RevealOnScroll";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { campusTour } from "@/lib/constants/explore";


const highlights = [
  "Modern Learning Environment",
  "Technology Enabled Classrooms",
  "Student-Friendly Campus",
  "Safe & Secure Environment",
  "Smart Infrastructure",
  "Innovation Focused Learning",
];


export default function CampusTour() {
  return (
    <section
      id="campus-tour"
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
        {/* Heading */}
        {/* ====================================================== */}

        <RevealOnScroll>

          <SectionTitle
            eyebrow="Campus Tour"
            title="A Campus Designed For Inspiration"
            description="Discover Alpine Digital School&apos;s thoughtfully designed spaces where innovation, creativity, technology, and learning come together."
            center
          />

        </RevealOnScroll>


        {/* ====================================================== */}
        {/* Hero Campus Feature */}
        {/* ====================================================== */}

        <RevealOnScroll delay={0.1}>

          <div
            className="
              mt-20
              grid
              gap-14
              lg:grid-cols-[1.1fr_0.9fr]
              lg:items-center
            "
          >


            {/* Image */}
            
            <div className="relative">

              <div
                className="
                  absolute
                  -right-6
                  -top-6
                  h-full
                  w-full
                  rounded-[2rem]
                  border
                  border-yellow-600/30
                "
              />


              <div
                className="
                  relative
                  h-[600px]
                  overflow-hidden
                  rounded-[2rem]
                  shadow-2xl
                "
              >

                <Image
                  src="/images/hero/home_hero_1.png"
                  alt="Alpine Digital School Campus"
                  fill
                  className="
                    object-cover
                    transition
                    duration-700
                    hover:scale-105
                  "
                />

              </div>

            </div>


            {/* Content */}

            <div>
                <Badge variant="secondary">
                Welcome to Alpine Digital School
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
                Inspiring Young Minds Through
                Modern Learning Spaces
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
                Alpine Digital School provides an environment where
                technology, creativity, discipline, and innovation work
                together. Every corner of our campus is designed to support
                curiosity, collaboration, confidence, and academic growth.
              </p>



              {/* ====================================================== */}
              {/* Highlights */}
              {/* ====================================================== */}


              <div
                className="
                  mt-10
                  grid
                  gap-5
                  sm:grid-cols-2
                "
              >

                {highlights.map((item) => (

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
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        bg-yellow-500/10
                      "
                    >

                      <Sparkles
                        className="
                          h-5
                          w-5
                          text-yellow-600
                        "
                      />

                    </div>


                    <span
                      className="
                        text-sm
                        font-semibold
                        text-slate-700
                      "
                    >
                      {item}
                    </span>

                  </div>

                ))}

              </div>



              {/* ====================================================== */}
              {/* Button */}
              {/* ====================================================== */}

              <div className="mt-12">

                <Button href="#gallery">

                  Explore Gallery

                  <ArrowRight
                    className="
                      ml-2
                      h-5
                      w-5
                    "
                  />

                </Button>

              </div>


            </div>


          </div>

        </RevealOnScroll>
        {/* ====================================================== */}
        {/* Campus Spaces */}
        {/* ====================================================== */}

        <div className="mt-32">

          <RevealOnScroll>

            <div
              className="
                mb-12
                flex
                flex-col
                gap-6
                sm:flex-row
                sm:items-end
                sm:justify-between
              "
            >

              <div>

                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.45em]
                    text-yellow-700
                  "
                >
                  Explore Spaces
                </p>


                <h2
                  className="
                    mt-4
                    text-4xl
                    font-black
                    tracking-tight
                    text-[#071A33]
                  "
                >
                  Discover Our Learning Environment
                </h2>


              </div>


              <p
                className="
                  max-w-md
                  text-sm
                  leading-7
                  text-slate-500
                "
              >
                From classrooms and laboratories to creative spaces and
                student areas, every facility is designed to support modern
                education.
              </p>


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

            {campusTour.map((place, index) => (

              <RevealOnScroll
                key={place.title}
                delay={index * 0.08}
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
                    hover:shadow-xl
                  "
                >


                  {/* Image */}

                  <div
                    className="
                      relative
                      h-72
                      overflow-hidden
                    "
                  >

                    <Image
                      src={place.image}
                      alt={place.title}
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


                  </div>
                  {/* Content */}

                  <div className="p-7">

                    <div
                      className="
                        mb-6
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

                      {index === 0 && <Building2 size={26} />}

                      {index === 1 && <School size={26} />}

                      {index === 2 && <MapPinned size={26} />}

                      {index === 3 && <Camera size={26} />}

                    </div>


                    <h3
                      className="
                        text-2xl
                        font-black
                        text-[#071A33]
                      "
                    >
                      {place.title}
                    </h3>


                    <p
                      className="
                        mt-4
                        text-sm
                        leading-7
                        text-slate-600
                      "
                    >
                      {place.description}
                    </p>


                    <div
                      className="
                        mt-6
                        h-px
                        w-full
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
                      Explore Facility
                    </p>


                  </div>


                </article>


              </RevealOnScroll>

            ))}

          </div>

        </div>
        {/* ====================================================== */}
        {/* Virtual Campus Tour */}
        {/* ====================================================== */}

        <RevealOnScroll>

          <div
            className="
              relative
              mt-28
              overflow-hidden
              rounded-[2.5rem]
              bg-[#071A33]
              px-8
              py-20
              text-center
              text-white
              md:px-16
            "
          >

            {/* Decorative Glow */}

            <div
              className="
                absolute
                -right-32
                -top-32
                h-96
                w-96
                rounded-full
                bg-yellow-500/10
                blur-[120px]
              "
            />


            <div
              className="
                absolute
                -bottom-40
                -left-40
                h-[28rem]
                w-[28rem]
                rounded-full
                bg-blue-400/10
                blur-[140px]
              "
            />


            <div className="relative">


              <Badge variant="secondary">
                Coming Soon
              </Badge>


              <h2
                className="
                  mt-8
                  text-5xl
                  font-black
                  leading-tight
                  md:text-6xl
                "
              >
                Experience Our Campus
                <br />
                From Anywhere
              </h2>


              <p
                className="
                  mx-auto
                  mt-8
                  max-w-3xl
                  text-lg
                  leading-9
                  text-slate-300
                "
              >
                Soon you will be able to explore Alpine Digital School
                virtually through an immersive 360° experience featuring our
                classrooms, laboratories, library, sports facilities, and
                innovation spaces.
              </p>


              <div
                className="
                  mx-auto
                  mt-10
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-yellow-500/30
                  bg-yellow-500/10
                  px-8
                  py-4
                  font-semibold
                  text-yellow-300
                "
              >

                <Camera size={20} />

                Interactive Virtual Tour Coming Soon

              </div>


            </div>

          </div>

        </RevealOnScroll>


      </Container>

    </section>
  );
}