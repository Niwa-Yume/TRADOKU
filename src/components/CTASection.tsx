
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const CTASection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('community');
    if (section) observer.observe(section);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <section id="community" className="relative py-20 px-4 overflow-hidden">
      {/* Dynamic animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-blue-900/30"></div>
      
      {/* Animated manga panels floating in background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/20 float-animation"
            style={{
              width: `${60 + Math.random() * 40}px`,
              height: `${80 + Math.random() * 60}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.4}s`,
              transform: `translateX(${mousePosition.x * 0.01}px) translateY(${mousePosition.y * 0.01}px) rotate(${Math.random() * 30 - 15}deg)`,
            }}
          >
            <div className="w-full h-1/4 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-t-xl"></div>
            <div className="p-2 space-y-1">
              <div className="h-1 bg-white/20 rounded"></div>
              <div className="h-1 bg-white/15 rounded w-3/4"></div>
              <div className="h-1 bg-white/10 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main title with enhanced effects */}
          <div className="relative mb-12">
            <h2 className={`text-5xl md:text-7xl font-black mb-8 ${isVisible ? 'slide-in-up' : 'opacity-0'}`}>
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent gradient-shift inline-block">
                Rejoignez la communauté
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent gradient-shift inline-block mt-4">
                TRADOKU
              </span>
            </h2>
            
            {/* Floating decorative elements */}
            <div className="absolute -top-8 -left-8">
              <img src="https://animated-fluent-emoji.vercel.app/sparkles.gif" alt="sparkles" className="w-12 h-12 float-animation" />
            </div>
            <div className="absolute -top-6 -right-10">
              <img src="https://animated-fluent-emoji.vercel.app/star.gif" alt="star" className="w-10 h-10 float-animation animate-delay-300" />
            </div>
            <div className="absolute -bottom-4 left-10">
              <img src="https://animated-fluent-emoji.vercel.app/comet.gif" alt="comet" className="w-8 h-8 float-animation animate-delay-500" />
            </div>
          </div>

          {/* Motivational message with speech bubble */}
          <div className={`relative mb-12 ${isVisible ? 'slide-in-up animate-delay-200' : 'opacity-0'}`}>
            <div className="speech-bubble bg-gradient-to-r from-purple-600/90 to-pink-600/90 backdrop-blur-xl text-white p-8 max-w-3xl mx-auto hover-lift">
              <p className="text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                <img src="https://animated-fluent-emoji.vercel.app/star.gif" alt="star" className="w-8 h-8" />
                Plus de traducteurs = Plus de mangas traduits !
                <img src="https://animated-fluent-emoji.vercel.app/star.gif" alt="star" className="w-8 h-8" />
              </p>
            </div>
          </div>

          {/* Description with enhanced styling */}
          <div className={`mb-16 ${isVisible ? 'slide-in-up animate-delay-300' : 'opacity-0'}`}>
            <div className="relative p-10 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-white/20 backdrop-blur-xl max-w-5xl mx-auto">
              <p className="text-xl md:text-2xl text-foreground/90 mb-4 leading-relaxed font-medium">
                Que vous soyez traducteur expérimenté, passionné de mangas ou simple lecteur curieux, 
                votre contribution compte énormément.
              </p>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                Ensemble, rendons les meilleurs mangas et webtoons 
                accessibles à tous les francophones !
              </p>
              
              {/* Floating speech bubbles */}
              <div className="absolute -top-4 -left-4">
                <img src="https://animated-fluent-emoji.vercel.app/speech-balloon.gif" alt="speech" className="w-10 h-10 float-animation" />
              </div>
              <div className="absolute -bottom-4 -right-4">
                <img src="https://animated-fluent-emoji.vercel.app/thought-balloon.gif" alt="thought" className="w-10 h-10 float-animation animate-delay-400" />
              </div>
            </div>
          </div>

          {/* Community roles cards */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 ${isVisible ? 'slide-in-up animate-delay-400' : 'opacity-0'}`}>
            {[
              {
                emoji: "https://animated-fluent-emoji.vercel.app/artist-palette.gif",
                title: "Créateurs",
                description: "Partagez vos œuvres et obtenez des traductions de qualité professionnelle",
                gradient: "from-purple-500 to-pink-500",
                bgGradient: "from-purple-500/10 to-pink-500/10"
              },
              {
                emoji: "https://animated-fluent-emoji.vercel.app/writing-hand.gif",
                title: "Traducteurs",
                description: "Mettez vos compétences linguistiques au service de la communauté internationale",
                gradient: "from-pink-500 to-blue-500",
                bgGradient: "from-pink-500/10 to-blue-500/10"
              },
              {
                emoji: "https://animated-fluent-emoji.vercel.app/open-book.gif",
                title: "Lecteurs",
                description: "Profitez d'un catalogue grandissant de contenus traduits avec passion",
                gradient: "from-blue-500 to-purple-500",
                bgGradient: "from-blue-500/10 to-purple-500/10"
              }
            ].map((role, index) => (
              <div 
                key={index}
                className={`relative p-8 bg-gradient-to-br ${role.bgGradient} backdrop-blur-xl rounded-2xl border border-white/20 hover-lift comic-hover group transition-all duration-300`}
              >
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${role.gradient} rounded-t-2xl`}></div>
                
                <div className="flex justify-center mb-6">
                  <div className="relative group-hover:scale-110 transition-transform duration-300">
                    <img src={role.emoji} alt={role.title} className="w-16 h-16" />
                    <div className={`absolute inset-0 bg-gradient-to-r ${role.gradient} rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  </div>
                </div>
                
                <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${role.gradient} bg-clip-text text-transparent`}>
                  {role.title}
                </h3>
                
                <p className="text-muted-foreground font-medium leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {role.description}
                </p>

                {/* Corner decoration */}
                <div className="absolute top-4 right-4">
                  <div className={`w-8 h-8 bg-gradient-to-br ${role.gradient} opacity-20 rounded-full`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center ${isVisible ? 'slide-in-up animate-delay-500' : 'opacity-0'}`}>
            <Button 
              size="lg" 
              className="text-xl px-12 py-8 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 hover:from-purple-700 hover:via-pink-600 hover:to-blue-600 text-white font-bold rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center gap-3">
                <img src="https://animated-fluent-emoji.vercel.app/rocket.gif" alt="rocket" className="w-6 h-6" />
                Créer un compte gratuit
                <img src="https://animated-fluent-emoji.vercel.app/sparkles.gif" alt="sparkles" className="w-5 h-5" />
              </div>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-xl px-12 py-8 border-2 border-purple-500/50 hover:border-purple-500 bg-transparent hover:bg-purple-500/10 text-foreground font-bold rounded-full transform transition-all duration-300 hover:scale-105 hover-lift relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-3">
                <img src="https://animated-fluent-emoji.vercel.app/clipboard.gif" alt="clipboard" className="w-6 h-6" />
                Voir les projets en cours
                <img src="https://animated-fluent-emoji.vercel.app/eyes.gif" alt="eyes" className="w-5 h-5" />
              </div>
            </Button>
          </div>

          {/* Bottom decorative elements */}
          <div className="absolute bottom-8 left-8">
            <img src="https://animated-fluent-emoji.vercel.app/fire.gif" alt="fire" className="w-12 h-12 float-animation" />
          </div>
          <div className="absolute bottom-12 right-12">
            <img src="https://animated-fluent-emoji.vercel.app/heart-on-fire.gif" alt="heart on fire" className="w-10 h-10 float-animation animate-delay-600" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
