// ThemeToggleButton.jsx
import React from 'react';
import useStore from './store';

function ThemeToggleButton() {
  const toggleTheme = useStore(state => state.toggleTheme);

  return (
    <button onClick={toggleTheme} className='Altera'>
      Alterar tema
    </button>
  );
}

export default ThemeToggleButton;
