import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      /* =========================================
         COLORS
      ========================================= */

      colors: {
        background: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        card: "var(--bg-card)",

        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",

        borderPrimary: "var(--border-primary)",

        accent: "var(--accent-primary)",
        accentSecondary: "var(--accent-secondary)",
      },

      /* =========================================
         SHADOWS
      ========================================= */

      boxShadow: {
        glow: "0 0 60px rgba(124,58,237,0.35)",

        card: "0 10px 40px rgba(0,0,0,0.25)",

        soft: "0 4px 20px rgba(0,0,0,0.15)",
      },

      /* =========================================
         BACKDROP BLUR
      ========================================= */

      backdropBlur: {
        xs: "2px",
      },

      /* =========================================
         BORDER RADIUS
      ========================================= */

      borderRadius: {
        primary: "24px",
        secondary: "18px",
      },

      /* =========================================
         TRANSITIONS
      ========================================= */

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },

      /* =========================================
         MAX WIDTH
      ========================================= */

      maxWidth: {
        container: "1280px",
      },

      /* =========================================
         ANIMATIONS
      ========================================= */

      animation: {
        float: "float 4s ease-in-out infinite",

        glow: "glowPulse 3s ease-in-out infinite",

        grid: "gridMove 12s linear infinite",
      },

      /* =========================================
         KEYFRAMES
      ========================================= */

      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },

          "50%": {
            transform: "translateY(-10px)",
          },
        },

        glowPulse: {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(124,58,237,0.25)",
          },

          "50%": {
            boxShadow: "0 0 40px rgba(124,58,237,0.45)",
          },
        },

        gridMove: {
          "0%": {
            backgroundPosition: "0 0",
          },

          "100%": {
            backgroundPosition: "40px 40px",
          },
        },
      },
    },
  },

  plugins: [
    function ({ addVariant }: any) {
      addVariant("light", "html.light &");
    },
  ],
};

export default config;
