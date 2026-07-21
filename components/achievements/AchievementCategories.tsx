"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import {
  Award,
  Calendar,
  GraduationCap,
  SearchX,
  Sparkles,
} from "lucide-react";

import RevealOnScroll from "@/components/animations/RevealOnScroll";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import {
  achievementCategories,
  achievements,
} from "@/lib/constants/achievements";

export default function AchievementCategories() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredAchievements = useMemo(() => {
    if (activeCategory === "All") {
      return achievements;
    }

    return achievements.filter(
      (achievement) =>
        achievement.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section
      id="achievements"
      className="
        relative
        overflow-hidden
        bg-[#faf9f6]
        py-32
      "
    >
      {/* Decorative Background */}

      <div
        className="
          absolute
          left-0
          top-16
          h-[32rem]
          w-[32rem]
          rounded-full
          bg-yellow-400/10
          blur-[150px]
        "
      />

      <div
        className="
          absolute
          right-0
          bottom-0
          h-[30rem]
          w-[30rem]
          rounded-full
          bg-blue-950/10
          blur-[150px]
        "
      />

      <Container>
        <RevealOnScroll>
          <SectionTitle
            eyebrow="Academic & Learning Excellence"
            title="Celebrating Student Growth and Achievement"
            description="Explore our students&apos; academic accomplishments, classroom excellence, leadership, creativity, and commitment to learning."
            center
          />
        </RevealOnScroll>

        {/* Premium Hero */}

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
              md:px-16
            "
          >
            <div
              className="
                absolute
                -right-32
                -top-32
                h-[28rem]
                w-[28rem]
                rounded-full
                bg-yellow-500/20
                blur-[140px]
              "
            />

            <div className="relative">
              <div className="flex items-center gap-3 text-yellow-400">
                <Sparkles size={20} />

                <span className="text-xs font-black uppercase tracking-[0.4em]">
                  Student Success Stories
                </span>
              </div>

              <h2 className="mt-6 text-4xl font-black md:text-5xl">
                Excellence That Inspires
                <br />
                Future Generations
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Every achievement showcased here represents dedication,
                perseverance, innovation, and the unwavering commitment of our
                students and teachers.
              </p>
            </div>
          </div>
        </RevealOnScroll>
        {/* ====================================================== */}
        {/* Premium Category Filter */}
        {/* ====================================================== */}

        <RevealOnScroll delay={0.15}>
          <div
            className="
              mt-16
              flex
              flex-wrap
              justify-center
              gap-4
            "
          >
            {achievementCategories.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-full
                    border
                    px-7
                    py-3
                    text-sm
                    font-bold
                    tracking-wide
                    transition-all
                    duration-300

                    ${
                      active
                        ? "border-yellow-500 bg-gradient-to-r from-[#071A33] to-blue-900 text-white shadow-xl"
                        : "border-slate-200 bg-white text-slate-700 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg"
                    }
                  `}
                >
                  {!active && (
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-r
                        from-yellow-400/0
                        via-yellow-400/10
                        to-blue-900/10
                        opacity-0
                        transition
                        duration-300
                        group-hover:opacity-100
                      "
                    />
                  )}

                  <span className="relative flex items-center gap-2">
                    {active && (
                      <Sparkles
                        size={15}
                        className="text-yellow-300"
                      />
                    )}

                    {category}
                  </span>
                </button>
              );
            })}
          </div>
        </RevealOnScroll>

        {/* ====================================================== */}
        {/* Achievement Summary */}
        {/* ====================================================== */}

        <RevealOnScroll delay={0.2}>
          <div
            className="
              mt-16
              grid
              gap-6
              md:grid-cols-3
            "
          >
            <div
              className="
                rounded-[2rem]
                border
                border-slate-200
                bg-white
                p-8
                text-center
                shadow-sm
              "
            >
              <h3 className="text-5xl font-black text-[#071A33]">
                {filteredAchievements.length}
              </h3>

              <p className="mt-3 font-bold text-slate-700">
                Achievements Displayed
              </p>
            </div>

            <div
              className="
                rounded-[2rem]
                border
                border-slate-200
                bg-white
                p-8
                text-center
                shadow-sm
              "
            >
              <h3 className="text-5xl font-black text-[#071A33]">
                {achievementCategories.length - 1}
              </h3>

              <p className="mt-3 font-bold text-slate-700">
                Achievement Categories
              </p>
            </div>

            <div
              className="
                rounded-[2rem]
                border
                border-slate-200
                bg-white
                p-8
                text-center
                shadow-sm
              "
            >
              <h3 className="text-5xl font-black text-[#071A33]">
                100%
              </h3>

              <p className="mt-3 font-bold text-slate-700">
                Excellence & Dedication
              </p>
            </div>
          </div>
        </RevealOnScroll>

        {/* ====================================================== */}
        {/* Achievement Cards */}
        {/* ====================================================== */}

        <div
          className="
            mt-20
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {filteredAchievements.map((achievement, index) => (
            <RevealOnScroll
              key={achievement.id}
              delay={index * 0.06}
            >
              <article
                className="
                  group
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-slate-200
                  bg-white
                  shadow-sm
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:shadow-2xl
                "
              >
                {/* Achievement Image */}

                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={achievement.image}
                    alt={achievement.title}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#071A33]/90
                      via-[#071A33]/20
                      to-transparent
                    "
                  />

                  <div className="absolute left-5 top-5">
                    <Badge variant="secondary">
                      {achievement.category}
                    </Badge>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <h3
                      className="
                        text-3xl
                        font-black
                        leading-tight
                        text-white
                      "
                    >
                      {achievement.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}

                <div className="p-7">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-xl
                          bg-blue-100
                          text-blue-700
                        "
                      >
                        <GraduationCap size={20} />
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                          Student
                        </p>

                        <p className="font-black text-[#071A33]">
                          {achievement.student}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div
                        className="
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-xl
                          bg-yellow-100
                          text-yellow-600
                        "
                      >
                        <Award size={20} />
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                          Class
                        </p>

                        <p className="font-semibold text-slate-700">
                          {achievement.class}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div
                        className="
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-xl
                          bg-green-100
                          text-green-600
                        "
                      >
                        <Calendar size={20} />
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                          Academic Year
                        </p>

                        <p className="font-semibold text-slate-700">
                          {achievement.year}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Achievement Story */}

                  <div
                    className="
                      mt-8
                      border-t
                      border-slate-200
                      pt-6
                    "
                  >
                    <h4
                      className="
                        text-sm
                        font-black
                        uppercase
                        tracking-[0.2em]
                        text-yellow-700
                      "
                    >
                      Achievement Story
                    </h4>

                    <p
                      className="
                        mt-4
                        text-sm
                        leading-7
                        text-slate-600
                      "
                    >
                      {achievement.description}
                    </p>
                  </div>

                  {/* Recognition Panel */}

                  <div
                    className="
                      mt-8
                      rounded-2xl
                      border
                      border-yellow-200
                      bg-gradient-to-r
                      from-yellow-50
                      to-white
                      p-5
                    "
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-yellow-500
                          text-white
                        "
                      >
                        <Award size={22} />
                      </div>

                      <div>
                        <h4
                          className="
                            font-black
                            text-[#071A33]
                          "
                        >
                          Official School Recognition
                        </h4>

                        <p
                          className="
                            mt-2
                            text-sm
                            leading-7
                            text-slate-600
                          "
                        >
                          This achievement has been officially recognized by
                          Alpine Digital School for exceptional academic
                          performance, dedication, innovation, and outstanding
                          contribution.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>

        {/* ====================================================== */}
        {/* Empty State */}
        {/* ====================================================== */}

        {filteredAchievements.length === 0 && (
          <RevealOnScroll>
            <div
              className="
                mt-20
                rounded-[2.5rem]
                border-2
                border-dashed
                border-slate-300
                bg-white
                px-8
                py-20
                text-center
              "
            >
              <SearchX
                className="
                  mx-auto
                  h-16
                  w-16
                  text-slate-400
                "
              />

              <h3
                className="
                  mt-8
                  text-4xl
                  font-black
                  text-[#071A33]
                "
              >
                No Achievements Found
              </h3>

              <p
                className="
                  mx-auto
                  mt-5
                  max-w-xl
                  text-lg
                  leading-8
                  text-slate-600
                "
              >
                There are currently no achievements available in this category.
                Please explore another category or view all achievements.
              </p>

              <button
                onClick={() => setActiveCategory("All")}
                className="
                  mt-10
                  rounded-full
                  bg-[#071A33]
                  px-8
                  py-4
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-blue-900
                  hover:shadow-xl
                "
              >
                View All Achievements
              </button>
            </div>
          </RevealOnScroll>
        )}
        {/* ====================================================== */}
        {/* Excellence Banner */}
        {/* ====================================================== */}

        <RevealOnScroll delay={0.15}>
          <div
            className="
              relative
              mt-24
              overflow-hidden
              rounded-[2.75rem]
              bg-[#071A33]
              px-8
              py-16
              text-center
              text-white
              md:px-16
            "
          >
            {/* Background Glow */}

            <div
              className="
                absolute
                -left-24
                -top-24
                h-72
                w-72
                rounded-full
                bg-yellow-500/20
                blur-[120px]
              "
            />

            <div
              className="
                absolute
                -right-24
                -bottom-24
                h-72
                w-72
                rounded-full
                bg-blue-400/20
                blur-[120px]
              "
            />

            <div className="relative mx-auto max-w-4xl">
              <Badge variant="secondary">
                Hall of Excellence
              </Badge>

              <h2 className="mt-6 text-4xl font-black md:text-5xl">
                Every Achievement Begins
                <br />
                With a Dream
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Behind every medal, certificate, competition, and academic
                milestone is a journey of perseverance, curiosity, innovation,
                and hard work. At Alpine Digital School, we celebrate not only
                success, but the determination that makes success possible.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-full border border-white/15 bg-white/10 px-6 py-3 font-semibold backdrop-blur-md">
                  🏆 Academic Excellence
                </div>

                <div className="rounded-full border border-white/15 bg-white/10 px-6 py-3 font-semibold backdrop-blur-md">
                  🎓 Board Position Holders
                </div>

                <div className="rounded-full border border-white/15 bg-white/10 px-6 py-3 font-semibold backdrop-blur-md">
                  📜 Certificates of Excellence
                </div>

                <div className="rounded-full border border-white/15 bg-white/10 px-6 py-3 font-semibold backdrop-blur-md">
                  🌟 Future Leaders
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}