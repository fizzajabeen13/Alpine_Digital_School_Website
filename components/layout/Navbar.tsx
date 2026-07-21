"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Menu,
} from "lucide-react";
import { useEffect, useState } from "react";

import { navLinks } from "@/lib/constants/navigation";
import MobileMenu from "./MobileMenu";


export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);


  // Lock body scroll when menu opens
  useEffect(() => {

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } 
    else {
      document.body.style.overflow = "";
    }


    return () => {
      document.body.style.overflow = "";
    };

  }, [isOpen]);



  return (

    <>

<header
  className="
    sticky
    top-0
    z-50
    border-b
    border-blue-200/20
    bg-white/70
    backdrop-blur-md
    shadow-sm
  "
>
        <div
          className="
            mx-auto
            flex
            h-20
            max-w-7xl
            items-center
            justify-between
            px-4
            sm:px-6
            lg:px-8
          "
        >
          <Link
  href="/"
  className="
    group
    flex
    items-center
    gap-4
  "
>
  <Image
    src="/images/logos/Alpine_Digital_School_Logo.png"
    alt="Alpine Digital School Logo"
    width={55}
    height={55}
    className="
      h-12
      w-12
      object-contain
    "
  />

  <div>

    <h1
      className="
        whitespace-nowrap
        text-lg
        font-black
        leading-tight
        tracking-tight
        text-slate-950
        sm:text-xl
      "
    >
      Alpine Digital School
    </h1>

    <p
  className="
    mt-1
    whitespace-nowrap
    text-[9px]
    font-bold
    uppercase
    tracking-[0.18em]
    text-blue-900
    sm:text-[10px]
  "
>
  A Digital Futuristic School
</p>


  </div>

</Link>
  
          {/* Desktop Navigation */}


          <nav
            className="
              hidden
              items-center
              gap-2
              lg:flex
              ml-10
            "
            aria-label="Main navigation"
          >


            {navLinks.map((link) => (

              <Link
                key={link.href}
                href={link.href}

                className="
                  group
                  relative
                  px-3
                  py-2.5
                  text-sm
                  font-bold
                  text-slate-700
                  transition-all
                  duration-300
                  hover:text-blue-950
                  whitespace-nowrap
                "
              >


                <span
                  className="
                    relative
                    z-10
                  "
                >

                  {link.label}

                </span>



                {/* Animated Bottom Indicator */}


                <span
                  className="
                    absolute
                    bottom-1
                    left-1/2
                    h-0.5
                    w-0
                    -translate-x-1/2
                    rounded-full
                    bg-gradient-to-r
                    from-blue-900
                    to-yellow-500
                    transition-all
                    duration-300
                    group-hover:w-8
                  "
                />



              </Link>

            ))}



          </nav>
          {/* Desktop Actions */}


          <div
            className="
              hidden
              items-center
              gap-4
              lg:flex
            "
          >
            {/* Apply Now Button */}



            <Link
              href="/admissions"

              className="
                group
                relative
                overflow-hidden
                rounded-full
                min-w-[150px]
                whitespace-nowrap
                bg-gradient-to-r
                from-blue-950
                via-blue-800
                to-blue-700
                px-8
                py-3
                text-sm
                font-black
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >


              <span
                className="
                  relative
                  z-10
                "
              >

                Apply Now

              </span>




              {/* Hover Gradient */}


              <span
                className="
                  absolute
                  inset-0
                  translate-y-full
                  bg-gradient-to-r
                  from-yellow-500
                  to-orange-500
                  transition-transform
                  duration-300
                  group-hover:translate-y-0
                "
              />



            </Link>




          </div>
                    {/* Mobile Menu Button */}


          <button
            type="button"

            onClick={() => setIsOpen(true)}

            aria-label="Open navigation menu"

            aria-expanded={isOpen}

            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              border
              border-slate-200
              bg-white
              text-slate-800
              shadow-sm
              transition-all
              duration-300
              hover:border-blue-300
              hover:bg-blue-50
              lg:hidden
            "
          >


            <Menu
              size={26}

              className="
                transition-transform
                duration-300
              "
            />


          </button>




        </div>


      </header>





      {/* Mobile Navigation */}



      <MobileMenu

        isOpen={isOpen}

        onClose={() => setIsOpen(false)}

      />



    </>

  );

}
