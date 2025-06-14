
import { Button } from "@/components/ui/button";
import { FileText, Users, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20"></div>
      
      {/* Floating manga panels background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-32 h-40 bg-gradient-to-br from-white/5 to-white/10 rounded-lg border border-white/20 float-animation parallax-slow`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              transform: `translateX(${mousePosition.x * 0.02}px) translateY(${mousePosition.y * 0.02}px)`,
            }}
          >
            <div className="w-full h-1/3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-t-lg"></div>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Hero Title with enhanced effects */}
          <div className="relative mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 slide-in-up">
              <span 
                className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent gradient-shift manga-border inline-block"
                data-text="TRADOKU"
              >
                TRADOKU
              </span>
            </h1>
            
            {/* Decorative manga-style effects */}
            <div className="absolute -top-10 -left-10 w-20 h-20">
              <img 
                src="https://animated-fluent-emoji.vercel.app/sparkles.gif" 
                alt="sparkles" 
                className="w-full h-full rotate-in animate-delay-200" 
              />
            </div>
            <div className="absolute -top-5 -right-5 w-16 h-16">
              <img 
                src="https://animated-fluent-emoji.vercel.app/star.gif" 
                alt="star" 
                className="w-full h-full float-animation animate-delay-400" 
              />
            </div>
          </div>

          <div className="slide-in-up animate-delay-200">
            <p className="text-2xl md:text-3xl text-muted-foreground mb-6 font-semibold">
              Plateforme communautaire de traduction
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-xl md:text-2xl text-muted-foreground mb-12">
              <div className="flex items-center gap-3 speech-bubble hover-lift comic-hover">
                <img src="https://animated-fluent-emoji.vercel.app/book.gif" alt="book" className="w-8 h-8" />
                <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Mangas</span>
              </div>
              <div className="text-4xl text-purple-500 animate-pulse">•</div>
              <div className="flex items-center gap-3 speech-bubble hover-lift comic-hover">
                <img src="https://animated-fluent-emoji.vercel.app/artist-palette.gif" alt="palette" className="w-8 h-8" />
                <span className="font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">Webtoons</span>
              </div>
              <div className="text-4xl text-pink-500 animate-pulse">•</div>
              <div className="flex items-center gap-3 speech-bubble hover-lift comic-hover">
                <img src="https://animated-fluent-emoji.vercel.app/page-facing-up.gif" alt="page" className="w-8 h-8" />
                <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Fichiers PDF</span>
              </div>
            </div>
          </div>
          
          <div className="text-lg md:text-xl text-foreground/80 mb-16 max-w-4xl mx-auto slide-in-up animate-delay-300">
            <div className="relative p-8 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-white/20 backdrop-blur-xl">
              <p className="mb-6 leading-relaxed">
                Transformez vos mangas et webtoons préférés grâce à notre plateforme collaborative révolutionnaire. 
                Chaque page est soigneusement annotée, les bulles sont traduites manuellement avec 
                l'aide optionnelle de l'IA, puis validées une par une par notre communauté passionnée.
              </p>
              
              {/* Floating action elements */}
              <div className="absolute -top-4 -right-4">
                <img src="https://animated-fluent-emoji.vercel.app/thought-balloon.gif" alt="thought" className="w-12 h-12 float-animation" />
              </div>
              <div className="absolute -bottom-4 -left-4">
                <img src="https://animated-fluent-emoji.vercel.app/speech-balloon.gif" alt="speech" className="w-12 h-12 float-animation animate-delay-300" />
              </div>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 slide-in-up animate-delay-400">
            <Button 
              size="lg" 
              className="text-xl px-12 py-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover-lift relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-3">
                <img src="https://animated-fluent-emoji.vercel.app/rocket.gif" alt="rocket" className="w-6 h-6" />
                Commencer à traduire
              </div>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-xl px-12 py-8 border-2 border-purple-500/50 hover:border-purple-500 bg-transparent hover:bg-purple-500/10 text-foreground font-bold rounded-full transform transition-all duration-300 hover:scale-105 hover-lift relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-3">
                <img src="https://animated-fluent-emoji.vercel.app/open-book.gif" alt="open book" className="w-6 h-6" />
                Explorer les projets
              </div>
            </Button>
          </div>

          {/* Enhanced Stats with manga-style panels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto slide-in-up animate-delay-500">
            {[
              {
                icon: <FileText className="h-12 w-12 text-purple-500" />,
                title: "PDF Upload",
                subtitle: "Simple & rapide",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: <Users className="h-12 w-12 text-pink-500" />,
                title: "Communauté",
                subtitle: "Collaborative",
                gradient: "from-pink-500 to-blue-500"
              },
              {
                icon: <Zap className="h-12 w-12 text-blue-500" />,
                title: "IA Intégrée",
                subtitle: "Traduction assistée",
                gradient: "from-blue-500 to-purple-500"
              }
            ].map((stat, index) => (
              <div 
                key={index}
                className={`relative text-center p-8 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 backdrop-blur-xl hover-lift comic-hover animate-delay-${(index + 1) * 100}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                <div className="relative">
                  <div className="flex items-center justify-center mb-4 relative">
                    {stat.icon}
                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} rounded-full blur-xl opacity-30 animate-pulse`}></div>
                  </div>
                  <p className="text-2xl font-bold mb-2">{stat.title}</p>
                  <p className="text-muted-foreground font-medium">{stat.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
