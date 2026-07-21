"use client";

import Image from "next/image";

import {
  Crown,
  Medal,
  Star,
  Trophy,
  Sparkles,
} from "lucide-react";


import RevealOnScroll from "@/components/animations/RevealOnScroll";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";


import { positionHolders } from "@/lib/constants/achievements";




const rankIcons = [
  Trophy,
  Medal,
  Star,
];



const rankStyles = [
  {
    card:
      "border-yellow-400/30 bg-gradient-to-b from-yellow-50 to-white",

    badge:
      "bg-yellow-500 text-white",

    icon:
      "bg-yellow-500 text-white",
  },

  {
    card:
      "border-slate-300 bg-white",

    badge:
      "bg-slate-700 text-white",

    icon:
      "bg-slate-700 text-white",
  },

  {
    card:
      "border-orange-300 bg-white",

    badge:
      "bg-orange-500 text-white",

    icon:
      "bg-orange-500 text-white",
  },
];



export default function PositionHolders() {


  return (

    <section
      id="position-holders"
      className="
        relative
        overflow-hidden
        bg-[#faf9f6]
        py-32
      "
    >


      {/* Decorative Glow */}

      <div
        className="
          absolute
          left-1/2
          top-0
          h-[25rem]
          w-[25rem]
          -translate-x-1/2
          rounded-full
          bg-yellow-400/10
          blur-[130px]
        "
      />



      <Container>


        <RevealOnScroll>

          <SectionTitle
            eyebrow="Hall Of Fame"
            title="Celebrating Academic Excellence"
            description="Honoring our outstanding students whose dedication, discipline, and passion for learning have created remarkable achievements."
            center
          />


        </RevealOnScroll>
                {/* ====================================================== */}
        {/* Excellence Intro Banner */}
        {/* ====================================================== */}


        <RevealOnScroll delay={0.1}>

          <div
            className="
              relative
              mt-20
              overflow-hidden
              rounded-[2.5rem]
              bg-[#071A33]
              px-8
              py-14
              text-white
              md:px-14
              lg:px-20
            "
          >


            {/* Decorative Glow */}

            <div
              className="
                absolute
                -right-32
                -top-32
                h-[28rem]
                w-[28rem]
                rounded-full
                bg-yellow-500/20
                blur-[120px]
              "
            />



            <div
              className="
                relative
                grid
                gap-8
                lg:grid-cols-[1fr_auto]
                lg:items-center
              "
            >



              <div>


                <div
                  className="
                    flex
                    items-center
                    gap-3
                    text-yellow-400
                  "
                >

                  <Sparkles size={22}/>


                  <span
                    className="
                      text-xs
                      font-black
                      uppercase
                      tracking-[0.45em]
                    "
                  >
                    Student Achievers
                  </span>


                </div>



                <h2
                  className="
                    mt-6
                    text-4xl
                    font-black
                    leading-tight
                    md:text-5xl
                  "
                >
                  Inspiring Young Minds
                  <br />
                  To Achieve More
                </h2>



                <p
                  className="
                    mt-6
                    max-w-3xl
                    text-lg
                    leading-8
                    text-slate-300
                  "
                >
                  Our position holders represent the dedication,
                  perseverance, and excellence that define the academic culture
                  of Alpine Digital School.
                </p>



              </div>




              <div
                className="
                  flex
                  h-28
                  w-28
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-yellow-400/30
                  bg-yellow-400/10
                  text-yellow-400
                "
              >

                <Crown size={48}/>

              </div>


            </div>


          </div>


        </RevealOnScroll>
                {/* ====================================================== */}
        {/* Top Achievers Cards */}
        {/* ====================================================== */}


        <div
          className="
            mt-24
            grid
            gap-10
            md:grid-cols-3
          "
        >


          {positionHolders.map((student, index) => {


            const Icon =
              rankIcons[index] ?? Star;


            const style =
              rankStyles[index] ?? rankStyles[2];



            return (

              <RevealOnScroll
                key={student.student}
                delay={index * 0.12}
              >


                <article
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-[2.5rem]
                    border
                    p-6
                    transition-all
                    duration-500
                    hover:-translate-y-3
                    hover:shadow-2xl

                    ${style.card}
                  `}
                >



                  {/* Rank Badge */}


                  <div
                    className="
                      absolute
                      right-6
                      top-6
                      z-20
                    "
                  >

                    <span
                      className={`
                        rounded-full
                        px-5
                        py-2
                        text-xs
                        font-black
                        uppercase
                        tracking-wider

                        ${style.badge}
                      `}
                    >

                      {student.Grade}

                    </span>


                  </div>




                  {/* Student Image */}


                  <div
                    className="
                      relative
                      h-[360px]
                      overflow-hidden
                      rounded-[2rem]
                    "
                  >


                    <Image
                      src={student.image}
                      alt={student.student}
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
                        from-[#071A33]
                        via-transparent
                        to-transparent
                      "
                    />




                    {/* Result Badge */}


                    <div
                      className="
                        absolute
                        bottom-6
                        left-1/2
                        flex
                        -translate-x-1/2
                        items-center
                        gap-3
                        whitespace-nowrap
                        rounded-full
                        bg-white/95
                        px-6
                        py-3
                        text-sm
                        font-black
                        text-[#071A33]
                        shadow-xl
                      "
                    >

                      <Trophy
                        className="
                          text-yellow-600
                        "
                        size={18}
                      />


                      {student.percentage}


                    </div>



                  </div>
                                    {/* Student Information */}


                  <div
                    className="
                      pt-8
                      text-center
                    "
                  >



                    <div
                      className={`
                        mx-auto
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl

                        ${style.icon}
                      `}
                    >

                      <Icon size={30}/>

                    </div>




                    <h3
                      className="
                        mt-6
                        text-3xl
                        font-black
                        text-[#071A33]
                      "
                    >

                      {student.student}

                    </h3>




                    <p
                      className="
                        mt-2
                        font-bold
                        text-yellow-700
                      "
                    >

                      {student.class}

                    </p>




                    <p
                      className="
                        mt-5
                        text-sm
                        leading-7
                        text-slate-600
                      "
                    >

                      Achieved{" "}

                      <span
                        className="
                          font-black
                          text-[#071A33]
                        "
                      >
                        {student.Grade}
                      </span>

                      {" "}
                      position with an outstanding result of{" "}

                      <span
                        className="
                          font-black
                          text-[#071A33]
                        "
                      >
                        {student.percentage}
                      </span>

                      .


                    </p>




                  </div>



                </article>


              </RevealOnScroll>


            );


          })}


        </div>
                {/* ====================================================== */}
        {/* Achievement Closing Banner */}
        {/* ====================================================== */}


        <RevealOnScroll delay={0.25}>


          <div
            className="
              mt-24
              overflow-hidden
              rounded-[2.5rem]
              bg-gradient-to-br
              from-[#071A33]
              to-blue-950
              px-8
              py-14
              text-center
              text-white
              md:px-16
            "
          >


            <Medal
              className="
                mx-auto
                h-14
                w-14
                text-yellow-400
              "
            />



            <h2
              className="
                mt-6
                text-4xl
                font-black
                md:text-5xl
              "
            >

              Building A Legacy Of Excellence

            </h2>



            <p
              className="
                mx-auto
                mt-5
                max-w-3xl
                text-lg
                leading-8
                text-slate-300
              "
            >

              Every position holder represents a story of commitment,
              guidance, and determination. At Alpine Digital School, we
              celebrate achievements while inspiring every student to reach
              their highest potential.

            </p>




            <div
              className="
                mt-10
                flex
                flex-wrap
                justify-center
                gap-4
              "
            >


              <Badge variant="secondary">
                Academic Excellence
              </Badge>


              <Badge variant="secondary">
                Student Success
              </Badge>


              <Badge variant="secondary">
                Future Leaders
              </Badge>


            </div>



          </div>



        </RevealOnScroll>




      </Container>


    </section>


  );

}