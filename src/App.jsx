import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Countries from "./components/Countries";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  const [response, setResponse] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("https://restcountries.com/v3.1/all");
        const res = await data.json();
        setResponse(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    AOS.init();

    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchField(e.target.value);
  };

  const handleSelectionChange = (e) => {
    setSelectedRegion(e.target.value);
  };

  const filterBySearch = (countries) => {
    return countries.filter((country) => {
      const itemName = country.name.common.toLowerCase();
      const searchValue = searchField.trim().toLowerCase();
      return searchValue === "" || itemName.includes(searchValue);
    });
  };
  const filterByRegion = (countries) => {
    return selectedRegion === ""
      ? countries
      : countries.filter((country) => {
          console.log(selectedRegion, country.region);
          return country.region.toLowerCase() === selectedRegion.toLowerCase();
        });
  };

  const filteredBySearch = filterBySearch(response);
  const filteredByRegion = filterByRegion(response);

  const filteredCountries = filterBySearch(filterByRegion(response));
  return (
    <>
      <Filter
        handleChange={handleSearch}
        handleSelect={handleSelectionChange}
      />
      <Countries response={filteredCountries} />
    </>
  );
}

export default App;
