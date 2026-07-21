"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Play,
  ArrowRight,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  BookOpen,
  Award,
} from "lucide-react";

import RevealOnScroll from "@/components/animations/RevealOnScroll";

export default function SchoolVideo() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-28">
      {/* ================= Background ================= */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-sky-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-indigo-600/10 blur-[140px]" />
        <div className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[130px]" />
      </div>

      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />

      {/* Floating Icons */}

      <motion.div
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 12, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute left-20 top-24 hidden lg:block"
      >
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
          <GraduationCap className="h-10 w-10 text-sky-400" />
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [20, -20, 20],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
        }}
        className="absolute bottom-24 right-24 hidden xl:block"
      >
        <div className="rounded-full border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
          <Award className="h-10 w-10 text-cyan-300" />
        </div>
      </motion.div>

      {/* ================= Container ================= */}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* ================= Hero Heading ================= */}

        <RevealOnScroll>
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-sky-400/30
                bg-sky-500/10
                px-5
                py-2
                text-sm
                font-semibold
                text-sky-300
                backdrop-blur-xl
              "
            >
              <Sparkles className="h-4 w-4" />
              Experience Alpine Digital School
            </motion.div>

            <h2
              className="
                text-4xl
                font-black
                leading-tight
                text-white
                md:text-5xl
                lg:text-6xl
              "
            >
              Explore Our Campus

              <span className="block bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Through Video
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-8
                max-w-3xl
                text-lg
                leading-8
                text-slate-300
              "
            >
              Discover our inspiring classrooms, advanced learning
              environment, dedicated teachers, modern facilities, and
              vibrant student life. Take a virtual journey through Alpine
              Digital School and witness the excellence that shapes future
              leaders.
            </p>
          </div>
        </RevealOnScroll>

        {/* ================= Video + Highlights ================= */}

        <div className="mt-20 grid items-center gap-14 lg:grid-cols-[1.45fr_0.85fr]">
          {/* ================= Video Card ================= */}

          <RevealOnScroll>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35 }}
              className="
                group
                relative
                overflow-hidden
                rounded-[34px]
                border
                border-white/10
                bg-white/5
                shadow-2xl
                backdrop-blur-2xl
              "
            >
              {/* Top Accent */}

              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500" />

              {/* Video */}

              <div className="relative aspect-video overflow-hidden">
                <video
                  className="h-full w-full object-cover"
                  controls
                  preload="metadata"
                  poster="/images/gallery/Campus_Tour.png"
                >
                  <source
                    src="/videos/Campus_Tour.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                {/* Overlay */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-slate-950/70
                    via-transparent
                    to-transparent
                  "
                />

                {/* Floating Badge */}

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="
                    absolute
                    left-8
                    top-8
                    flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-white/20
                    bg-black/45
                    px-5
                    py-3
                    backdrop-blur-xl
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      bg-gradient-to-r
                      from-sky-500
                      to-cyan-400
                    "
                  >
                    <Play className="ml-1 h-5 w-5 fill-white text-white" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-300">
                      Watch
                    </p>

                    <p className="font-semibold text-white">
                      Campus Tour
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Content */}

              <div className="border-t border-white/10 p-8">
                <h3 className="text-2xl font-bold text-white">
                  Alpine Digital School
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                  Excellence in academics, innovation, discipline,
                  leadership, and holistic student development.
                </p>
              </div>
            </motion.div>
          </RevealOnScroll>

          {/* ================= Feature Cards ================= */}

          <RevealOnScroll>
            <div className="space-y-5">
              {/* Card 1 */}

              <motion.div
                whileHover={{
                  x: 8,
                  y: -4,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  group
                  flex
                  gap-5
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-6
                  backdrop-blur-xl
                  transition-all
                "
              >
                <div
                  className="
                    flex
                    h-16
                    w-16
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-sky-500
                    to-cyan-400
                    shadow-lg
                  "
                >
                  <BookOpen className="h-8 w-8 text-white" />
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white">
                    Modern Learning
                  </h4>

                  <p className="mt-2 leading-7 text-slate-300">
                    Interactive classrooms and technology-driven
                    learning prepare students for the future.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 */}

              <motion.div
                whileHover={{
                  x: 8,
                  y: -4,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  group
                  flex
                  gap-5
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-6
                  backdrop-blur-xl
                  transition-all
                "
              >
                <div
                  className="
                    flex
                    h-16
                    w-16
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-emerald-500
                    to-green-400
                  "
                >
                  <ShieldCheck className="h-8 w-8 text-white" />
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white">
                    Safe & Caring Campus
                  </h4>

                  <p className="mt-2 leading-7 text-slate-300">
                    A safe, supportive, and disciplined environment
                    where every student is inspired to excel.
                  </p>
                </div>
              </motion.div>
              {/* Card 3 */}

              <motion.div
                whileHover={{
                  x: 8,
                  y: -4,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  group
                  flex
                  gap-5
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-6
                  backdrop-blur-xl
                  transition-all
                "
              >
                <div
                  className="
                    flex
                    h-16
                    w-16
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-amber-500
                    to-orange-400
                  "
                >
                  <Award className="h-8 w-8 text-white" />
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white">
                    Academic Excellence
                  </h4>

                  <p className="mt-2 leading-7 text-slate-300">
                    Outstanding results and achievements,
                    empowering every student to succeed
                    beyond the classroom.
                  </p>
                </div>
              </motion.div>
            </div>
          </RevealOnScroll>
        </div>

        {/* ================= Center CTA ================= */}

        <RevealOnScroll>
  <div className="mt-20 flex justify-center">
    <Link href="/gallery">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        className="
          inline-flex
          items-center
          gap-3
          rounded-2xl
          bg-gradient-to-r
          from-sky-500
          to-cyan-400
          px-8
          py-4
          font-bold
          text-white
          shadow-2xl
          transition-all
        "
      >
        Discover Our School
        <ArrowRight className="h-5 w-5" />
      </motion.div>
    </Link>
  </div>
</RevealOnScroll>
  
        {/* ================= Divider ================= */}

        <div
          className="
            mx-auto
            my-16
            h-px
            w-40
            bg-gradient-to-r
            from-transparent
            via-sky-400/50
            to-transparent
          "
        />

        {/* ================= Statistics ================= */}

        <RevealOnScroll>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Stat 1 */}

            <motion.div
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                text-center
                backdrop-blur-xl
              "
            >
              <h4
                className="
                  bg-gradient-to-r
                  from-sky-400
                  to-cyan-300
                  bg-clip-text
                  text-4xl
                  font-black
                  text-transparent
                "
              >
                6+
              </h4>

              <p className="mt-3 text-slate-300">
                Years of Excellence
              </p>
            </motion.div>

            {/* Stat 2 */}

            <motion.div
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                text-center
                backdrop-blur-xl
              "
            >
              <h4
                className="
                  bg-gradient-to-r
                  from-emerald-400
                  to-green-300
                  bg-clip-text
                  text-4xl
                  font-black
                  text-transparent
                "
              >
                400+
              </h4>

              <p className="mt-3 text-slate-300">
                Happy Students
              </p>
            </motion.div>
            {/* Stat 3 */}

            <motion.div
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                text-center
                backdrop-blur-xl
              "
            >
              <h4
                className="
                  bg-gradient-to-r
                  from-amber-400
                  to-orange-300
                  bg-clip-text
                  text-4xl
                  font-black
                  text-transparent
                "
              >
                100%
              </h4>

              <p className="mt-3 text-slate-300">
                Commitment
              </p>
            </motion.div>
          </div>
        </RevealOnScroll>
      </div>

      {/* ================= Bottom Decorative Glow ================= */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-56
          w-full
          bg-gradient-to-t
          from-sky-500/10
          via-cyan-500/5
          to-transparent
        "
      />

      {/* ================= Floating Blur Orb ================= */}

      <motion.div
        animate={{
          x: [-20, 20, -20],
          y: [-15, 15, -15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-1/4
          right-12
          hidden
          h-28
          w-28
          rounded-full
          bg-sky-400/10
          blur-3xl
          lg:block
        "
      />

      <motion.div
        animate={{
          x: [20, -20, 20],
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
          left-16
          hidden
          h-36
          w-36
          rounded-full
          bg-cyan-400/10
          blur-3xl
          xl:block
        "
      />
    </section>
  );
}