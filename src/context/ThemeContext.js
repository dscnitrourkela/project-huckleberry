import { createContext, useState } from 'react';

import { ThemeProvider } from 'styled-components';

import { darkTheme, GlobalStyles, lightTheme } from '@/config/theme';

export const ThemeContext = createContext({
  isDarkMode: true,
  handleToggle: () => null,
});

const CustomThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, handleToggle }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default CustomThemeProvider;
