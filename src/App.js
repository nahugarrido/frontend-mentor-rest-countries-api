import React, { useState } from "react";
import Header from "./components/Header/Header";
import Home from "./views/Home";
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
      <Header onClick={changeMode} isDark={mode} />
      <Home />
    </div>
  );
}

export default App;
