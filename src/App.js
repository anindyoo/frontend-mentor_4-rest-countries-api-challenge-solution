import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

export const DarkModeContext = createContext();

function App() {
  const [darkModeState, setDarkModeState] = useState(false);
  
  const toggleDarkMode = () => {
    setDarkModeState(!darkModeState)
    document.body.classList.toggle("dark")
  };

  return (
    <DarkModeContext.Provider value={{ darkModeState }}>
      <div className={`
        APP
        h-screen
        text-veryDarkBlue_LightModeText dark:text-white
        px-4      
        lg:px-12
        xl:px-20
        `}>
        <header className="
          flex flex-row justify-between
          py-6"
        >
          <h1 className="text-2xl font-extrabold">Where in the world?</h1>
          <button 
            className="flex flex-row gap-2.5 items-center"
            onClick={toggleDarkMode}>
            <svg 
              width="17" 
              height="17" 
              viewBox="0 0 17 17" 
              fill={darkModeState ? `currentColor` : `none`} 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M16 11.2021C15.0491 11.5984 14.0289 11.8018 12.9987 11.8004C8.69118 11.8004 5.19955 8.30882 5.19955 4.00128C5.19955 2.93739 5.41233 1.9239 5.79789 1C4.37681 1.59283 3.16294 2.59291 2.30916 3.8743C1.45538 5.15568 0.999868 6.66106 1 8.20083C1 12.5084 4.49163 16 8.79917 16C10.3389 16.0001 11.8443 15.5446 13.1257 14.6908C14.4071 13.8371 15.4072 12.6232 16 11.2021Z" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            <p>Dark Mode</p>
          </button>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
