import { Icon } from "@iconify/react";

import ContactSocials from "./ContactSocials";

import { contactInfo } from "../../data/contact";

export default function ContactInfo() {
  return (
    <div
      className="
        relative

        overflow-hidden

        rounded-[32px]

        border
        border-purple-500/20

        bg-[linear-gradient(145deg,rgba(17,24,39,0.72),rgba(9,15,29,0.55))]

        p-7

        backdrop-blur-2xl

        light:border-black/10
        light:bg-white/80
      "
    >
      {/* GLOW */}
      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.16),transparent_40%)]
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
        <h2
          className="
            mt-3

            text-[42px]
            font-black
            leading-none

            text-white

            light:text-black
           
          "
        >
          Get In Touch
        </h2>

        {/* INFO */}
        <div className="mt-10 space-y-5">
          {/* EMAIL */}
          <div className="flex items-start gap-4">
            <div
              className="
                flex
                h-12
                w-12

                shrink-0

                items-center
                justify-center

                rounded-[16px]

                border
                border-purple-500/20

                bg-[rgba(15,23,42,0.7)]

                light:border-black/10
                light:bg-white
              "
            >
              <Icon
                icon="mdi:email-outline"
                className="
                  text-[22px]

                  text-white

                  light:text-black
                "
              />
            </div>

            <div>
              <p
                className="
                  text-[13px]
                  font-semibold
                  uppercase
                  tracking-[2px]

                  text-white/40

                  light:text-black/40
                "
              >
                Email
              </p>

              <a
                href={`mailto:${contactInfo.email}`}
                className="
                  mt-1
                  block

                  text-[16px]
                  font-medium

                  text-white

                  transition-colors
                  duration-300

                  hover:text-purple-300

                  light:text-black
                "
              >
                {contactInfo.email}
              </a>
            </div>
          </div>

          {/* PHONE */}
          <div className="flex items-start gap-4">
            <div
              className="
                flex
                h-12
                w-12

                shrink-0

                items-center
                justify-center

                rounded-[16px]

                border
                border-purple-500/20

                bg-[rgba(15,23,42,0.7)]

                light:border-black/10
                light:bg-white
              "
            >
              <Icon
                icon="solar:phone-bold"
                className="
                  text-[22px]

                  text-white

                  light:text-black
                "
              />
            </div>

            <div>
              <p
                className="
                  text-[13px]
                  font-semibold
                  uppercase
                  tracking-[2px]

                  text-white/40

                  light:text-black/40
                "
              >
                Phone
              </p>

              <a
                href="tel:+923474862915"
                className="
                  mt-1
                  block

                  text-[16px]
                  font-medium

                  text-white

                  transition-colors
                  duration-300

                  hover:text-purple-300

                  light:text-black
                "
              >
                +92 347 4862915
              </a>
            </div>
          </div>

          {/* LOCATION */}
          <div className="flex items-start gap-4">
            <div
              className="
                flex
                h-12
                w-12

                shrink-0

                items-center
                justify-center

                rounded-[16px]

                border
                border-purple-500/20

                bg-[rgba(15,23,42,0.7)]

                light:border-black/10
                light:bg-white
              "
            >
              <Icon
                icon="mdi:location"
                className="
                  text-[22px]

                  text-white

                  light:text-black
                "
              />
            </div>

            <div>
              <p
                className="
                  text-[13px]
                  font-semibold
                  uppercase
                  tracking-[2px]

                  text-white/40

                  light:text-black/40
                "
              >
                Location
              </p>

              <p
                className="
                  mt-1

                  text-[16px]
                  font-medium

                  text-white

                  light:text-black
                "
              >
                {contactInfo.location}
              </p>
            </div>
          </div>
        </div>

        {/* AVAILABILITY */}
        <div
          className="
            mt-8

            inline-flex
            items-center
            gap-2

            rounded-full

            border
            border-emerald-500/20

            bg-emerald-500/10
          
            px-4
            py-2
          "
        >
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

          <span
            className="
              text-[13px]
              font-medium

              text-emerald-300
                light:text-gray-900
            "
          >
            Available Now
          </span>
        </div>

        {/* SOCIALS */}
        <div className="mt-10">
          <ContactSocials />
        </div>
      </div>
    </div>
  );
}
