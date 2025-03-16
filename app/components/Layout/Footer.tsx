import { useState } from "react";
import { LuSunMedium, LuSunMoon } from "react-icons/lu";

export default function Footer() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDarkMode() {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  }

  const renderedDarkModeToggle = isDarkMode ? (
    <LuSunMoon className="size-8 p-1 " />
  ) : (
    <LuSunMedium className="size-8 p-1" />
  );

  return (
    <footer className="container flex items-center justify-between mt-auto">
      ©{new Date().getFullYear()} Night Before Exams
      <button onClick={toggleDarkMode} className="rounded-full hover:bg-gray-20 ">
        {renderedDarkModeToggle}
      </button>
    </footer>
  );
}
