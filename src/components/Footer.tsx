
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-team-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/23211fdb-be78-4cd6-ad64-e5ffefed8880.png" 
                alt="Wrocław Południe Ultimate Frisbee Team" 
                className="h-12 bg-white rounded-full p-1"
              />
              <div className="font-bold text-lg">Wrocław Południe</div>
            </div>
            <p className="text-gray-300 mb-6">
              Drużyna Ultimate Frisbee z Wrocławia, łącząca pasję do sportu, przyjaźń i współpracę.
              Dołącz do nas i odkryj dynamiczny świat Ultimate Frisbee!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white bg-opacity-10 hover:bg-opacity-20 w-10 h-10 rounded-full flex items-center justify-center transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white bg-opacity-10 hover:bg-opacity-20 w-10 h-10 rounded-full flex items-center justify-center transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white bg-opacity-10 hover:bg-opacity-20 w-10 h-10 rounded-full flex items-center justify-center transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Szybkie Linki</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-all">Strona Główna</a>
              </li>
              <li>
                <a href="#team" className="text-gray-300 hover:text-white transition-all">Drużyna</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-all">O Nas</a>
              </li>
              <li>
                <a href="#events" className="text-gray-300 hover:text-white transition-all">Wydarzenia</a>
              </li>
              <li>
                <a href="#join" className="text-gray-300 hover:text-white transition-all">Dołącz do Nas</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-team-teal mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Wrocław, Polska<br />
                  Treningi: Park Południowy
                </span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="text-team-teal mr-3 mt-1 flex-shrink-0" />
                <a href="mailto:kontakt@wroclawpoludnie.pl" className="text-gray-300 hover:text-white transition-all">
                  kontakt@wroclawpoludnie.pl
                </a>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="text-team-teal mr-3 mt-1 flex-shrink-0" />
                <a href="tel:+48123456789" className="text-gray-300 hover:text-white transition-all">
                  +48 123 456 789
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white border-opacity-10 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Wrocław Południe Ultimate Frisbee Team. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
