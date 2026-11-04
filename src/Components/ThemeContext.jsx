import React, { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const storedTheme = window.localStorage.getItem("theme");
      if (storedTheme) {
        return storedTheme === "dark";
      }
      return true; // Default to dark editorial aesthetic
    } catch (error) {
      return true;
    }
  });

  useEffect(() => {
    try {
      const theme = isDarkMode ? "dark" : "light";
      window.localStorage.setItem("theme", theme);
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
        document.documentElement.style.backgroundColor = "#000000";
        document.body.style.backgroundColor = "#000000";
      } else {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
        document.documentElement.style.backgroundColor = "#fafaf9";
        document.body.style.backgroundColor = "#fafaf9";
      }
    } catch (error) {
      console.error("Failed to update theme:", error);
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  return useContext(ThemeContext);
};
