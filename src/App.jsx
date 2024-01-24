import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Countries from "./components/Countries";
import { useState, useEffect } from "react";
function App() {
  const [response, setResponse] = useState([]);
  const [searchField, setSearchField] = useState("");
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

    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchField(e.target.value);
  };
  const filterItems = () => {
    return response.filter((item) => {
      {
        console.log(item.name.common.toLocaleLowerCase(), searchField);
      }
      return searchField.trim().toLowerCase() === ""
        ? item
        : item.name.common
            .toLocaleLowerCase()
            .includes(searchField.toLowerCase());
    });
  };
  return (
    <>
      <Navbar />
      <Filter handleChange={handleSearch} />
      <Countries response={filterItems()} />
    </>
  );
}

export default App;
