import Link from "next/link";
import { ArrowRight } from "lucide-react";

import RevealOnScroll from "@/components/animations/RevealOnScroll";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";

import { ctaData } from "@/lib/constants/homepage";

export default function CTASection() {
  return (
    <section className="bg-[#faf9f6] py-32">

      <Container>

        <RevealOnScroll>

          <div
            className="
              relative
              overflow-hidden
              rounded-[2.5rem]
              bg-[#071A33]
              px-8
              py-20
              text-white
              shadow-2xl
              md:px-16
              lg:px-20
            "
          >

            {/* ====================================================== */}
            {/* Decorative Elements */}
            {/* ====================================================== */}

            <div
              className="
                absolute
                -right-32
                -top-32
                h-[28rem]
                w-[28rem]
                rounded-full
                bg-yellow-500/10
                blur-[140px]
              "
            />


            <div
              className="
                absolute
                -bottom-40
                -left-40
                h-[30rem]
                w-[30rem]
                rounded-full
                bg-blue-400/10
                blur-[160px]
              "
            />


            <div className="relative mx-auto max-w-5xl">


              {/* Badge */}

              <div className="flex justify-center">

                <Badge variant="secondary">
                  {ctaData.badge}
                </Badge>

              </div>
              {/* ====================================================== */}
              {/* Main Heading */}
              {/* ====================================================== */}

              <h2
                className="
                  mt-8
                  text-center
                  text-5xl
                  font-black
                  leading-[1.1]
                  tracking-tight
                  md:text-6xl
                  lg:text-7xl
                "
              >
                {ctaData.title}
              </h2>


              {/* Gold Divider */}

              <div
                className="
                  mx-auto
                  mt-10
                  h-[2px]
                  w-24
                  bg-yellow-500
                "
              />


              {/* Description */}

              <p
                className="
                  mx-auto
                  mt-8
                  max-w-3xl
                  text-center
                  text-lg
                  leading-9
                  text-slate-300
                "
              >
                {ctaData.description}
              </p>



              {/* ====================================================== */}
              {/* Actions */}
              {/* ====================================================== */}

              <div
                className="
                  mt-14
                  grid
                  gap-6
                  md:grid-cols-3
                "
              >

                {ctaData.actions.map((action) => {

                  const Icon = action.iconName;


                  return (
                    <Link
                      key={action.href}
                      href={action.href}
                      className="
                        group
                        relative
                        overflow-hidden
                        rounded-2xl
                        border
                        border-white/15
                        bg-white/[0.04]
                        p-7
                        transition-all
                        duration-500
                        hover:-translate-y-2
                        hover:border-yellow-500/50
                      "
                    >

                      {/* Hover Glow */}

                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-br
                          from-yellow-500/10
                          via-transparent
                          to-transparent
                          opacity-0
                          transition
                          duration-500
                          group-hover:opacity-100
                        "
                      />


                      <div className="relative">
                        {/* Icon */}

                        <div
                          className="
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-2xl
                            bg-yellow-500
                            text-[#071A33]
                            shadow-lg
                            transition
                            duration-500
                            group-hover:scale-110
                          "
                        >
                          <Icon size={26} />
                        </div>


                        {/* Action Content */}

                        <div className="mt-8 flex items-center justify-between gap-4">

                          <h3
                            className="
                              text-lg
                              font-black
                              text-white
                            "
                          >
                            {action.label}
                          </h3>


                          <div
                            className="
                              flex
                              h-10
                              w-10
                              items-center
                              justify-center
                              rounded-full
                              border
                              border-white/20
                              transition
                              duration-300
                              group-hover:border-yellow-500
                              group-hover:bg-yellow-500
                              group-hover:text-[#071A33]
                            "
                          >
                            <ArrowRight
                              size={18}
                              className="
                                transition
                                duration-300
                                group-hover:translate-x-1
                              "
                            />
                          </div>

                        </div>


                        {/* Bottom Line */}

                        <div
                          className="
                            mt-8
                            h-px
                            w-full
                            bg-white/10
                            transition
                            duration-500
                            group-hover:bg-yellow-500/40
                          "
                        />

                      </div>

                    </Link>
                  );

                })}

              </div>
            </div>

          </div>

        </RevealOnScroll>

      </Container>

    </section>
  );
}