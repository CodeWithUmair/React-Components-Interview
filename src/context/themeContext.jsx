import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const themeToggle = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  const theme = isDarkMode ? "dark" : "light";

  return (
    <ThemeContext.Provider value={{ theme, themeToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
