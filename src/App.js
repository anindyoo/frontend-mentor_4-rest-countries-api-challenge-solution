import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./routes/Home";
import CountryDetail from "./routes/CountryDetail";
import PageNotFound from "./routes/PageNotFound";

export const DarkModeContext = createContext();
export const API_BASE_URL = 'https://restcountries.com/v3.1';
export const API_SEARCH_BY_NAME_URL = 'https://restcountries.com/v3.1/name'
export const API_SEARCH_BY_CODE_URL = 'https://restcountries.com/v3.1/alpha'
export const API_FIELDS_PARAM = 'fields=name,population,region,capital,flags,cca3';

const App = () => {
  const [darkModeState, setDarkModeState] = useState(false);
  const notFoundMessage = 'Sorry, the page you were looking for was not found.';
  
  return (
    <DarkModeContext.Provider value={{ darkModeState, setDarkModeState }}>
      <Routes>
        <Route path="/" element={<Main />} exact>
          <Route index element={<Home />} />
          <Route path="country" exact>
            <Route path=":id" element={<CountryDetail />} />
          </Route>
          <Route path="*" element={<PageNotFound message={notFoundMessage} />} />
        </Route>
      </Routes> 
    </DarkModeContext.Provider>
  );
}

export default App;
