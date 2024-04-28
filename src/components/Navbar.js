import { useContext } from "react";
import { Link } from "react-router-dom"
import { DarkModeContext } from "../App";

const Navbar = () => {
  const {darkModeState, setDarkModeState} = useContext(DarkModeContext)
  const toggleDarkMode = () => {
    setDarkModeState(!darkModeState);
    document.body.classList.toggle("dark");
  };
  
  return (
    <header className="
      HEADER
      w-screen
      flex justify-center
      bg-white dark:bg-darkBlue
      drop-shadow-gray dark:drop-shadow-darkGray"
    >
      <div className="
        HEADER-CONTENT
        flex flex-row justify-between
        max-w-[90rem] grow
        py-8 md:py-6 px-4 md:px-20">
        <Link to={`/`}>
          <h1 className="text-sm md:text-2xl font-extrabold">Where in the world?</h1>
        </Link>
        <button 
          type="button"
          className="flex flex-row gap-2.5 items-center"
          onClick={toggleDarkMode}
        >
          <svg 
            width="17" 
            height="17" 
            viewBox="0 0 17 17" 
            fill={darkModeState ? `currentColor` : `none`} 
            xmlns="http://www.w3.org/2000/svg"
            className="w-[0.85rem] md:w-auto stroke-1"
          >
            <path 
              d="M16 11.2021C15.0491 11.5984 14.0289 11.8018 12.9987 11.8004C8.69118 11.8004 5.19955 8.30882 5.19955 4.00128C5.19955 2.93739 5.41233 1.9239 5.79789 1C4.37681 1.59283 3.16294 2.59291 2.30916 3.8743C1.45538 5.15568 0.999868 6.66106 1 8.20083C1 12.5084 4.49163 16 8.79917 16C10.3389 16.0001 11.8443 15.5446 13.1257 14.6908C14.4071 13.8371 15.4072 12.6232 16 11.2021Z" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-xs md:text-base">Dark Mode</p>
        </button>
      </div>
    </header>
  )
}

export default Navbar;