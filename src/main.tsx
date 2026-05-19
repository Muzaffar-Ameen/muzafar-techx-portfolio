import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/great-vibes/400.css";
import App from "./App.tsx";

import "@fontsource/dancing-script/700.css";
import { ThemeProvider } from "./context/ThemeContext";

/* =========================================
   GLOBAL STYLES
========================================= */

import "./styles/globals.css";
import "./styles/theme.css";
import "./styles/utilities.css";
import "./styles/animations.css";

/* =========================================
   FONTS
========================================= */

import "@fontsource/inter/400.css";

/* =========================================
   RENDER APP
========================================= */

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
