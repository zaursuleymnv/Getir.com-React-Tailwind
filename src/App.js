import Categories from "components/Categories";
import Campanies from "./components/Campanies";
import Cards from "./components/Cards";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MobileApp from "./components/MobileApp";

function App() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <Categories/>
    <Campanies/>
    <div className="container mx-auto">
      <Favorites/>
      <MobileApp/>
      <Cards/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
