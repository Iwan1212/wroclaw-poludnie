
import { Calendar } from 'lucide-react';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Turniej Wiosenny",
      date: "15 Kwietnia 2024",
      location: "Park Południowy, Wrocław",
      description: "Roczny turniej wiosenny z udziałem drużyn z całej Polski. Wydarzenie dla wszystkich poziomów zaawansowania."
    },
    {
      id: 2,
      title: "Obóz Treningowy",
      date: "2-5 Czerwca 2024",
      location: "Ośrodek Sportowy, Sobótka",
      description: "Intensywny weekend treningowy dla członków drużyny, koncentrujący się na technice, taktyce i budowaniu zespołu."
    },
    {
      id: 3,
      title: "Beach Ultimate",
      date: "20 Lipca 2024",
      location: "Słoneczny Wrocław",
      description: "Letni turniej plażowy Ultimate Frisbee, otwarty dla wszystkich chętnych. Zabawa, słońce i sportowa rywalizacja!"
    }
  ];

  return (
    <section id="events" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-team-teal bg-opacity-10 px-3 py-1 rounded-full mb-4">
            <span className="text-team-teal font-medium">Wydarzenia</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-team-navy mb-6">Nadchodzące Wydarzenia</h2>
          <p className="text-gray-700">
            Dołącz do nas na turniejach, treningach otwartych i innych wydarzeniach. To doskonała okazja, aby poznać Ultimate Frisbee
            i naszą społeczność.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div 
              key={event.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all group"
            >
              <div className="h-3 bg-team-teal"></div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <Calendar size={20} className="text-team-teal mr-2" />
                  <span className="text-gray-600 text-sm">{event.date}</span>
                </div>
                <h3 className="text-xl font-bold text-team-navy mb-2 group-hover:text-team-teal transition-all">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Lokalizacja: {event.location}
                </p>
                <p className="text-gray-700 mb-6">
                  {event.description}
                </p>
                <a 
                  href="#join" 
                  className="text-team-teal font-medium flex items-center hover:underline"
                >
                  Dowiedz się więcej
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-block border border-team-navy text-team-navy font-medium py-3 px-6 rounded-md hover:bg-team-navy hover:text-white transition-all"
          >
            Zobacz Wszystkie Wydarzenia
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;
