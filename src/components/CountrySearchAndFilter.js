const CountrySearchAndFilter = (props) => {
  const {
    searchInputState,
    updateSearchInputState,
    regionFilterState,
    filterSelectState,
    toggleFilterSelect,
    addRegionFilter,
  } = props;

  const filterArray = ['All Region', 'Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  const filterSelectToggleClickHandler = () => toggleFilterSelect(!filterSelectState);
  
  const filterOptionClickHandler = (event) => {
    const value = event.currentTarget.getAttribute('data-filter');
    addRegionFilter(value);
  };

  const handleSearchInputChange = (event) => {
    const value = event.currentTarget.value;
    updateSearchInputState(value);
  }

  return (
    <section className="
      SEARCH-AND-FILTER-WRAPPER
      flex flex-col gap-y-10 md:flex-row justify-between
      text-sm
    ">
      <label
        htmlFor="searchInput"
        className="
          flex flex-row gap-6 items-center
          relative
          md:max-w-[30rem] rounded-md overflow-hidden
          bg-white dark:bg-darkBlue
          drop-shadow-gray dark:drop-shadow-darkGray"
      >
        <span className="absolute inset-y-0 start-0 flex items-center ps-8 pointer-events-none">
          <svg 
            width="17" 
            height="17" 
            viewBox="0 0 17 17" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 md:w-auto h-auto"
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
          onChange={handleSearchInputChange}
          type="text" 
          className={`
            w-full rounded-md
            text-sm                
            pl-[4.5rem] pr-8 py-5
            bg-white dark:bg-darkBlue
            placeholder:text-darkGray dark:placeholder:text-white`
          }
          value={searchInputState}
          placeholder="Search for a country..." />
      </label>
      <div className="
        FILTER-SELECT
        relative
        flex flex-col gap-1
        max-w-[12.5rem] w-full"
      >
        <button          
          onClick={filterSelectToggleClickHandler}
          className="
            rounded-md            
            flex flex-row justify-between items-center
            bg-white dark:bg-darkBlue
            px-6 py-[1.125rem]
            cursor-pointer
            drop-shadow-gray dark:drop-shadow-darkGray"
        >
          <span>{regionFilterState ? regionFilterState : `Filter by Region`}</span>
          <span>
            <svg 
              width="10" 
              height="6" 
              viewBox="0 0 10 6" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-2 md:w-auto h-auto"
            >
              <path 
                d="M9 1L5 5L1 1" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>  
          </span>
        </button>
        <ul className={`
          absolute top-[3.75rem] z-10
          w-full
          flex flex-col gap-1
          rounded-md
          px-5 py-4
          bg-white dark:bg-darkBlue
          drop-shadow-gray dark:drop-shadow-darkGray
          transition-all duration-200 ease-out
          ${filterSelectState ? `visible opacity-100` : `collapse opacity-0`}
        `}>
          {filterArray
            .filter((region) => 
              !searchInputState && (regionFilterState === '' && region === 'All Region') ? false : true
            )
            .map((region, index) => (
              <li
                key={`list-` + index}
                data-filter={region}
                onClick={filterOptionClickHandler}
                className="
                  rounded-sm
                  px-1 py-[0.125rem]
                  cursor-pointer
                  duration-75 ease-out
                  hover:bg-gray-100"
              >{region}</li>
            ))
        }            
        </ul>
      </div>
    </section>
  );
}

export default CountrySearchAndFilter;