import React, { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // 1. Initialize state from localStorage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const storedTheme = window.localStorage.getItem("theme");
      return storedTheme === "dark" ? true : false;
    } catch (error) {
      console.error("Failed to access localStorage:", error);
      return false; // Default to light mode on error
    }
  });

  // 2. Save theme to localStorage whenever it changes
  useEffect(() => {
    try {
      window.localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    } catch (error) {
      console.error("Failed to save theme to localStorage:", error);
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
