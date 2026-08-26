import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CompaniesOverview from "@/components/CompaniesOverview";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import About from "@/components/About";
import Projects from "@/components/Projects";
import GroundScrew from "@/components/GroundScrew";
import Founders from "@/components/Founders";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>


      <Navbar />

      <Hero />

      <CompaniesOverview />

      <Stats />

      <Services />

      <About />

      <Projects />

      <GroundScrew />

      <Founders />

      <Contact />

      <Footer />
    </main>
  );
}