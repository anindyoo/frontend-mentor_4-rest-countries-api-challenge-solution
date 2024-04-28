/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import axios from "axios";
import LoadingCountryCard from "../components/LoadingCountryCard";
import CountrySearchAndFilter from "../components/CountrySearchAndFilter";
import { API_BASE_URL, API_FIELDS_PARAM, API_SEARCH_BY_NAME_URL } from "../App";

const Home = () => {
  const [searchInputState, setSearchInputState] = useState('');
  const [searchIsFoundState, setSearchIsFoundState] = useState(false);
  const [filterSelectState, setFilterSelectState] = useState(false);
  const [regionFilterState, setRegionFilterState] = useState('');
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const updateSearchInputState = (input) => setSearchInputState(input);

  const toggleFilterSelect = () => setFilterSelectState(!filterSelectState);
  const addRegionFilter = (region) => setRegionFilterState(region);

  const loadCountries = async (region) => {
    const url = 
      region === 'All Region' || region === ''
        ? `${API_BASE_URL}/all?${API_FIELDS_PARAM}`
        : `${API_BASE_URL}/region/${region}?${API_FIELDS_PARAM}`;
        
    await axios.get(url)
      .then((response) => {
        setCountries(response.data);
        setSearchInputState('');
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


  const searchCountries = async (keywords) => {
    const formatKeywords = encodeURIComponent(keywords);
    const searchUrl = `${API_SEARCH_BY_NAME_URL}/${formatKeywords}?${API_FIELDS_PARAM}`;
    
    await axios.get(searchUrl)
      .then((response) => {
        setRegionFilterState('');
        setCountries(response.data);
        setSearchIsFoundState(true);
      })
      .catch(() => {
        setCountries([]);
        setSearchIsFoundState(false);        
      })
      .finally(() => setIsLoading(false))
  };

  useEffect(() => {
    setIsLoading(true);    
    searchInputState ? searchCountries(searchInputState) : loadCountries(regionFilterState)
  }, [searchInputState]);

  return (
    <section className="
      HOME-CONTAINER
      grow
      pt-12 pb-32 
      max-w-[80rem]">      
      <CountrySearchAndFilter 
        updateSearchInputState={updateSearchInputState}
        searchInputState={searchInputState}
        regionFilterState={regionFilterState}
        filterSelectState={filterSelectState}
        toggleFilterSelect={toggleFilterSelect}
        addRegionFilter={addRegionFilter}
      />
      <ul className="
        COUNTRY-CARDS-LIST
        flex flex-col gap-10
        px-10 md:px-0
        gap-y-10 md:gap-y-[4.688rem]        
        md:grid md:grid-cols-[auto,auto]
        lg:grid-cols-[auto,auto,auto] 
        xl:grid-cols-[auto,auto,auto,auto]
        pt-12"
      >
        {!countries.length && searchInputState.length > 0 && (
          <p>No results for "{searchInputState}".</p>
        )}
        {
          searchIsFoundState && searchInputState.length && isLoading ? (
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
              cca3={country.cca3}
            />)
          }
      </ul>
    </section>
  )
}

export default Home;