import React, { useState } from "react";
import Card from "./components/card";
import "./App.css";

function App() {
  const [mode, setMode] = useState("dark");

  const changeMode = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  return (
    <div className={`size App-${mode}`}>
      <button onClick={changeMode}>Cambiar modo</button>
      <Card />
    </div>
  );
}

export default App;
