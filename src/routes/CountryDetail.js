/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useParams } from "react-router-dom";
import { API_SEARCH_BY_CODE_URL } from "../App";
import { useEffect, useState } from "react";
import axios from "axios";
import BackButton from "../components/BackButton";
import PageNotFound from "./PageNotFound";

const CountryDetail = () => {
  const { id } = useParams();
  const notFoundMessage = 'Sorry, the country you were looking for was not found.';

  const [isLoading, setIsLoading] = useState(true);
  const [countryNotFound, setCountryNotFound] = useState(false);
  const [countryDetail, setCountryDetail] = useState({});
  const [nativeNameState, setNativeNameState] = useState('');
  const [capitalState, setCapitalState] = useState('');
  const [currencyState, setCurrencyState] = useState('');  
  const [languageState, setLanguageState] = useState('');
  
  const loadCountriesDetail = async () => {
    const encodedId = encodeURI(id);
    const detailFields = "name,flags,nativeName,population,region,subregion,capital,tld,currencies,languages,borders";
    const detailUrl = `${API_SEARCH_BY_CODE_URL}/${encodedId}?fields=${detailFields}`

    await axios.get(detailUrl)
      .then((response) => {        
        setCountryDetail(response.data);
        
        const nativeNames = response.data.name.nativeName;
        const formattedNativeNames = Object.keys(nativeNames)
          .map((name) => 
            nativeNames[name].common + ` (${name.toUpperCase()})`            
          )
          .join(', ');
        setNativeNameState(formattedNativeNames)
      
        const capitalNames = response.data.capital;
        const formattedCapitals = capitalNames.length ? capitalNames.join(', ') : '-';
        setCapitalState(formattedCapitals);
        
        const currencies = response.data.currencies;
        const formattedCurrencies = Object.keys(currencies)
          .map((curr) =>
            currencies[curr].name
          )
          .join(', ');
        setCurrencyState(formattedCurrencies);
        
        const languages = response.data.languages;
        const formattedLanguages = Object.keys(languages)
          .map((lang) =>
            languages[lang]
          )
          .join(', ');
        setLanguageState(formattedLanguages);
      })
      .catch((error) => {
        console.log(error);
        setCountryNotFound(true);
      })
      .finally(() => setIsLoading(false));    
  }
  
  useEffect(() => {
    setIsLoading(true);
    loadCountriesDetail();
  }, [id]);

  return (
    countryNotFound ? <PageNotFound message={notFoundMessage} /> : (
    <section className="
      COUNTRY-DETAIL
      grow
      pt-10 lg:pt-20
      px-3 lg:px-0
      max-w-[80rem]"
    >
      { isLoading ? 'Loading...' : ( 
        <>
        <BackButton />
        <section className="
          COUNTRY-DETAIL-CONTENT
          flex flex-col gap-y-[2.875rem] lg:flex-row lg:gap-16 lg:gap-y-0 xl:gap-x-[7.5rem]
          py-16 lg:py-10"
        >
          <img 
            src={countryDetail.flags.svg} 
            alt={countryDetail.flags.alt ? countryDetail.flags.alt : `Flag of ${countryDetail.name}`}
            className="
              w-full h-auto
              max-h-[14.375rem]              
              lg:max-w-[35rem] md:max-h-[25rem]" 
          />
          <article className="w-full lg:pt-[2.375rem]">
            <h1 className="text-[1.375rem] md:text-[2rem] font-semibold md:font-bold">{countryDetail.name.common}</h1>
            <div className="
              DETAIL-WRAPPER
              flex flex-col md:flex-row justify-between gap-y-12 lg:gap-4           
              pt-[1.875rem]
              text-sm md:text-base"
            >
              <section className="     
                DETAIL-LEFT       
                flex flex-col gap-y-4 lg:gap-2.5
                lg:max-w-[18.75rem] w-full"
              >
                <h2>
                  <span className="font-semibold">Native Name: </span>
                  <span className="font-light">{nativeNameState}</span>
                </h2>
                <h2>
                  <span className="font-semibold">Population: </span>
                  <span className="font-light">{countryDetail.population.toLocaleString('en-US')}</span>
                </h2>
                <h2>
                  <span className="font-semibold">Region: </span>
                  <span className="font-light">{countryDetail.region}</span>
                </h2>
                <h2>
                  <span className="font-semibold">Subregion: </span>
                  <span className="font-light">{countryDetail.subregion}</span>
                </h2>
                <h2>
                  <span className="font-semibold">Capital: </span>
                  <span className="font-light">{capitalState}</span>
                </h2>
              </section>
              <section className="
                DETAIL-RIGHT
                flex flex-col gap-y-4 lg:gap-2.5        
                lg:max-w-[15.75rem] w-full"
              >
                <h2>
                  <span className="font-semibold">Top Level Domain: </span>
                  <span className="font-light">{countryDetail.subregion}</span>
                </h2>
                <h2>
                  <span className="font-semibold">Currencies: </span>
                  <span className="font-light">{currencyState}</span>
                </h2>
                <h2>
                  <span className="font-semibold">Languages: </span>
                  <span className="font-light">{languageState}</span>
                </h2>
              </section>
            </div>
            <div className="
              BORDER-COUNTRIES-WRAPPER
              flex flex-col gap-[1.125rem] lg:flex-row lg:gap-4 items-baseline
              pt-11 lg:pt-[4.5rem]"
            >
              <h2 className="text-base font-semibold">Border Countries:</h2>
              <div className="
                flex flow-row gap-2.5 flex-wrap"
              >
                {!countryDetail.borders.length ? <p className="italic">No data.</p>
                  : countryDetail.borders.map((border, index) => (
                  <Link 
                    key={border + '-' + index}
                    to={`/country/${border}`}
                    className="
                      px-7 py-1
                      rounded-sm
                      bg-white dark:bg-darkBlue
                      drop-shadow-gray dark:drop-shadow-darkGray"
                  >
                    {border}  
                  </Link>
                ))}
              </div>
            </div>
          </article>
        </section>
        </>
      )}
    </section>
    )
  )
}

export default CountryDetail;