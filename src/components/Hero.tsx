
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNextSection = () => {
    const teamSection = document.getElementById('team');
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-70 z-0"></div>
      
      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6 animate-fade-in-up">
            <div className="inline-block bg-team-navy bg-opacity-10 px-3 py-1 rounded-full">
              <span className="text-team-navy font-medium">Wrocław Południe</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-team-navy">
              Ultimate Frisbee <span className="text-team-teal">Team</span>
            </h1>
            <p className="text-gray-700 text-lg md:text-xl max-w-lg">
              Pasja do sportu, przyjaźń i współpraca - odkryj z nami dynamiczny świat Ultimate Frisbee we Wrocławiu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#join" 
                className="bg-team-teal hover:bg-opacity-90 text-white font-medium py-3 px-6 rounded-md transition-all text-center"
              >
                Dołącz do Drużyny
              </a>
              <a 
                href="#about" 
                className="border border-team-navy text-team-navy font-medium py-3 px-6 rounded-md hover:bg-team-navy hover:text-white transition-all text-center"
              >
                Poznaj Nas
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="absolute -left-6 -top-6 w-24 h-24 bg-team-teal rounded-full opacity-20 animate-pulse-gentle"></div>
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-team-navy rounded-full opacity-20 animate-pulse-gentle" style={{ animationDelay: '1.5s' }}></div>
            
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="/lovable-uploads/7169fe1f-1950-4671-838b-e3011410ea4f.png" 
                alt="Wrocław Południe Ultimate Frisbee Team" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce" onClick={scrollToNextSection}>
          <ChevronDown size={36} className="text-team-teal" />
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
