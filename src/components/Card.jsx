import { Link } from "react-router-dom";
const Card = ({ name, population, region, capital, flags }) => {
  return (
    <Link
      to={`/country/${name.common}`}
      className={
        name.common.toLowerCase() === "israel"
          ? "hidden"
          : "card bg-white  rounded-xl shadow-xl flow-content--m hover:scale-105 duration-300 hover:cursor-pointer hover:rotate-2 dark:bg-darkBlue dark:text-white text-veryDarkBlueLightMode"
      }
      data-aos="zoom-in"
      data-aos-delay="200"
      key={name.common}
    >
      <img
        src={flags.png}
        alt={`${name.common}`}
        className="w-full md:min-h-[200px]"
      />
      <div className="text-content p-4">
        <header>
          <h2 className="text-xl font-bold">{name.common}</h2>
        </header>
        <p>
          <span className="font-semibold">Population</span>
          {`: ${population}`}
        </p>
        <p>
          <span className="font-semibold">Region</span>
          {`: ${region}`}
        </p>
        <p>
          <span className="font-semibold">Capital</span>
          {`: ${capital}`}
        </p>
      </div>
    </Link>
  );
};

export default Card;
