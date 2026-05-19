import { useState } from "react";

import Container from "../../components/ui/Container";

import ContactInfo from "./ContactInfo";

import ContactTabs from "./ContactTabs";

import GeneralQueryForm from "./GeneralQueryForm";

import ProjectInquiryForm from "./ProjectInquiryForm";

export default function Contact() {
  const [activeTab, setActiveTab] = useState<"general" | "project">("general");

  return (
    <section
      id="contact"
      className="
        relative

        overflow-hidden

        py-2
        lg:py-2
        
      "
    >
      {/* GRID BG */}
      <div className="grid-background absolute inset-0 opacity-20" />

      {/* TOP GLOW */}
      <div
        className="
          absolute
          left-1/2
          top-0

          h-[420px]
          w-[420px]

          -translate-x-1/2

          rounded-full

          bg-purple-500/10

          blur-[120px]
          
        "
      />

      <Container>
        {/* WRAPPER */}
        <div
          className="
            relative

            overflow-hidden

            rounded-[36px]

            border
            border-purple-500/15

            bg-[linear-gradient(145deg,rgba(8,15,30,0.92),rgba(4,10,24,0.95))]

            p-5
            sm:p-7
            lg:p-10

            backdrop-blur-2xl

            light:border-black/10
            light:bg-white/80
          "
        >
          {/* INNER GLOW */}
          <div
            className="
              absolute
              inset-0

              bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.10),transparent_40%)]
               light:bg-white
            "
          />

          <div className="relative z-10">
            {/* TOP TAG */}
            <p
              className="
                text-[12px]
                font-semibold
                uppercase
                tracking-[3px]

                text-purple-300
                light:text-purple-950
              "
            >
              LET&apos;S CONNECT
            </p>

            {/* HEADING */}
            <div
              className="
                mt-4

                flex
                flex-col
                gap-6

                lg:flex-row
                lg:items-end
                lg:justify-between
                
              "
            >
              <div>
                <h2
                  className="
                    text-[44px]
                    font-black
                    leading-none

                    text-white

                    sm:text-[58px]

                    light:text-black
                  
                  "
                >
                  Get In Touch
                </h2>

                <p
                  className="
                    mt-5

                    max-w-[700px]

                    text-[16px]
                    leading-8

                    text-textSecondary

                    light:text-black/60
                  "
                >
                  Have a project idea, freelance opportunity, or just want to
                  connect? Let&apos;s build something premium together.
                </p>
              </div>

              {/* TABS */}
              <ContactTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>

            {/* CONTENT */}
            <div
              className="
                mt-14

                grid
                gap-8

                xl:grid-cols-[380px_1fr]
              "
            >
              {/* LEFT */}
              <ContactInfo />

              {/* RIGHT */}
              <div
                className="
                  relative

                  overflow-hidden

                  rounded-[32px]

                  border
                  border-purple-500/20

                  bg-[linear-gradient(145deg,rgba(17,24,39,0.72),rgba(9,15,29,0.55))]

                  p-6
                  sm:p-8

                  backdrop-blur-2xl

                  light:border-black/10
                  light:bg-white/80
                "
              >
                {/* FORM GLOW */}
                <div
                  className="
                    absolute
                    inset-0
                     light:bg-white
                  "
                />

                <div className="relative z-10">
                  {/* GENERAL FORM */}
                  <div
                    className={`
                      transition-all
                      duration-500
                      
                      ${
                        activeTab === "general"
                          ? "block animate-fadeIn"
                          : "hidden"
                      }
                    `}
                  >
                    <GeneralQueryForm />
                  </div>

                  {/* PROJECT FORM */}
                  <div
                    className={`
                      transition-all
                      duration-500
                       light:bg-white
                      ${
                        activeTab === "project"
                          ? "block animate-fadeIn"
                          : "hidden"
                      }
                    `}
                  >
                    <ProjectInquiryForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
