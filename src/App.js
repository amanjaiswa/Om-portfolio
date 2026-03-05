import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Properties from "./components/Properties";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsApp from "./components/WhatsApp";
import Om from "./components/Om";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      {/* <Om /> */}
      <Services />
      <Properties />
      <Contact />
      <Footer />
      <WhatsApp />
    </>
  );
}

export default App;