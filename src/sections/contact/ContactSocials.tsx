import { Icon } from "@iconify/react";

import { socialLinks } from "../../data/contact";

export default function ContactSocials() {
  return (
    <div className="flex flex-wrap gap-3">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          title={social.name}
          className="
            group
            relative

            flex
            h-10
            w-10

            items-center
            justify-center

            overflow-hidden

            rounded-[16px]

            border
            border-purple-500/20

            bg-[rgba(15,23,42,0.7)]

            text-white

            backdrop-blur-xl

            transition-all
            duration-300

            hover:-translate-y-1
            hover:border-purple-400/50
            hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]

            light:border-black/10
            light:bg-white
            light:text-black
              light:hover:border-purple-400/100
          "
        >
          <Icon
            icon={social.icon}
            className="
              text-[22px]

              transition-transform
              duration-300

              group-hover:scale-110
            "
          />

          {/* TOOLTIP */}
          <div
            className="
              pointer-events-none

              absolute
              -top-11
              left-1/2

              -translate-x-1/2
              scale-95
              opacity-0

              rounded-full

              bg-black/90

              px-3
              py-1.5

              text-[11px]
              font-medium
              text-white

              transition-all
              duration-300

              group-hover:scale-100
              group-hover:opacity-100

              light:bg-white
              light:text-black
              light:shadow-lg
            "
          >
            {social.name}
          </div>
        </a>
      ))}
    </div>
  );
}
