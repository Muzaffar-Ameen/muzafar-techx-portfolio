import aboutProfile from "../../assets/images/about-profile.png";

import { MapPin } from "lucide-react";

function AboutImage() {
  return (
    <div className="mx-auto w-full max-w-[270px] xl:max-w-[290px]">
      {/* MAIN CARD */}
      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#050816] p-5 shadow-[0_0_80px_rgba(124,58,237,0.12)] light:border-black/10 light:bg-white/[0.92]">
        {/* OUTER GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.22),transparent_42%)] light:bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.12),transparent_42%)]" />

        {/* IMAGE BOX */}
        <div className="relative overflow-hidden rounded-[30px] border border-white/5 bg-[#030712] light:border-black/10 light:bg-[#0b1020]">
          {/* PURPLE SHAPE */}
          <div className="absolute right-[-30px] top-[-10px] h-[250px] w-[230px] rotate-[35deg] rounded-[80px] bg-gradient-to-br from-purple-600 via-violet-500/80 to-blue-500/10 blur-[3px]" />

          {/* SIDE GLOW */}
          <div className="absolute left-[-12px] top-[140px] h-14 w-14 rounded-full border border-purple-500/20 bg-purple-500/10 blur-sm" />

          {/* IMAGE */}
          <div className="relative z-10 flex items-end justify-center px-4 pt-8 mr-8">
            <img
              src={aboutProfile}
              alt="Muzafar Tech"
              className="
              scale-[1.9]
                h-[340px]
                w-auto
                object-contain

                smooth-transition
              "
            />
          </div>

          {/* DARK FADE */}
          <div className="absolute bottom-0 left-0 h-28 w-full bg-gradient-to-t from-[#030712] via-[#030712]/80 to-transparent" />

          {/* SIGNATURE */}
          <div className="absolute bottom-9 left-1/2 z-20 -translate-x-1/2 text-center">
            <h2
              className="rotate-[-6deg] bg-gradient-to-r from-cyan-200 via-sky-300 to-blue-400 bg-clip-text text-[40px] font-bold leading-[0.9] tracking-normal text-transparent drop-shadow-[0_0_22px_rgba(34,211,238,0.85)]"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Muzafar
            </h2>

            <h2
              className="-mt-2 ml-8 rotate-[-6deg] bg-gradient-to-r from-cyan-200 via-sky-300 to-blue-400 bg-clip-text text-[40px] font-bold leading-[0.9] tracking-normal text-transparent drop-shadow-[0_0_22px_rgba(34,211,238,0.85)]"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Tech
            </h2>
          </div>
        </div>

        {/* LOCATION CARD */}
        <div className="relative z-20 mt-5 overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-[1px] shadow-[0_0_25px_rgba(124,58,237,0.10)] light:border-black/10">
          <div className="flex items-center justify-center gap-2 rounded-2xl bg-[#0b1020]/90 py-3 backdrop-blur-xl">
            <MapPin size={15} className="text-purple-400" />

            <span className="text-sm font-semibold text-white">
              Lahore, Pakistan
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutImage;
