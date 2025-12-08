import Header from "./assets/components/Header/Header"
import Introduction from "./assets/components/Introduction/Introduction";
import Creations from "./assets/components/Creations/Creations";
import Footer from "./assets/components/Footer/Footer";

function App() {
  
  return(
    <>
      <div className="mainContainer">
        <Header />
        <Introduction />
        <Creations />
        <Footer />
      </div>
    </>
  );
}

export default App