import { X } from "lucide-react";

import GlowButton from "../ui/GlowButton";

import { navigationLinks } from "../../constants/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <>
      {/* BACKDROP */}
      <div
        onClick={onClose}
        className={`
          fixed
          inset-0
          z-40

          bg-black/55

          backdrop-blur-xl

          smooth-transition

          duration-500

          ${
            isOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* DRAWER */}
      <div
        className={`
          fixed
          right-0
          top-0
          z-50

          flex
          h-screen
          w-[80%]
          max-w-[340px]
          flex-col

          overflow-hidden

          border-l
          border-white/10

          bg-[linear-gradient(145deg,rgba(10,14,30,0.96),rgba(5,8,22,0.98))]

          px-6
          py-6

          shadow-[0_0_80px_rgba(124,58,237,0.18)]

          backdrop-blur-3xl

          smooth-transition
          duration-500

          light:border-black/10
          light:bg-[linear-gradient(145deg,rgba(255,255,255,0.97),rgba(248,250,252,0.96))]

          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* TOP GLOW */}
        <div
          className="
            absolute
            right-[-60px]
            top-[-60px]

            h-[180px]
            w-[180px]

            rounded-full

            bg-purple-500/20

            blur-[100px]
          "
        />

        {/* BOTTOM GLOW */}
        <div
          className="
            absolute
            bottom-[-80px]
            left-[-80px]

            h-[220px]
            w-[220px]

            rounded-full

            bg-blue-500/10

            blur-[120px]
          "
        />

        {/* TOP */}
        <div
          className="
            relative
            z-10

            flex
            items-center
            justify-between
          "
        >
          {/* TITLE */}
          <div>
            <p
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[4px]

                text-purple-400
              "
            >
              Navigation
            </p>

            <h2
              className="
                mt-2

                text-[42px]
                font-black
                leading-none

                gradient-text
              "
            >
              Menu
            </h2>
          </div>

          {/* CLOSE */}
          <button
            onClick={onClose}
            className="
              group

              relative

              flex
              h-12
              w-12

              shrink-0

              items-center
              justify-center

              overflow-hidden

              rounded-full

              border
              border-white/10

              bg-white/[0.05]

              backdrop-blur-xl

              smooth-transition

              hover:scale-[1.05]
              hover:border-purple-500/30
              hover:bg-purple-500/10

              light:border-black/10
              light:bg-black/[0.03]
            "
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.16),transparent_70%)] opacity-0 smooth-transition group-hover:opacity-100" />

            <X size={22} className="relative z-10" />
          </button>
        </div>

        {/* NAVIGATION */}
        <nav
          className="
            relative
            z-10
            mt-1
            flex
            flex-col

          "
        >
          {navigationLinks.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="
                  group

                  relative

                  flex
                  items-center
                  justify-between

                  overflow-hidden

                  rounded-[22px]

                  border
                  border-transparent

                  px-4
                  py-3

                  smooth-transition

                  hover:border-white/10
                  hover:bg-white/[0.03]

                  light:hover:border-black/5
                  light:hover:bg-black/[0.03]
                "
            >
              {/* HOVER GLOW */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(124,58,237,0.14),transparent_65%)] opacity-0 smooth-transition group-hover:opacity-100" />

              {/* ACTIVE / HOVER LINE */}
              <div
                className="
                    absolute
                    bottom-0
                    left-4

                    h-[2px]
                    w-0

                    rounded-full

                    bg-gradient-to-r
                    from-purple-500
                    to-blue-500

                    smooth-transition

                    group-hover:w-[42px]
                  "
              />

              {/* TEXT */}
              <span
                className="
                    relative
                    z-10

                    text-[24px]
                    font-bold
                    tracking-[-0.5px]

                    text-[#d7def0]

                    smooth-transition

                    group-hover:translate-x-1
                    group-hover:text-white

                    light:text-black/80
                    light:group-hover:text-black
                  "
              >
                {item.label}
              </span>

              {/* NUMBER */}
              <span
                className="
                    relative
                    z-10

                    text-[13px]
                    font-semibold

                    text-white/20

                    smooth-transition

                    group-hover:text-purple-300/60

                    light:text-black/20
                  "
              >
                0{index + 1}
              </span>
            </a>
          ))}
        </nav>

        {/* FOOTER */}
        <div
          className="
            relative
            z-10

            mt-auto
            pt-8
          "
        >
          {/* DIVIDER */}
          <div
            className="
              mb-6

              h-px
              w-full

              bg-gradient-to-r
              from-transparent
              via-white/10
              to-transparent

              light:via-black/10
            "
          />

          {/* BUTTON */}
          <a href="#contact">
            <GlowButton
              className="
      h-[54px]
      w-full

      justify-center

      rounded-[20px]

      text-base
      font-bold
    "
            >
              Let's Talk
            </GlowButton>
          </a>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
