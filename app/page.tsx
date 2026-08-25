import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CompaniesOverview from "@/components/CompaniesOverview";
import Services from "@/components/Services";
import About from "@/components/About";
import Projects from "@/components/Projects";
import GroundScrew from "@/components/GroundScrew";
import Founders from "@/components/Founders";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      {/* OUR GROUP */}
      <CompaniesOverview />

      {/* OUR SERVICES */}
      <Services />

      {/* ABOUT */}
      <About />

      {/* PROJECTS */}
      <Projects />

      {/* UNUS HOMES / GROUND SCREW */}
      <GroundScrew />

      {/* FOUNDERS */}
      <Founders />

      {/* CONTACT */}
      <Contact />
    </main>
  );
}