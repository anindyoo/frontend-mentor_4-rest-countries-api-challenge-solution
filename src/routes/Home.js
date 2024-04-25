import { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import axios from "axios";
import LoadingCountryCard from "../components/LoadingCountryCard";
import CountrySearchAndFilter from "../components/CountrySearchAndFilter";

const API_BASE_URL = 'https://restcountries.com/v3.1';
const API_FIELDS_PARAM = 'fields=name,population,region,capital,flags';

const Home = () => {
  const [filterSelectState, setFilterSelectState] = useState(true);
  const [regionFilterState, setRegionFilterState] = useState('All Region');
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const toggleFilterSelect = () => setFilterSelectState(!filterSelectState);
  const addRegionFilter = (region) => setRegionFilterState(region);

  const loadCountries = async (region) => {
    const url = region === 'All Region' 
        ? `${API_BASE_URL}/all?${API_FIELDS_PARAM}`
        : `${API_BASE_URL}/region/${region}?${API_FIELDS_PARAM}`;
        
    await axios.get(url)
      .then((response) => {
        console.log(response.data[0]);
        setCountries(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsLoading(false))
  };

  useEffect(() => {
    setIsLoading(true);
    loadCountries(regionFilterState);
  }, [regionFilterState]);

  return (
    <section className="py-12">
      <CountrySearchAndFilter 
        regionFilterState={regionFilterState}
        filterSelectState={filterSelectState}
        toggleFilterSelect={toggleFilterSelect}
        addRegionFilter={addRegionFilter}
      />
      <ul className="
        COUNTRY-CARDS-LIST
        grid grid-cols-1 gap-[4.688rem]
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        pt-12"
      >
        {
          isLoading ? (
            [...Array(8)].map((_, index) => <LoadingCountryCard key={`loading-${index}`}/>)            
          )
          : countries.map((country, index) => 
            <CountryCard
              key={country.fifa + '-' + index}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flag={country.flags.svg}
              flagAlt={country.flags.alt}
            />)
          }
      </ul>
    </section>
  )
}

export default Home;