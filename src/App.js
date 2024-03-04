import "./App.css";
import Analysis from "./components/Analysis";
import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analysis />
      <Newsletter />
      <Cards />
    </div>
  );
}

export default App;
