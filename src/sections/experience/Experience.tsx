import Container from "../../components/ui/Container";

import Timeline from "./Timeline";

function Experience() {
  return (
    <section
      id="experience"
      className="
        relative

        overflow-hidden

        py-10

        lg:py-2
      "
    >
      {/* GRID BG */}
      <div className="grid-background absolute inset-0 opacity-20" />

      {/* TOP GLOW */}
      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[130px]" />

      {/* BOTTOM GLOW */}
      <div className="absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-[120px]" />

      <Container>
        {/* WRAPPER */}
        <div
          className="
            relative

            overflow-hidden

            rounded-[34px]

            border
            border-white/[0.06]

            bg-[#0b1020]/85

            px-5
            py-8

            shadow-[0_0_60px_rgba(124,58,237,0.10)]

            backdrop-blur-2xl

            light:border-black/10
            light:bg-white/80

            sm:px-7
            sm:py-9

            lg:px-10
            lg:py-10
          "
        >
          {/* INNER GLOW */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_30%)]" />

          {/* CONTENT */}
          <div className="relative z-10">
            {/* TOP */}
            <div className="mb-10">
              {/* LABEL */}
              <span className="text-[13px] font-bold uppercase tracking-[4px] text-purple-400">
                JOURNEY
              </span>

              {/* TITLE + BUTTON */}
              <div className="mt-3 flex items-center justify-between gap-4">
                {/* TITLE */}
                <h2 className="text-[34px] font-black tracking-[-1px] text-white light:text-black sm:text-5xl">
                  Experience
                </h2>

                {/* BUTTON */}
                {/* <button
                  className="
                    group

                    relative

                    inline-flex
                    h-[44px]

                    shrink-0

                    items-center
                    justify-center

                    overflow-hidden

                    rounded-[16px]

                    border
                    border-purple-500/30

                    bg-[#090f1d]

                    px-5

                    text-[13px]
                    font-semibold

                    text-white

                    shadow-[0_0_25px_rgba(124,58,237,0.12)]

                    backdrop-blur-xl

                    smooth-transition

                    hover:-translate-y-[2px]
                    hover:border-purple-400/40
                    hover:shadow-[0_0_35px_rgba(124,58,237,0.20)]

                    light:border-black/10
                    light:bg-white
                    light:text-black

                    sm:h-[48px]
                    sm:px-6
                    sm:text-sm
                  "
                >
                  GLOW
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.16),transparent_70%)] opacity-80" />

                  INNER BORDER
                  <div className="absolute inset-0 rounded-[16px] border border-white/5 light:border-black/5" />

                  TEXT
                  <span className="relative z-10 tracking-[0.3px]">
                    View Full Resume
                  </span>
                </button> */}
              </div>
            </div>

            {/* TIMELINE */}
            <Timeline />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Experience;
