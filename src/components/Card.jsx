const Card = ({ name, population, region, capital, flags }) => {
  return (
    <div
      className="card bg-white  rounded-xl shadow-xl flow-content--m hover:scale-105 duration-300 hover:cursor-pointer hover:rotate-2 dark:bg-darkBlue dark:text-white text-veryDarkBlueLightMode"
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
    </div>
  );
};

export default Card;
