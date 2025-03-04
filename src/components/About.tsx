
import { Disc, Users, Trophy } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-team-teal bg-opacity-10 px-3 py-1 rounded-full mb-4">
            <span className="text-team-teal font-medium">O Nas</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-team-navy mb-6">Nasza Drużyna Ultimate Frisbee</h2>
          <p className="text-gray-700">
            Wrocław Południe to energiczna drużyna Ultimate Frisbee, łącząca pasjonatów tej dynamicznej dyscypliny sportowej. 
            Nasz zespół składa się z graczy o różnym poziomie zaawansowania, połączonych wspólną pasją do sportu i aktywnego stylu życia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all group">
            <div className="w-14 h-14 rounded-full bg-team-teal bg-opacity-10 flex items-center justify-center mb-6 group-hover:bg-team-teal group-hover:text-white transition-all">
              <Disc size={28} className="text-team-teal group-hover:text-white transition-all" />
            </div>
            <h3 className="text-xl font-bold text-team-navy mb-4">Czym jest Ultimate?</h3>
            <p className="text-gray-700">
              Ultimate Frisbee to bezkontaktowy sport drużynowy, w którym dwie siedmioosobowe drużyny rywalizują na prostokątnym boisku. 
              Celem gry jest zdobycie punktów poprzez złapanie dysku w strefie końcowej przeciwnika.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all group">
            <div className="w-14 h-14 rounded-full bg-team-teal bg-opacity-10 flex items-center justify-center mb-6 group-hover:bg-team-teal group-hover:text-white transition-all">
              <Users size={28} className="text-team-teal group-hover:text-white transition-all" />
            </div>
            <h3 className="text-xl font-bold text-team-navy mb-4">Nasza Społeczność</h3>
            <p className="text-gray-700">
              Jesteśmy nie tylko drużyną, ale również społecznością. Organizujemy regularne treningi, 
              wydarzenia integracyjne i aktywnie uczestniczymy w turniejach regionalnych i krajowych.
              Nasz zespół jest otwarty dla wszystkich, niezależnie od wieku i doświadczenia.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all group">
            <div className="w-14 h-14 rounded-full bg-team-teal bg-opacity-10 flex items-center justify-center mb-6 group-hover:bg-team-teal group-hover:text-white transition-all">
              <Trophy size={28} className="text-team-teal group-hover:text-white transition-all" />
            </div>
            <h3 className="text-xl font-bold text-team-navy mb-4">Nasza Filozofia</h3>
            <p className="text-gray-700">
              Duch gry (Spirit of the Game) to podstawa Ultimate Frisbee – gra oparta jest na fair play i wzajemnym szacunku. 
              Jako Wrocław Południe promujemy te wartości zarówno na boisku, jak i poza nim, tworząc przyjazną atmosferę dla wszystkich członków.
            </p>
          </div>
        </div>
        
        <div className="mt-16 bg-white rounded-xl p-8 shadow-md relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-team-teal rounded-full opacity-10"></div>
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-team-navy rounded-full opacity-10"></div>
          
          <div className="relative">
            <h3 className="text-2xl font-bold text-team-navy mb-6">Historia Drużyny</h3>
            <p className="text-gray-700 mb-6">
              Nasza drużyna powstała z inicjatywy entuzjastów Ultimate Frisbee, którzy chcieli stworzyć przyjazne miejsce dla graczy 
              z południowych części Wrocławia. Z czasem nasza społeczność rosła, przyciągając graczy z całego miasta i okolic.
            </p>
            <p className="text-gray-700">
              Dzisiaj jesteśmy dumną drużyną, która łączy w sobie ducha sportowej rywalizacji z przyjaźnią i radością płynącą z gry. 
              Nieustannie się rozwijamy, doskonalimy nasze umiejętności i z entuzjazmem witamy nowych członków.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
