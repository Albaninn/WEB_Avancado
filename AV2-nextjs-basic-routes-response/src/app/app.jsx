// App.jsx
import React, { useEffect } from 'react';
import useStore from './store'; // Importe sua store do Zustand
import './styles/global.css'; // Importe seu CSS global (ajuste o caminho conforme necessário)

const ThemeToggleButton = () => {
  const toggleTheme = useStore(state => state.toggleTheme);
  return (
    <button onClick={toggleTheme} className="m-4 p-2 bg-gray-200 dark:bg-gray-800 rounded">
      Mudar Tema
    </button>
  );
};

const App = () => {
  const theme = useStore(state => state.theme);

  useEffect(() => {
    // Atualiza as classes do tema no elemento raiz quando o tema muda
    const root = document.documentElement;
    root.classList.remove('light-theme', 'dark-theme');
    root.classList.add(theme === 'dark' ? 'dark-theme' : 'light-theme');
  }, [theme]);

  return (
    <div className="theme min-h-screen flex flex-col justify-center items-center">
      {/* Restante do seu aplicativo aqui */}
      <header>
        {/* Seu cabeçalho ou navbar aqui */}
      </header>
      <main className="flex-grow">
        {/* O conteúdo principal da sua página aqui */}
        <h1 className="text-4xl mb-4">Bem-vindo ao App!</h1>
        <ThemeToggleButton />
      </main>
      <footer>
        {/* Seu rodapé aqui */}
      </footer>
    </div>
  );
};

export default App;
