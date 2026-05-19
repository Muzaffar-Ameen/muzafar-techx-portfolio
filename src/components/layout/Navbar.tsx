import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import navbarLogo from "../../assets/logos/muzafar-tech-logo-navbar.png";
import Container from "../ui/Container";
import GlowButton from "../ui/GlowButton";
import ThemeToggle from "../ui/ThemeToggle";

import MobileMenu from "./MobileMenu";

import { navigationLinks } from "../../constants/navigation";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  /* NAVBAR BG */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ACTIVE NAV LINK */
  useEffect(() => {
    const sections = navigationLinks.map((link) =>
      document.querySelector(link.href),
    );

    const handleActiveSection = () => {
      let currentSection = "";

      sections.forEach((section) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const sectionId = section.getAttribute("id");

        if (rect.top <= 180 && rect.bottom >= 180) {
          currentSection = sectionId || "";
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleActiveSection);

    handleActiveSection();

    return () => window.removeEventListener("scroll", handleActiveSection);
  }, []);
  /* CLOSE MOBILE MENU ON DESKTOP */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header
        className="
          fixed
          left-0
          top-0
          z-40
          w-full

          px-4
          pt-5
        "
      >
        <Container>
          <div
            className={`
              relative

              flex
              items-center
              justify-between

              rounded-full

              border
              border-white/10

              px-5
              py-1

             md:py-2
             lg:py-4
          

              
              backdrop-blur-3xl

              smooth-transition

              overflow-hidden

              ${
                scrolled
                  ? "bg-[var(--navbar-bg)] shadow-2xl"
                  : "bg-[var(--navbar-bg)]"
              }
            `}
          >
            {/* GLOW */}
            <div
              className="
                absolute
                left-1/2
                top-0

                h-[160px]
                w-[260px]

                -translate-x-1/2

                rounded-full

                bg-purple-500/10

                blur-[100px]
              "
            />

            {/* LOGO */}
            <a
              href="#home"
              className="relative z-10 flex items-center shrink-0 smooth-transition hover:scale-[1.03]"
            >
              <img
                src={navbarLogo}
                alt="Muzafar Tech"
                className="h-14 w-auto scale-[1.5] md:scale-[2.3] object-contain sm:h-11 lg:h-12"
              />
            </a>

            {/* DESKTOP NAV */}
            <nav
              className="
                relative
                z-10

                hidden
                items-center
                gap-10

                xl:flex
              "
            >
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`
  relative

  text-sm
  font-medium

  smooth-transition

  after:absolute
  after:-bottom-2
  after:left-0
  after:h-[2px]
  after:rounded-full
  after:bg-gradient-to-r
  after:from-purple-500
  after:to-blue-500
  after:transition-all
  after:duration-300

  hover:text-textPrimary
  hover:after:w-full

  ${
    activeSection === link.href.replace("#", "")
      ? " after:w-full"
      : "text-textSecondary after:w-0"
  }
`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* RIGHT SIDE */}
            <div
              className="
                relative
                z-10

                flex
                items-center
                gap-3
              "
            >
              {/* THEME */}
              <ThemeToggle />

              {/* CTA */}
              <a
                href="#contact"
                className="
    hidden
    xl:flex
  "
              >
                <GlowButton>Let's Talk</GlowButton>
              </a>

              {/* MOBILE MENU */}
              <button
                onClick={() => setIsOpen(true)}
                className="
                  flex
                  h-10
                  w-10
                  md:h-12
                  md:w-12
                  items-center
                  justify-center

                  rounded-full

                  border
                  border-white/10

                  bg-white/5

                  backdrop-blur-xl

                  smooth-transition

                  hover:scale-105
                  hover:bg-white/10

                  xl:hidden
                "
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* MOBILE MENU */}
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

export default Navbar;
