"use client";

import CountUp from "react-countup";

import {
  Award,
  Medal,
  ScrollText,
  Target,
  Trophy,
  Sparkles,
} from "lucide-react";


import RevealOnScroll from "@/components/animations/RevealOnScroll";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";


import { achievementStats } from "@/lib/constants/achievements";



const icons = {
  Trophy,
  Medal,
  Award,
  ScrollText,
  Target,
};



const iconStyles = {
  yellow:
    "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",

  blue:
    "bg-blue-500/10 text-blue-400 border-blue-400/20",

  amber:
    "bg-amber-500/10 text-amber-400 border-amber-400/20",

  green:
    "bg-emerald-500/10 text-emerald-400 border-emerald-400/20",

  red:
    "bg-red-500/10 text-red-400 border-red-400/20",
};




export default function AchievementStats() {


  return (

    <section
      className="
        relative
        overflow-hidden
        bg-[#faf9f6]
        py-32
      "
    >


      {/* Background Effects */}

      <div
        className="
          absolute
          left-0
          top-20
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
          right-0
          bottom-0
          h-[25rem]
          w-[25rem]
          rounded-full
          bg-blue-950/10
          blur-[140px]
        "
      />



      <Container>


        <RevealOnScroll>

          <SectionTitle
            eyebrow="Achievement Statistics"
            title="A Legacy of Excellence & Success"
            description="Our students achieve remarkable milestones through academics, STEM, robotics, artificial intelligence, technology, competitions, and creative excellence."
            center
          />


        </RevealOnScroll>
                {/* ====================================================== */}
        {/* Excellence Banner */}
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


            {/* Glow */}

            <div
              className="
                absolute
                -right-40
                -top-40
                h-[30rem]
                w-[30rem]
                rounded-full
                bg-yellow-500/10
                blur-[140px]
              "
            />



            <div
              className="
                relative
                grid
                gap-10
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
                      tracking-[0.4em]
                    "
                  >
                    Hall Of Excellence
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
                  Celebrating Student
                  <br />
                  Achievements
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
                  Every achievement represents dedication, curiosity,
                  hard work, and the commitment of our students and educators
                  toward continuous growth.
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

                <Trophy size={48}/>

              </div>


            </div>


          </div>


        </RevealOnScroll>
                {/* ====================================================== */}
        {/* Achievement Statistics Grid */}
        {/* ====================================================== */}


        <div
          className="
            mt-24
            grid
            gap-8
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-5
          "
        >

          {achievementStats.map((stat, index) => {

            const Icon =
              icons[stat.icon as keyof typeof icons];


            return (

              <RevealOnScroll
                key={stat.title}
                delay={index * 0.08}
              >


                <article
                  className="
                    group
                    relative
                    h-full
                    overflow-hidden
                    rounded-[2rem]
                    border
                    border-slate-200
                    bg-white
                    p-8
                    text-center
                    transition-all
                    duration-500
                    hover:-translate-y-3
                    hover:shadow-2xl
                  "
                >



                  {/* Decorative Corner */}

                  <div
                    className="
                      absolute
                      -right-10
                      -top-10
                      h-28
                      w-28
                      rounded-full
                      bg-yellow-500/5
                      transition
                      group-hover:scale-150
                    "
                  />



                  {/* Icon */}


                  <div
                    className={`
                      relative
                      mx-auto
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-3xl
                      border
                      transition
                      duration-500
                      group-hover:scale-110

                      ${
                        iconStyles[
                          stat.color as keyof typeof iconStyles
                        ]
                      }
                    `}
                  >

                    <Icon size={34}/>


                  </div>




                  {/* Number */}


                  <h3
                    className="
                      mt-8
                      text-5xl
                      font-black
                      tracking-tight
                      text-[#071A33]
                    "
                  >

                    <CountUp
                      end={stat.value}
                      duration={2}
                    />


                    <span
                      className="
                        text-yellow-600
                      "
                    >
                      {stat.suffix}
                    </span>


                  </h3>




                  {/* Title */}


                  <p
                    className="
                      mt-5
                      text-xl
                      font-black
                      text-slate-900
                    "
                  >
                    {stat.title}
                  </p>




                  {/* Description */}


                  <p
                    className="
                      mt-4
                      text-sm
                      leading-7
                      text-slate-600
                    "
                  >
                    {stat.description}
                  </p>




                </article>


              </RevealOnScroll>

            );

          })}


        </div>
                {/* ====================================================== */}
        {/* Recognition Philosophy Section */}
        {/* ====================================================== */}


        <RevealOnScroll delay={0.2}>

          <div
            className="
              mt-28
              grid
              gap-8
              lg:grid-cols-3
            "
          >



            {[
              {
                number: "01",
                title: "Academic Excellence",
                description:
                  "Encouraging students to achieve outstanding results through quality teaching, dedication, and continuous improvement.",
              },
              {
                number: "02",
                title: "Innovation & Technology",
                description:
                  "Developing future-ready learners through AI, robotics, coding, STEM activities, and practical projects.",
              },
              {
                number: "03",
                title: "Character Building",
                description:
                  "Recognizing teamwork, leadership, discipline, creativity, and confidence beyond academics.",
              },
            ].map((item) => (

              <div
                key={item.number}
                className="
                  rounded-[2rem]
                  border
                  border-slate-200
                  bg-white
                  p-8
                  transition
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >


                <span
                  className="
                    text-sm
                    font-black
                    tracking-[0.4em]
                    text-yellow-700
                  "
                >
                  {item.number}
                </span>



                <h3
                  className="
                    mt-5
                    text-2xl
                    font-black
                    text-[#071A33]
                  "
                >
                  {item.title}
                </h3>



                <p
                  className="
                    mt-4
                    text-sm
                    leading-7
                    text-slate-600
                  "
                >
                  {item.description}
                </p>



              </div>


            ))}


          </div>


        </RevealOnScroll>




        {/* ====================================================== */}
        {/* Final CTA */}
        {/* ====================================================== */}


        <RevealOnScroll delay={0.25}>

          <div
            className="
              mt-24
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


            <Award
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
              Inspiring Students To Reach Higher
            </h2>


            <p
              className="
                mx-auto
                mt-5
                max-w-3xl
                leading-8
                text-slate-300
              "
            >
              Our achievements are not just numbers. They represent
              confidence, curiosity, innovation, and the lifelong learning
              journey of every student.
            </p>


          </div>


        </RevealOnScroll>
              </Container>

    </section>

  );

}