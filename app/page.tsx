import RevealOnScroll from "@/components/animations/RevealOnScroll";
import FormInput from "@/components/forms/FormInput";
import FormSelect from "@/components/forms/FormSelect";
import FormTextarea from "@/components/forms/FormTextarea";
import FormWrapper from "@/components/forms/FormWrapper";
import SubmitButton from "@/components/forms/SubmitButton";
import SuccessMessage from "@/components/forms/SuccessMessage";
import Hero from "@/components/home/Hero";
import Container from "@/components/ui/Container";
import StatsSection from "@/components/home/StatsSection";
import PrincipalMessage from "@/components/home/PrincipalMessage";
import SchoolVideo from "@/components/home/SchoolVideo";
import TestimonialSection from "@/components/home/TestimonialSection";
import CTASection from "@/components/home/CTASection";
import ChatWidget from "@/components/shared/ChatWidget";
import LatestNotices from "@/components/home/LatestNotices";
import StudentsAchievements from "@/components/home/StudentsAchievements";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <StatsSection />
      <PrincipalMessage />
      <SchoolVideo />
      <LatestNotices />
      <StudentsAchievements />
      <TestimonialSection />
      <CTASection />

      <section className="relative overflow-hidden bg-[#faf9f6] py-32">

  {/* Background Glow */}

  <div
    className="
      absolute
      -left-40
      top-20
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
      -right-40
      bottom-0
      h-[35rem]
      w-[35rem]
      rounded-full
      bg-blue-900/10
      blur-[170px]
    "
  />


  <Container>

    <RevealOnScroll>

      <div
        className="
          grid
          gap-12
          overflow-hidden
          rounded-[3rem]
          border
          border-slate-200
          bg-white
          p-8
          shadow-[0_30px_80px_rgba(0,0,0,0.08)]
          lg:grid-cols-[0.9fr_1.1fr]
          lg:p-14
        "
      >


        {/* LEFT INFORMATION PANEL */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[2.5rem]
            bg-gradient-to-br
            from-[#071A33]
            via-[#0b2447]
            to-[#061225]
            p-10
            text-white
          "
        >


          {/* Glow */}

          <div
            className="
              absolute
              -right-20
              -top-20
              h-64
              w-64
              rounded-full
              bg-yellow-400/20
              blur-[100px]
            "
          />


          <div className="relative z-10">


            <div
              className="
                inline-flex
                rounded-full
                border
                border-yellow-400/30
                bg-yellow-400/10
                px-5
                py-2
                text-sm
                font-semibold
                text-yellow-300
              "
            >
              Admission Open
            </div>



            <h2
              className="
                mt-8
                text-4xl
                font-black
                leading-tight
                lg:text-5xl
              "
            >
              Begin Your Child&apos;s
              
              <span className="block text-yellow-400">
                Bright Future
              </span>

            </h2>



            <p
              className="
                mt-6
                leading-8
                text-slate-300
              "
            >
              Join Alpine Digital School and provide your child with
              quality education, modern learning facilities, and a
              future-focused academic environment.
            </p>




            {/* Benefits */}

            <div className="mt-10 space-y-5">


              {[
                "Experienced Faculty Members",
                "Modern Digital Classrooms",
                "Activity Based Learning",
                "Safe & Supportive Environment",
              ].map((item)=>(
                
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    px-5
                    py-4
                    backdrop-blur-xl
                  "
                >

                  <div
                    className="
                      h-3
                      w-3
                      rounded-full
                      bg-yellow-400
                    "
                  />

                  <p className="font-medium text-slate-200">
                    {item}
                  </p>

                </div>

              ))}


            </div>




            {/* Stats */}

            <div
              className="
                mt-12
                grid
                grid-cols-2
                gap-5
              "
            >

              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-5
                "
              >

                <p className="text-3xl font-black text-yellow-400">
                  6+
                </p>

                <p className="mt-2 text-sm text-slate-300">
                  Years Excellence
                </p>

              </div>


              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-5
                "
              >

                <p className="text-3xl font-black text-yellow-400">
                  400+
                </p>

                <p className="mt-2 text-sm text-slate-300">
                  Successful Students
                </p>

              </div>


            </div>


          </div>


        </div>





        {/* FORM AREA */}

        <div className="flex items-center">

          <div className="w-full">


            <div className="mb-10">


              <h3
                className="
                  text-4xl
                  font-black
                  text-[#071A33]
                "
              >
                Admission Inquiry
              </h3>


              <p
                className="
                  mt-4
                  text-lg
                  leading-8
                  text-slate-600
                "
              >
                Submit your details and our admission team will contact
                you shortly.
              </p>


            </div>



            <FormWrapper
              title=""
              description=""
            >


              <SuccessMessage 
                message="Your inquiry will be reviewed by our admission team."
              />


              <div className="grid gap-5 md:grid-cols-2">


                <FormInput
                  label="Parent Name"
                  placeholder="Enter parent name"
                />


                <FormInput
                  label="Student Name"
                  placeholder="Enter student name"
                />


              </div>



              <FormSelect
                label="Applying Class"
                options={[
                  {
                    label:"Select Class",
                    value:""
                  },
                  {
                    label:"Primary",
                    value:"primary"
                  },
                  {
                    label:"Middle",
                    value:"middle"
                  },
                  {
                    label:"Secondary",
                    value:"secondary"
                  }
                ]}
              />



              <FormTextarea
                label="Message"
                placeholder="Write your message"
              />



              <SubmitButton>
                Submit Admission Inquiry
              </SubmitButton>


            </FormWrapper>


          </div>


        </div>



      </div>


    </RevealOnScroll>


  </Container>


</section>
      <ChatWidget />
    </main>
  );
}