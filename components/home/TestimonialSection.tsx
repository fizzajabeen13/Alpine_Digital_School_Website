"use client";

import Image from "next/image";
import { Quote, Star } from "lucide-react";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import RevealOnScroll from "@/components/animations/RevealOnScroll";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";

import { testimonialsData } from "@/lib/constants/homepage";

import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialSection() {
  return (
    <section className="relative overflow-hidden bg-[#071A33] py-32 text-white">

      {/* ====================================================== */}
      {/* Background Elements */}
      {/* ====================================================== */}

      <div className="absolute inset-0">

        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-yellow-500/10 blur-[160px]" />

        <div className="absolute -right-32 bottom-0 h-[30rem] w-[30rem] rounded-full bg-blue-400/10 blur-[170px]" />

      </div>


      <Container>

        {/* ====================================================== */}
        {/* Section Heading */}
        {/* ====================================================== */}

        <RevealOnScroll>

          <div className="max-w-3xl">

            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.45em]
                text-yellow-400
              "
            >
              Testimonials
            </p>


            <h2
              className="
                mt-6
                text-5xl
                font-black
                leading-tight
                tracking-tight
                md:text-6xl
              "
            >
              Voices From Our
              <br />
              School Community
            </h2>


            <p
              className="
                mt-6
                text-lg
                leading-9
                text-slate-300
              "
            >
              Hear from parents and students who experience our commitment to
              academic excellence, character development, and future-ready
              learning.
            </p>

          </div>

        </RevealOnScroll>


        {/* ====================================================== */}
        {/* Slider */}
        {/* ====================================================== */}

        <RevealOnScroll delay={0.15}>

          <div className="mt-16">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={32}
              slidesPerView={1}
              loop
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },

                1200: {
                  slidesPerView: 3,
                },
              }}
              className="pt-4 pb-16"
            >

              {testimonialsData.map((testimonial) => (

                <SwiperSlide
                  key={testimonial.name}
                  className="h-auto px-2 py-8"
                >

                  <article
                    className="
                      group
                      relative
                      flex
                      h-[580px]
                      flex-col
                      overflow-hidden
                      rounded-[2rem]
                      border
                      border-white/10
                      bg-white/5
                      p-8
                      backdrop-blur-sm
                      transition-all
                      duration-500
                      hover:-translate-y-3
                      hover:border-yellow-500/30
                    "
                  >

                    {/* ====================================================== */}
                    {/* Quote Icon */}
                    {/* ====================================================== */}

                    <div
                      className="
                        absolute
                        right-8
                        top-8
                        text-yellow-500/20
                      "
                    >
                      <Quote
                        size={70}
                        strokeWidth={1}
                      />
                    </div>


                    {/* ====================================================== */}
                    {/* Profile */}
                    {/* ====================================================== */}

                    <div className="relative flex items-center gap-5">

                      <div
                        className="
                          relative
                          h-20
                          w-20
                          overflow-hidden
                          rounded-full
                          border-2
                          border-yellow-500/40
                          bg-slate-800
                        "
                      >

                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />

                      </div>


                      <div>

                        <h3
                          className="
                            text-xl
                            font-black
                            text-white
                          "
                        >
                          {testimonial.name}
                        </h3>


                        <p
                          className="
                            mt-1
                            text-sm
                            text-slate-400
                          "
                        >
                          {testimonial.className}
                        </p>

                      </div>

                    </div>


                    {/* ====================================================== */}
                    {/* Rating */}
                    {/* ====================================================== */}

                    <div className="mt-8 flex gap-1">

                      {Array.from({
                        length: testimonial.rating,
                      }).map((_, index) => (

                        <Star
                          key={index}
                          className="
                            h-5
                            w-5
                            fill-yellow-500
                            text-yellow-500
                          "
                        />

                      ))}

                    </div>
                    {/* ====================================================== */}
                    {/* Message */}
                    {/* ====================================================== */}

                    <p
                      className="
                        mt-8
                        flex-1
                        line-clamp-5
                        font-serif
                        text-xl
                        italic
                        leading-9
                        text-slate-200
                      "
                    >
                      “{testimonial.message}”
                    </p>
                    {/* ====================================================== */}
                    {/* Role Badge */}
                    {/* ====================================================== */}

                    <div className="mt-8">

                      <Badge
                        variant={
                          testimonial.role === "Parent"
                            ? "secondary"
                            : "info"
                        }
                      >
                        {testimonial.role} Review
                      </Badge>

                    </div>


                    {/* ====================================================== */}
                    {/* Bottom Accent */}
                    {/* ====================================================== */}

                    <div
                      className="
                        mt-8
                        h-px
                        w-full
                        bg-gradient-to-r
                        from-transparent
                        via-yellow-500/50
                        to-transparent
                      "
                    />


                    {/* ====================================================== */}
                    {/* Hover Glow */}
                    {/* ====================================================== */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        rounded-[2rem]
                        bg-gradient-to-br
                        from-yellow-500/5
                        via-transparent
                        to-blue-500/10
                        opacity-0
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                      "
                    />

                  </article>

                </SwiperSlide>

              ))}

            </Swiper>
                      </div>

        </RevealOnScroll>


        {/* ====================================================== */}
        {/* Trust Statement */}
        {/* ====================================================== */}

        <RevealOnScroll delay={0.2}>

          <div
            className="
              mt-20
              border-t
              border-white/10
              pt-12
            "
          >

            <div
              className="
                flex
                flex-col
                gap-8
                md:flex-row
                md:items-center
                md:justify-between
              "
            >

              <div>

                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.45em]
                    text-yellow-400
                  "
                >
                  Trusted By Families
                </p>


                <h3
                  className="
                    mt-4
                    text-3xl
                    font-black
                    text-white
                  "
                >
                  Building Confidence Through Quality Education
                </h3>

              </div>


              <div
                className="
                  flex
                  items-center
                  gap-6
                "
              >

                <div>
                  <p className="text-4xl font-black text-white">
                    100%
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    Parent Satisfaction
                  </p>
                </div>


                <div className="h-12 w-px bg-white/20" />


                <div>
                  <p className="text-4xl font-black text-white">
                    5★
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    Community Rating
                  </p>
                </div>

              </div>

            </div>

          </div>

        </RevealOnScroll>


      </Container>

    </section>
  );
}