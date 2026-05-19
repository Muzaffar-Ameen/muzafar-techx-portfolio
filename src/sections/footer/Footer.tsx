import Container from "../../components/ui/Container";

import FooterBottom from "./FooterBottom";
import FooterBrand from "./FooterBrand";
import FooterCTA from "./FooterCTA";
import FooterLinks from "./FooterLinks";
import FooterServices from "./FooterServices";

export default function Footer() {
  return (
    <footer
      className="
        relative

        overflow-hidden

        border-t
        border-purple-500/10

  

        py-16
        lg:py-20
        mt-10
        light:bg-white
         light:border-purple-500/100
      "
    >
      {/* GRID BG */}
      <div className="grid-background absolute inset-0 opacity-[0.04]" />

      {/* TOP GLOW */}
      <div
        className="
          absolute
          left-1/2
          top-0

          h-[300px]
          w-[300px]

          -translate-x-1/2

          rounded-full

          bg-purple-500/10

          blur-[120px]
          
        "
      />

      {/* SIDE GLOW */}
      <div
        className="
          absolute
          right-0
          top-1/2

          h-[260px]
          w-[260px]

          -translate-y-1/2

          rounded-full

          bg-blue-500/10

          blur-[120px]
          
        "
      />

      <Container>
        {/* MAIN GRID */}
        <div
          className="
            relative
            z-10

            grid
            gap-14

            lg:grid-cols-[1.2fr_0.8fr_0.9fr_1.1fr]
            
          "
        >
          {/* BRAND */}
          <FooterBrand />

          {/* LINKS */}
          <FooterLinks />

          {/* SERVICES */}
          <FooterServices />

          {/* CTA */}
          <FooterCTA />
        </div>

        {/* BOTTOM */}
        <FooterBottom />
      </Container>
    </footer>
  );
}
