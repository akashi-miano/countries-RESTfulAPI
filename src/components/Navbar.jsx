import { useState } from "react";
import { useEffect } from "react";
import { FaSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const changeTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };
  return (
    <nav className="py-6 shadow-lg dark:bg-darkBlue dark:text-white duration-300">
      <div className="container flex items-center justify-between">
        <a href="" className="logo font-bold text-2xl">
          Where in the world?
        </a>
        <button className="flex items-center gap-4" onClick={changeTheme}>
          {theme === "dark" ? <FaSun /> : <FaRegMoon />}
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
