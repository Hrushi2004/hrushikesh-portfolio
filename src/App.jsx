import "./app.scss"
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Test from "./Test";
import Parallax from './components/parallax/Parallax';

const App = () => {
  return <div>
    
    <section id="Home">
      <Navbar />
      <Hero />
    </section>
    <section id="Skills"><Services /></section>
    <section id="Projects"><Parallax type="portfolio"/></section><Portfolio />
    <section id="Contact"><Contact /></section>
     
  </div>;
};

export default App;