import { createContext, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./routes/Home";
import CountryDetail from "./routes/CountryDetail";
import NotFound from "./routes/NotFound";

export const DarkModeContext = createContext();
export const API_BASE_URL = 'https://restcountries.com/v3.1';
export const API_SEARCH_BY_NAME_URL = 'https://restcountries.com/v3.1/name'
export const API_SEARCH_BY_CODE_URL = 'https://restcountries.com/v3.1/alpha'
export const API_FIELDS_PARAM = 'fields=name,population,region,capital,flags,cca3';

const App = () => {
  const [darkModeState, setDarkModeState] = useState(false);
  
  return (
    <DarkModeContext.Provider value={{ darkModeState, setDarkModeState }}>
      <Routes>
        <Route path="/" element={<Main />} exact>
          <Route index element={<Home />} />
          <Route path="country" exact>
            <Route path=":id" element={<CountryDetail />} />
          </Route>
        </Route>
      </Routes> 
    </DarkModeContext.Provider>
  );
}

export default App;
