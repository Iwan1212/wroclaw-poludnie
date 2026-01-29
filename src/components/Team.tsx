
const Team = () => {
  return (
    <section id="team" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-team-navy bg-opacity-10 px-3 py-1 rounded-full mb-4">
            <span className="text-team-navy font-medium">Nasza Drużyna</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-team-navy mb-6">Poznaj Wrocław Południe</h2>
          <p className="text-gray-700">
            Jesteśmy zróżnicowaną społecznością połączoną pasją do Ultimate Frisbee. Nasz skład tworzą doświadczeni gracze, 
            entuzjastyczni nowicjusze oraz wszyscy pomiędzy – naszą siłą jest różnorodność i wspólny duch sportowy.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -left-4 -top-4 w-20 h-20 bg-team-teal rounded-full opacity-20 md:block hidden"></div>
          <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-team-navy rounded-full opacity-20 md:block hidden"></div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/lovable-uploads/7169fe1f-1950-4671-838b-e3011410ea4f.png"
              alt="Wrocław Południe Team"
              width={1200}
              height={600}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-team-navy to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Drużyna Wrocław Południe</h3>
              <p className="text-sm md:text-base opacity-90">
                Nasza drużyna - pełna energii, pasji i sportowego ducha!
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-50 rounded-xl p-8 animate-fade-in-up">
            <h3 className="text-xl font-bold text-team-navy mb-4">Treningi i Spotkania</h3>
            <p className="text-gray-700 mb-6">
              Spotykamy się regularnie na treningach, gdzie doskonalimy nasze umiejętności pod okiem doświadczonych graczy. 
              Treningi odbywają się zarówno na świeżym powietrzu (w sezonie wiosenno-letnim), jak i w halach sportowych (jesień-zima).
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-team-teal flex items-center justify-center text-white font-bold mr-3">✓</span>
                <span className="text-gray-700">Treningi na świeżym powietrzu: wtorki i czwartki, 18:00-20:00</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-team-teal flex items-center justify-center text-white font-bold mr-3">✓</span>
                <span className="text-gray-700">Treningi halowe: soboty, 10:00-12:00</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-team-teal flex items-center justify-center text-white font-bold mr-3">✓</span>
                <span className="text-gray-700">Spotkania integracyjne: ostatni piątek miesiąca</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold text-team-navy mb-4">Dołącz do Nas</h3>
            <p className="text-gray-700 mb-6">
              Zapraszamy wszystkich chętnych, niezależnie od poziomu zaawansowania. Ultimate Frisbee to sport, który można 
              szybko opanować na poziomie podstawowym, a potem doskonalić swoje umiejętności razem z nami.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-team-navy flex items-center justify-center text-white font-bold mr-3">1</span>
                <span className="text-gray-700">Skontaktuj się z nami przez formularz lub media społecznościowe</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-team-navy flex items-center justify-center text-white font-bold mr-3">2</span>
                <span className="text-gray-700">Przyjdź na trening wprowadzający dla początkujących</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-team-navy flex items-center justify-center text-white font-bold mr-3">3</span>
                <span className="text-gray-700">Dołącz do regularnych treningów i rozwijaj swoją pasję z nami!</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
