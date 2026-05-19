// SkillsCenter.tsx

function SkillsCenter() {
  return (
    <div className="relative z-20 flex h-[170px] w-[170px] items-center justify-center rounded-full border border-purple-500/20 bg-[#111827]/90 shadow-[0_0_60px_rgba(124,58,237,0.30)] backdrop-blur-2xl light:border-black/10 light:bg-white">
      {/* INNER GLOW */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.30),transparent_70%)]" />

      {/* RING */}
      <div className="absolute inset-[14px] rounded-full border border-purple-500/20" />

      {/* TEXT */}
      <div className="relative z-10 text-center">
        <h3 className="bg-gradient-to-r from-purple-400 via-violet-300 to-blue-400 bg-clip-text text-[40px] font-black leading-none text-transparent">
          MERN
        </h3>

        <p className="mt-2 text-[22px] font-bold tracking-[3px] text-white light:text-black">
          STACK
        </p>
      </div>
    </div>
  );
}

export default SkillsCenter;
