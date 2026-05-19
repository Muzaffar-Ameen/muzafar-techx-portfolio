import type { ButtonHTMLAttributes, ReactNode } from "react";

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function GlowButton({ children, className = "", ...props }: GlowButtonProps) {
  return (
    <button
      className={`
        group
        relative
        overflow-hidden

        rounded-[22px]

        px-8
        py-4

        font-semibold
        tracking-wide

        text-white

        transition-all
        duration-500
        ease-out

        hover:-translate-y-1
        hover:scale-[1.02]

        active:scale-[0.98]

        shadow-[0_10px_40px_rgba(124,58,237,0.35)]

        ${className}
      `}
      {...props}
    >
      {/* BUTTON BACKGROUND */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-r
          from-purple-600
          via-violet-500
          to-blue-500
        "
      />

      {/* HOVER LIGHT */}
      <div
        className="
          absolute
          inset-0

          opacity-0

          transition-opacity
          duration-500

          group-hover:opacity-100

          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_60%)]
        "
      />

      {/* GLOW */}
      <div
        className="
          absolute
          -inset-[2px]

          rounded-[24px]

          bg-gradient-to-r
          from-purple-500
          to-blue-500

          opacity-0
          blur-xl

          transition-opacity
          duration-500

          group-hover:opacity-40
        "
      />

      {/* CONTENT */}
      <span className="relative z-10 inline-flex items-center justify-center gap-3 whitespace-nowrap">
        {children}
      </span>
    </button>
  );
}

export default GlowButton;
