import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: "autoUpdate",

      includeAssets: ["favicon.svg", "apple-touch-icon.png"],

      manifest: {
        name: "Muzafar Tech",

        short_name: "Muzafar Tech",

        description: "Modern Full Stack MERN Developer Portfolio",

        theme_color: "#0b1020",

        background_color: "#0b1020",

        display: "standalone",

        orientation: "portrait",

        scope: "/",

        start_url: "/",

        icons: [
          {
            src: "/pwa-192x192.png",

            sizes: "192x192",

            type: "image/png",
          },

          {
            src: "/pwa-512x512.png",

            sizes: "512x512",

            type: "image/png",
          },

          {
            src: "/apple-touch-icon.png",

            sizes: "180x180",

            type: "image/png",
          },
        ],
      },
    }),
  ],
});
