"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";

import {
  ArrowLeft,
  ArrowRight,
  Award,
  Calendar,
  GraduationCap,
  Sparkles,
  Trophy,
} from "lucide-react";

import RevealOnScroll from "@/components/animations/RevealOnScroll";

import { achievements } from "@/lib/constants/achievements";

export default function StudentsAchievements() {
  /* ==========================================================
      Latest Achievements
  ========================================================== */

  const latestAchievements = useMemo(() => {
    return [...achievements].slice(0, 5);
  }, []);

  /* ==========================================================
      Slider State
  ========================================================== */

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  /* ==========================================================
      Auto Slide
  ========================================================== */

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === latestAchievements.length - 1 ? 0 : prev + 1
      );
    }, 5500);

    return () => clearInterval(timer);
  }, [paused, latestAchievements.length]);

  /* ==========================================================
      Navigation
  ========================================================== */

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === latestAchievements.length - 1 ? 0 : prev + 1
    );
  };

  const previousSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? latestAchievements.length - 1 : prev - 1
    );
  };

  const achievement = latestAchievements[current];

  /* ==========================================================
      Component
  ========================================================== */

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-28">
      {/* ==========================================================
          Premium Background
      ========================================================== */}

      <div className="absolute inset-0">
        {/* Gold Glow */}

        <div className="absolute -left-24 top-0 h-[32rem] w-[32rem] rounded-full bg-yellow-300/20 blur-[170px]" />

        {/* Orange Glow */}

        <div className="absolute -right-24 bottom-0 h-[34rem] w-[34rem] rounded-full bg-orange-300/20 blur-[180px]" />

        {/* Center Glow */}

        <div className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-200/20 blur-[170px]" />
      </div>

      {/* Premium Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.05]
          [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />

      {/* Floating Trophy */}

      <motion.div
        animate={{
          y: [-18, 18, -18],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute left-14 top-24 hidden lg:block"
      >
        <div
          className="
            rounded-3xl
            border
            border-yellow-200
            bg-white/80
            p-5
            shadow-xl
            backdrop-blur-xl
          "
        >
          <Trophy className="h-10 w-10 text-yellow-500" />
        </div>
      </motion.div>

      {/* Floating Award */}

      <motion.div
        animate={{
          y: [18, -18, 18],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute bottom-24 right-20 hidden xl:block"
      >
        <div
          className="
            rounded-full
            border
            border-orange-200
            bg-white/80
            p-5
            shadow-xl
            backdrop-blur-xl
          "
        >
          <Award className="h-10 w-10 text-orange-500" />
        </div>
      </motion.div>

      {/* ==========================================================
          Container
      ========================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* ==========================================================
            Heading
        ========================================================== */}

        <RevealOnScroll>
          <div className="mx-auto mb-20 max-w-4xl text-center">
            <div
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-yellow-300
                bg-yellow-50
                px-5
                py-2
                text-sm
                font-semibold
                text-yellow-700
                shadow-lg
              "
            >
              <Sparkles className="h-4 w-4" />

              Celebrating Excellence
            </div>

            <h2 className="text-4xl font-black leading-tight text-slate-900 md:text-5xl lg:text-6xl">
              Student

              <span className="block bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              We proudly celebrate our students&apos; remarkable achievements,
              academic excellence, board positions, leadership, and outstanding
              performances that inspire future generations to dream bigger and
              achieve more.
            </p>
          </div>
        </RevealOnScroll>

        {/* ==========================================================
            Achievement Slider
        ========================================================== */}

        <RevealOnScroll>
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
                      <div
              className="
                relative
                overflow-hidden
                rounded-[36px]
                border
                border-slate-200
                bg-white/90
                shadow-[0_30px_100px_rgba(15,23,42,0.08)]
                backdrop-blur-2xl
              "
            >
              {/* Top Gradient */}

              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500" />

              {/* Decorative Glow */}

              <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-yellow-300/20 blur-[140px]" />

              <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-orange-300/15 blur-[160px]" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={achievement.id}
                  initial={{
                    opacity: 0,
                    x: 80,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -80,
                  }}
                  transition={{
                    duration: 0.45,
                  }}
                  className="
                    relative
                    z-10
                    grid
                    items-center
                    gap-14
                    p-8
                    lg:grid-cols-[0.82fr_1.18fr]
                    lg:p-14
                  "
                >
                  {/* ==========================================================
                      Student Image
                  ========================================================== */}

                  <div className="relative mx-auto w-full max-w-sm">
                    {/* Glow */}

                    <div className="absolute inset-0 rounded-[34px] bg-gradient-to-br from-yellow-300/20 via-transparent to-orange-300/20 blur-3xl" />

                    {/* Image Card */}

                    <div
                      className="
                        relative
                        overflow-hidden
                        rounded-[34px]
                        border
                        border-slate-200
                        bg-gradient-to-br
                        from-white
                        to-slate-50
                        shadow-xl
                      "
                    >
                      <Image
                        src={achievement.image}
                        alt={achievement.student}
                        width={500}
                        height={620}
                        priority
                        className="
                          h-[440px]
                          w-full
                          object-cover
                          transition-transform
                          duration-700
                          hover:scale-105
                        "
                      />

                      {/* Image Overlay */}

                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent p-8">
                        <h3 className="text-2xl font-black text-white">
                          {achievement.student}
                        </h3>

                        <p className="mt-2 text-slate-200">
                          {achievement.class}
                        </p>
                      </div>
                    </div>

                    {/* Floating Trophy */}

                    <motion.div
                      animate={{
                        y: [-8, 8, -8],
                        rotate: [0, 8, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                      }}
                      className="
                        absolute
                        -right-6
                        top-8
                        flex
                        h-20
                        w-20
                        items-center
                        justify-center
                        rounded-full
                        bg-gradient-to-r
                        from-yellow-500
                        to-orange-500
                        shadow-2xl
                      "
                    >
                      <Trophy className="h-9 w-9 text-white" />
                    </motion.div>
                  </div>

                  {/* ==========================================================
                      Content
                  ========================================================== */}

                  <div className="flex flex-col justify-between">
                    {/* Badges */}

                    <div className="mb-8 flex flex-wrap gap-3">
                      <span
                        className="
                          rounded-full
                          border
                          border-sky-200
                          bg-sky-50
                          px-5
                          py-2
                          text-sm
                          font-semibold
                          text-sky-700
                        "
                      >
                        {achievement.category}
                      </span>

                      <span
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          bg-gradient-to-r
                          from-yellow-500
                          to-orange-500
                          px-4
                          py-2
                          text-sm
                          font-bold
                          text-white
                        "
                      >
                        <Calendar className="h-4 w-4" />

                        {achievement.year}
                      </span>
                    </div>

                    {/* Title */}

                    <h3 className="text-4xl font-black leading-tight text-slate-900">
                      {achievement.title}
                    </h3>

                    {/* Student */}

                    <div className="mt-7 flex items-center gap-5">
                      <div
                        className="
                          flex
                          h-16
                          w-16
                          items-center
                          justify-center
                          rounded-2xl
                          bg-gradient-to-br
                          from-yellow-500
                          to-orange-500
                          shadow-lg
                        "
                      >
                        <GraduationCap className="h-8 w-8 text-white" />
                      </div>

                      <div>
                        <p className="text-2xl font-bold text-slate-900">
                          {achievement.student}
                        </p>

                        <p className="text-slate-600">
                          {achievement.class}
                        </p>
                      </div>
                    </div>

                    {/* Description */}

                    <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
                      {achievement.description}
                    </p>

                    {/* Navigation */}

                    <div className="mt-12 flex items-center justify-between">
                      <motion.button
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={previousSlide}
                        className="
                          flex
                          h-14
                          w-14
                          items-center
                          justify-center
                          rounded-2xl
                          border
                          border-slate-200
                          bg-white
                          text-slate-800
                          shadow-lg
                          transition-all
                          hover:bg-slate-50
                        "
                      >
                        <ArrowLeft className="h-5 w-5" />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={nextSlide}
                        className="
                          flex
                          h-14
                          w-14
                          items-center
                          justify-center
                          rounded-2xl
                          bg-gradient-to-r
                          from-yellow-500
                          to-orange-500
                          text-white
                          shadow-xl
                        "
                      >
                        <ArrowRight className="h-5 w-5" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress & Bottom Controls */}

            <div className="mt-10">
                            {/* ==========================================================
                  Progress Bar
              ========================================================== */}

              <div
                className="
                  mb-8
                  h-2
                  overflow-hidden
                  rounded-full
                  bg-slate-200
                "
              >
                <motion.div
                  key={current}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: paused ? 0 : 5.5,
                    ease: "linear",
                  }}
                  className="
                    h-full
                    rounded-full
                    bg-gradient-to-r
                    from-yellow-500
                    via-amber-500
                    to-orange-500
                  "
                />
              </div>

              {/* ==========================================================
                  Bottom Controls
              ========================================================== */}

              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                {/* Achievement Counter */}

                <div className="flex items-center gap-4">
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-yellow-200
                      bg-yellow-50
                      shadow-lg
                    "
                  >
                    <Trophy className="h-6 w-6 text-yellow-600" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                      Achievement
                    </p>

                    <p className="mt-1 text-lg font-bold text-slate-900">
                      {current + 1}

                      <span className="mx-2 text-slate-400">/</span>

                      {latestAchievements.length}
                    </p>
                  </div>
                </div>

                {/* Pagination */}

                <div className="flex items-center justify-center gap-3">
                  {latestAchievements.map((_, index) => (
                    <motion.button
                      key={index}
                      whileHover={{
                        scale: 1.2,
                      }}
                      whileTap={{
                        scale: 0.9,
                      }}
                      onClick={() => setCurrent(index)}
                      className={`
                        transition-all
                        duration-300
                        ${
                          current === index
                            ? "h-3 w-10 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 shadow-md"
                            : "h-3 w-3 rounded-full bg-slate-300 hover:bg-yellow-400"
                        }
                      `}
                    />
                  ))}
                </div>

                {/* CTA */}

                <Link href="/achievements">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    className="
                      inline-flex
                      items-center
                      gap-3
                      rounded-2xl
                      bg-gradient-to-r
                      from-yellow-500
                      via-amber-500
                      to-orange-500
                      px-8
                      py-4
                      font-bold
                      text-white
                      shadow-xl
                      transition-all
                    "
                  >
                    View All Achievements

                    <ArrowRight className="h-5 w-5" />
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* ==========================================================
            Bottom Premium Banner
        ========================================================== */}

        <RevealOnScroll>
          <div className="mt-24 text-center">
                        <motion.div
              whileHover={{
                y: -5,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                relative
                overflow-hidden
                rounded-[36px]
                border
                border-slate-200
                bg-white
                px-8
                py-12
                shadow-[0_30px_100px_rgba(15,23,42,0.08)]
                lg:px-16
              "
            >
              {/* Decorative Background */}

              <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 via-white to-orange-50" />

              <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-yellow-300/20 blur-[120px]" />

              <div className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-orange-300/20 blur-[130px]" />

              {/* Content */}

              <div className="relative z-10">
                {/* Icon */}

                <div
                  className="
                    mx-auto
                    mb-7
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    bg-gradient-to-r
                    from-yellow-500
                    to-orange-500
                    shadow-xl
                  "
                >
                  <Trophy className="h-10 w-10 text-white" />
                </div>

                {/* Heading */}

                <h3 className="text-3xl font-black text-slate-900 lg:text-4xl">
                  Celebrating Excellence, Inspiring Tomorrow
                </h3>

                {/* Description */}

                <p
                  className="
                    mx-auto
                    mt-6
                    max-w-3xl
                    text-lg
                    leading-8
                    text-slate-600
                  "
                >
                  Every accomplishment reflects determination, discipline, and
                  the pursuit of excellence. We proudly recognize students who
                  continue to raise academic standards and inspire the entire
                  Alpine Digital School community through their remarkable
                  achievements.
                </p>

                {/* CTA */}

                <div className="mt-10 flex justify-center">
                  <Link href="/achievements">
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                      }}
                      whileTap={{
                        scale: 0.96,
                      }}
                      className="
                        inline-flex
                        items-center
                        gap-3
                        rounded-2xl
                        bg-gradient-to-r
                        from-yellow-500
                        via-amber-500
                        to-orange-500
                        px-8
                        py-4
                        font-bold
                        text-white
                        shadow-xl
                      "
                    >
                      Explore All Achievements

                      <ArrowRight className="h-5 w-5" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </RevealOnScroll>
      </div>

      {/* ==========================================================
          Bottom Decorative Glow
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-56
          w-full
          bg-gradient-to-t
          from-yellow-200/40
          via-orange-100/30
          to-transparent
        "
      />

      {/* Floating Decorative Orbs */}

      <motion.div
        animate={{
          x: [-20, 20, -20],
          y: [-12, 12, -12],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-1/3
          right-10
          hidden
          h-28
          w-28
          rounded-full
          bg-yellow-300/30
          blur-3xl
          lg:block
        "
      />

      <motion.div
        animate={{
          x: [20, -20, 20],
          y: [12, -12, 12],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-20
          left-12
          hidden
          h-36
          w-36
          rounded-full
          bg-orange-300/30
          blur-3xl
          xl:block
        "
      />
    </section>
  );
}