import { Link, useNavigate, useParams } from "react-router-dom";
import { API_SEARCH_BY_CODE_URL } from "../App";
import { useEffect, useState } from "react";
import axios from "axios";
import BackButton from "../components/BackButton";

const CountryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(true);
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
        console.log(response.data);
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
      })
      .finally(() => setIsLoading(false));    
  }
  
  useEffect(() => {
    setIsLoading(true);
    loadCountriesDetail();
  }, [id]);

  return (
    <section className="pt-20">
      <BackButton />
      {isLoading ? 'Loading...' : ( 
        <section className="
          flex flex-row gap-[7.5rem]
          py-10"
        >
          <img 
            src={countryDetail.flags.svg} 
            alt={countryDetail.flags.alt ? countryDetail.flags.alt : `Flag of ${countryDetail.name}`}
            className="
              w-full h-full              
              md:max-w-[35rem] md:max-h-[25rem]" 
          />
          <article className="w-full">
            <h1 className="text-[2rem] font-bold">{countryDetail.name.common}</h1>
            <div className="
              flex felx-row justify-between              
              pt-[1.875rem]">
              <section className="            
                flex flex-col gap-2.5
                max-w-[18.75rem] w-full"
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
                flex flex-col gap-2.5        
                max-w-[15.75rem] w-full"
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
              flex flex-row gap-4
              pt-[4.5rem]">
              <h2 className="font-semibold">Border Countries:</h2>
              <div className="
                flex flow-row gap-2.5
                "
              >
                {countryDetail.borders.map((border, index) => (
                  <Link 
                    key={border + '-' + index}
                    to={`/${border}`}
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
      )}
    </section>
  )
}

export default CountryDetail;