"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Clock,
  Play,
  X,
  Sparkles,
} from "lucide-react";

import RevealOnScroll from "@/components/animations/RevealOnScroll";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { exploreVideos } from "@/lib/constants/explore";


export default function VideosSection() {


  const [activeVideo, setActiveVideo] =
    useState<(typeof exploreVideos)[number] | null>(null);



  const featuredVideo = exploreVideos[0];

  const remainingVideos = exploreVideos.slice(1);



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


        {/* Background Glow */}

        <div
          className="
            absolute
            right-0
            top-20
            h-96
            w-96
            rounded-full
            bg-yellow-500/10
            blur-[150px]
          "
        />



        <Container>


          {/* Heading */}

          <RevealOnScroll>

            <SectionTitle
              eyebrow="School Videos"
              title="Experience Alpine Through Film"
              description="Watch campus tours, student activities, achievements, events, and unforgettable moments captured through video."
              center
            />

          </RevealOnScroll>



          {/* Featured Video */}

          <RevealOnScroll delay={0.15}>

            <div
              className="
                mt-20
                grid
                gap-10
                lg:grid-cols-[1.3fr_0.7fr]
              "
            >


              <button
                onClick={() =>
                  setActiveVideo(featuredVideo)
                }
                className="
                  group
                  relative
                  h-[520px]
                  overflow-hidden
                  rounded-[2.5rem]
                  text-left
                  shadow-2xl
                "
              >

                <Image
                  src={featuredVideo.thumbnail}
                  alt={featuredVideo.title}
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
                    via-[#071A33]/20
                    to-transparent
                  "
                />


                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                  "
                >

                  <div
                    className="
                      flex
                      h-24
                      w-24
                      items-center
                      justify-center
                      rounded-full
                      bg-white/20
                      text-white
                      backdrop-blur-md
                      transition
                      duration-500
                      group-hover:scale-110
                    "
                  >

                    <Play
                      size={42}
                      fill="white"
                    />

                  </div>

                </div>
                                {/* Featured Labels */}

                <div
                  className="
                    absolute
                    left-8
                    top-8
                  "
                >

                  <Badge variant="secondary">
                    Featured Film
                  </Badge>

                </div>



                <div
                  className="
                    absolute
                    bottom-8
                    left-8
                    right-8
                  "
                >


                  <h2
                    className="
                      text-4xl
                      font-black
                      leading-tight
                      text-white
                      md:text-5xl
                    "
                  >
                    {featuredVideo.title}
                  </h2>



                  <p
                    className="
                      mt-4
                      max-w-2xl
                      text-base
                      leading-8
                      text-slate-200
                    "
                  >
                    {featuredVideo.description}
                  </p>



                  <div
                    className="
                      mt-6
                      flex
                      items-center
                      gap-3
                      text-sm
                      font-bold
                      text-yellow-400
                    "
                  >

                    <Clock size={16} />

                    {featuredVideo.duration}

                  </div>



                </div>


              </button>




              {/* Side Information */}


              <div
                className="
                  flex
                  flex-col
                  justify-center
                "
              >


                <Badge variant="secondary">
                  School Media
                </Badge>



                <h3
                  className="
                    mt-6
                    text-4xl
                    font-black
                    leading-tight
                    text-[#071A33]
                  "
                >
                  Discover Our
                  <br />
                  Story Visually
                </h3>



                <p
                  className="
                    mt-6
                    leading-8
                    text-slate-600
                  "
                >
                  From classrooms and laboratories to celebrations and
                  achievements, every video captures the learning environment,
                  creativity, and spirit of Alpine Digital School.
                </p>



                <div
                  className="
                    mt-10
                    flex
                    items-center
                    gap-4
                  "
                >

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#071A33]
                      text-yellow-400
                    "
                  >

                    <Sparkles size={26} />

                  </div>


                  <div>

                    <p
                      className="
                        font-black
                        text-[#071A33]
                      "
                    >
                      Premium Learning Experience
                    </p>


                    <p
                      className="
                        text-sm
                        text-slate-500
                      "
                    >
                      Beyond traditional classrooms
                    </p>

                  </div>


                </div>



              </div>


            </div>


          </RevealOnScroll>
                    {/* ====================================================== */}
          {/* Video Archive */}
          {/* ====================================================== */}


          <div className="mt-28">

            <div
              className="
                grid
                gap-8
                md:grid-cols-2
                xl:grid-cols-3
              "
            >


              {remainingVideos.map((video, index) => (

                <RevealOnScroll
                  key={video.title}
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
                      hover:shadow-2xl
                    "
                  >



                    <button
                      onClick={() =>
                        setActiveVideo(video)
                      }
                      className="
                        relative
                        block
                        h-64
                        w-full
                        overflow-hidden
                      "
                    >


                      <Image
                        src={video.thumbnail}
                        alt={video.title}
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
                          bg-[#071A33]/40
                          transition
                          group-hover:bg-[#071A33]/60
                        "
                      />




                      {/* Play Button */}


                      <div
                        className="
                          absolute
                          inset-0
                          flex
                          items-center
                          justify-center
                        "
                      >

                        <div
                          className="
                            flex
                            h-16
                            w-16
                            items-center
                            justify-center
                            rounded-full
                            bg-white/20
                            text-white
                            backdrop-blur-md
                            transition
                            duration-500
                            group-hover:scale-110
                          "
                        >

                          <Play
                            size={28}
                            fill="white"
                          />

                        </div>


                      </div>



                      {/* Category */}


                      <div
                        className="
                          absolute
                          left-5
                          top-5
                        "
                      >

                        <Badge variant="secondary">
                          {video.category}
                        </Badge>


                      </div>



                      {/* Duration */}


                      <div
                        className="
                          absolute
                          bottom-5
                          right-5
                          rounded-full
                          bg-black/70
                          px-4
                          py-2
                          text-xs
                          font-bold
                          text-white
                          backdrop-blur
                        "
                      >

                        <span
                          className="
                            flex
                            items-center
                            gap-2
                          "
                        >

                          <Clock size={14}/>

                          {video.duration}

                        </span>


                      </div>



                    </button>
                                        {/* Card Content */}

                    <div className="p-7">


                      <h3
                        className="
                          text-2xl
                          font-black
                          text-[#071A33]
                        "
                      >
                        {video.title}
                      </h3>



                      <p
                        className="
                          mt-4
                          text-sm
                          leading-7
                          text-slate-600
                        "
                      >
                        {video.description}
                      </p>



                      <div
                        className="
                          mt-7
                          flex
                          items-center
                          justify-between
                          border-t
                          border-slate-200
                          pt-5
                        "
                      >

                        <span
                          className="
                            text-xs
                            font-black
                            uppercase
                            tracking-[0.25em]
                            text-yellow-700
                          "
                        >
                          Watch Story
                        </span>


                        <Play
                          size={18}
                          className="
                            text-[#071A33]
                            transition
                            group-hover:translate-x-1
                          "
                        />


                      </div>



                    </div>



                  </article>



                </RevealOnScroll>


              ))}


            </div>


          </div>




          {/* ====================================================== */}
          {/* Media Experience Banner */}
          {/* ====================================================== */}



          <RevealOnScroll delay={0.2}>


            <div
              className="
                mt-28
                overflow-hidden
                rounded-[2.5rem]
                bg-[#071A33]
                px-8
                py-16
                text-white
                md:px-14
              "
            >


              <div
                className="
                  grid
                  gap-10
                  lg:grid-cols-3
                  lg:items-center
                "
              >



                <div
                  className="
                    lg:col-span-2
                  "
                >

                  <Badge variant="secondary">
                    Digital Memories
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
                    Preserving The Alpine Journey
                  </h2>


                  <p
                    className="
                      mt-5
                      max-w-3xl
                      text-lg
                      leading-8
                      text-slate-300
                    "
                  >
                    Our videos preserve the creativity, achievements,
                    celebrations, and learning experiences that make our school
                    community unique.
                  </p>


                </div>
                                <div
                  className="
                    flex
                    justify-start
                    lg:justify-end
                  "
                >

                  <div
                    className="
                      rounded-3xl
                      border
                      border-white/10
                      bg-white/5
                      p-8
                      backdrop-blur-md
                    "
                  >

                    <p
                      className="
                        text-sm
                        font-bold
                        uppercase
                        tracking-[0.3em]
                        text-yellow-400
                      "
                    >
                      Media Library
                    </p>


                    <h3
                      className="
                        mt-3
                        text-3xl
                        font-black
                      "
                    >
                      Explore
                    </h3>


                    <p
                      className="
                        mt-2
                        text-slate-300
                      "
                    >
                      Campus Stories
                    </p>


                  </div>


                </div>


              </div>


            </div>


          </RevealOnScroll>



        </Container>


      </section>




      {/* ====================================================== */}
      {/* Video Modal */}
      {/* ====================================================== */}



      {activeVideo && (

        <div
          className="
            fixed
            inset-0
            z-[999]
            flex
            items-center
            justify-center
            bg-black/90
            p-6
            backdrop-blur-sm
          "
        >


          <div
            className="
              relative
              w-full
              max-w-6xl
              overflow-hidden
              rounded-[2rem]
              bg-black
              shadow-2xl
            "
          >


            <button
              onClick={() =>
                setActiveVideo(null)
              }
              className="
                absolute
                right-5
                top-5
                z-20
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-white
                text-[#071A33]
                transition
                hover:scale-110
              "
              aria-label="Close video"
            >

              <X size={22}/>


            </button>



            <video
              controls
              autoPlay
              className="
                w-full
                max-h-[80vh]
              "
            >

              <source
                src={activeVideo.video}
                type="video/mp4"
              />

            </video>



          </div>



        </div>


      )}



    </>

  );

}