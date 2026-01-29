
import { Send } from 'lucide-react';
import { useState } from 'react';

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    experience: 'beginner'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const response = await fetch('https://formspree.io/f/xpwzgkqj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          experience: formData.experience,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '', experience: 'beginner' });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="join" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-team-navy bg-opacity-10 px-3 py-1 rounded-full">
              <span className="text-team-navy font-medium">Dołącz do Nas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-team-navy">
              Zostań Częścią Naszej Drużyny
            </h2>
            <p className="text-gray-700 text-lg">
              Chcesz dołączyć do Wrocław Południe Ultimate Frisbee? 
              Wypełnij formularz, a my skontaktujemy się z Tobą w sprawie kolejnych kroków!
            </p>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-team-navy mb-4">Dlaczego warto dołączyć?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-team-teal flex items-center justify-center text-white font-bold mr-3">✓</span>
                  <span className="text-gray-700">Poznasz dynamiczny i wciągający sport</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-team-teal flex items-center justify-center text-white font-bold mr-3">✓</span>
                  <span className="text-gray-700">Dołączysz do przyjaznej społeczności</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-team-teal flex items-center justify-center text-white font-bold mr-3">✓</span>
                  <span className="text-gray-700">Będziesz regularnie aktywny fizycznie</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-team-teal flex items-center justify-center text-white font-bold mr-3">✓</span>
                  <span className="text-gray-700">Weźmiesz udział w turniejach i wydarzeniach</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="absolute -left-4 -top-4 w-20 h-20 bg-team-teal rounded-full opacity-10"></div>
            <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-team-navy rounded-full opacity-10"></div>
            
            <div className="relative">
              <h3 className="text-2xl font-bold text-team-navy mb-6">Formularz Kontaktowy</h3>
              
              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 mb-6">
                  Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.
                </div>
              )}

              {submitError && (
                <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 mb-6">
                  Wystąpił błąd podczas wysyłania. Spróbuj ponownie lub skontaktuj się z nami bezpośrednio.
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Imię i Nazwisko</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-team-teal focus:border-team-teal transition-all"
                    placeholder="Twoje imię i nazwisko"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-team-teal focus:border-team-teal transition-all"
                    placeholder="Twój adres email"
                  />
                </div>
                
                <div>
                  <label htmlFor="experience" className="block text-gray-700 font-medium mb-2">Doświadczenie w Ultimate Frisbee</label>
                  <select 
                    id="experience" 
                    name="experience" 
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-team-teal focus:border-team-teal transition-all"
                  >
                    <option value="beginner">Początkujący (brak doświadczenia)</option>
                    <option value="intermediate">Średniozaawansowany (mam już doświadczenie)</option>
                    <option value="advanced">Zaawansowany (gram regularnie)</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Wiadomość</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-team-teal focus:border-team-teal transition-all"
                    placeholder="Napisz, dlaczego chcesz dołączyć do drużyny lub zadaj pytanie"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className={`w-full bg-team-teal hover:bg-opacity-90 text-white font-medium py-3 px-6 rounded-md transition-all flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Wysyłanie...
                    </>
                  ) : (
                    <>
                      Wyślij Wiadomość
                      <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
