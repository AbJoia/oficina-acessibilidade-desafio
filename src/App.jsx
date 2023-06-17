import React, { useEffect } from "react";
import { Home } from "./pages/Home";
import { ThemeContextProvider } from "./context/ThemeContext";

function App() {
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "/src/monitor-script-obfuscated.js";
  //   script.async = true;
  //   document.body.appendChild(script);
  // }, [])

  return (
    <ThemeContextProvider>
      <Home />
    </ThemeContextProvider>
  );
}

export default App;
