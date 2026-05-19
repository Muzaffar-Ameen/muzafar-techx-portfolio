import { Icon } from "@iconify/react";

import { socialLinks } from "../../data/contact";

export default function FooterSocials() {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-3">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          title={social.name}
          className="
            group

            flex
            h-11
            w-11

            items-center
            justify-center

            rounded-[14px]

            border
            border-purple-500/20

            bg-[rgba(15,23,42,0.65)]

            text-white/70

            backdrop-blur-xl

            transition-all
            duration-300

            hover:-translate-y-1
            hover:border-purple-400/40
            hover:text-white
            hover:shadow-[0_0_30px_rgba(168,85,247,0.28)]

            light:border-black/10
            light:bg-white
            light:text-black/70
          "
        >
          <Icon
            icon={social.icon}
            className="
              text-[20px]

              transition-transform
              duration-300

              group-hover:scale-110
            "
          />
        </a>
      ))}
    </div>
  );
}
