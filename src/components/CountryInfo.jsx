import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
const CountriesInfo = () => {
  const [response, setResponse] = useState([]);
  const { country } = useParams();
  const [selectedCountry, setSelectedCountry] = useState(null);
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
  useEffect(() => {
    const foundCountry = response.find(
      (c) => c.name.common.trim().toLowerCase() === country.toLowerCase()
    );
    setSelectedCountry(foundCountry);
  }, [country, response]);

  if (response.length === 0 || selectedCountry === null) return "Loading...";
  return (
    <>
      {selectedCountry ? (
        <section className="py-16 min-h-screen">
          <div className="container">
            <Link
              className="flex gap-4 items-center mb-16 dark:text-white dark:bg-darkBlue px-8 py-2 shadow-2xl w-fit rounded-lg"
              to="/"
              data-aos="fade-right"
              data-aos-delay="600"
            >
              <BiArrowBack className="text-2xl" />
              Back
            </Link>
            <div className="wrapper grid md:grid-cols-2 dark:text-white justify-center md:justify-start gap-8">
              <div
                className="img-wrapper"
                data-aos="fade-right"
                data-aos-delay="800"
              >
                <img
                  src={selectedCountry.flags.png}
                  // alt={`${selectedCountry.common.name}'s flag'`}
                  className="w-full"
                />
              </div>
              <div className="text-wrapper">
                <header
                  className="my-4 md:my-0"
                  data-aos="zoom-in"
                  data-aos-delay="800"
                >
                  <h1 className="text-3xl font-bold mb-4">{country}</h1>
                </header>
                <div
                  className="main-info-content grid md:grid-cols-2"
                  data-aos="fade-left"
                  data-aos-delay="1000"
                >
                  <p className="flex items-center gap-2">
                    <span className="capitalize font-semibold">
                      native name:{" "}
                    </span>
                    {selectedCountry.name.common}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="capitalize font-semibold">
                      top level domain:
                    </span>
                    {selectedCountry.tld}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="capitalize font-semibold">
                      population:
                    </span>
                    {selectedCountry.population}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="capitalize font-semibold">
                      Currencies:
                    </span>
                    {Object.values(selectedCountry.currencies).map(
                      (currency, index, array) => (
                        <span key={index}>
                          {`${currency.name}`}
                          {index !== array.length - 1 && ", "}
                        </span>
                      )
                    )}
                  </p>
                  <p className="flex items-center gap-4">
                    <span className="capitalize font-semibold flex items-center gap-2">
                      region:
                    </span>
                    {selectedCountry.region}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="capitalize font-semibold flex items-center gap-2">
                      Languages:
                    </span>
                    {Object.values(selectedCountry.languages).map(
                      (item, index, arr) => (
                        <span key={index}>
                          {item}
                          {arr.length - 1 !== index && ", "}
                        </span>
                      )
                    )}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="capitalize font-semibold">
                      sub region:
                    </span>
                    {selectedCountry.subregion}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="capitalize font-semibold">capital:</span>
                    {selectedCountry.capital}
                  </p>
                </div>
                <div
                  className="flex md:items-center gap-6 mt-12  flex-col md:flex-row"
                  data-aos="fade-up"
                  data-aos-delay="1200"
                >
                  <p className="wrapper flex items-center gap-4 flex-wrap">
                    {selectedCountry.borders &&
                      selectedCountry.borders.length !== 0 && (
                        <span className="font-bold">Border Countries: </span>
                      )}
                    {selectedCountry.borders
                      ? selectedCountry.borders.map((item, index, arr) => (
                          <span
                            key={index}
                            className="dark:bg-darkBlue shadow-lg rounded-md px-8 py-2 text-sm duration-300 dark:hover:bg-black hover:cursor-pointer hover:rotate-6 hover:scale-110 hover:bg-cyan-500 hover:text-white w-fit"
                          >
                            {item}
                          </span>
                        ))
                      : null}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default CountriesInfo;
