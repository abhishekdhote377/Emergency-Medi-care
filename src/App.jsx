import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Doctors from "./components/Doctors";
import Testimonials from "./components/Testimonials";

import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Stats />
        <Doctors />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
