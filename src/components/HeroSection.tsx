import { Button } from "@/components/ui/button";
import { FileText, Users, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-32 px-4 overflow-hidden">
      {/* Fond premium animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50 z-0"></div>
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
      </div>
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Hero Title modernisé */}
          <div className="fade-in mb-12">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight drop-shadow-2xl select-none break-words leading-tight">
              <span className="block bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent animate-gradient-x">
                TRADOKU
              </span>
            </h1>
            <p className="text-2xl md:text-4xl text-gray-700 mb-10 font-light tracking-tight">
              The next-gen collaborative manga translation platform
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
          {/* Accroche modernisée */}
          <div className="text-2xl text-gray-800 mb-20 max-w-3xl mx-auto leading-relaxed">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-10 border-0 shadow-xl">
              <p>
                Create professional translations of your favorite mangas and webtoons with our collaborative platform. Every page is annotated, every bubble is AI-assisted, and every translation is validated by a passionate community. Export your work and publish wherever you want.
              </p>
            </div>
          </div>
          {/* CTA Buttons modernisés */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-24">
            <Button
              size="lg" 
              className="text-xl px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 hover:from-purple-700 hover:to-pink-700 text-white rounded-2xl font-bold shadow-2xl hover:scale-105 transition-all animate-bounce-x"
            >
              <span className="mr-3">🚀</span>
              Start translating
            </Button>
            <Button
              variant="outline" 
              size="lg" 
              className="text-xl px-12 py-6 border-2 border-gray-200 hover:border-purple-400 bg-white hover:bg-purple-50 text-gray-700 rounded-2xl font-bold shadow-md hover:scale-105 transition-all flex items-center gap-2"
            >
              <span className="mr-2">🛠️</span>
              Discover our tools
            </Button>
          </div>
          {/* Stats modernisées */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {[
              {
                icon: <FileText className="h-10 w-10 text-purple-600" />,
                title: "Upload PDF",
                subtitle: "Simple & fast"
              },
              {
                icon: <Users className="h-10 w-10 text-pink-600" />,
                title: "Community",
                subtitle: "Collaborative"
              },
              {
                icon: <Zap className="h-10 w-10 text-orange-500" />,
                title: "Integrated AI",
                subtitle: "Assisted translation"
              }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-white/90 backdrop-blur-lg rounded-2xl border-0 shadow-xl hover:scale-105 transition-transform duration-200 flex flex-col items-center"
              >
                <div className="flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <p className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">{stat.title}</p>
                <p className="text-lg text-gray-600">{stat.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Scroll indicator modernisé */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-8 h-14 border-2 border-purple-300 rounded-full flex justify-center items-start bg-white/70 shadow-inner animate-bounce-y">
          <div className="w-2 h-4 bg-purple-400 rounded-full mt-3 animate-bounce-y"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
