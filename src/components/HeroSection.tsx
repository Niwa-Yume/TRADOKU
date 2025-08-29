import { Button } from "@/components/ui/button";
import { FileText, Users, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-32 px-4 overflow-hidden">
      {/* Fond premium animé avec références japonaises */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50 z-0 seigaiha-pattern"></div>
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <svg className="w-full h-full animate-pulse-slow" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="hero1" cx="50%" cy="50%" r="80%">
              <stop offset="0%" stopColor="#f0abfc" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="320" cy="80" rx="120" ry="80" fill="url(#hero1)" />
          <ellipse cx="80" cy="320" rx="100" ry="60" fill="url(#hero1)" />
        </svg>

        {/* Particules de sakura qui tombent */}
        <div className="sakura-particle" style={{left: '10%', animationDelay: '0s'}}>🌸</div>
        <div className="sakura-particle" style={{left: '30%', animationDelay: '2s'}}>🌸</div>
        <div className="sakura-particle" style={{left: '60%', animationDelay: '4s'}}>🌸</div>
        <div className="sakura-particle" style={{left: '80%', animationDelay: '1s'}}>🌸</div>
        <div className="sakura-particle" style={{left: '45%', animationDelay: '6s'}}>🌸</div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Hero Title modernisé avec effet kanji */}
          <div className="fade-in mb-12">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight drop-shadow-2xl select-none break-words leading-tight kanji-effect" data-kanji="翻">
              <span className="block bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent animate-gradient-x">
                TRADOKU
              </span>
            </h1>
            <p className="text-2xl md:text-4xl text-gray-700 mb-10 font-light tracking-tight">
              Plateforme collaborative de traduction de mangas
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-xl text-gray-700 mb-14">
              <div className="flex items-center gap-2">
                <span className="text-3xl">
                  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Books.png" alt="Books" width="32" height="32" />
                </span>
                <span className="font-semibold">Webtoon</span>
              </div>
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <div className="flex items-center gap-2">
                <span className="text-3xl">
                  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Map%20of%20Japan.png" alt="Map of Japan" width="32" height="32" />
                </span>
                <span className="font-semibold">Mangas</span>
              </div>
              <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
              <div className="flex items-center gap-2">
                <span className="text-3xl">📄</span>
                <span className="font-semibold">PDF</span>
              </div>
            </div>
          </div>

          {/* Accroche modernisée avec panneau manga style */}
          <div className="text-2xl text-gray-800 mb-20 max-w-3xl mx-auto leading-relaxed">
            <div className="manga-panel speech-tail p-10 shadow-xl relative">
              <p>
                <span className="font-semibold text-purple-600">Traduisez collaborativement</span> vos mangas et webtoons favoris avec notre plateforme dédiée.
                Nous ne publions pas les œuvres - nous vous donnons les <span className="font-semibold text-pink-600">outils de traduction</span> pour créer
                vos propres versions traduites et les exporter où vous le souhaitez.
              </p>
            </div>
          </div>

          {/* CTA Buttons modernisés avec effets manga */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-24">
            <Button
              size="lg" 
              className="text-xl px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 hover:from-purple-700 hover:to-pink-700 text-white rounded-2xl font-bold shadow-2xl hover:scale-105 transition-all animate-bounce-x speed-lines-dbz"
            >
              <span className="mr-3">🚀</span>
              Commencer à traduire
            </Button>
            <Button
              variant="outline" 
              size="lg" 
              className="text-xl px-12 py-6 border-2 border-gray-200 bg-white text-gray-700 rounded-2xl font-bold shadow-md flex items-center gap-2"
            >
              <span className="mr-2">🛠️</span>
              Découvrir nos outils
            </Button>
          </div>

          {/* Stats modernisées avec éléments japonais */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {[
              {
                icon: <FileText className="h-10 w-10 text-purple-600" />,
                title: "Upload PDF",
                subtitle: "Simple & rapide",
                pattern: "asanoha-pattern"
              },
              {
                icon: <Users className="h-10 w-10 text-pink-600" />,
                title: "Communauté",
                subtitle: "Traduction collaborative",
                pattern: "seigaiha-pattern"
              },
              {
                icon: <Zap className="h-10 w-10 text-orange-500" />,
                title: "IA intégrée",
                subtitle: "Traduction assistée",
                pattern: "hokusai-wave-bg"
              }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-white/90 backdrop-blur-lg rounded-2xl border-0 shadow-xl hover:scale-105 transition-transform duration-200 flex flex-col items-center manga-panel relative"
              >
                <div className={`absolute inset-0 opacity-10 rounded-2xl ${stat.pattern}`}></div>
                <div className="flex items-center justify-center mb-4 relative z-10">
                  {stat.icon}
                </div>
                <p className="text-2xl font-bold text-gray-900 mb-2 tracking-tight relative z-10">{stat.title}</p>
                <p className="text-lg text-gray-600 relative z-10">{stat.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator modernisé avec bambou */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-8 h-14 border-2 border-purple-300 rounded-full flex justify-center items-start bg-white/70 shadow-inner animate-bounce-y relative">
          <div className="w-2 h-4 bg-purple-400 rounded-full mt-3 animate-bounce-y"></div>
          <div className="bamboo-element absolute -right-4 h-12 opacity-30"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
