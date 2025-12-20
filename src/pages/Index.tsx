import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Schedule from "@/components/Schedule";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SparkEffect from "@/components/SparkEffect";
const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <SparkEffect />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Events />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div >
  );
};

export default Index;
