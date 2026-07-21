"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Images, Sparkles } from "lucide-react";

import RevealOnScroll from "@/components/animations/RevealOnScroll";
import Lightbox from "@/components/shared/Lightbox";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { galleryAlbums } from "@/lib/constants/explore";


export default function AlbumsGallery() {


  const [album, setAlbum] = useState("All");

  const [lightboxOpen, setLightboxOpen] =
    useState(false);

  const [imageIndex, setImageIndex] =
    useState(0);



  /*
  ======================================================
  Album Filters
  ======================================================
  */


  const albums = [
    "All",
    ...galleryAlbums.map(
      (item) => item.title
    ),
  ];



  /*
  ======================================================
  Filter Images
  ======================================================
  */


  const images = useMemo(() => {


    if (album === "All") {


      return galleryAlbums.flatMap(
        (item) =>

          item.images.map((image) => ({

            src: image,

            alt: `${item.title} school gallery image`,

            album: item.title,

          }))

      );


    }



    const selectedAlbum =
      galleryAlbums.find(
        (item) =>
          item.title === album
      );



    return (

      selectedAlbum?.images.map(
        (image) => ({

          src: image,

          alt:
            `${selectedAlbum.title} school gallery image`,

          album:
            selectedAlbum.title,

        })

      ) ?? []

    );


  }, [album]);





  return (

    <>

      <section
        id="gallery"
        className="
          relative
          overflow-hidden
          bg-[#faf9f6]
          py-32
        "
      >


        {/* ======================================================
            Background Glow
        ====================================================== */}


        <div
          className="
            absolute
            -left-40
            top-20
            h-96
            w-96
            rounded-full
            bg-yellow-500/10
            blur-[150px]
          "
        />



        <Container>


          {/* ======================================================
              Section Header
          ====================================================== */}


          <RevealOnScroll>

            <SectionTitle

              eyebrow="School Gallery"

              title="Moments That Define Our Journey"

              description="
              Explore memorable experiences from classrooms,
              laboratories, campus events, competitions,
              sports, and student achievements.
              "

              center

            />

          </RevealOnScroll>



          {/* ======================================================
              Gallery Introduction Card
          ====================================================== */}


          <RevealOnScroll delay={0.1}>

            <div
              className="
                mx-auto
                mt-16
                max-w-4xl
                rounded-[2rem]
                border
                border-slate-200
                bg-white
                p-8
                text-center
                shadow-sm
              "
            >


              <div
                className="
                  mx-auto
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

                <Sparkles size={26} />

              </div>



              <h3
                className="
                  mt-6
                  text-3xl
                  font-black
                  text-[#071A33]
                "
              >

                Every Picture Tells A Story

              </h3>



              <p
                className="
                  mt-4
                  leading-8
                  text-slate-600
                "
              >

                From innovative learning experiences to
                celebrations, achievements, and unforgettable
                memories, our gallery captures the spirit of
                Alpine Digital School.

              </p>



            </div>


          </RevealOnScroll>
                    {/* ======================================================
              Album Filter Buttons
          ====================================================== */}


          <RevealOnScroll delay={0.15}>


            <div
              className="
                mt-14
                flex
                flex-wrap
                justify-center
                gap-3
              "
            >


              {albums.map((item) => (


                <button

                  key={item}

                  onClick={() =>
                    setAlbum(item)
                  }

                  className={`
                    rounded-full
                    px-6
                    py-3
                    text-sm
                    font-bold
                    transition-all
                    duration-300

                    ${
                      album === item

                        ? `
                          bg-[#071A33]
                          text-yellow-400
                          shadow-lg
                          shadow-blue-900/20
                        `

                        : `
                          border
                          border-slate-200
                          bg-white
                          text-slate-600
                          hover:border-yellow-500
                          hover:text-[#071A33]
                          hover:shadow-md
                        `
                    }

                  `}

                >

                  {item}


                </button>


              ))}


            </div>


          </RevealOnScroll>





          {/* ======================================================
              Masonry Gallery
          ====================================================== */}


          <div
            className="
              mt-16
              columns-1
              gap-8
              sm:columns-2
              xl:columns-4
            "
          >


            {images.map((image, index) => (


              <RevealOnScroll

                key={`${image.src}-${index}`}

                delay={index * 0.03}

              >


                <article

                  className="
                    group
                    mb-8
                    break-inside-avoid
                    overflow-hidden
                    rounded-[1.8rem]
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

                      setImageIndex(index);

                      setLightboxOpen(true);

                    }}

                    className="
                      relative
                      block
                      w-full
                      overflow-hidden
                    "

                  >



                    <Image

                      src={image.src}

                      alt={image.alt}

                      width={700}

                      height={700}

                      className="
                        h-auto
                        w-full
                        object-cover
                        transition
                        duration-700
                        group-hover:scale-110
                      "

                    />





                    {/* ======================================================
                        Hover Gradient Overlay
                    ====================================================== */}


                    <div

                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#071A33]/70
                        via-transparent
                        to-transparent
                        opacity-0
                        transition
                        duration-500
                        group-hover:opacity-100
                      "

                    />





                    {/* ======================================================
                        View Gallery Icon
                    ====================================================== */}


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
                        bg-white/90
                        text-[#071A33]
                        opacity-0
                        backdrop-blur
                        transition
                        duration-500
                        group-hover:opacity-100
                      "

                    >

                      <Images size={22} />

                    </div>
                    
                    {/* ======================================================
                        Album Label
                    ====================================================== */}


                    <div

                      className="
                        absolute
                        bottom-5
                        left-5
                        rounded-full
                        bg-white/90
                        px-4
                        py-2
                        text-xs
                        font-bold
                        text-[#071A33]
                        opacity-0
                        backdrop-blur
                        transition
                        duration-500
                        group-hover:opacity-100
                      "

                    >

                      {image.album}


                    </div>



                  </button>



                </article>



              </RevealOnScroll>


            ))}



          </div>





          {/* ======================================================
              Empty Gallery State
          ====================================================== */}


          {images.length === 0 && (


            <div

              className="
                mt-16
                rounded-[2rem]
                border
                border-dashed
                border-slate-300
                bg-white
                p-12
                text-center
              "

            >


              <p

                className="
                  text-lg
                  font-semibold
                  text-slate-500
                "

              >

                No images available in this album.

              </p>


            </div>


          )}







          {/* ======================================================
              Gallery Experience Section
          ====================================================== */}



          <RevealOnScroll delay={0.25}>


            <div

              className="
                mt-24
                grid
                gap-8
                md:grid-cols-3
              "

            >



              {[
                {
                  number: "01",
                  title: "Campus Life",
                  description:
                    "Discover classrooms, laboratories, activities, and daily student experiences.",
                },

                {
                  number: "02",
                  title: "Student Achievements",
                  description:
                    "Celebrate competitions, awards, projects, and moments of success.",
                },

                {
                  number: "03",
                  title: "Future Memories",
                  description:
                    "Every photograph represents growth, learning, and unforgettable journeys.",
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



                  <p

                    className="
                      text-sm
                      font-black
                      tracking-[0.3em]
                      text-yellow-700
                    "

                  >

                    {item.number}

                  </p>




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





        </Container>



      </section>
      



      {/* ======================================================
          Lightbox Viewer
      ====================================================== */}


      <Lightbox

        images={images}

        currentIndex={imageIndex}

        isOpen={lightboxOpen}


        onClose={() =>
          setLightboxOpen(false)
        }



        onNext={() =>

          setImageIndex((prev) =>

            prev === images.length - 1

              ? 0

              : prev + 1

          )

        }



        onPrev={() =>

          setImageIndex((prev) =>

            prev === 0

              ? images.length - 1

              : prev - 1

          )

        }


      />



    </>


  );


}