import {
  createContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext =
  createContext<ThemeContextType>({
    theme: "dark",
    toggleTheme: () => {},
  });

interface Props {
  children: ReactNode;
}

export function ThemeProvider({
  children,
}: Props) {

  const [theme, setTheme] =
    useState<Theme>("dark");

  /* =========================================
     LOAD THEME
  ========================================= */

  useEffect(() => {

    const savedTheme =
      localStorage.getItem("theme") as Theme;

    if (savedTheme) {

      setTheme(savedTheme);

    } else {

      const prefersDark =
        window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;

      setTheme(
        prefersDark
          ? "dark"
          : "light"
      );

    }

  }, []);

  /* =========================================
     APPLY THEME
  ========================================= */

  useEffect(() => {

    const root =
      document.documentElement;

    if (theme === "light") {

      root.classList.add("light");

    } else {

      root.classList.remove("light");

    }

    localStorage.setItem(
      "theme",
      theme
    );

  }, [theme]);

  /* =========================================
     TOGGLE
  ========================================= */

  const toggleTheme = () => {

    setTheme((prev) =>
      prev === "dark"
        ? "light"
        : "dark"
    );

  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >

      {children}

    </ThemeContext.Provider>
  );
}