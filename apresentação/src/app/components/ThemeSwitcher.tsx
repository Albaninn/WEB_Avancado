// components/ThemeSwitcher.tsx
import React, { useState, useEffect } from 'react';

const ThemeSwitcher: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? 'Modo Claro' : 'Modo Escuro'}
    </button>
  );
};

export default ThemeSwitcher;
