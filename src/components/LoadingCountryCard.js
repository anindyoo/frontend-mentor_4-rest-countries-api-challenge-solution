const LoadingCountryCard = () => {
  return (
    <li className="      
      rounded-md
      bg-white dark:bg-darkBlue
      overflow-hidden
      drop-shadow-gray dark:drop-shadow-darkGray">
      <div className="animate-pulse bg-gray-200 dark:bg-gray-700 w-[16.5rem] h-[10rem]"/>
      <section className="flex flex-col p-6 pb-11 gap-y-4 max-h-[11rem]">
        <div className="animate-pulse rounded-sm bg-gray-100 dark:bg-gray-600 h-5"></div>
        <div className="animate-pulse flex flex-col gap-y-[0.313rem]">
          <div className="rounded-sm bg-gray-100 dark:bg-gray-600 h-4"></div>
          <div className="rounded-sm bg-gray-100 dark:bg-gray-600 h-4"></div>
          <div className="rounded-sm bg-gray-100 dark:bg-gray-600 h-4"></div>
        </div>
      </section>
    </li>
  )
}

export default LoadingCountryCard;