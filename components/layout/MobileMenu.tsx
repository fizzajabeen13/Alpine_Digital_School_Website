"use client";


import Link from "next/link";
import Image from "next/image";

import {
  X,
  GraduationCap,
  ArrowRight,
} from "lucide-react";


import {
  AnimatePresence,
  motion,
} from "framer-motion";


import { navLinks } from "@/lib/constants/navigation";



type MobileMenuProps = {

  isOpen: boolean;

  onClose: () => void;

};

export default function MobileMenu({

  isOpen,

  onClose,

}: MobileMenuProps) {



  return (

    <AnimatePresence>


      {isOpen && (

        <>


          {/* Background Overlay */}


          <motion.div

            initial={{
              opacity: 0,
            }}


            animate={{
              opacity: 1,
            }}


            exit={{
              opacity: 0,
            }}


            onClick={onClose}


            className="
              fixed
              inset-0
              z-50
              bg-slate-950/50
              backdrop-blur-sm
              lg:hidden
            "

          />

          {/* Mobile Side Panel */}



          <motion.aside


            initial={{
              x: "100%",
            }}


            animate={{
              x: 0,
            }}


            exit={{
              x: "100%",
            }}


            transition={{
              type: "spring",
              stiffness: 260,
              damping: 28,
            }}



            className="
              fixed
              right-0
              top-0
              z-[60]
              flex
              h-full
              w-[90%]
              max-w-sm
              flex-col
              overflow-hidden
              border-l
              border-white/20
              bg-white/95
              shadow-2xl
              backdrop-blur-2xl
              lg:hidden
            "
          >

            {/* Mobile Header */}

            <div

              className="
                flex
                items-center
                justify-between
                border-b
                border-slate-200
                px-6
                py-6
              "

            >

              <div

                className="
                  flex
                  items-center
                  gap-3
                "

              >
                <Link
                  href="/"
                  aria-label="Go to Homepage"
                    className="
                      inline-flex
                      h-16
                      w-16
                      items-center
                  justify-center
                  transition-all
                  duration-300
                  hover:scale-105
                  drop-shadow-[0_0_18px_rgba(255,255,255,0.65)]
                  hover:drop-shadow-[0_0_32px_rgba(255,255,255,0.9)]
                "
            >
              <Image
                src="/images/logos/Alpine_Digital_School_Logo.png"
                alt="Alpine Digital School Logo"
                width={32}
                height={32}
                priority
                className="
                  object-contain
                  drop-shadow-[0_0_12px_rgba(255,255,255,0.75)]
                "
              />
            </Link>

                <div>


                  <h2

                    className="
                      text-sm
                      font-black
                      text-slate-950
                    "

                  >

                    Alpine Digital School

                  </h2>

                  <div

                    className="
                      mt-1
                      flex
                      items-center
                      gap-1
                    "

                  >

                    <span

                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-widest
                        text-blue-900
                      "

                    >

                      A Digital Futuristic School

                    </span>


                  </div>


                </div>



              </div>

              {/* Close Button */}

              <button

                type="button"

                onClick={onClose}

                aria-label="Close navigation menu"


                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-slate-100
                  text-slate-700
                  transition
                  hover:bg-red-50
                  hover:text-red-600
                "

              >

                <X size={22}/>


              </button>

            </div>
            {/* Navigation Content */}


            <div
              className="
                flex-1
                overflow-y-auto
                px-6
                py-8
              "
            >

              <nav
                className="
                  space-y-3
                "
                aria-label="Mobile navigation"
              >

                {navLinks.map((link, index) => (


                  <motion.div

                    key={link.href}


                    initial={{
                      opacity: 0,
                      x: 30,
                    }}


                    animate={{
                      opacity: 1,
                      x: 0,
                    }}


                    transition={{
                      delay: index * 0.05,
                    }}

                  >



                    <Link

                      href={link.href}

                      onClick={onClose}


                      className="
                        group
                        flex
                        items-center
                        justify-between
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        px-5
                        py-4
                        text-sm
                        font-bold
                        text-slate-700
                        shadow-sm
                        transition-all
                        duration-300
                        hover:border-blue-200
                        hover:bg-blue-50
                        hover:text-blue-950
                      "

                    >

                      <span>

                        {link.label}

                      </span>

                      <ArrowRight

                        size={18}

                        className="
                          text-slate-400
                          transition-all
                          duration-300
                          group-hover:translate-x-1
                          group-hover:text-blue-700
                        "

                      />

                    </Link>

                  </motion.div>

                ))}

              </nav>

              {/* Admission Card */}

              <motion.div

                initial={{
                  opacity: 0,
                  y: 20,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  delay: 0.35,
                }}

                className="
                  mt-8
                  rounded-[2rem]
                  bg-gradient-to-br
                  from-blue-950
                  via-blue-900
                  to-indigo-800
                  p-6
                  text-white
                  shadow-xl
                "

              >

                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-yellow-400
                  "
                >

                  Admissions Open

                </p>

                <h3
                  className="
                    mt-3
                    text-2xl
                    font-black
                  "
                >

                  Start Your Journey

                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-blue-100
                  "
                >

                  Apply today and become part of a
                  future-ready learning environment.

                </p>

                <Link

                  href="/admissions"

                  onClick={onClose}

                  className="
                    mt-6
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-gradient-to-r
                    from-yellow-400
                    to-orange-500
                    px-5
                    py-3
                    text-sm
                    font-black
                    text-white
                    shadow-lg
                    transition
                    hover:scale-[1.03]
                  "

                >

                  Apply Now

                  <ArrowRight size={17}/>

                </Link>

              </motion.div>

            </div>

            {/* Bottom Branding */}

            <div

              className="
                border-t
                border-slate-200
                bg-slate-50
                px-6
                py-5
              "

            >

              <div

                className="
                  flex
                  items-center
                  justify-between
                "

              >

                <div>


                  <p

                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-slate-500
                    "

                  >

                    Alpine Digital School

                  </p>

                  <p

                    className="
                      mt-1
                      text-sm
                      font-semibold
                      text-blue-950
                    "

                  >

                    Excellence • Innovation • Growth

                  </p>

                </div>

                <div

                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-950
                    text-white
                    shadow-lg
                  "

                >

                  <GraduationCap size={20}/>


                </div>

              </div>

            </div>

          </motion.aside>

        </>

      )}

    </AnimatePresence>

  );

}