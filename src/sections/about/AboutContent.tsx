import GlassCard from "../../components/ui/GlassCard";
import GlowButton from "../../components/ui/GlowButton";

import { CheckCircle2, Download } from "lucide-react";

import { FaGithub } from "react-icons/fa";

import cvFile from "../../assets/cv/muzaffar-cv.pdf";

const features = [
  "Modern Web Application Specialist",
  "Full Stack MERN Developer",
  "Automation & AI Enthusiast",
  "Open to Opportunities",
];

function AboutContent() {
  return (
    <div className="flex flex-col justify-center">
      {/* SMALL TITLE */}
      <span className="mb-2 text-xs font-bold uppercase tracking-[3px] text-purple-400 light:text-purple-950">
        Who I Am
      </span>

      {/* HEADING */}
      <h2 className="text-4xl font-black leading-none xl:text-[52px]">
        About Me
      </h2>

      {/* DESCRIPTION */}
      <p className="mt-5 max-w-[620px] text-[15px] leading-7 text-textSecondary">
        I'm a Full Stack MERN Developer focused on building modern, scalable,
        and high-performance digital solutions. I specialize in creating clean
        user experiences, powerful backend systems, and smart automation
        workflows using modern web technologies.
      </p>

      <p className="mt-4 max-w-[620px] text-[15px] leading-7 text-textSecondary">
        I love turning ideas into real-world products that are fast, scalable
        and user-focused.
      </p>

      {/* FEATURES */}
      <div className="mt-6 space-y-4">
        {features.map((item) => (
          <div key={item} className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10">
              <CheckCircle2 size={15} className="text-purple-400" />
            </div>

            <span className="text-[15px] font-medium text-textPrimary">
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* BUTTONS */}
      <div className="mt-6 flex items-center gap-2 sm:gap-4">
        {/* CV */}
        <a href={cvFile} download>
          <GlowButton className="!inline-flex !flex-row !items-center !justify-center gap-3 whitespace-nowrap px-[12px] py-[12px] sm:px-7 sm:py-4">
            <span className="leading-none">Download CV</span>

            <Download size={19} className="shrink-0" />
          </GlowButton>
        </a>

        {/* GITHUB */}
        <a
          href="https://github.com/Muzaffar-Ameen"
          target="_blank"
          rel="noreferrer"
        >
          <GlassCard className="rounded-2xl border border-white/10  px-[17px] py-[12px] sm:px-7 sm:py-4">
            <div className="flex items-center justify-center gap-3 whitespace-nowrap">
              <span className="font-semibold leading-none">Visit GitHub</span>

              <FaGithub size={18} className="shrink-0" />
            </div>
          </GlassCard>
        </a>
      </div>
    </div>
  );
}

export default AboutContent;
