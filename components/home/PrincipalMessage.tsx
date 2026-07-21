import Image from "next/image";
import { Quote } from "lucide-react";

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


              {/* Gold Frame */}

              <div
                className="
                  absolute
                  -right-6
                  -top-6
                  h-full
                  w-full
                  rounded-[24px]
                  border
                  border-yellow-600/30
                "
              />


              {/* Image */}

              <div
                className="
                  relative
                  h-[620px]
                  overflow-hidden
                  rounded-[24px]
                  bg-slate-200
                  shadow-2xl
                "
              >
                <Image
                  src={principalMessage.photo}
                  alt={principalMessage.name}
                  fill
                  className="
                    object-cover
                    transition
                    duration-700
                    hover:scale-105
                  "
                />

                {/* Bottom Overlay */}
                
                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    bg-gradient-to-t
                    from-[#071A33]/80
                    via-transparent
                    to-transparent
                    p-8
                    pt-32
                  "
                >
                  <p className="text-sm uppercase tracking-[0.4em] text-yellow-400">
                    Leadership
                  </p>

                  <h3 className="mt-3 text-3xl font-black text-white">
                    {principalMessage.name}
                  </h3>

                  <p className="mt-1 text-slate-200">
                    {principalMessage.designation}
                  </p>
                </div>
              </div>
                            {/* Quote Badge */}

              <div
                className="
                  absolute
                  -bottom-8
                  -right-8
                  flex
                  h-24
                  w-24
                  items-center
                  justify-center
                  rounded-full
                  bg-[#071A33]
                  text-white
                  shadow-2xl
                "
              >
                <Quote
                  size={42}
                  strokeWidth={1.5}
                  className="text-yellow-500"
                />
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
                    Excellence
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