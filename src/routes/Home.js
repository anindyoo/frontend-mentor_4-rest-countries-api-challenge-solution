import { useContext } from "react";
import { DarkModeContext } from "../App";

const Home = () => {
  const {darkModeState} = useContext(DarkModeContext);
  return (
    <section className="py-12">
      <label
        htmlFor="searchInput"
        className="
          flex flex-row gap-6 items-center
          relative
          max-w-[30rem] rounded-md
          bg-white dark:bg-darkBlue
          drop-shadow-gray"
      >
        <span className="absolute inset-y-0 start-0 flex items-center ps-8 pointer-events-none">
          <svg 
            width="17" 
            height="17" 
            viewBox="0 0 17 17" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M16 16L10.4288 10.4287M10.4288 10.4287C11.4646 9.39291 12.0465 7.98806 12.0465 6.52321C12.0465 5.05837 11.4646 3.65351 10.4288 2.61771C9.39297 1.58191 7.98811 1 6.52325 1C5.0584 1 3.65353 1.58191 2.61772 2.61771C1.58191 3.65351 1 5.05837 1 6.52321C1 7.98806 1.58191 9.39291 2.61772 10.4287C3.65353 11.4645 5.0584 12.0464 6.52325 12.0464C7.98811 12.0464 9.39297 11.4645 10.4288 10.4287Z" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="stroke-darkGray dark:stroke-white"
            />
          </svg>
        </span>
        <input 
          id="searchInput"
          type="text" 
          className={`
            w-full
            text-sm                
            pl-[4.5rem] pr-8 py-5
            bg-white dark:bg-darkBlue
            placeholder:text-darkGray dark:placeholder:text-white`
          }
          placeholder="Search for a country..." />
      </label>
    </section>
  )
}

export default Home;