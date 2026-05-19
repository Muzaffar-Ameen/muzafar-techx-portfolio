// ServicesGrid.tsx

import {
  Blocks,
  Bot,
  BriefcaseBusiness,
  LayoutPanelTop,
  Palette,
  Workflow,
} from "lucide-react";

const services = [
  {
    icon: BriefcaseBusiness,
    title: "Full Stack Web Apps",
    description: "End-to-end web applications using MERN stack.",
    gradient: "from-purple-500/15 via-violet-500/10 to-transparent",
    iconColor: "text-violet-400",
  },

  {
    icon: Blocks,
    title: "SaaS Development",
    description: "Scalable SaaS products with modern architecture.",
    gradient: "from-cyan-500/15 via-sky-500/10 to-transparent",
    iconColor: "text-cyan-400",
  },

  {
    icon: LayoutPanelTop,
    title: "Landing Pages",
    description: "High-converting responsive landing pages.",
    gradient: "from-blue-500/15 via-indigo-500/10 to-transparent",
    iconColor: "text-blue-400",
  },

  {
    icon: Workflow,
    title: "API Integration",
    description: "RESTful APIs & third-party integrations.",
    gradient: "from-pink-500/15 via-purple-500/10 to-transparent",
    iconColor: "text-pink-400",
  },

  {
    icon: Bot,
    title: "Automation Workflows",
    description: "n8n workflows, bots & process automation.",
    gradient: "from-sky-500/15 via-cyan-500/10 to-transparent",
    iconColor: "text-sky-400",
  },

  {
    icon: Palette,
    title: "UI/UX Implementation",
    description: "Pixel-perfect UI with smooth user experience.",
    gradient: "from-yellow-500/15 via-orange-500/10 to-transparent",
    iconColor: "text-yellow-400",
  },
];

function ServicesGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {services.map((service, index) => {
        const Icon = service.icon;

        return (
          <div
            key={service.title}
            className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1020]/80 p-5 backdrop-blur-xl smooth-transition hover:-translate-y-[6px] hover:border-purple-500/20 hover:shadow-[0_0_35px_rgba(124,58,237,0.12)] light:border-black/10 light:bg-white/80"
          >
            {/* GRADIENT */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-100`}
            />

            {/* LIGHT OVERLAY */}
            <div className="absolute inset-0 opacity-0 smooth-transition group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_70%)]" />

            {/* FLOATING NUMBER */}
            <div className="pointer-events-none absolute right-4 lg:top-20 top-6 text-[72px] font-black leading-none text-white/[0.03]  smooth-transition group-hover:scale-110 group-hover:text-purple-400/[0.08] light:text-purple-500/[0.2] xl:text-[88px]">
              0{index + 1}
            </div>
            {/* CONTENT */}
            <div className="relative z-10">
              {/* ICON */}
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_0_20px_rgba(124,58,237,0.08)] light:border-black/10 light:bg-black/[0.03]">
                <Icon size={24} className={`${service.iconColor}`} />
              </div>

              {/* TITLE */}
              <h3 className="min-h-[56px] text-[16px] font-bold leading-[1.3] text-white light:text-black">
                {service.title}
              </h3>

              {/* DESC */}
              <p className="mt-2 max-w-[95%] text-[13px] leading-7 text-textSecondary light:text-black/60">
                {service.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ServicesGrid;
