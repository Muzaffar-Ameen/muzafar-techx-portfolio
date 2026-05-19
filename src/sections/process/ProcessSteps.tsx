import GlassCard from "../../components/ui/GlassCard";

import { processSteps } from "../../data/process";

function ProcessSteps() {
  return (
    <div
      className="
        relative
        mt-14
      "
    >
      {/* LINE */}
      <div
        className="
          absolute

          left-0
          right-0
          top-[44px]

          hidden
          h-[2px]

          bg-gradient-to-r
          from-transparent
          via-purple-500/30
          to-transparent

          xl:block
        "
      />

      {/* STEPS */}
      <div
        className="
          relative
          z-10

          grid
          grid-cols-1

          gap-10

          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-6
        "
      >
        {processSteps.map((step) => {
          const Icon = step.icon;

          return (
            <div
              key={step.id}
              className="
                relative

                flex
                flex-col
                items-center

                text-center
              "
            >
              {/* ICON */}
              <div
                className="
                  relative

                  flex
                  h-[88px]
                  w-[88px]

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-purple-500/20

                 

                  shadow-[0_0_35px_rgba(124,58,237,0.16)]

                  backdrop-blur-2xl

                  smooth-transition

                  hover:-translate-y-1
                  hover:border-purple-500/40
                  hover:shadow-[0_0_45px_rgba(124,58,237,0.28)]

                  light:border-black/20
                  light:bg-white
                   light:hover:border-purple-500/80
                "
              >
                {/* GLOW */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-[radial-gradient(circle,rgba(124,58,237,0.14),transparent_65%)]
                  "
                />

                <Icon
                  size={34}
                  className="
                    relative
                    z-10

                    text-purple-300

                    light:text-black
                  "
                />
              </div>

              {/* NUMBER */}
              <div
                className="
    mt-5
    text-[30px]
    font-black
    tracking-[-1px]
    text-white
    light:text-black

    transition-all
    duration-300
    ease-out

    hover:scale-110
    hover:rotate-6
  "
              >
                {step.id}
              </div>

              {/* TITLE */}
              <h3
                className="
                  mt-1

                  text-[20px]
                  font-bold

                  text-white

                  light:text-black
                "
              >
                {step.title}
              </h3>

              {/* DESC */}
              <p
                className="
                  mt-3

                  max-w-[180px]

                  text-[14px]
                  leading-7

                  text-textSecondary

                  light:text-black/60
                "
              >
                {step.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* BOTTOM CARD */}
      <GlassCard
        className="
    relative
    mx-auto
    mt-16
    overflow-hidden
    rounded-[24px]
    border
    border-purple-500/20
  
    px-1
    py-1
    shadow-[0_0_40px_rgba(124,58,237,0.10)]
    backdrop-blur-2xl
    light:border-black/10
    light:bg-white/80
    sm:px-6
    sm:py-5

    w-[315px]

    md:w-[600px]
    lg:w-[700px]
    xl:w-[860px]
    md:max-w-[860px]
  "
      >
        {/* ROW */}
        <div
          className="
      relative
      z-10

      flex
      items-center
      gap-5
      
    "
        >
          {/* ICON */}
          <div
            className="
        flex
        sm:h-[64px]
        sm:w-[64px]

        h-[40px]
        w-[40px]
        shrink-0

        items-center
        justify-center

        rounded-[18px]

        border
        border-purple-500/20

     

        light:border-black/20
        light:bg-white
      "
          >
            <div
              className="
          flex
          h-7
          w-7

          items-center
          justify-center

          rounded-full

          border-[5px]
          border-orange-400
        "
            >
              <div className="h-2 w-2 rounded-full bg-orange-400" />
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div className="flex-1">
            {/* TITLE */}
            <h3
              className="
          flex
          flex-wrap
          items-center

          gap-y-1
          
          text-[9px]
          font-bold

          leading-[1.5]
          ml-[-24px]
         sm:ml-0
          text-white

          light:text-black

          sm:text-[18px]
        "
            >
              <span>Clean Code</span>

              <span className="mx-3 text-purple-400">•</span>

              <span>Best Practices</span>

              <span className="mx-3 text-purple-400">•</span>

              <span>Scalable Solutions</span>
            </h3>

            {/* DESCRIPTION */}
            <p
              className="
          mt-2

          max-w-[620px]

          text-[10px]
          leading-6

          text-textSecondary

          light:text-black/60

          sm:text-[14px]
          sm:ml-0
          ml-[-10px]
        "
            >
              I follow modern development practices to deliver high-quality
              products that are maintainable and future-ready.
            </p>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}

export default ProcessSteps;
