import GlassCard from "../../components/ui/GlassCard";

interface ExperienceCardProps {
  role: string;
  company: string;
  duration: string;
  description: string;

  icon: React.ElementType;

  side: "left" | "right";
}

function ExperienceCard({
  role,
  company,
  duration,
  description,
  icon: Icon,
  side,
}: ExperienceCardProps) {
  return (
    <div
      className={`
        relative

        flex
        w-full

        items-start

        gap-5

        ${side === "left" ? "xl:justify-end" : "xl:justify-start"}
      `}
    >
      {/* CARD */}
      <GlassCard
        className="
          group

          relative
          w-full
          max-w-[520px]

          overflow-hidden

          rounded-[28px]

          border
          border-white/[0.06]
           light:border-black/10
          light:bg-white/80

          p-5

          backdrop-blur-2xl

          smooth-transition

          hover:-translate-y-[4px]
          
          hover:border-purple-500/20

      
          hover:shadow-[0_0_45px_rgba(124,58,237,0.14)]

         

          sm:p-6
        "
      >
        {/* TOP GLOW */}
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.14),transparent_45%)] opacity-70" /> */}

        {/* CONTENT */}
        <div className="relative z-10 ">
          {/* TOP */}
          <div className="flex items-start justify-between gap-4">
            {/* LEFT */}
            <div className="flex items-start gap-4">
              {/* ICON */}
              <div
                className="
                  flex
                  h-12
                  w-12

                  shrink-0

                  items-center
                  justify-center

                  rounded-[18px]

                  border
                  border-purple-500/20

                  shadow-[0_0_30px_rgba(124,58,237,0.16)]

                  smooth-transition

                  group-hover:scale-[1.06]
                  group-hover:shadow-[0_0_35px_rgba(124,58,237,0.28)]

                  light:border-black/10
                     light:bg-white
                "
              >
                <Icon size={20} className="text-white light:text-black " />
              </div>

              {/* TEXT */}
              <div>
                <h3
                  className="
                    text-[18px]
                    font-bold

                    tracking-[-0.5px]

                    text-white

                    light:text-black

                    sm:text-[20px]
                  "
                >
                  {role}
                </h3>

                <p
                  className="
                    mt-1

                    text-[14px]
                    font-medium

                    text-purple-300/90

                    light:text-black/60
                  "
                >
                  {company}
                </p>
              </div>
            </div>

            {/* DURATION */}
            <div
              className="
                hidden

                rounded-full

                border
                border-white/10

                bg-white/[0.03]

                px-4
                py-2

                text-[12px]
                sm:text-[8px]
                font-semibold

                text-textSecondary

                backdrop-blur-xl

                light:border-black/10
                light:bg-black/[0.03]

                md:flex
              "
            >
              {duration}
            </div>
          </div>

          {/* MOBILE DURATION */}
          <div
            className="
              mt-4

              flex
              w-fit

              rounded-full

              border
              border-white/10

              bg-white/[0.03]

              px-3
              py-1.5

              text-[11px]
              font-semibold

              text-textSecondary

              backdrop-blur-xl

              light:border-black/10
              light:bg-black/[0.03]

              md:hidden
            "
          >
            {duration}
          </div>

          {/* DESCRIPTION */}
          <p
            className="
              mt-5

              max-w-[95%]

              text-[14px]
              leading-7

              text-textSecondary

              smooth-transition

              group-hover:text-[#dbe3f7]
              light:group-hover:text-[#090b12]


              light:text-black/65
            "
          >
            {description}
          </p>
        </div>
      </GlassCard>
    </div>
  );
}

export default ExperienceCard;
