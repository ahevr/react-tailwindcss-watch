import Header from "components/Header"
import HeroSection from "components/HeroSection"
import Bike from "components/Bike"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Bike />
    </div>
  );
}

export default App;
