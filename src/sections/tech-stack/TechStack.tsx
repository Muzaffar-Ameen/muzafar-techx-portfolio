import Container from "../../components/ui/Container";

import reactLogo from "../../assets/logos/react.png";
import nodeLogo from "../../assets/logos/node.png";
import mongoLogo from "../../assets/logos/mongodb.png";
import n8nLogo from "../../assets/logos/n8n.png";
import tsLogo from "../../assets/logos/typescript.png";
import jsLogo from "../../assets/logos/javascript.png";
import nextLogo from "../../assets/logos/next.png";
import expressLogo from "../../assets/logos/express.png";
import aspLogo from "../../assets/logos/asp-net.png";

const stackLogos = [
  reactLogo,
  nodeLogo,
  mongoLogo,
  n8nLogo,
  tsLogo,
  jsLogo,
  nextLogo,
  expressLogo,
  aspLogo,
];

function TechStack() {
  return (
    // <section className="relative border-y border-white/10 py-8 md:py-9 lg:py-10">
    <section className="relative py-2 lg:py-4 xl:py-6 mx-md:mt-[-80px] lg:mt-[-60px] xl:mt-[2px]">
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[120px]" />

      <Container>
        {/* MARQUEE WRAPPER */}
        <div className="border-y border-white/10 light:border-black/20 relative overflow-hidden py-4 ">
          {/* LEFT FADE */}
          <div className="absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-background to-transparent md:w-24" />

          {/* RIGHT FADE */}
          <div className="absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-background to-transparent md:w-24" />

          {/* TRACK */}
          <div className="animate-marquee flex w-max items-center gap-8 md:gap-12 lg:gap-14">
            {[...stackLogos, ...stackLogos].map((logo, index) => (
              <div
                key={index}
                className="group flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-[22px] border border-white/10 bg-[#0b1020]/90 p-4 shadow-[0_0_30px_rgba(124,58,237,0.08)] backdrop-blur-xl smooth-transition hover:-translate-y-1 hover:border-purple-500/30 hover:bg-purple-500/10 md:h-[84px] md:w-[84px] lg:h-[90px] lg:w-[90px]"
              >
                <img
                  src={logo}
                  alt="stack-logo"
                  className="h-full w-full object-contain opacity-80 smooth-transition group-hover:scale-110 group-hover:opacity-100 !mt-2 group-hover:cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default TechStack;
