"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";

import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Bell,
  Calendar,
  Megaphone,
  Sparkles,
} from "lucide-react";

import RevealOnScroll from "@/components/animations/RevealOnScroll";

import { notices } from "@/lib/constants/notices";

export default function LatestNotices() {
  /* ==========================================================
      Latest Notices
  ========================================================== */

  const latestNotices = useMemo(() => {
    return [...notices].slice(0, 5);
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
        prev === latestNotices.length - 1 ? 0 : prev + 1
      );
    }, 5500);

    return () => clearInterval(timer);
  }, [paused, latestNotices.length]);

  /* ==========================================================
      Navigation
  ========================================================== */

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === latestNotices.length - 1 ? 0 : prev + 1
    );
  };

  const previousSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? latestNotices.length - 1 : prev - 1
    );
  };

  const notice = latestNotices[current];

  /* ==========================================================
      Badge Colors
  ========================================================== */

  const categoryStyles: Record<string, string> = {
    Event:
      "border-blue-200 bg-blue-50 text-blue-700",

    Holiday:
      "border-emerald-200 bg-emerald-50 text-emerald-700",

    Examination:
      "border-violet-200 bg-violet-50 text-violet-700",

    Fee:
      "border-amber-200 bg-amber-50 text-amber-700",

    Urgent:
      "border-red-200 bg-red-50 text-red-700",
  };

  const priorityStyles: Record<string, string> = {
    High:
      "bg-red-600 text-white",

    Medium:
      "bg-amber-500 text-white",

    Low:
      "bg-emerald-600 text-white",
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-stone-50 to-white py-28">
      {/* ==========================================================
          Premium Background
      ========================================================== */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-[34rem] w-[34rem] rounded-full bg-amber-100 blur-[170px]" />

        <div className="absolute right-0 bottom-0 h-[30rem] w-[30rem] rounded-full bg-orange-100 blur-[160px]" />

        <div className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-100/70 blur-[170px]" />

      </div>

      {/* Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />

      {/* Floating Decorations */}

      <motion.div
        animate={{
          y: [-18, 18, -18],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute left-20 top-24 hidden xl:block"
      >
        <div className="rounded-3xl border border-white bg-white/80 p-5 shadow-xl backdrop-blur-xl">
          <Bell className="h-9 w-9 text-amber-600" />
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [18, -18, 18],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute bottom-24 right-20 hidden xl:block"
      >
        <div className="rounded-full border border-white bg-white/80 p-5 shadow-xl backdrop-blur-xl">
          <Megaphone className="h-9 w-9 text-orange-600" />
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
                border-amber-200
                bg-white
                px-5
                py-2
                text-sm
                font-semibold
                text-amber-700
                shadow-lg
              "
            >
              <Sparkles className="h-4 w-4" />

              Latest Updates
            </div>

            <h2 className="text-4xl font-black leading-tight text-slate-900 md:text-5xl lg:text-6xl">
              Latest School

              <span className="block bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Notices
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              Stay informed with the latest school announcements,
              examination schedules, holidays, fee reminders,
              admissions, and every important update from Alpine
              Digital School.
            </p>

          </div>

        </RevealOnScroll>
                {/* ==========================================================
            Notice Slider
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
                rounded-[38px]
                border
                border-stone-200
                bg-white/90
                shadow-[0_30px_80px_rgba(15,23,42,0.08)]
                backdrop-blur-2xl
              "
            >
              {/* Premium Top Accent */}

              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-400" />

              {/* Decorative Glow */}

              <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-amber-200/40 blur-[140px]" />

              <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-orange-200/40 blur-[140px]" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={notice.id}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -25,
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
                    p-10
                    lg:grid-cols-[1.15fr_0.85fr]
                    lg:p-14
                  "
                >
                  {/* ==========================================================
                      Left Content
                  ========================================================== */}

                  <div>
                    {/* Badges */}

                    <div className="mb-8 flex flex-wrap gap-3">
                      <span
                        className={`
                          rounded-full
                          border
                          px-5
                          py-2
                          text-sm
                          font-semibold
                          ${categoryStyles[notice.category]}
                        `}
                      >
                        {notice.category}
                      </span>

                      <span
                        className={`
                          rounded-full
                          px-4
                          py-2
                          text-sm
                          font-bold
                          shadow-sm
                          ${priorityStyles[notice.priority]}
                        `}
                      >
                        {notice.priority} Priority
                      </span>
                    </div>

                    {/* Title */}

                    <h3 className="text-3xl font-black leading-tight text-slate-900 lg:text-5xl">
                      {notice.title}
                    </h3>

                    {/* Description */}

                    <p className="mt-8 max-w-2xl leading-8 text-slate-600">
                      {notice.description}
                    </p>

                    {/* Date */}

                    <div
                      className="
                        mt-10
                        inline-flex
                        items-center
                        gap-4
                        rounded-2xl
                        border
                        border-stone-200
                        bg-stone-50
                        px-6
                        py-4
                      "
                    >
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-xl
                          bg-gradient-to-r
                          from-amber-400
                          to-orange-500
                        "
                      >
                        <Calendar className="h-5 w-5 text-white" />
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                          Notice Date
                        </p>

                        <p className="mt-1 font-bold text-slate-900">
                          {notice.date}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ==========================================================
                      Premium Illustration
                  ========================================================== */}

                  <div className="relative flex items-center justify-center">
                    <div
                      className="
                        relative
                        flex
                        h-[360px]
                        w-full
                        items-center
                        justify-center
                        overflow-hidden
                        rounded-[32px]
                        border
                        border-stone-200
                        bg-gradient-to-br
                        from-white
                        via-amber-50
                        to-orange-50
                      "
                    >
                      {/* Rings */}

                      <div className="absolute h-72 w-72 rounded-full border border-stone-200" />

                      <div className="absolute h-56 w-56 rounded-full border border-amber-200" />

                      <div className="absolute h-40 w-40 rounded-full border border-orange-300" />

                      {/* Center Icon */}

                      <motion.div
                        animate={{
                          y: [-10, 10, -10],
                          rotate: [0, 8, 0],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                        }}
                        className="
                          relative
                          z-20
                          flex
                          h-28
                          w-28
                          items-center
                          justify-center
                          rounded-full
                          bg-gradient-to-r
                          from-amber-400
                          to-orange-500
                          shadow-2xl
                        "
                      >
                        {notice.priority === "High" ? (
                          <AlertTriangle className="h-14 w-14 text-white" />
                        ) : (
                          <Bell className="h-14 w-14 text-white" />
                        )}
                      </motion.div>

                      {/* Soft Glow */}

                      <div className="absolute h-40 w-40 rounded-full bg-amber-300/30 blur-3xl" />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
                        {/* ==========================================================
                Progress & Controls
            ========================================================== */}

            <div className="mt-10">

              {/* Progress Bar */}

              <div
                className="
                  mb-8
                  h-2
                  overflow-hidden
                  rounded-full
                  bg-stone-200
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
                    from-amber-400
                    via-orange-500
                    to-yellow-400
                  "
                />
              </div>

              {/* Bottom Controls */}

              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                {/* Counter */}

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
                      border-stone-200
                      bg-white
                      shadow-lg
                    "
                  >
                    <Bell className="h-6 w-6 text-amber-600" />
                  </div>

                  <div>

                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                      Showing Notice
                    </p>

                    <p className="mt-1 text-xl font-black text-slate-900">
                      {current + 1}

                      <span className="mx-2 text-slate-400">/</span>

                      {latestNotices.length}
                    </p>

                  </div>

                </div>

                {/* Pagination */}

                <div className="flex items-center justify-center gap-3">

                  {latestNotices.map((_, index) => (

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
                            ? "h-3 w-10 rounded-full bg-gradient-to-r from-amber-400 to-orange-500"
                            : "h-3 w-3 rounded-full bg-stone-300 hover:bg-stone-500"
                        }
                      `}
                    />

                  ))}

                </div>

                {/* CTA */}

                <Link href="/notices">

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
                      from-amber-400
                      via-orange-500
                      to-yellow-500
                      px-8
                      py-4
                      font-bold
                      text-white
                      shadow-xl
                    "
                  >
                    View All Notices

                    <ArrowRight className="h-5 w-5" />

                  </motion.button>

                </Link>

              </div>

              {/* Navigation Buttons */}

              <div className="mt-10 flex items-center justify-center gap-5">

                <motion.button
                  whileHover={{
                    scale: 1.08,
                  }}
                  whileTap={{
                    scale: 0.94,
                  }}
                  onClick={previousSlide}
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-stone-200
                    bg-white
                    text-slate-700
                    shadow-lg
                  "
                >
                  <ArrowLeft className="h-5 w-5" />
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.08,
                  }}
                  whileTap={{
                    scale: 0.94,
                  }}
                  onClick={nextSlide}
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-r
                    from-amber-400
                    to-orange-500
                    text-white
                    shadow-xl
                  "
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.button>

              </div>

            </div>

          </div>

        </RevealOnScroll>
                {/* ==========================================================
            Premium CTA
        ========================================================== */}

        <RevealOnScroll>
          <div className="mt-24">

            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="
                relative
                overflow-hidden
                rounded-[36px]
                border
                border-stone-200
                bg-white
                px-8
                py-14
                shadow-[0_30px_80px_rgba(15,23,42,0.08)]
                lg:px-16
              "
            >
              {/* Decorative Glow */}

              <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-amber-100 blur-[140px]" />

              <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-orange-100 blur-[150px]" />

              {/* Grid */}

              <div
                className="
                  absolute
                  inset-0
                  opacity-[0.03]
                  [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]
                  [background-size:70px_70px]
                "
              />

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
                    from-amber-400
                    via-orange-500
                    to-yellow-500
                    shadow-xl
                  "
                >
                  <Megaphone className="h-10 w-10 text-white" />
                </div>

                {/* Heading */}

                <h3 className="text-center text-3xl font-black text-slate-900 lg:text-4xl">
                  Never Miss an Important Announcement
                </h3>

                {/* Description */}

                <p
                  className="
                    mx-auto
                    mt-6
                    max-w-3xl
                    text-center
                    text-lg
                    leading-8
                    text-slate-600
                  "
                >
                  From admissions and examination schedules to holidays,
                  fee reminders and school events, our notice board keeps
                  students and parents informed with every important update.
                </p>

                {/* Button */}

                <div className="mt-10 flex justify-center">

                  <Link href="/notices">

                    <motion.button
                      whileHover={{
                        scale: 1.05,
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
                        from-amber-400
                        via-orange-500
                        to-yellow-500
                        px-8
                        py-4
                        font-bold
                        text-white
                        shadow-xl
                      "
                    >
                      Explore Complete Notice Board

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
          Bottom Decoration
      ========================================================== */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-44
          bg-gradient-to-t
          from-amber-100/60
          via-orange-50/40
          to-transparent
        "
      />

      {/* Floating Glow */}

      <motion.div
        animate={{
          x: [-18, 18, -18],
          y: [-15, 15, -15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-1/3
          right-12
          hidden
          h-32
          w-32
          rounded-full
          bg-amber-200/40
          blur-3xl
          lg:block
        "
      />

      <motion.div
        animate={{
          x: [18, -18, 18],
          y: [15, -15, 15],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-24
          left-10
          hidden
          h-40
          w-40
          rounded-full
          bg-orange-200/40
          blur-3xl
          xl:block
        "
      />

      {/* Floating Sparkles */}

      <motion.div
        animate={{
          y: [-12, 12, -12],
          rotate: [0, 12, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute top-32 right-1/4 hidden xl:block"
      >
        <Sparkles className="h-8 w-8 text-amber-400/70" />
      </motion.div>

      <motion.div
        animate={{
          y: [12, -12, 12],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute bottom-32 left-1/4 hidden xl:block"
      >
        <Sparkles className="h-6 w-6 text-orange-400/70" />
      </motion.div>
    </section>
  );
}