"use client";

import Image from "next/image";
import { useState } from "react";

import {
  Award,
  Eye,
  ShieldCheck,
  Sparkles,
  Trophy,
} from "lucide-react";


import RevealOnScroll from "@/components/animations/RevealOnScroll";
import Lightbox from "@/components/shared/Lightbox";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";


import {
  certificates,
  medals,
} from "@/lib/constants/achievements";




export default function MedalsCertificates() {


  const [
    activeCertificate,
    setActiveCertificate,
  ] = useState(0);


  const [
    isLightboxOpen,
    setIsLightboxOpen,
  ] = useState(false);




  const certificateImages =
    certificates.map((certificate) => ({
      src: certificate.image,
      alt: certificate.title,
    }));




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
              eyebrow="Awards & Recognition"
              title="Celebrating Excellence Beyond Classrooms"
              description="Recognizing students through medals, certificates, awards, and achievements that showcase dedication, talent, innovation, and success."
              center
            />

          </RevealOnScroll>
          {/* ====================================================== */}
          {/* Recognition Banner */}
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
                  bg-yellow-500/20
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
                        tracking-[0.45em]
                      "
                    >
                      Recognition Gallery
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
                    Celebrating Every
                    <br />
                    Student Achievement
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
                    From academic awards to STEM competitions, sports,
                    innovation projects, and leadership activities, every
                    achievement reflects the passion and hard work of our
                    students.
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
          {/* Medal Statistics */}
          {/* ====================================================== */}


          <div
            className="
              mt-24
              grid
              gap-8
              md:grid-cols-3
            "
          >


            {medals.map((medal, index) => (

              <RevealOnScroll
                key={medal.type}
                delay={index * 0.1}
              >


                <article
                  className="
                    group
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


                  <div
                    className="
                      mx-auto
                      flex
                      h-24
                      w-24
                      items-center
                      justify-center
                      rounded-full
                      bg-gradient-to-br
                      from-yellow-400
                      to-yellow-600
                      text-4xl
                      shadow-xl
                    "
                  >

                    {medal.icon}

                  </div>



                  <h3
                    className="
                      mt-8
                      text-5xl
                      font-black
                      text-[#071A33]
                    "
                  >

                    {medal.total}+

                  </h3>



                  <p
                    className="
                      mt-3
                      text-xl
                      font-black
                      text-yellow-700
                    "
                  >

                    {medal.type}

                  </p>
                                    <p
                    className="
                      mt-4
                      text-sm
                      leading-7
                      text-slate-600
                    "
                  >
                    Awarded to students for exceptional performance in
                    academics, competitions, sports, STEM, technology,
                    creativity, and leadership.
                  </p>



                  <div
                    className="
                      mt-6
                      flex
                      items-center
                      justify-center
                      gap-2
                      text-yellow-600
                    "
                  >

                    <Award size={18}/>

                    <span
                      className="
                        text-xs
                        font-black
                        uppercase
                        tracking-[0.3em]
                      "
                    >
                      Excellence Award
                    </span>


                  </div>



                </article>


              </RevealOnScroll>


            ))}


          </div>





          {/* ====================================================== */}
          {/* Certificates Heading */}
          {/* ====================================================== */}



          <RevealOnScroll delay={0.15}>


            <div
              className="
                mt-32
                text-center
              "
            >


              <Badge variant="secondary">
                Achievement Documents
              </Badge>



              <h2
                className="
                  mt-6
                  text-4xl
                  font-black
                  text-[#071A33]
                  md:text-5xl
                "
              >
                Certificates Of Excellence
              </h2>




              <p
                className="
                  mx-auto
                  mt-5
                  max-w-3xl
                  leading-8
                  text-slate-600
                "
              >
                Official recognition certificates celebrating student
                achievements, participation, competition success, and academic
                milestones.
              </p>



            </div>


          </RevealOnScroll>





          {/* ====================================================== */}
          {/* Certificate Gallery */}
          {/* ====================================================== */}


          <div
            className="
              mt-14
              grid
              gap-8
              md:grid-cols-2
              lg:grid-cols-3
            "
          >


            {certificates.map((certificate, index) => (

              <RevealOnScroll
                key={certificate.title}
                delay={index * 0.08}
              >


                <article
                  className="
                    group
                    flex
                    h-[560px]
                    flex-col
                    overflow-hidden
                    rounded-[2rem]
                    border
                    border-slate-200
                    bg-white
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:shadow-2xl
                  "
                >
                  <button
                    onClick={() => {
                      setActiveCertificate(index);
                      setIsLightboxOpen(true);
                    }}
                    className="
                      relative
                      block
                      h-72
                      w-full
                      shrink-0
                      overflow-hidden
                      bg-slate-100
                    "
                    aria-label={`Preview ${certificate.title}`}
                  >


                    <Image
                      src={certificate.image}
                      alt={certificate.title}
                      fill
                      className="
                        object-contain
                        p-6
                        transition
                        duration-700
                        group-hover:scale-105
                      "
                    />
                    {/* Hover Overlay */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-[#071A33]/0
                        transition
                        duration-500
                        group-hover:bg-[#071A33]/30
                      "
                    />



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
                        shadow-xl
                        transition
                        duration-500
                        group-hover:opacity-100
                      "
                    >

                      <Eye size={20}/>

                    </div>



                  </button>





                  {/* Certificate Information */}



                  <div
                    className="
                      flex flex-1 flex-col p-7
                    "
                  >



                    <Badge variant="secondary">
                      {certificate.year}
                    </Badge>




                    <h3
                      className="
                        mt-5
                        text-2xl
                        font-black
                        text-[#071A33]
                      "
                    >

                      {certificate.title}

                    </h3>




                    <div
                      className="
                        mt-auto
                        space-y-4
                      "
                    >



                      <div
                        className="
                          flex
                          items-start
                          gap-3
                          text-sm
                          text-slate-600
                        "
                      >

                        <Award
                          className="
                            mt-0.5
                            h-5
                            w-5
                            text-yellow-500
                          "
                        />


                        <p>

                          Awarded to:

                          <span
                            className="
                              ml-1
                              font-black
                              text-[#071A33]
                            "
                          >
                            {certificate.student}
                          </span>

                        </p>


                      </div>




                      <div
                        className="
                          flex
                          items-start
                          gap-3
                          text-sm
                          text-slate-600
                        "
                      >

                        <ShieldCheck
                          className="
                            mt-0.5
                            h-5
                            w-5
                            text-emerald-600
                          "
                        />


                        <p>
                          {certificate.organization}
                        </p>


                      </div>




                    </div>



                  </div>



                </article>


              </RevealOnScroll>


            ))}


          </div>
          {/* ====================================================== */}
          {/* Closing Recognition Banner */}
          {/* ====================================================== */}

          <RevealOnScroll delay={0.2}>
            <div
              className="
                mt-28
                overflow-hidden
                rounded-[2.5rem]
                bg-gradient-to-br
                from-[#071A33]
                via-[#0B2545]
                to-[#123A6B]
                px-8
                py-16
                text-center
                text-white
                md:px-14
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
                Every Achievement Tells A Story
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
                Each medal and certificate reflects perseverance, dedication,
                creativity, and excellence. We celebrate every milestone while
                inspiring students to dream bigger, learn continuously, and
                become confident leaders of tomorrow.
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
                  Leadership
                </Badge>

                <Badge variant="secondary">
                  Innovation
                </Badge>

                <Badge variant="secondary">
                  Future Ready
                </Badge>
              </div>
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      {/* ====================================================== */}
      {/* Certificate Lightbox */}
      {/* ====================================================== */}

      <Lightbox
        images={certificateImages}
        currentIndex={activeCertificate}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        onNext={() =>
          setActiveCertificate((prev) =>
            prev === certificateImages.length - 1 ? 0 : prev + 1
          )
        }
        onPrev={() =>
          setActiveCertificate((prev) =>
            prev === 0 ? certificateImages.length - 1 : prev - 1
          )
        }
      />
    </>
  );
}