import Card from "./Card";
const Countries = ({ response }) => {
  return (
    <section className="py-8 dark:bg-veryDarkBlueDarkMode">
      <div className="container grid md:grid-cols-2 lg:grid-cols-4 justify-center gap-8">
        {response.map((item) => (
          <Card key={item.name.common} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Countries;
