export default function FooterBottom() {
  return (
    <div
      className="
        mt-12

        flex
        flex-col
        items-center
        justify-between
        gap-4

        border-t
        border-purple-500/10

        pt-6

        text-center

        md:flex-row
      "
    >
      <p
        className="
          text-[14px]

          text-white/40

          light:text-black/50
        "
      >
        © 2026 Muzafar Ameen. All rights reserved.
      </p>

      <p
        className="
          text-[14px]

          text-white/40

          light:text-black/50
        "
      >
        Designed & Developed by Muzafar Tech
      </p>
    </div>
  );
}
