import Container from "../../components/ui/Container";

import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";
import AboutCards from "./AboutCards";

function About() {
  return (
    <section className="relative overflow-hidden py-14 lg:py-20" id="about">
      {/* GRID BG */}
      <div className="grid-background absolute inset-0 opacity-20" />

      {/* GLOW */}
      <div className="absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[140px]" />

      <Container>
        <div className="glass-card relative z-10 overflow-hidden rounded-[36px] border border-white/10 px-5 py-5 sm:px-7 sm:py-7 xl:px-8 xl:py-8">
          <div className="grid items-start gap-6 xl:grid-cols-[260px_minmax(0,1fr)_420px]">
            {/* LEFT */}
            <AboutImage />

            {/* CENTER */}
            <AboutContent />

            {/* RIGHT */}
            <AboutCards />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
