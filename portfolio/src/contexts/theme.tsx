import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

interface ThemeContextProps {
  themeName: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | null>(null);

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [themeName, setThemeName] = useState('light');

  useEffect(() => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setThemeName(darkMediaQuery.matches ? 'dark' : 'light');
    darkMediaQuery.addEventListener('change', (e) => {
      setThemeName(e.matches ? 'dark' : 'light');
    });
  }, []);

  const toggleTheme = () => {
    const name = themeName === 'dark' ? 'light' : 'dark';
    localStorage.setItem('themeName', name);
    setThemeName(name);
  };

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeProvider, ThemeContext };