import "./App.css";
import Analysis from "./components/Analysis";
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
    </div>
  );
}

export default App;
