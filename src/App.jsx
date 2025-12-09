import Header from "./assets/components/Header/Header"
import Introduction from "./assets/components/Introduction/Introduction";
import Creations from "./assets/components/Creations/Creations";
import Footer from "./assets/components/Footer/Footer";

import { useState, useEffect } from "react";

function App() {

    const [ isMobile, setIsMobile ] = useState(window.innerWidth < 768);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      }
      
      window.addEventListener('resize', handleResize);
      handleResize();
  
      return () => {
        window.removeEventListener('resize', handleResize);
      }
    }, [])
  
  return(
    <>
      <div className="mainContainer">
        <Header isMobile={isMobile}/>
        <Introduction isMobile={isMobile}/>
        <Creations isMobile={isMobile}/>
        <Footer />
      </div>
    </>
  );
}

export default App