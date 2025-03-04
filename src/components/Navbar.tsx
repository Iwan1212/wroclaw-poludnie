
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/23211fdb-be78-4cd6-ad64-e5ffefed8880.png" 
            alt="Wrocław Południe Ultimate Frisbee Team" 
            className={`transition-all duration-300 ${scrolled ? 'h-10' : 'h-12'}`}
          />
          <span className={`font-bold text-team-navy transition-all duration-300 ${scrolled ? 'text-lg' : 'text-xl'}`}>
            Wrocław Południe
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#team" className="text-team-navy hover:text-team-teal transition-all font-medium">
            Drużyna
          </a>
          <a href="#about" className="text-team-navy hover:text-team-teal transition-all font-medium">
            O Nas
          </a>
          <a href="#events" className="text-team-navy hover:text-team-teal transition-all font-medium">
            Wydarzenia
          </a>
          <a href="#join" className="bg-team-teal text-white px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-all">
            Dołącz do Nas
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-team-navy" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 flex flex-col pt-24 pb-8 px-6 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <a 
          href="#team" 
          className="text-xl font-medium py-4 text-team-navy border-b border-gray-100"
          onClick={toggleMenu}
        >
          Drużyna
        </a>
        <a 
          href="#about" 
          className="text-xl font-medium py-4 text-team-navy border-b border-gray-100"
          onClick={toggleMenu}
        >
          O Nas
        </a>
        <a 
          href="#events" 
          className="text-xl font-medium py-4 text-team-navy border-b border-gray-100"
          onClick={toggleMenu}
        >
          Wydarzenia
        </a>
        <a 
          href="#join" 
          className="mt-6 bg-team-teal text-white py-3 rounded-md font-medium text-center"
          onClick={toggleMenu}
        >
          Dołącz do Nas
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
