import React, { useState, useEffect } from "react";
import "./toggle.css";
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';

const Toggle = () => {
  // Estado para controlar se o modo escuro está ativo
  const [darkMode, setDarkMode] = useState(false);

  // Atualiza a classe do corpo baseada no estado darkMode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div id="darkmode">
      <input type="checkbox" className="checkbox" id="checkbox" onChange={() => setDarkMode(!darkMode)} />
      <label htmlFor="checkbox" className="label">
        <LightModeIcon htmlColor="white" sx={{ fontSize: "12px" }} />
        <ModeNightIcon htmlColor="yellow" sx={{ fontSize: "12px" }} />
        <div className="ball"></div>
      </label>
    </div>
  );
}

export default Toggle;
