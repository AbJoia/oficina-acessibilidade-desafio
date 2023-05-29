import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext(null);

export function ThemeContextProvider(props) {
  const [altoContraste, setAltoContraste] = useState(false);

  useEffect(() => {
    let localStorageValue = JSON.parse(localStorage.getItem("altoContraste"));
    if (localStorageValue) {
      setAltoContraste(localStorageValue);
    }
  }, []);

  function handleSetAltoContraste(value) {
    setAltoContraste(value);
    localStorage.setItem("altoContraste", JSON.stringify(value));
  }

  return (
    <ThemeContext.Provider value={{ altoContraste, handleSetAltoContraste }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
