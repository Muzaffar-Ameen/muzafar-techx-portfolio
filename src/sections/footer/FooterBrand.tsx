import navbarLogo from "../../assets/logos/muzafar-tech-logo-navbar.png";

import { footerDescription } from "../../data/footer";

import FooterSocials from "./FooterSocials";

export default function FooterBrand() {
  return (
    <div>
      <img
        src={navbarLogo}
        alt="Muzafar Tech"
        className="h-14 w-auto object-contain scale-[2]"
      />

      <p
        className="
          mt-5

          max-w-[320px]

          text-[15px]
          leading-7

          text-white/55

          light:text-black/60
        "
      >
        {footerDescription}
      </p>

      <FooterSocials />
    </div>
  );
}
