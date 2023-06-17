import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext(null);

export function ThemeContextProvider(props) {
  const [altoContraste, setAltoContraste] = useState(false);

  function handleAltoContraste() {
    setAltoContraste(!altoContraste);
    localStorage.setItem("theme", JSON.stringify(!altoContraste));
  }

  useEffect(() => {
    var theme = JSON.parse(localStorage.getItem("theme"));
    if(theme === null) return;
    setAltoContraste(theme);
  }, [])

  useEffect(() => {
    if (altoContraste) {
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
    }
  }, [altoContraste]);

  return (
    <ThemeContext.Provider value={{ altoContraste, handleAltoContraste }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
