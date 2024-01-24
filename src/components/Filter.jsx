import { useState } from "react";
import { FaSearch } from "react-icons/fa";
const Filter = ({ handleChange, handleSelect }) => {
  const [searchField, setSearchField] = useState("");
  return (
    <section className="py-12 dark:bg-veryDarkBlueDarkMode">
      <div className="container">
        <div className="contents-wrapper flex md:items-center justify-between md:flex-row flex-col gap-8">
          <div
            className="input-wrapper relative shadow-xl px-4 py-2 flex items-center gap-6 max-w-[350px] rounded-md w-full"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            <FaSearch className="text-zinc-500" />
            <input
              type="search"
              placeholder="Search for a country..."
              className="w-full outline-none  bg-transparent dark:text-white text-veryDarkBlueLightMode"
              onChange={handleChange}
            />
          </div>
          <div className="">
            <select
              name=""
              id=""
              onChange={handleSelect}
              className="w-full px-8 py-2 dark:bg-darkBlue dark:text-white max-w-[250px]"
              data-aos="fade-left"
              data-aos-delay="800"
            >
              <option value="">Filter by Region</option>
              <option value="africa">Africa</option>
              <option value="americas">America</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;
