
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, MousePointer, Eye, Bot, CheckCircle, Share2 } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Upload className="h-8 w-8 text-purple-600" />,
      title: "Upload PDF",
      description: "Importez vos chapitres de mangas et webtoons en format PDF en quelques clics",
      emoji: "📁"
    },
    {
      icon: <MousePointer className="h-8 w-8 text-pink-600" />,
      title: "Annotation manuelle",
      description: "Délimitez précisément chaque bulle de texte avec notre outil de sélection intuitive",
      emoji: "🎯"
    },
    {
      icon: <Eye className="h-8 w-8 text-blue-600" />,
      title: "OCR avancé",
      description: "Extraction automatique du texte des bulles grâce à notre technologie de reconnaissance",
      emoji: "👁️"
    },
    {
      icon: <Bot className="h-8 w-8 text-green-600" />,
      title: "IA de traduction",
      description: "Traduction automatique intelligente pré-remplie pour vous assister",
      emoji: "🤖"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-orange-600" />,
      title: "Validation communautaire",
      description: "Chaque traduction est vérifiée et validée par la communauté",
      emoji: "✅"
    },
    {
      icon: <Share2 className="h-8 w-8 text-indigo-600" />,
      title: "Mode lecture",
      description: "Visualisez le résultat final avec un mode lecture comparatif",
      emoji: "📚"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Fonctionnalités principales
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez tous les outils qui font de <span className="text-purple-600 font-semibold">TRADOKU</span> la plateforme de référence 
            pour la traduction collaborative
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-sm bg-white hover:shadow-lg hover-lift smooth-transition"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center items-center mb-4 relative">
                  <div className="p-3 bg-gray-50 rounded-xl">
                    {feature.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 text-2xl">{feature.emoji}</span>
                </div>
                
                <CardTitle className="text-xl font-bold text-gray-800">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-center text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <p className="text-lg font-semibold text-gray-800 mb-2">Prêt à commencer ?</p>
            <p className="text-gray-600">Rejoignez notre communauté de traducteurs passionnés !</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
