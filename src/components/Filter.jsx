import { useState } from "react";
import { FaSearch } from "react-icons/fa";
const Filter = ({ handleChange }) => {
  const [searchField, setSearchField] = useState("");
  const filterItems = () => {};
  return (
    <section className="py-12 dark:bg-veryDarkBlueDarkMode">
      <div className="container">
        <div className="contents-wrapper flex items-center justify-between">
          <div className="input-wrapper relative shadow-xl px-4 py-2 flex items-center gap-6 max-w-[350px] rounded-md w-full">
            <FaSearch className="text-zinc-500" />
            <input
              type="search"
              placeholder="Search for a country..."
              className="w-full outline-none  bg-transparent dark:text-white text-veryDarkBlueLightMode"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;
