import "./App.css";
import Analysis from "./components/Analysis";
import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import double from "./assets/double.png";
import triple from "./assets/triple.png";
import single from "./assets/single.png";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analysis />
      <Newsletter />
      <div className="w-full py-[10rem] bg-white px-10">
        <div className="w-max-[1240px] grid md:grid-cols-3 gap-8">
          <Cards image={single} title="Single User" price="199" />
          <Cards image={double} title="Couple User" price="289" />
          <Cards image={triple} title="Multi User" price="499" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
