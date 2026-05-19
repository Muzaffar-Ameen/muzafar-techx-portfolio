import GlassCard from "../../components/ui/GlassCard";

import { ExternalLink } from "lucide-react";

import { FaGithub } from "react-icons/fa";

interface ProjectPreviewProps {
  index: number;

  project: {
    id: number;
    image: string;
    category: string;
    title: string;
    description: string;
    live: string;
    github: string;
    technologies: string[];
  };
}

function ProjectPreview({ project, index }: ProjectPreviewProps) {
  return (
    <GlassCard
      className="
        group relative flex h-full w-full flex-col overflow-hidden

        rounded-[28px]

        border
        border-white/10

        bg-[#0b1020]/80

        p-4

        backdrop-blur-2xl

        smooth-transition

        hover:-translate-y-[6px]
        hover:border-purple-500/20
        hover:shadow-[0_0_60px_rgba(124,58,237,0.12)]

        light:border-black/10
        light:bg-white/80
      "
    >
      {/* FLOATING NUMBER */}
      <div className="pointer-events-none absolute bottom-20 right-4 z-0 text-[120px] font-black leading-none text-purple-500/[0.08] smooth-transition group-hover:scale-110 group-hover:text-purple-400/[0.14] light:text-purple-500/[0.08] xl:text-[150px]">
        {String(index).padStart(2, "0")}
      </div>
      {/* IMAGE */}
      <div className="relative overflow-hidden rounded-[22px] border border-white/5 bg-black/20 light:border-black/5">
        {/* IMAGE OVERLAY */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 smooth-transition group-hover:opacity-100" />

        {/* IMAGE */}
        <img
          src={project.image}
          alt={project.title}
          className="
            h-[180px]
            w-full

            object-cover
            object-top

            smooth-transition

            group-hover:scale-[1.03]

            sm:h-[160px]
            lg:h-[180px]
          "
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mt-5 flex w-full flex-1 flex-col">
        {/* CATEGORY */}
        <div
          className="
            inline-flex
            w-fit

            rounded-full

            border
            border-purple-500/20

            bg-purple-500/10

            px-3
            py-1

            text-[11px]
            font-semibold
            uppercase
            tracking-[1px]

            text-purple-300

            light:border-purple-500/15
            light:bg-purple-500/10
            light:text-purple-700
          "
        >
          {project.category}
        </div>

        {/* TITLE */}
        <h3
          className="
            mt-4

            text-[24px]
            font-black

            leading-tight

            text-white

            light:text-black
          "
        >
          {project.title}
        </h3>

        {/* DESCRIPTION */}
        <p
          className="
    mt-3

    min-h-[120px]

    text-[14px]
    leading-[1.9]

    text-[#9ca3af]

    light:text-black/70
  "
        >
          {project.description}
        </p>

        {/* TECH STACK */}
        <div
          className="
    mt-[-30px]  

    flex
    min-h-[92px]
    flex-wrap
    content-start
    gap-2
    
  "
        >
          {project.technologies.map((tech, index) => {
            const techName =
              tech.split("/").pop()?.split(".")[0]?.replace("-", ".") || "Tech";

            return (
              <div
                key={index}
                className="group/tech relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] shadow-[0_0_18px_rgba(124,58,237,0.08)] smooth-transition hover:scale-[1.08] hover:border-purple-500/30 light:border-black/10 light:bg-black/[0.03]"
              >
                {/* TOOLTIP */}
                <div className="pointer-events-none absolute -top-11 left-1/2 z-30 -translate-x-1/2 whitespace-nowrap rounded-xl border border-purple-500/20 bg-[#0b1020]/95 px-3 py-1.5 text-[11px] font-semibold text-white opacity-0 shadow-[0_0_25px_rgba(124,58,237,0.18)] backdrop-blur-xl smooth-transition group-hover/tech:-top-12 group-hover/tech:opacity-100 light:border-black/10 light:bg-white/95 light:text-black">
                  {techName}
                </div>

                {/* TOOLTIP ARROW */}
                <div className="pointer-events-none absolute -top-[6px] left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-r border-b border-purple-500/20 bg-[#0b1020]/95 opacity-0 smooth-transition group-hover/tech:opacity-100 light:border-black/10 light:bg-white/95" />

                {/* ICON */}
                <img
                  src={tech}
                  alt={techName}
                  className="h-7 w-7 object-contain"
                />
              </div>
            );
          })}
        </div>

        {/* BUTTONS */}
        <div className="mt-auto grid grid-cols-2 gap-3 pt-6">
          {/* LIVE */}
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="w-full"
          >
            <button
              className="
                group/btn

                relative

                flex
                h-[48px]
                w-full

                items-center
                justify-center
                gap-2

                overflow-hidden

                rounded-[16px]

                border
                border-white/10

                bg-[#0d1324]

                text-sm
                font-semibold

                text-white

                smooth-transition

                hover:border-purple-500/30
                hover:bg-purple-500/10

                light:border-black/10
                light:bg-white
                light:text-black
              "
            >
              <ExternalLink size={16} />

              <span>Live Demo</span>
            </button>
          </a>

          {/* GITHUB */}
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="w-full"
          >
            <button
              className="
                group/btn

                relative

                flex
                h-[48px]
                w-full

                items-center
                justify-center
                gap-2

                overflow-hidden

                rounded-[16px]

                border
                border-white/10

                bg-[#0d1324]

                text-sm
                font-semibold

                text-white

                smooth-transition

                hover:border-purple-500/30
                hover:bg-purple-500/10

                light:border-black/10
                light:bg-white
                light:text-black
              "
            >
              <FaGithub size={17} />

              <span>GitHub</span>
            </button>
          </a>
        </div>
      </div>
    </GlassCard>
  );
}

export default ProjectPreview;
