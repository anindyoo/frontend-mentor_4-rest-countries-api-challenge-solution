const CountryCard = (props) => {
  const {
    name,
    population,
    region,
    capital,
    flag,
    flagAlt,
  } = props;

  const formattedPopulation = population.toLocaleString('en-US');
  const formattedCapital = capital && capital.join(', ');

  return (
    <li className="
      rounded-md
      bg-white dark:bg-darkBlue
      overflow-hidden
      drop-shadow-gray dark:drop-shadow-darkGray">
      <img 
        src={flag} 
        alt={flagAlt ? flagAlt : `Flag of ${name}`} 
        className="
          w-[16.5rem] h-[10rem]
          object-cover"          
      />
      <section className="flex flex-col p-6 pb-11 gap-y-4 max-h-[11rem]">
        <h1 className="text-lg font-bold">{name}</h1>
        <div className="
          flex flex-col gap-y-[0.313rem]
          text-sm font-semibold"
        >
          <h2>
            <span>Population: </span>
            <span className="font-light">{formattedPopulation}</span>
          </h2>
          <h2>
            <span>Region: </span>
            <span className="font-light">{region}</span>
          </h2>
          <h2>
            <span>Capital: </span>
            <span className="font-light">{formattedCapital}</span>
          </h2>
        </div>
      </section>
    </li>
  )
}

export default CountryCard;