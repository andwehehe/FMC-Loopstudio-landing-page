import Header from "./assets/components/Header/Header"
import Introduction from "./assets/components/Introduction/Introduction";
import Creations from "./assets/components/Creations/Creations";
import Footer from "./assets/components/Footer/Footer";

import { useState, useEffect } from "react";

function App() {

    const [ isMobile, setIsMobile ] = useState(window.innerWidth < 768);
    const [ openMenu, setOpenMenu ] = useState("none");

    useEffect(() => {
      const handleResize = () => {
        if(window.innerWidth < 768) {
          setIsMobile(true);
        } else {
          setIsMobile(false);
          document.body.classList.remove("fixedBody");
        }
      }

      const closeMenuIfDesktop = () => {
        if(isMobile) {
          setOpenMenu("none");
        }
      }
      closeMenuIfDesktop()
      
      window.addEventListener('resize', handleResize);
      handleResize();
  
      return () => {
        window.removeEventListener('resize', handleResize);
      }
    }, [isMobile])
  
  return(
    <>
      <div className="mainContainer">
        <Header 
          isMobile={isMobile}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        />
        <Introduction isMobile={isMobile}/>
        <Creations isMobile={isMobile}/>
        <Footer />
      </div>
    </>
  );
}

export default App