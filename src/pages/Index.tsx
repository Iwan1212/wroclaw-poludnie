
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Team from '../components/Team';
import About from '../components/About';
import Events from '../components/Events';
import JoinUs from '../components/JoinUs';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "Wrocław Południe Ultimate Frisbee";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Team />
        <About />
        <Events />
        <JoinUs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
