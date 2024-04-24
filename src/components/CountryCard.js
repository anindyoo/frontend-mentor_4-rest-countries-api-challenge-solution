const CountryCard = () => {
  return (
    <li className="
      rounded-md
      bg-white dark:bg-darkBlue
      overflow-hidden
      drop-shadow-gray dark:drop-shadow-darkGray">
      <img src="https://dummyimage.com/264x160/000/fff" alt="" />
      <section className="flex flex-col p-6 pb-11 gap-y-4 max-h-[11rem]">
        <h1 className="text-lg font-bold">Germany</h1>
        <div className="
          flex flex-col gap-y-[0.313rem]
          text-sm font-semibold"
        >
          <h2>
            <span>Population: </span>
            <span className="font-light">81,772,000</span>
          </h2>
          <h2>
            <span>Region: </span>
            <span className="font-light">Europe</span>
          </h2>
          <h2>
            <span>Capital: </span>
            <span className="font-light">Berlin</span>
          </h2>
        </div>
      </section>
    </li>
  )
}

export default CountryCard;