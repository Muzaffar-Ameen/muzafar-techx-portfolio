import GlassCard from "../../components/ui/GlassCard";

import { Briefcase, Rocket, MapPin, Code2 } from "lucide-react";

const cards = [
  {
    icon: Briefcase,
    title: "Experience",
    badge: "Professional",
    lines: ["1+ Years", "Full Stack Development", "MERN Stack"],
  },

  {
    icon: Rocket,
    title: "Availability",
    badge: "Open To Work",
    lines: ["Full-time / Freelance", "Remote Friendly", "Immediate Joiner"],
  },

  {
    icon: MapPin,
    title: "Location",
    badge: "Based In",
    lines: ["Lahore, Pakistan", "Available Worldwide", "GMT +5"],
  },

  {
    icon: Code2,
    title: "Expertise",
    badge: "Tech Stack",
    lines: ["React & Next.js", "Node.js & Express", "MongoDB & APIs"],
  },
];
function AboutCards() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6 xl:gap-7">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <GlassCard
            key={card.title}
            className="group relativen max-[425px]:w-[310px] h-full min-h-[230px] xl:min-h-[260px] overflow-hidden rounded-[30px] border border-purple-500/20 bg-[linear-gradient(145deg,rgba(17,24,39,0.95),rgba(9,15,29,0.92))] p-5 lg:p-6 xl:p-7 smooth-transition hover:-translate-y-[6px] hover:border-purple-400/40 hover:shadow-[0_0_60px_rgba(124,58,237,0.22)] light:border-black/10 light:bg-[linear-gradient(145deg,rgba(255,255,255,0.96),rgba(248,250,252,0.92))] sm:p-6"
          >
            {/* TOP SPOTLIGHT */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent  to-transparent opacity-70" />

            {/* CONTENT */}
            <div className="relative z-10 flex h-[180px] flex-col">
              {/* TOP CONTENT */}
              <div className="flex flex-row items-center gap-4 lg:flex-col lg:items-start lg:gap-3">
                {/* ICON */}
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-[20px] border border-purple-500/20 bg-gradient-to-br from-[#1d2540] via-[#171f35] to-[#0f172a] shadow-[0_0_30px_rgba(124,58,237,0.18)] smooth-transition group-hover:scale-[1.06] group-hover:rotate-[6deg] group-hover:shadow-[0_0_35px_rgba(124,58,237,0.35)] light:border-black/10 light:from-white light:via-[#f8fafc] light:to-[#eef2ff] lg:h-14 lg:w-14 xl:h-10 xl:w-10 xl:mt-[-10px]">
                  <Icon
                    size={20}
                    className="shrink-0 text-white light:text-black"
                  />
                </div>

                {/* TITLE */}
                <div className="flex-1">
                  <h3 className="text-[20px] font-black tracking-[-0.5px] text-white drop-shadow-[0_0_12px_rgba(168,85,247,0.18)] smooth-transition group-hover:text-white light:group-hover:text-black light:text-black lg:text-[24px] xl:text-[20px]">
                    {card.title}
                  </h3>

                  <div className="mt-2 h-[2px] w-12 rounded-full bg-gradient-to-r from-purple-500 via-violet-400 to-blue-500 shadow-[0_0_18px_rgba(124,58,237,0.45)] smooth-transition group-hover:w-20 lg:w-14 lg:group-hover:w-24" />
                </div>
              </div>

              {/* LINES */}
              <div className="xl:mt-[2px] flex flex-1 flex-col gap-3 mt-3 xl:gap-1">
                {card.lines.map((line) => (
                  <div key={line} className="flex items-center gap-3">
                    {/* DOT */}
                    <div className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(124,58,237,0.95)]" />

                    <p className="light:group-hover:text-black text-[14px] font-medium leading-[1.7] text-[#c4cbe0] smooth-transition group-hover:text-[#dbe3f7] light:text-black/70">
                      {line}
                    </p>
                  </div>
                ))}
              </div>

              {/* FLOATING NUMBER */}
              <div className="pointer-events-none absolute top-10 right-5 text-[70px] xl:text-[92px] font-black leading-none text-purple-500/[0.06] smooth-transition group-hover:text-purple-400/[0.10] light:text-purple-500/[0.2]">
                0{index + 1}
              </div>
            </div>
          </GlassCard>
        );
      })}
    </div>
  );
}

export default AboutCards;
