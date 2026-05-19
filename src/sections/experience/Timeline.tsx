import ExperienceCard from "./ExperienceCard";

import { experiences } from "../../data/experience";

function Timeline() {
  const rows = [];

  for (let i = 0; i < experiences.length; i += 2) {
    rows.push(experiences.slice(i, i + 2));
  }

  return (
    <div
      className="
            relative

            mt-12

            flex
            flex-col

            gap-10

            xl:gap-16
        "
    >
      {/* CENTER LINE */}
      <div
        className="
            absolute

            left-6
            top-0

            h-full
            w-[2px]

            bg-gradient-to-b
            from-purple-500/10
            via-purple-500/80
            to-blue-500/10

            shadow-[0_0_30px_rgba(124,58,237,0.55)]

            xl:left-1/2
            xl:-translate-x-1/2
            "
      />

      {rows.map((row, rowIndex) => {
        const leftItem = row[0];
        const rightItem = row[1];

        return (
          <div
            key={rowIndex}
            className="
                relative

                grid
                grid-cols-1

                gap-8

                xl:grid-cols-2
                xl:gap-[110px]
                "
          >
            {/* LEFT LINE */}
            <div
              className="
                    absolute

                    left-6
                    top-[48px]

                    h-[2px]
                    w-[70px]

                    bg-gradient-to-r
                    from-purple-500/70
                    to-transparent

                    xl:left-[calc(50%-70px)]
                "
            />
            {/* MOBILE LEFT NODE */}
            <div
              className="
    absolute

    left-6
    top-10

    z-20

    flex
    h-5
    w-5

    -translate-x-1/2

    items-center
    justify-center

    rounded-full

    border
    border-purple-400/50

    bg-[#0b1020]

    shadow-[0_0_25px_rgba(124,58,237,0.85)]

    xl:hidden
  "
            >
              <div className="h-2 w-2 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.95)]" />
            </div>

            {/* LEFT CARD */}
            <div className="relative pl-16 xl:pl-0 xl:pr-[70px]">
              <ExperienceCard
                role={leftItem.role}
                company={leftItem.company}
                duration={leftItem.duration}
                description={leftItem.description}
                icon={leftItem.icon}
                side="left"
              />

              {/* FLOATING NUMBER */}
              <div
                className="
                    pointer-events-none

                    absolute
                    left-[200px]
                    md:left-[400px]
                    xl:left-[280px]
                    md:top-5
                    top-10

                    text-[90px]
                    font-black
                    leading-none

                    text-purple-500/[0.05]

                    sm:text-[100px]
                    xl:text-[120px]
                    "
              >
                0{leftItem.id}
              </div>
            </div>

            {/* DESKTOP CENTER NODE */}
            <div
              className="
                    absolute

                    left-6
                    top-10

                    hidden

                    z-20

                    h-5
                    w-5

                    -translate-x-1/2

                    items-center
                    justify-center

                    rounded-full

                    border
                    border-purple-400/50

                    bg-[#0b1020]

                    shadow-[0_0_25px_rgba(124,58,237,0.85)]

                    xl:left-1/2
                    xl:flex
                "
            >
              <div className="h-2 w-2 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.95)]" />
            </div>

            {/* RIGHT CARD */}
            {rightItem && (
              <>
                {/* RIGHT LINE */}
                <div
                  className="
        absolute

        left-6
   md:top-[calc(100%_-_140px)]
   top-[calc(100%_-_200px)]

        h-[2px]
        w-[70px]

        bg-gradient-to-r
        from-purple-500/70
        to-transparent

        xl:left-1/2
        xl:top-[48px]

        xl:bg-gradient-to-r
        xl:from-transparent
        xl:to-purple-500/70
        "
                />
                {/* MOBILE RIGHT NODE */}
                <div
                  className="
    absolute

    left-6
   md:top-[calc(100%_-_147px)]
   top-[calc(100%_-_207px)]
    z-20

    flex
    h-5
    w-5

    -translate-x-1/2

    items-center
    justify-center

    rounded-full

    border
    border-purple-400/50

    bg-[#0b1020]

    shadow-[0_0_25px_rgba(124,58,237,0.85)]

    xl:hidden
  "
                >
                  <div className="h-2 w-2 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.95)]" />
                </div>

                <div className="relative pl-16 xl:pl-[70px]">
                  <ExperienceCard
                    role={rightItem.role}
                    company={rightItem.company}
                    duration={rightItem.duration}
                    description={rightItem.description}
                    icon={rightItem.icon}
                    side="right"
                  />

                  {/* FLOATING NUMBER */}
                  <div
                    className="
                        pointer-events-none

                        absolute
                        right-[30px]
                        md:right-[120px]
                        lg:right-[350px]
                        xl:right-[50px]
                        top-10
                        md:top-5

                        text-[90px]
                        font-black
                        leading-none

                        text-purple-500/[0.05]

                        sm:text-[100px]
                        xl:text-[120px]
                        "
                  >
                    0{rightItem.id}
                  </div>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Timeline;
