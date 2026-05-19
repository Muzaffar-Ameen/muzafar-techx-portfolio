import Container from "../../components/ui/Container";

import SkillsOrbit from "./SkillsOrbit";

function Skills() {
  return (
    <section className="relative overflow-hidden py-4 lg:py-4 mx:md:py-2">
      {/* GRID */}
      <div className="grid-background absolute inset-0 opacity-20" />

      {/* GLOW */}
      <div className="absolute left-1/2 top-1/2 " />

      <Container>
        <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#0b1020]/85 px-5 py-8 shadow-[0_0_60px_rgba(124,58,237,0.10)] backdrop-blur-2xl light:border-black/10 light:bg-white/80 sm:px-7 lg:px-10">
          {/* TOP */}
          <div className="mb-2 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            {/* LEFT */}
            <div>
              <span className="text-[13px] font-bold uppercase tracking-[4px] text-purple-400">
                TECH STACK
              </span>

              <h2 className="mt-2 text-4xl font-black text-white light:text-black sm:text-5xl">
                My Skills
              </h2>
            </div>

            {/* BUTTON */}
            {/* <button className="group relative inline-flex h-[46px] items-center justify-center overflow-hidden rounded-[14px] border border-purple-500/40 bg-[#090f1d] px-6 text-sm font-semibold text-white shadow-[0_0_18px_rgba(124,58,237,0.16)] backdrop-blur-xl smooth-transition hover:-translate-y-[2px] hover:border-purple-400/60 hover:shadow-[0_0_35px_rgba(124,58,237,0.22)] light:border-black/15 light:bg-white light:text-black">
              <div className="absolute inset-0 rounded-[14px] border border-purple-500/30 opacity-90" />

              <div className="absolute inset-[1px] rounded-[13px] border border-white/10 light:border-black/5" />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.18),transparent_72%)] opacity-80" />

              <span className="relative z-10 tracking-[0.3px]">
                Explore All
              </span>
            </button> */}
          </div>

          {/* ORBIT */}
          <div className="relative flex items-center justify-center overflow-hidden py-2 px-0">
            {/* <SkillsCenter /> */}

            <SkillsOrbit />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Skills;
