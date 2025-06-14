
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('community');
    if (section) observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="community" className="relative py-20 px-4 overflow-hidden">
      {/* Modern geometric pattern background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-purple-50"></div>
      
      {/* Fixed geometric pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="manga-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              {/* Manga speech bubble shapes */}
              <ellipse cx="30" cy="30" rx="20" ry="15" fill="none" stroke="currentColor" strokeWidth="1" className="text-purple-200"/>
              <ellipse cx="90" cy="30" rx="15" rx="10" fill="none" stroke="currentColor" strokeWidth="1" className="text-pink-200"/>
              <rect x="10" y="60" width="25" height="35" rx="8" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-200"/>
              <rect x="70" y="70" width="30" height="20" rx="5" fill="none" stroke="currentColor" strokeWidth="1" className="text-purple-200"/>
              {/* Manga panel lines */}
              <line x1="0" y1="90" x2="40" y2="90" stroke="currentColor" strokeWidth="2" className="text-gray-200"/>
              <line x1="80" y1="10" x2="120" y2="10" stroke="currentColor" strokeWidth="2" className="text-gray-200"/>
            </pattern>
            <linearGradient id="pattern-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.1"/>
              <stop offset="50%" stopColor="#EC4899" stopOpacity="0.05"/>
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#manga-pattern)"/>
          <rect width="100%" height="100%" fill="url(#pattern-gradient)"/>
        </svg>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main title */}
          <div className="relative mb-12">
            <h2 className={`text-5xl md:text-6xl font-bold mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Rejoignez la communauté
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                TRADOKU
              </span>
            </h2>
          </div>

          {/* Motivational message */}
          <div className={`relative mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white/80 backdrop-blur-sm border border-purple-100 rounded-2xl p-8 max-w-3xl mx-auto shadow-lg">
              <p className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 flex items-center justify-center gap-3">
                ⭐ Plus de traducteurs = Plus de mangas traduits ! ⭐
              </p>
            </div>
          </div>

          {/* Description */}
          <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative p-10 bg-white/60 backdrop-blur-sm rounded-3xl border border-gray-200 max-w-5xl mx-auto shadow-sm">
              <p className="text-xl md:text-2xl text-gray-800 mb-4 leading-relaxed font-medium">
                Que vous soyez traducteur expérimenté, passionné de mangas ou simple lecteur curieux, 
                votre contribution compte énormément.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Ensemble, rendons les meilleurs mangas et webtoons 
                accessibles à tous les francophones !
              </p>
            </div>
          </div>

          {/* Community roles cards */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {[
              {
                emoji: "🎨",
                title: "Créateurs",
                description: "Partagez vos œuvres et obtenez des traductions de qualité professionnelle",
                gradient: "from-purple-500 to-pink-500",
                bgColor: "bg-purple-50"
              },
              {
                emoji: "✍️",
                title: "Traducteurs",
                description: "Mettez vos compétences linguistiques au service de la communauté internationale",
                gradient: "from-pink-500 to-red-500",
                bgColor: "bg-pink-50"
              },
              {
                emoji: "📚",
                title: "Lecteurs",
                description: "Profitez d'un catalogue grandissant de contenus traduits avec passion",
                gradient: "from-blue-500 to-purple-500",
                bgColor: "bg-blue-50"
              }
            ].map((role, index) => (
              <div 
                key={index}
                className={`relative p-8 ${role.bgColor} rounded-2xl border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${role.gradient} rounded-t-2xl`}></div>
                
                <div className="flex justify-center mb-6">
                  <div className="text-4xl">
                    {role.emoji}
                  </div>
                </div>
                
                <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${role.gradient} bg-clip-text text-transparent`}>
                  {role.title}
                </h3>
                
                <p className="text-gray-700 font-medium leading-relaxed">
                  {role.description}
                </p>
              </div>
            ))}
          </div>

          {/* Call to action buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button 
              size="lg" 
              className="text-xl px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <span className="flex items-center gap-3">
                🚀 Créer un compte gratuit ✨
              </span>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-xl px-12 py-6 border-2 border-purple-500 hover:border-purple-600 bg-white hover:bg-purple-50 text-purple-600 font-bold rounded-full transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center gap-3">
                📋 Voir les projets en cours 👀
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
