import "./app.scss"
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import NavBar from "./components/navBar/NavBar";
import Parallax from "./components/parallax/Parallax"
import Portfolio from "./components/portfolio/Portfolio";
import Test from "./test";
const App = () => {
  return <div className="" >
    <Cursor />
    <section id="Homepage" >
      <NavBar />
      <Hero />
    </section>
    
    {/* <section id="services" ><Parallax type="services" /></section>
    <section>Services</section> */}

    <section id="Portfolio" ><Parallax type="portfolio" /></section>
    <Portfolio />
    <section id="Contact" ><Contact /></section>
    {/* <Test /> */}


  </div>;
};

export default App;
