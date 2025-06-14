
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, MousePointer, Eye, Bot, CheckCircle, Share2 } from "lucide-react";
import { useState } from "react";

const FeaturesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      icon: <Upload className="h-12 w-12 text-purple-500" />,
      title: "Upload PDF",
      description: "Importez vos chapitres de mangas et webtoons en format PDF en quelques clics",
      emoji: "https://animated-fluent-emoji.vercel.app/inbox-tray.gif",
      gradient: "from-purple-500 via-pink-500 to-purple-600",
      bgPattern: "bg-gradient-to-br from-purple-500/10 to-pink-500/10"
    },
    {
      icon: <MousePointer className="h-12 w-12 text-pink-500" />,
      title: "Annotation manuelle",
      description: "Délimitez précisément chaque bulle de texte avec notre outil de sélection intuitive",
      emoji: "https://animated-fluent-emoji.vercel.app/bullseye.gif",
      gradient: "from-pink-500 via-rose-500 to-pink-600",
      bgPattern: "bg-gradient-to-br from-pink-500/10 to-rose-500/10"
    },
    {
      icon: <Eye className="h-12 w-12 text-blue-500" />,
      title: "OCR avancé",
      description: "Extraction automatique du texte des bulles grâce à Tesseract.js",
      emoji: "https://animated-fluent-emoji.vercel.app/eye.gif",
      gradient: "from-blue-500 via-cyan-500 to-blue-600",
      bgPattern: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: <Bot className="h-12 w-12 text-green-500" />,
      title: "IA de traduction",
      description: "Traduction automatique pré-remplie avec Google Translate ou autres APIs",
      emoji: "https://animated-fluent-emoji.vercel.app/robot.gif",
      gradient: "from-green-500 via-emerald-500 to-green-600",
      bgPattern: "bg-gradient-to-br from-green-500/10 to-emerald-500/10"
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-orange-500" />,
      title: "Validation communautaire",
      description: "Chaque traduction est vérifiée et validée par la communauté bulle par bulle",
      emoji: "https://animated-fluent-emoji.vercel.app/check-mark-button.gif",
      gradient: "from-orange-500 via-amber-500 to-orange-600",
      bgPattern: "bg-gradient-to-br from-orange-500/10 to-amber-500/10"
    },
    {
      icon: <Share2 className="h-12 w-12 text-indigo-500" />,
      title: "Mode lecture",
      description: "Visualisez le résultat final avec un mode lecture comparatif avant/après",
      emoji: "https://animated-fluent-emoji.vercel.app/books.gif",
      gradient: "from-indigo-500 via-purple-500 to-indigo-600",
      bgPattern: "bg-gradient-to-br from-indigo-500/10 to-purple-500/10"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background"></div>
      
      {/* Floating manga panels */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-24 h-32 bg-gradient-to-br from-white/5 to-white/10 rounded-lg border border-white/10 float-animation"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <h2 className="text-5xl md:text-6xl font-black mb-8 slide-in-up">
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent gradient-shift">
                Fonctionnalités principales
              </span>
            </h2>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6">
              <img src="https://animated-fluent-emoji.vercel.app/gear.gif" alt="gear" className="w-10 h-10 rotate-in animate-delay-200" />
            </div>
            <div className="absolute -top-6 -right-6">
              <img src="https://animated-fluent-emoji.vercel.app/wrench.gif" alt="wrench" className="w-10 h-10 rotate-in animate-delay-400" />
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium slide-in-up animate-delay-200">
            Découvrez tous les outils qui font de <span className="text-purple-600 font-bold">TRADOKU</span> la plateforme de référence 
            pour la traduction collaborative de mangas et webtoons
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden border-2 border-transparent hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover-lift group cursor-pointer ${feature.bgPattern} backdrop-blur-sm slide-in-up animate-delay-${(index + 1) * 100}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated gradient border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg`}></div>
              
              {/* Manga-style corner decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/20 to-transparent"></div>
              
              <CardHeader className="text-center relative z-10 pb-6">
                <div className="flex justify-center mb-6 relative">
                  <div className="relative group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                    
                    {/* Glowing effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    
                    {/* Animated emoji overlay */}
                    <div className={`absolute -top-3 -right-3 w-12 h-12 transition-all duration-300 ${hoveredCard === index ? 'scale-125 rotate-12' : 'scale-100'}`}>
                      <img 
                        src={feature.emoji} 
                        alt={feature.title}
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </div>
                
                <CardTitle className="text-2xl font-bold mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <CardDescription className="text-center text-base leading-relaxed font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                  {feature.description}
                </CardDescription>
              </CardContent>

              {/* Manga-style speech bubble effect */}
              <div className="absolute bottom-4 left-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full h-full bg-white rounded-full shadow-lg relative">
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-white transform rotate-45"></div>
                </div>
              </div>

              {/* Particle effects on hover */}
              {hoveredCard === index && (
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-purple-500 rounded-full animate-ping"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    />
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Call to action with manga-style burst */}
        <div className="text-center mt-20 slide-in-up animate-delay-600">
          <div className="relative inline-block">
            <div className="speech-bubble bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 hover-lift comic-hover">
              <p className="text-xl font-bold mb-2">Prêt à commencer ?</p>
              <p className="text-lg opacity-90">Rejoignez notre communauté de traducteurs passionnés !</p>
            </div>
            
            {/* Decorative burst effect */}
            <div className="absolute -top-4 -right-4">
              <img src="https://animated-fluent-emoji.vercel.app/collision.gif" alt="burst" className="w-12 h-12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
