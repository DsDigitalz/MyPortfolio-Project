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

  // 2. Save theme to localStorage and document element whenever it changes
  useEffect(() => {
    try {
      const theme = isDarkMode ? "dark" : "light";
      window.localStorage.setItem("theme", theme);
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
        document.documentElement.style.backgroundColor = "#08090a";
        document.body.style.backgroundColor = "#08090a";
      } else {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
        document.documentElement.style.backgroundColor = "#f8f9fa";
        document.body.style.backgroundColor = "#f8f9fa";
      }
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
