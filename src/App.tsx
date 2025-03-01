import AboutCard from "./components/Cards/AboutCard";
import DesignCard from "./components/Cards/DesignCard";
import Marquee from "./components/Cards/Marquee";
import { Center_Container } from "./components/Center_Container";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  

  return (
   <>
   <Navbar/>
   <DesignCard/>
   <Services/>
   <AboutCard/>
   <Marquee/>
   <Center_Container/>
   </>
  );
}

export default App;
