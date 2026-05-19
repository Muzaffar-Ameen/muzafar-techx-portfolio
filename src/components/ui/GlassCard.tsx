import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`
        relative
        overflow-hidden

        rounded-[28px]

        border
        border-white/10

        bg-white/[0.04]
        dark:bg-white/[0.04]

        light:bg-black/[0.02]

        backdrop-blur-2xl
        supports-[backdrop-filter]:bg-white/[0.04]

        shadow-[0_8px_40px_rgba(0,0,0,0.25)]

        transition-all
        duration-500
        ease-out

        before:absolute
        before:inset-0
        before:rounded-[28px]

        before:bg-gradient-to-br
        before:from-white/[0.08]
        before:to-transparent

        before:opacity-100
        before:pointer-events-none

        hover:border-white/20
        hover:shadow-[0_0_60px_rgba(124,58,237,0.18)]

        ${className}
      `}
    >
      {/* INNER GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[28px]

          bg-gradient-to-br
          from-purple-500/[0.04]
          via-transparent
          to-blue-500/[0.03]
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}

export default GlassCard;
