import React, {useEffect} from 'react';
import { Home } from "./pages/Home";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/src/monitor-script-obfuscated.js";
    script.async = true;
    document.body.appendChild(script);
  }, [])

  return (
    <Home /> 
  );
}

export default App;
