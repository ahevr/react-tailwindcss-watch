import Header from "components/Header"
import HeroSection from "components/HeroSection"
import Bike from "components/Bike"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Post from "components/Post";
import Footer from "components/Footer";
function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Bike />
      <Post />
      <Footer />
    </div>
  );
}

export default App;
