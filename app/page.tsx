import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Curriculum from "./components/Curriculum";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Certificate from "./components/Certificate";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Curriculum />
        <Pricing />
        <Testimonials />
        <Certificate />
      </main>
      <Footer />
    </>
  );
}
