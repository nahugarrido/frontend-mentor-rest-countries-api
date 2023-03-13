import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import "../App.css";

const RootLayout = () => {
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
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
