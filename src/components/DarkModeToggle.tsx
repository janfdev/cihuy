import { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";

const DarkModeToggle = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        className="p-4 text-xl rounded-full bg-gray-300 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
      >
        {theme === "light" ? <FaMoon /> : <LuSun />}
      </button>
    </>
  );
};

export default DarkModeToggle;
