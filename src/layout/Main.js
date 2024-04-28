import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Main = () => {

  return ( 
    <div className="
      MAIN-APP
      h-screen w-screen
      text-veryDarkBlue_LightModeText dark:text-white"
    >
      <Navbar />
      <main className="
        MAIN-CONTENT
        flex justify-center
        w-screen
        px-4
        md:px-10
        lg:px-12
        xl:px-20"
      >
        <Outlet />
      </main>
    </div>   
  )
}

export default Main;