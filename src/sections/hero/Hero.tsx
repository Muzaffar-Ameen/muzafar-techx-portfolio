import Container from "../../components/ui/Container";
import GradientText from "../../components/ui/GradientText";
import GlowButton from "../../components/ui/GlowButton";
import GlassCard from "../../components/ui/GlassCard";

import HeroVisual from "./HeroVisual";
import HeroStatsStrip from "./HeroStatsStrip";

import { heroData } from "../../data/hero";

function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-40 pb-24 lg:pb-32 xl:pt-[120px] xl:pb-4"
      id="home"
    >
      {/* GRID */}
      <div className="grid-background absolute inset-0 opacity-30" />

      {/* GLOW */}
      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[140px]" />

      <Container>
        {/* HERO GRID */}
        <div className="relative z-10 grid items-center gap-16 lg:grid-cols-[1fr_1.1fr]">
          {/* LEFT */}
          <div className="w-full max-w-[620px] flex-shrink-0 translate-y-[-40px]">
            {/* BADGE */}
            <GlassCard className="mb-8 rounded-full px-5 py-3 w-[280px] max-[426px]:w-[220px] max-[426px]:mt-[40px] md:mt-[10px]">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 animate-pulse rounded-full bg-green-400" />

                <span className="text-sm font-medium text-textSecondary max-[426px]:text-[10px]">
                  {heroData.badge}
                </span>
              </div>
            </GlassCard>

            {/* HEADING */}
            <h1 className="flex min-h-[320px] max-w-[620px] flex-col text-[35px] font-black leading-[1.15] tracking-[-2px] min-[480px]:text-[50px] sm:text-[56px] md:text-[60px] lg:text-[68px] xl:text-[65px]">
              <div className="overflow-hidden">
                <span className="hero-line hero-line-1 inline-block whitespace-nowrap">
                  {heroData.title.first}
                </span>
              </div>

              <div className="overflow-hidden">
                <GradientText className="hero-line hero-line-2 inline-block whitespace-nowrap">
                  {heroData.title.gradient}
                </GradientText>
              </div>

              <div className="overflow-hidden">
                <span className="hero-line hero-line-3 inline-block whitespace-nowrap">
                  {heroData.title.third}
                </span>
              </div>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-8 max-w-[580px] text-lg leading-relaxed text-justify text-textSecondary md:mt-[-60px] max-[426px]:mt-[-150px] xl:mt-[-50px]">
              {heroData.description}
            </p>

            {/* BUTTONS */}
            <div className="mt-6 flex flex-wrap gap-5 max-md:flex-nowrap max-md:gap-3">
              <a href="#projects">
                <GlowButton className="max-md:px-4 max-md:py-2 max-md:text-sm">
                  {heroData.buttons.primary}
                </GlowButton>
              </a>

              <GlassCard className="px-8 py-4 max-md:px-4 max-md:py-2">
                <a href="#contact">
                  <button className="font-medium max-md:text-sm">
                    {heroData.buttons.secondary}
                  </button>
                </a>
              </GlassCard>
            </div>
          </div>

          {/* RIGHT */}
          <HeroVisual />
        </div>

        {/* STATS */}
        <HeroStatsStrip />
      </Container>
    </section>
  );
}

export default Hero;
