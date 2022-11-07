import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./styles/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Skills />
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
