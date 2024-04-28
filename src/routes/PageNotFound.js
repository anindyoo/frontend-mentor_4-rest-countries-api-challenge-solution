import { Link } from "react-router-dom";

const PageNotFound = (props) => {
  const {message} = props;
  
  return (
    <section className="
      flex flex-col pt-10 md:pt-24 gap-4 md:gap-6 items-center">
      <h1 className="text-2xl font-bold">{message}</h1>
      <Link 
        to={`/`}
        className="flex w-full y-full"
      >
        <span className="
          px-6 py-3
          rounded-md
          bg-white dark:bg-darkBlue
          drop-shadow-gray dark:drop-shadow-darkGray"
        >Back to Home</span>
      </Link>
    </section>
  );
}

export default PageNotFound;