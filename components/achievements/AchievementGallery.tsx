"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  Images,
  Sparkles,
} from "lucide-react";

import RevealOnScroll from "@/components/animations/RevealOnScroll";
import Lightbox from "@/components/shared/Lightbox";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import {
  achievementCategories,
  achievementGallery,
} from "@/lib/constants/achievements";

export default function AchievementGallery() {
  const [category, setCategory] = useState("All");
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const images = useMemo(() => {
    if (category === "All") return achievementGallery;

    return achievementGallery.filter(
      (item) => item.category === category
    );
  }, [category]);

  return (
    <>
      <section
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
            top-24
            h-[30rem]
            w-[30rem]
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
            h-[28rem]
            w-[28rem]
            rounded-full
            bg-blue-950/10
            blur-[150px]
          "
        />

        <Container>
          <RevealOnScroll>
            <SectionTitle
              eyebrow="Achievement Gallery"
              title="Celebrating Success Through Inspiring Moments"
              description="Explore academic excellence, competitions, robotics, STEM, AI projects, science exhibitions, and unforgettable milestones from Alpine Digital School."
              center
            />
          </RevealOnScroll>

          {/* Premium Intro Banner */}

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
                  -right-40
                  -top-40
                  h-[28rem]
                  w-[28rem]
                  rounded-full
                  bg-yellow-500/20
                  blur-[140px]
                "
              />

              <div className="relative mx-auto max-w-4xl text-center">
  <div className="flex items-center justify-center gap-3 text-yellow-400">
    <Sparkles size={20} />

    <span className="text-xs font-black uppercase tracking-[0.4em]">
      Memories of Excellence
    </span>
  </div>

  <h2 className="mt-6 text-4xl font-black md:text-5xl">
    Every Picture Reflects
    <br />
    A Story of Achievement
  </h2>

  <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
    Behind every award, competition, and celebration is a journey
    of dedication, innovation, teamwork, and academic excellence.
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
              {achievementCategories.map((item) => {
                const active = category === item;

                return (
                  <button
                    key={item}
                    onClick={() => setCategory(item)}
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

                      {item}
                    </span>
                  </button>
                );
              })}
            </div>
          </RevealOnScroll>

          {/* ====================================================== */}
          {/* Gallery Statistics */}
          {/* ====================================================== */}

          <RevealOnScroll delay={0.2}>
            <div
              className="
                mt-14
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
                  {images.length}
                </h3>

                <p className="mt-3 font-bold text-slate-700">
                  Gallery Photos
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
                  Student Pride
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* ====================================================== */}
          {/* Premium Masonry Gallery */}
          {/* ====================================================== */}

          <div
            className="
              mt-20
              columns-1
              gap-7
              sm:columns-2
              lg:columns-3
              xl:columns-4
            "
          >
            {images.map((item, index) => (
              <RevealOnScroll
                key={`${item.image}-${index}`}
                delay={index * 0.03}
              >
                <article
                  className="
                    group
                    relative
                    mb-7
                    break-inside-avoid
                    overflow-hidden
                    rounded-[2rem]
                    border
                    border-slate-200/80
                    bg-white
                    shadow-sm
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:shadow-2xl
                  "
                >
                  <button
                    onClick={() => {
                      setCurrent(index);
                      setOpen(true);
                    }}
                    className="relative block w-full overflow-hidden"
                    aria-label={`Open ${item.category} image`}
                  >
                    <Image
                      src={item.image}
                      alt={item.category}
                      width={700}
                      height={700}
                      className="
                        h-auto
                        w-full
                        transition-transform
                        duration-700
                        group-hover:scale-110
                      "
                    />

                    {/* Dark Overlay */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#071A33]/85
                        via-[#071A33]/20
                        to-transparent
                        opacity-0
                        transition
                        duration-500
                        group-hover:opacity-100
                      "
                    />

                    {/* Shine Effect */}

                    <div
                      className="
                        absolute
                        -left-1/2
                        top-0
                        h-full
                        w-1/3
                        rotate-12
                        bg-white/20
                        blur-xl
                        transition-all
                        duration-700
                        group-hover:left-[130%]
                      "
                    />

                    {/* Zoom Icon */}

                    <div
                      className="
                        absolute
                        right-5
                        top-5
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        bg-white/95
                        text-[#071A33]
                        opacity-0
                        shadow-xl
                        transition-all
                        duration-300
                        group-hover:scale-100
                        group-hover:opacity-100
                      "
                    >
                      <Images size={20} />
                    </div>

                    {/* Bottom Content */}

                    <div
                      className="
                        absolute
                        inset-x-0
                        bottom-0
                        translate-y-6
                        p-6
                        opacity-0
                        transition-all
                        duration-500
                        group-hover:translate-y-0
                        group-hover:opacity-100
                      "
                    >
                      <Badge variant="secondary">
                        {item.category}
                      </Badge>

                      <h3
                        className="
                          mt-4
                          text-xl
                          font-black
                          text-white
                        "
                      >
                        {item.category}
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-slate-200
                        "
                      >
                        Capturing moments of excellence, innovation,
                        leadership, and student achievement.
                      </p>
                    </div>
                  </button>
                </article>
              </RevealOnScroll>
            ))}
          </div>
          {/* ====================================================== */}
          {/* Legacy Banner */}
          {/* ====================================================== */}

          <RevealOnScroll delay={0.2}>
            <div
              className="
                relative
                mt-28
                overflow-hidden
                rounded-[2.75rem]
                bg-gradient-to-br
                from-[#071A33]
                via-[#0B2345]
                to-[#123A6B]
                px-8
                py-16
                text-center
                text-white
                md:px-16
              "
            >
              {/* Decorative Glow */}

              <div
                className="
                  absolute
                  -right-24
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
                  -left-24
                  -bottom-24
                  h-72
                  w-72
                  rounded-full
                  bg-blue-400/10
                  blur-[120px]
                "
              />

              <div className="relative">
                <Badge variant="secondary">
                  Our Journey
                </Badge>

                <h2
                  className="
                    mt-6
                    text-4xl
                    font-black
                    md:text-5xl
                  "
                >
                  Preserving Every Milestone
                </h2>

                <p
                  className="
                    mx-auto
                    mt-6
                    max-w-3xl
                    text-lg
                    leading-8
                    text-slate-300
                    "
                  >
                    Every photograph tells a story of curiosity, perseverance,
                    teamwork, and success. Together they reflect the vibrant
                    learning culture and lasting memories created at Alpine
                    Digital School.
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
                    Excellence
                  </Badge>

                  <Badge variant="secondary">
                    Innovation
                  </Badge>

                  <Badge variant="secondary">
                    Leadership
                  </Badge>

                  <Badge variant="secondary">
                    Future Ready
                  </Badge>
                </div>
              </div>
            </div>
          </RevealOnScroll>

        </Container>
      </section>
      {/* ====================================================== */}
      {/* Premium Lightbox */}
      {/* ====================================================== */}

      <Lightbox
        images={images.map((item) => ({
          src: item.image,
          alt: item.category,
        }))}
        currentIndex={current}
        isOpen={open}
        onClose={() => setOpen(false)}
        onNext={() =>
          setCurrent((prev) =>
            prev === images.length - 1
              ? 0
              : prev + 1
          )
        }
        onPrev={() =>
          setCurrent((prev) =>
            prev === 0
              ? images.length - 1
              : prev - 1
          )
        }
      />
    </>
  );
}