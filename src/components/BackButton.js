import { useNavigate } from "react-router-dom"

const BackButton = () => {
  const navigate = useNavigate();
  
  return (
    <button
      type="button" 
      onClick={() => navigate(-1)}
      className="
        flex flex-row justify-center items-center gap-3
        py-[0.563rem]
        max-w-[8.5rem] w-full rounded-md
        bg-white dark:bg-darkBlue
        drop-shadow-thickGray dark:drop-shadow-thickDarkGray"
    >
      <svg 
        width="18" 
        height="12" 
        viewBox="0 0 18 12" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M17 6H1M1 6L6 1M1 6L6 11" 
          stroke="currentColor" 
          strokeWidth="1.8" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
      <span>Back</span>
    </button> 
  );
}

export default BackButton