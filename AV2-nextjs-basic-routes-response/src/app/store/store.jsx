// store.jsx
import create from 'zustand';

const useStore = create(set => ({
  theme: 'dark', // Valor inicial, pode ser 'dark' ou 'light'
  toggleTheme: () => set(state => ({
    theme: state.theme === 'dark' ? 'light' : 'dark',
  }))
}));

export default useStore;
