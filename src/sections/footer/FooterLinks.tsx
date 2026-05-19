import { footerQuickLinks } from "../../data/footer";

export default function FooterLinks() {
  return (
    <div>
      <h3
        className="
          mb-5

          text-[18px]
          font-semibold

          text-white

          light:text-black
        "
      >
        Quick Links
      </h3>

      <ul className="space-y-3">
        {footerQuickLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="
                text-[15px]

                text-white/55

                transition-all
                duration-300

                hover:translate-x-1
                hover:text-purple-300

                light:text-black/60
                light:hover:text-purple-500
              "
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
