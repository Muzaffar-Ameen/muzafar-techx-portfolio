import { BadgeCheck, Briefcase, FolderKanban, Layers3 } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: "1+",
    label: "Years Experience",
    description: "Building modern solutions",
  },

  {
    icon: FolderKanban,
    value: "5+",
    label: "Projects Delivered",
    description: "Across diverse industries",
  },

  {
    icon: Layers3,
    value: "6+",
    label: "Technologies",
    description: "In the tech arsenal",
  },

  {
    icon: BadgeCheck,
    value: "100%",
    label: "Client Satisfaction",
    description: "Commitment to quality",
  },
];

function HeroStatsStrip() {
  return (
    <div className="relative z-20 mt-6 lg:mt-[-80px]">
      {/* WRAPPER */}
      <div className="glass-card grid gap-6 rounded-[28px] border border-white/10 px-3 py-3 shadow-soft md:grid-cols-2 md:px-6 md:py-6 xl:grid-cols-4 xl:px-7 xl:py-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="group flex items-start gap-4 rounded-2xl smooth-transition hover:translate-y-[-3px]"
            >
              {/* ICON */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_20px_rgba(124,58,237,0.08)] smooth-transition group-hover:border-purple-500/30 group-hover:bg-purple-500/10 md:h-14 md:w-14">
                <Icon size={20} className="text-purple-400 md:size-6" />
              </div>

              {/* CONTENT */}
              <div>
                {/* VALUE */}
                <h3 className="gradient-text text-3xl font-black leading-none md:text-[34px]">
                  {item.value}
                </h3>

                {/* LABEL */}
                <p className="mt-2 text-base font-semibold text-textPrimary md:text-[17px]">
                  {item.label}
                </p>

                {/* DESCRIPTION */}
                <p className="mt-1 text-xs leading-relaxed text-textSecondary md:text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HeroStatsStrip;
