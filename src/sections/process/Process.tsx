import Container from "../../components/ui/Container";

import ProcessSteps from "./ProcessSteps";

function Process() {
  return (
    <section
      className="
        relative
        overflow-hidden

        py-10
        lg:py-2
      "
      id="process"
    >
      {/* BG */}
      <div className="grid-background absolute inset-0 opacity-20" />

      {/* TOP GLOW */}
      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[130px]" />

      <Container>
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
            {/* LABEL */}
            <p
              className="
                text-sm
                font-bold

                uppercase
                tracking-[6px]

                text-purple-400
              "
            >
              HOW I WORK
            </p>

            {/* TITLE */}
            <div
              className="
                mt-4

                flex
                flex-col
                gap-5

                lg:flex-row
                lg:items-center
                lg:justify-between
              "
            >
              <h2
                className="
                  text-5xl
                  font-black

                  tracking-[-2px]

                  text-white

                  light:text-black

                  sm:text-6xl
                "
              >
                My Process
              </h2>
            </div>

            <ProcessSteps />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Process;
