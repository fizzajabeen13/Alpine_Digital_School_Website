import Image from "next/image";
import {
  Quote,
  GraduationCap,
  BriefcaseBusiness,
} from "lucide-react";

import RevealOnScroll from "@/components/animations/RevealOnScroll";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

import { principalMessage } from "@/lib/constants/homepage";

export default function PrincipalMessage() {
  return (
    <section className="relative overflow-hidden bg-[#faf9f6] py-32">
      <Container>

        {/* ====================================================== */}
        {/* Main Layout */}
        {/* ====================================================== */}

        <div className="grid items-center gap-20 lg:grid-cols-[0.9fr_1.1fr]">

{/* ====================================================== */}
{/* Portrait Section */}
{/* ====================================================== */}

<RevealOnScroll>
  <div className="relative mx-auto max-w-md">

    {/* Vertical Label */}

    <div
      className="
        absolute
        -left-16
        top-24
        hidden
        -rotate-90
        text-xs
        font-bold
        uppercase
        tracking-[0.6em]
        text-slate-400
        lg:block
      "
    >
      Principal Message
    </div>


    {/* ====================================================== */}
    {/* Main Portrait Frame */}
    {/* ====================================================== */}

    <div className="relative">

      {/* Gold Offset Frame */}

      <div
        className="
          absolute
          -right-6
          -top-6
          h-full
          w-full
          rounded-[28px]
          border
          border-yellow-600/30
        "
      />


      {/* ====================================================== */}
      {/* Image Frame */}
      {/* ====================================================== */}

      <div
        className="
          relative
          z-10
          h-[620px]
          overflow-hidden
          rounded-[28px]
          bg-slate-200
          shadow-[0_30px_70px_rgba(15,23,42,0.20)]
        "
      >

        <Image
          src={principalMessage.photo}
          alt={principalMessage.name}
          fill
          priority
          className="
            object-cover
            object-top
            transition
            duration-700
            hover:scale-105
          "
        />

        {/* Elegant Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#071A33]/85
            via-[#071A33]/10
            to-transparent
          "
        />


        {/* ====================================================== */}
        {/* Name Card */}
        {/* ====================================================== */}

        <div
          className="
            absolute
            bottom-6
            left-6
            right-6
            z-20
            rounded-[28px]
            border
            border-white/20
            bg-white/10
            p-6
            shadow-2xl
            backdrop-blur-xl
          "
        >

          <p
            className="
              text-xs
              font-bold
              uppercase
              tracking-[0.3em]
              text-yellow-400
            "
          >
            Leadership
          </p>

          <h3
            className="
              mt-3
              text-3xl
              font-black
              tracking-tight
              text-white
            "
          >
            {principalMessage.name}
          </h3>

          <p className="mt-2 text-sm font-medium text-blue-100">
            {principalMessage.designation}
          </p>

        </div>

      </div>


      {/* ====================================================== */}
      {/* Qualification + Experience Frame */}
      {/* ====================================================== */}

      <div
        className="
          relative
          z-20
          mt-8
          space-y-4
          rounded-[30px]
          border
          border-yellow-600/20
          bg-[#faf9f6]
          p-3
          shadow-[0_20px_50px_rgba(15,23,42,0.10)]
        "
      >

        {/* Qualification */}

        <div
          className="
            rounded-[22px]
            border
            border-slate-200
            bg-white
            p-5
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-lg
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
                rounded-2xl
                bg-yellow-50
                text-yellow-700
              "
            >
              <GraduationCap size={21} />
            </div>

            <div className="min-w-0 flex-1">

              <p
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-slate-400
                "
              >
                Qualification
              </p>

              <p
                className="
                  mt-2
                  text-base
                  font-bold
                  leading-7
                  text-[#071A33]
                "
              >
                {principalMessage.qualification}
              </p>

            </div>

          </div>

        </div>


        {/* Experience */}

        <div
          className="
            rounded-[22px]
            border
            border-slate-200
            bg-white
            p-5
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-lg
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
                rounded-2xl
                bg-blue-50
                text-blue-800
              "
            >
              <BriefcaseBusiness size={20} />
            </div>

            <div className="min-w-0 flex-1">

              <p
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-slate-400
                "
              >
                Experience
              </p>

              <p
                className="
                  mt-2
                  text-base
                  font-bold
                  leading-7
                  text-[#071A33]
                "
              >
                {principalMessage.experience}
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* ====================================================== */}
      {/* Quote Badge */}
      {/* ====================================================== */}

      <div
        className="
          absolute
          -bottom-8
          -right-10
          z-50
          flex
          h-24
          w-24
          items-center
          justify-center
          rounded-full
          border-4
          border-[#faf9f6]
          bg-[#071A33]
          text-white
          shadow-[0_20px_40px_rgba(7,26,51,0.30)]
        "
      >

        <Quote
          size={40}
          strokeWidth={1.5}
          className="text-yellow-500"
        />

      </div>

    </div>

  </div>
</RevealOnScroll>


          {/* ====================================================== */}
          {/* Content Section */}
          {/* ====================================================== */}

          <RevealOnScroll delay={0.15}>

            <div className="max-w-2xl">

              {/* Eyebrow */}

              <p
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.45em]
                  text-yellow-700
                "
              >
                Principal&apos;s Message
              </p>


              {/* Main Heading */}

              <h2
                className="
                  mt-6
                  text-5xl
                  font-black
                  leading-[1.1]
                  tracking-tight
                  text-[#071A33]
                  lg:text-6xl
                "
              >
                Leading With Vision,
                <br />
                Inspiring Young Minds
              </h2>


              {/* Divider */}

              <div
                className="
                  mt-8
                  h-[2px]
                  w-24
                  bg-yellow-600
                "
              />


              {/* Welcome Text */}

              <p
                className="
                  mt-8
                  text-lg
                  leading-9
                  text-slate-600
                "
              >
                {principalMessage.welcome}
              </p>


              {/* Main Quote */}

              <div className="mt-10">

                <p
                  className="
                    font-serif
                    text-3xl
                    italic
                    leading-relaxed
                    text-slate-800
                  "
                >
                  “{principalMessage.quote}”
                </p>

              </div>


              {/* ====================================================== */}
              {/* Vision Statement */}
              {/* ====================================================== */}

              <div
                className="
                  mt-10
                  border-l-2
                  border-yellow-600
                  pl-8
                "
              >

                <p
                  className="
                    text-base
                    leading-8
                    text-slate-600
                  "
                >
                  {principalMessage.vision}
                </p>

              </div>


              {/* ====================================================== */}
              {/* Signature Area */}
              {/* ====================================================== */}

              <div className="mt-12 flex items-end justify-between gap-8">

                <div>

                  <h3
                    className="
                      text-2xl
                      font-black
                      text-[#071A33]
                    "
                  >
                    {principalMessage.name}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-yellow-700
                    "
                  >
                    {principalMessage.designation}
                  </p>

                  {/* Signature Line */}

                  <div
                    className="
                      mt-6
                      h-px
                      w-44
                      bg-slate-300
                    "
                  />

                  <p
                    className="
                      mt-3
                      font-serif
                      text-2xl
                      italic
                      text-slate-500
                    "
                  >
                    Alpine Digital School
                  </p>

                </div>


                {/* Accreditation Style Badge */}

                <div
                  className="
                    hidden
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-yellow-600/40
                    text-center
                    lg:flex
                  "
                >

                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-5
                      tracking-widest
                      text-yellow-700
                    "
                  >
                    Since
                    <br />
                    2018
                  </span>

                </div>

              </div>


              {/* ====================================================== */}
              {/* CTA */}
              {/* ====================================================== */}

              <div className="mt-12">

                <Button href={principalMessage.cta.href}>
                  {principalMessage.cta.label}
                </Button>

              </div>

            </div>

          </RevealOnScroll>

        </div>

      </Container>
    </section>
  );
}