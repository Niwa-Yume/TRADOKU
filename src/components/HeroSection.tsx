
import { Button } from "@/components/ui/button";
import { FileText, Users, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
      {/* Clean background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50"></div>
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Hero Title */}
          <div className="fade-in mb-8">
            <h1 className="text-6xl md:text-8xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                TRADOKU
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-600 mb-8 font-light">
              Plateforme communautaire de traduction
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-8 text-lg text-gray-600 mb-12">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📚</span>
                <span className="font-medium">Mangas</span>
              </div>
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎨</span>
                <span className="font-medium">Webtoons</span>
              </div>
              <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📄</span>
                <span className="font-medium">PDF</span>
              </div>
            </div>
          </div>
          
          <div className="text-lg text-gray-700 mb-16 max-w-3xl mx-auto leading-relaxed">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-sm">
              <p>
                Transformez vos mangas et webtoons préférés grâce à notre plateforme collaborative. 
                Chaque page est annotée, les bulles traduites avec l'aide de l'IA, 
                puis validées par notre communauté passionnée.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-purple-600 hover:bg-purple-700 text-white rounded-xl hover-lift smooth-transition"
            >
              <span className="mr-2">🚀</span>
              Commencer à traduire
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-2 border-gray-200 hover:border-purple-300 bg-white hover:bg-purple-50 text-gray-700 rounded-xl hover-lift smooth-transition"
            >
              <span className="mr-2">📖</span>
              Explorer les projets
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              {
                icon: <FileText className="h-8 w-8 text-purple-600" />,
                title: "Upload PDF",
                subtitle: "Simple & rapide"
              },
              {
                icon: <Users className="h-8 w-8 text-pink-600" />,
                title: "Communauté",
                subtitle: "Collaborative"
              },
              {
                icon: <Zap className="h-8 w-8 text-blue-600" />,
                title: "IA Intégrée",
                subtitle: "Traduction assistée"
              }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100 hover-lift smooth-transition"
              >
                <div className="flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <p className="text-xl font-semibold text-gray-800 mb-2">{stat.title}</p>
                <p className="text-gray-600">{stat.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-purple-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
