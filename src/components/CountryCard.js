import { Link } from "react-router-dom";

const CountryCard = (props) => {
  const {
    name,
    population,
    region,
    capital,
    flag,
    flagAlt,
    cca3,
  } = props;

  const formattedPopulation = population.toLocaleString('en-US');
  const formattedCapital = capital.length ? capital.join(', ') : '-';

  return (
    <li className="
      w-full md:w-[19.5rem] lg:w-[16.5rem] rounded-md
      transition-colors duration-75 ease-in-out
      bg-white dark:bg-darkBlue
      overflow-hidden
      drop-shadow-gray dark:drop-shadow-darkGray"
    >
      <Link
        to={`/country/${cca3}`}  
      >
        <img 
          src={flag} 
          alt={flagAlt ? flagAlt : `Flag of ${name}`} 
          className="
            w-full h-40 md:h-[10rem]
            object-cover"          
        />
        <section className="
          flex flex-col gap-y-4 
          p-6 pb-11
          max-h-[11rem]"
        >
          <h1 className="text-4lg font-bold">{name}</h1>
          <div className="
            flex flex-col gap-y-[0.375rem] md:gap-y-[0.313rem]
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
      </Link>
    </li>
  )
}

export default CountryCard;