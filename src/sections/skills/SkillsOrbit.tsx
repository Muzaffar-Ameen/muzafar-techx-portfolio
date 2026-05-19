// SkillsOrbit.tsx

import reactLogo from "../../assets/logos/react.png";
import nodeLogo from "../../assets/logos/node.png";
import mongoLogo from "../../assets/logos/mongodb.png";
import expressLogo from "../../assets/logos/express.png";
import jsLogo from "../../assets/logos/javascript.png";
import tsLogo from "../../assets/logos/typescript.png";
import n8nLogo from "../../assets/logos/n8n.png";
import nextLogo from "../../assets/logos/next.png";
import { useEffect, useState } from "react";
const skills = [
  {
    name: "React.js",
    icon: reactLogo,
  },

  {
    name: "Node.js",
    icon: nodeLogo,
  },

  {
    name: "Express.js",
    icon: expressLogo,
  },

  {
    name: "TypeScript",
    icon: tsLogo,
  },

  {
    name: "n8n",
    icon: n8nLogo,
  },

  {
    name: "MongoDB",
    icon: mongoLogo,
  },

  {
    name: "JavaScript",
    icon: jsLogo,
  },

  {
    name: "Next.js",
    icon: nextLogo,
  },
];

function SkillsOrbit() {
  const [orbitSize, setOrbitSize] = useState(460);

  const [radius, setRadius] = useState(230);

  useEffect(() => {
    const updateOrbit = () => {
      if (window.innerWidth < 640) {
        setOrbitSize(240);
        setRadius(120);
      } else if (window.innerWidth < 1024) {
        setOrbitSize(360);
        setRadius(180);
      } else {
        setOrbitSize(460);
        setRadius(230);
      }
    };

    updateOrbit();

    window.addEventListener("resize", updateOrbit);

    return () => window.removeEventListener("resize", updateOrbit);
  }, []);

  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden py-10">
      {/* MAIN WRAPPER */}
      <div
        className="relative flex items-center justify-center"
        style={{
          width: orbitSize,
          height: orbitSize,
        }}
      >
        {/* OUTER GLOW */}
        <div className="absolute h-[85%] w-[85%] rounded-full bg-purple-500/10 blur-[90px]" />

        {/* ORBIT CIRCLE */}
        <div className="absolute inset-0 rounded-full border border-white/10 light:border-black/10" />

        {/* CENTER */}
        <div className="absolute z-20 flex items-center justify-center">
          <div className="relative flex h-[110px] w-[110px]  flex-col items-center justify-center rounded-full border border-purple-500/30 bg-[radial-gradient(circle,rgba(124,58,237,0.28),rgba(9,15,29,0.95))] shadow-[0_0_60px_rgba(124,58,237,0.30)] sm:h-[140px] sm:w-[140px] lg:h-[180px] lg:w-[180px] light:border-purple-500/20 light:bg-[radial-gradient(circle,rgba(124,58,237,0.12),rgba(255,255,255,0.95))]">
            {/* INNER RING */}
            <div className="absolute inset-[10px] rounded-full border border-white/10 light:border-black/10" />

            <h3 className="relative z-10 bg-gradient-to-r from-purple-300 via-violet-200 to-blue-300 bg-clip-text text-[28px] font-black uppercase leading-none text-transparent sm:text-[38px] lg:text-[52px]">
              MERN
            </h3>

            <p className="relative z-10 mt-1 text-[14px] font-bold tracking-[4px] text-white sm:text-[16px] lg:text-[22px] light:text-black">
              STACK
            </p>
          </div>
        </div>

        {/* SKILLS */}
        {skills.map((skill, index) => {
          const angle = (360 / skills.length) * index - 90;

          const x = Math.cos((angle * Math.PI) / 180) * radius;

          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <div
              key={skill.name}
              className="absolute z-30 "
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <div className="cursor-pointer group flex items-center gap-2 rounded-full border border-white/10 bg-[#111827]/80 px-2 py-1.5 shadow-[0_0_30px_rgba(124,58,237,0.10)] backdrop-blur-2xl smooth-transition hover:scale-[1.05] hover:border-purple-500/30 hover:shadow-[0_0_40px_rgba(124,58,237,0.18)] sm:gap-3 sm:px-3 sm:py-2 light:border-black/10 light:bg-white/85">
                {/* ICON */}
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] sm:h-10 sm:w-10 light:border-black/10 light:bg-black/[0.03]">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="h-3.5 w-3.5 object-contain sm:h-5 sm:w-5"
                  />
                </div>

                {/* TEXT */}
                <span className="pr-1 text-[10px] font-semibold text-white sm:text-sm light:text-black">
                  {skill.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillsOrbit;
