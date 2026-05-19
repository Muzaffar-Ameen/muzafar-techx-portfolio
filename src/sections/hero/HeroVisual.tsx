import GlassCard from "../../components/ui/GlassCard";

import heroDashboard from "../../assets/images/hero-dashboard.png";
// import heroGlow from "../../assets/images/hero-glow.png";
// import reactIcon from "../../assets/icons/react.png";
// import nodeIcon from "../../assets/icons/node.png";
// import mongoIcon from "../../assets/icons/mongodb.png";
function HeroVisual() {
  return (
    <div className="relative hidden min-h-[720px] flex-1 items-center justify-center lg:flex">
      {/* BIG GLOW */}
      <div className="absolute h-[700px] w-[700px] rounded-full bg-purple-500/10 blur-[160px]" />

      {/* CIRCLE */}
      <div className="absolute top-0 h-[400px] w-[400px] rounded-full border border-white/5 xl:h-[520px] xl:w-[520px] xl:ml-[20px]" />

      {/* LAPTOP IMAGE */}
      <div className="absolute right-0 top-10 w-[520px] xl:w-[750px] lg:right-[-100px] lg:top-2">
        {/* <img
          src={heroGlow}
          alt="Glow"
          className="absolute inset-0 scale-125 opacity-90"
        /> */}

        <img
          src={heroDashboard}
          alt="Dashboard"
          className="relative z-10 w-full drop-shadow-[0_0_60px_rgba(124,58,237,0.45)]"
        />
      </div>

      {/* CODE CARD */}
      <GlassCard className="absolute left-[-80px] top-[40px] z-20 h-[220px] w-[260px] overflow-hidden rounded-[32px] border border-white/10 bg-[#0b1020]/90 p-0 shadow-[0_0_60px_rgba(124,58,237,0.25)] backdrop-blur-2xl  lg:top-[-150px] light:bg-white/80 - xl:left-[-120px] xl:top-[-90px]">
        {/* TERMINAL BODY */}
        <div className="space-y-4 px-6 py-6 font-mono text-[10px] leading-loose -ml-4">
          {/* TERMINAL TOP BAR */}
          <div className="flex items-centerborder-white/5">
            {/* DOTS */}
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-red-400" />
              <div className="h-2 w-2 rounded-full bg-yellow-400" />
              <div className="h-2 w-2 rounded-full bg-green-400" />
            </div>
            {/* TITLE */}
            <span className="text-xs text-textSecondary ml-12">
              developer.tsx
            </span>
          </div>

          <p className="code-line code-line-1 text-orange-400">
            const developer = {"{"}
          </p>

          <p className="code-line code-line-2 pl-4 text-textSecondary">
            name:
            <span className="ml-2 text-green-400">"Muzaffar"</span>
          </p>

          <p className="code-line code-line-3 pl-4 text-textSecondary">
            stack:
            <span className="ml-2 text-blue-400">"MERN"</span>
          </p>

          <p className="code-line code-line-4 pl-4 text-textSecondary">
            passion:
            <span className="ml-2 text-yellow-400">
              "Building digital solutions"
            </span>
          </p>

          <p className="code-line code-line-5 text-orange-400 ml-3">{"}"}</p>
        </div>

        {/* GLOW */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/5" />
      </GlassCard>

      {/* REACT */}
      {/* <GlassCard className="absolute right-[120px] top-6 z-30 flex items-center gap-3 rounded-full border border-white/10 bg-[#111827]/80 px-5 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
        <img src={reactIcon} alt="React" className="h-5 w-5 object-contain" />

        <span className="text-sm font-semibold text-white">React.js</span>
      </GlassCard> */}

      {/* NODE */}
      {/* <GlassCard className="absolute right-[-10px] top-[180px] z-30 flex items-center gap-3 rounded-full border border-white/10 bg-[#111827]/80 px-5 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
        <img src={nodeIcon} alt="Node" className="h-5 w-5 object-contain" />

        <span className="text-sm font-semibold text-white">Node.js</span>
      </GlassCard> */}

      {/* MONGO */}
      {/* <GlassCard className="absolute left-[-20px] top-1/2 z-30 flex items-center gap-3 rounded-full border border-white/10 bg-[#111827]/80 px-5 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
        <img src={mongoIcon} alt="MongoDB" className="h-5 w-5 object-contain" />

        <span className="text-sm font-semibold text-white">MongoDB</span>
      </GlassCard> */}
    </div>
  );
}

export default HeroVisual;
