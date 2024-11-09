import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

export function ThemeContextProvider({ children }) {
  const [darkThemeIsActive, setDarkThemeIsActive] = useState(false);

  function handleTheme() {
    setDarkThemeIsActive(!darkThemeIsActive);
    localStorage.setItem("theme", JSON.stringify(!darkThemeIsActive));
  }

  useEffect(() => {
    let value = JSON.parse(localStorage.getItem("theme"));
    if (value === undefined) return;
    setDarkThemeIsActive(value);
  }, []);

  useEffect(() => {
    if (darkThemeIsActive) {
      document.documentElement.style.setProperty(
        "--backgroud-color",
        "var(--preto-primario)"
      );
      document.documentElement.style.setProperty(
        "--font-color",
        "var(--branco-primario)"
      );
      document.documentElement.style.setProperty(
        "--font-color-variant",
        "var(--preto-primario)"
      );
      document.documentElement.style.setProperty(
        "--backgroud-section-color",
        "var(--preto-primario)"
      );
      document.documentElement.style.setProperty(
        "--backgroud-section-color-variant",
        "var(--preto-primario)"
      );
      document.documentElement.style.setProperty(
        "--title-color",
        "var(--branco-primario)"
      );
      document.documentElement.style.setProperty(
        "--title-color-variant",
        "var(--amarelo-primario)"
      );
      document.documentElement.style.setProperty(
        "--hover-color",
        "var(--amarelo-primario)"
      );
      document.documentElement.style.setProperty(
        "--accessibility-background-color",
        "var(--preto-secundario)"
      );
      document.documentElement.style.setProperty(
        "--button-color",
        "var(--amarelo-primario)"
      );
      document.documentElement.style.setProperty(
        "--default-border-color",
        "var(--amarelo-primario)"
      );
    } else {
      document.documentElement.style.setProperty(
        "--backgroud-color",
        "var(--branco-primario)"
      );
      document.documentElement.style.setProperty(
        "--font-color",
        "var(--preto-primario)"
      );
      document.documentElement.style.setProperty(
        "--font-color-variant",
        "var(--branco-primario)"
      );
      document.documentElement.style.setProperty(
        "--backgroud-section-color",
        "var(--branco-primario)"
      );
      document.documentElement.style.setProperty(
        "--backgroud-section-color-variant",
        "var(--branco-secundario)"
      );
      document.documentElement.style.setProperty(
        "--title-color",
        "var(--verde-primario)"
      );
      document.documentElement.style.setProperty(
        "--title-color-variant",
        "var(--preto-primario)"
      );
      document.documentElement.style.setProperty(
        "--hover-color",
        "var(--verde-primario)"
      );
      document.documentElement.style.setProperty(
        "--accessibility-background-color",
        "var(--cinza-claro)"
      );
      document.documentElement.style.setProperty(
        "--button-color",
        "var(--verde-escuro)"
      );
      document.documentElement.style.setProperty(
        "--default-border-color",
        "var(--preto-secundario)"
      );
    }
  }, [darkThemeIsActive]);

  return (
    <ThemeContext.Provider value={{ darkThemeIsActive, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
