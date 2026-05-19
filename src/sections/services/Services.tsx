// Services.tsx

import Container from "../../components/ui/Container";
import ServicesGrid from "./ServicesGrid";

function Services() {
  return (
    <section
      className="relative overflow-hidden py-16 lg:py-16 -mt-20"
      id="services"
    >
      {/* GRID BG */}
      <div className="grid-background absolute inset-0 opacity-20" />

      {/* GLOW */}
      <div className="absolute left-1/2 top-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[140px]" />

      <Container>
        <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#070b18]/70 px-5 py-6 shadow-[0_0_50px_rgba(124,58,237,0.08)] backdrop-blur-2xl light:border-black/10 light:bg-white/90 sm:px-7 sm:py-7 lg:px-8 lg:py-8">
          <div className="mb-7">
            {/* TOP LABEL */}
            <span className="text-[13px] font-bold uppercase tracking-[4px] text-purple-400 light:text-purple-950">
              WHAT I DO
            </span>

            {/* TITLE + BUTTON */}
            <div className="mt-3 flex items-center justify-between gap-3">
              <h2 className="text-4xl font-black tracking-[-1px] text-white light:text-black sm:text-5xl max-[425px]:text-[30px]">
                Services
              </h2>
              <a href="#projects">
                <button className="group relative inline-flex h-[42px] shrink-0 items-center justify-center overflow-hidden rounded-[14px] border border-purple-500/40 bg-[#090f1d] px-4 text-sm font-semibold text-white shadow-[0_0_18px_rgba(124,58,237,0.16)] backdrop-blur-xl smooth-transition hover:-translate-y-[2px] hover:border-purple-400/60 hover:shadow-[0_0_35px_rgba(124,58,237,0.22)] light:border-black/150 light:bg-white light:text-black sm:h-[46px] sm:px-6">
                  {/* OUTER GLOW */}
                  <div className="absolute inset-0 rounded-[14px] border border-purple-500/30 opacity-90" />

                  {/* INNER LIGHT */}
                  <div className="absolute inset-[1px] rounded-[13px] border border-white/10 light:border-black/5" />

                  {/* TOP GLOW */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.18),transparent_72%)] opacity-80" />

                  {/* TEXT */}
                  <span className="relative z-10 tracking-[0.3px]">
                    Explore My Work
                  </span>
                </button>
              </a>
            </div>
          </div>

          {/* GRID */}
          <ServicesGrid />
        </div>
      </Container>
    </section>
  );
}

export default Services;
