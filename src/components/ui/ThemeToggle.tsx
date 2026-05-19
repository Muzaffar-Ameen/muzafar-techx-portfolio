import { Moon, Sun } from "lucide-react";

import { useTheme } from "../../hooks/useTheme";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="
        group
        relative

        flex
        h-10
        w-10
        md:h-14
        md:w-14
        items-center
        justify-center

        overflow-hidden

        rounded-full

        border
        border-white/10

        bg-white/[0.04]

        backdrop-blur-2xl

        smooth-transition

        hover:-translate-y-1
        hover:scale-105

        hover:border-white/20

        hover:shadow-[0_0_30px_rgba(124,58,237,0.25)]
      "
    >
      {/* INNER GLOW */}
      <div
        className="
          absolute
          inset-0

          rounded-full

          bg-gradient-to-br
          from-purple-500/10
          to-blue-500/10

          opacity-0

          transition-opacity
          duration-500

          group-hover:opacity-100
        "
      />

      {/* ICON */}
      <div className="relative z-10">
        {theme === "dark" ? (
          <Sun
            size={20}
            className="
              text-yellow-400

              transition-transform
              duration-500

              group-hover:rotate-180
            "
          />
        ) : (
          <Moon
            size={20}
            className="
              text-purple-500

              transition-transform
              duration-500

              group-hover:-rotate-12
            "
          />
        )}
      </div>
    </button>
  );
}

export default ThemeToggle;
