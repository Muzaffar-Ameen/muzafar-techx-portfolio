import { footerServices } from "../../data/footer";

export default function FooterServices() {
  return (
    <div className="lg:ml-[-95px]">
      <h3
        className="
          mb-5

          text-[18px]
          font-semibold

          text-white

          light:text-black
        "
      >
        Services
      </h3>

      <ul className="space-y-3">
        {footerServices.map((service) => (
          <li
            key={service}
            className="
              group

              flex
              items-center
              gap-3
            "
          >
            <div
              className="
                h-2
                w-2

                rounded-full

                bg-gradient-to-r
                from-purple-400
                to-blue-400

                transition-all
                duration-300

                group-hover:scale-125
                group-hover:shadow-[0_0_12px_rgba(168,85,247,0.9)]
              "
            />

            <span
              className="
                text-[15px]

                text-white/55

                transition-all
                duration-300

                group-hover:translate-x-1
                group-hover:text-purple-300

                light:text-black/60
              "
            >
              {service}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
