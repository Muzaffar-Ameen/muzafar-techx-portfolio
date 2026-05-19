import footerLogo from "../../assets/logos/muzafar-tech-logo.png";

import { footerCTA } from "../../data/footer";

export default function FooterCTA() {
  return (
    <div className="relative overflow-hidden lg:ml-[-180px]">
      <div className="relative z-10 sm:ml-[20px]">
        <h3
          className="
            text-[24px]
            font-bold

            text-white

            light:text-black
          "
        >
          {footerCTA.title}
        </h3>

        <p
          className="
            mt-4

            max-w-[320px]

            text-[15px]
            leading-7

            text-white/55

            light:text-black/60
          "
        >
          {footerCTA.description}
        </p>

        <a
          href={footerCTA.buttonHref}
          className="
            group
            mt-7

            inline-flex
            items-center
            gap-3

            rounded-[18px]

            bg-gradient-to-r
            from-purple-500
            to-blue-500

            px-6
            py-4

            text-[15px]
            font-semibold
            text-white

            transition-all
            duration-300

            hover:scale-[1.03]
            hover:shadow-[0_0_35px_rgba(168,85,247,0.35)]
          "
        >
          {footerCTA.buttonText}

          <span
            className="
              transition-transform
              duration-300

              group-hover:translate-x-1
            "
          >
            →
          </span>
        </a>

        <img
          src={footerLogo}
          alt="Muzafar Tech"
          className="
            pointer-events-none

            absolute
            right-[-20px]
            top-[10px]

            w-[140px]

            opacity-100

            select-none
            sm:mt-0
            mt-[60px]
          "
        />
      </div>
    </div>
  );
}
