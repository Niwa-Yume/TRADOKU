
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      step: "1",
      title: "Upload du chapitre",
      description: "Importez votre fichier PDF contenant le chapitre à traduire dans notre système sécurisé",
      emoji: "https://animated-fluent-emoji.vercel.app/file-folder.gif",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
      accentColor: "text-blue-500"
    },
    {
      step: "2", 
      title: "Rendu des pages",
      description: "Visualisez chaque page du manga avec notre système de rendu haute définition optimisé",
      emoji: "https://animated-fluent-emoji.vercel.app/page-with-curl.gif",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-500/10 to-pink-500/10",
      accentColor: "text-purple-500"
    },
    {
      step: "3",
      title: "Annotation des bulles",
      description: "Délimitez manuellement les zones de texte avec notre outil de sélection précis et intuitif",
      emoji: "https://animated-fluent-emoji.vercel.app/bullseye.gif",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-500/10 to-emerald-500/10",
      accentColor: "text-green-500"
    },
    {
      step: "4",
      title: "Extraction OCR",
      description: "Le texte japonais/coréen est automatiquement extrait de chaque bulle sélectionnée avec précision",
      emoji: "https://animated-fluent-emoji.vercel.app/magnifying-glass-tilted-left.gif",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-500/10 to-red-500/10",
      accentColor: "text-orange-500"
    },
    {
      step: "5",
      title: "Traduction IA",
      description: "Une traduction automatique intelligente est générée et pré-remplie pour vous assister",
      emoji: "https://animated-fluent-emoji.vercel.app/robot.gif",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-gradient-to-br from-indigo-500/10 to-purple-500/10",
      accentColor: "text-indigo-500"
    },
    {
      step: "6",
      title: "Validation manuelle",
      description: "Corrigez, peaufinez et validez chaque traduction pour garantir une qualité exceptionnelle",
      emoji: "https://animated-fluent-emoji.vercel.app/check-mark-button.gif",
      color: "from-teal-500 to-green-500",
      bgColor: "bg-gradient-to-br from-teal-500/10 to-green-500/10",
      accentColor: "text-teal-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 relative overflow-hidden">
      {/* Background with manga panels */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20"></div>
      
      {/* Floating comic panels */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-20 h-28 bg-gradient-to-br from-white/5 to-white/10 rounded-lg border border-white/10 float-animation"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.6}s`,
              transform: `rotate(${Math.random() * 20 - 10}deg)`,
            }}
          >
            <div className="w-full h-1/4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-t-lg"></div>
          </div>
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <h2 className="text-5xl md:text-6xl font-black mb-8 slide-in-up">
              <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent gradient-shift">
                Comment ça marche ?
              </span>
            </h2>
            
            {/* Question marks floating around */}
            <div className="absolute -top-8 -left-8">
              <img src="https://animated-fluent-emoji.vercel.app/question-mark.gif" alt="question" className="w-8 h-8 float-animation" />
            </div>
            <div className="absolute -top-6 -right-10">
              <img src="https://animated-fluent-emoji.vercel.app/light-bulb.gif" alt="idea" className="w-10 h-10 float-animation animate-delay-300" />
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium slide-in-up animate-delay-200">
            Un processus simple et efficace en <span className="text-purple-600 font-bold">6 étapes</span> pour transformer vos mangas préférés
          </p>
        </div>

        {/* Steps with manga-style layout */}
        <div className="relative">
          {/* Connection lines between steps */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 transform -translate-y-1/2 opacity-30"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {steps.map((step, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden border-2 border-transparent hover:border-purple-500/50 transition-all duration-500 cursor-pointer group ${step.bgColor} backdrop-blur-sm slide-in-up animate-delay-${(index + 1) * 100}`}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${step.color}`}></div>
                
                {/* Manga-style corner fold */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-white/30 to-transparent"></div>
                
                <CardHeader className="text-center pt-8 relative">
                  <div className="flex justify-center items-center mb-6 relative">
                    {/* Step number with manga-style burst */}
                    <div className={`relative w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {step.step}
                      
                      {/* Pulsing ring effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-full animate-ping opacity-30`}></div>
                    </div>
                    
                    {/* Animated emoji */}
                    <div className={`absolute -top-2 -right-2 w-14 h-14 transition-all duration-300 ${activeStep === index ? 'scale-125 rotate-12' : 'scale-100'}`}>
                      <img 
                        src={step.emoji} 
                        alt={step.title}
                        className="w-full h-full drop-shadow-lg"
                      />
                    </div>
                  </div>
                  
                  <CardTitle className={`text-xl md:text-2xl font-bold mb-4 ${step.accentColor} group-hover:scale-105 transition-transform duration-300`}>
                    {step.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pb-8">
                  <p className="text-center text-muted-foreground leading-relaxed font-medium group-hover:text-foreground transition-colors duration-300">
                    {step.description}
                  </p>
                </CardContent>

                {/* Speech bubble pointing to next step */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                    <div className="w-8 h-8 bg-white rounded-full border-4 border-purple-500 shadow-lg animate-pulse">
                      <div className="absolute top-1/2 left-full w-4 h-1 bg-purple-500 transform -translate-y-1/2"></div>
                    </div>
                  </div>
                )}

                {/* Hover effects */}
                {activeStep === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Sparkle effects */}
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-400 rounded-full animate-ping"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.15}s`,
                        }}
                      />
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced CTA with manga-style burst */}
        <div className="text-center slide-in-up animate-delay-700">
          <div className="relative inline-block">
            {/* Main CTA button */}
            <Button 
              size="lg" 
              className="text-xl px-16 py-8 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 hover:from-purple-700 hover:via-pink-600 hover:to-blue-600 text-white font-bold rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center gap-4">
                <img src="https://animated-fluent-emoji.vercel.app/rocket.gif" alt="rocket" className="w-8 h-8" />
                Commencer maintenant
                <img src="https://animated-fluent-emoji.vercel.app/sparkles.gif" alt="sparkles" className="w-6 h-6" />
              </div>
            </Button>
            
            {/* Decorative burst effects */}
            <div className="absolute -top-6 -left-6">
              <img src="https://animated-fluent-emoji.vercel.app/collision.gif" alt="burst" className="w-12 h-12 rotate-in" />
            </div>
            <div className="absolute -bottom-4 -right-4">
              <img src="https://animated-fluent-emoji.vercel.app/fire.gif" alt="fire" className="w-10 h-10 float-animation animate-delay-200" />
            </div>
          </div>
          
          {/* Subtitle */}
          <p className="mt-6 text-lg text-muted-foreground font-medium">
            Rejoignez des milliers de traducteurs passionnés !
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
