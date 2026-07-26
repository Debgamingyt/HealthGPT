import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import TechStack from "../components/landing/TechStack";
import Pricing from "../components/landing/Pricing";
import Footer from "../components/landing/Footer";

function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <TechStack />
      <Pricing />
      <Footer />
    </>
  );
}

export default Landing;