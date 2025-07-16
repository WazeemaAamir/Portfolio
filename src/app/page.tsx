import About from "../Components/About";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Skills from "../Components/Skills";
import Hero from "../Components/Hero";
export default function Home() {
  return (
       <div>
            <Navbar />
            <Hero />  
            <About />     
            <Skills />  
            <Contact />  
            <Footer />

       </div>
  );
}
