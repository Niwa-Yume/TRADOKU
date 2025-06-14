
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HowItWorksSection = () => {
  const steps = [
    {
      step: "1",
      title: "Upload du chapitre",
      description: "Importez votre fichier PDF contenant le chapitre à traduire",
      emoji: "📁",
      color: "bg-blue-500"
    },
    {
      step: "2", 
      title: "Rendu des pages",
      description: "Visualisez chaque page du manga avec notre système de rendu haute définition",
      emoji: "📄",
      color: "bg-purple-500"
    },
    {
      step: "3",
      title: "Annotation des bulles",
      description: "Délimitez manuellement les zones de texte avec notre outil de sélection",
      emoji: "🎯",
      color: "bg-green-500"
    },
    {
      step: "4",
      title: "Extraction OCR",
      description: "Le texte japonais/coréen est automatiquement extrait de chaque bulle",
      emoji: "🔍",
      color: "bg-orange-500"
    },
    {
      step: "5",
      title: "Traduction IA",
      description: "Une traduction automatique intelligente est générée pour vous assister",
      emoji: "🤖",
      color: "bg-indigo-500"
    },
    {
      step: "6",
      title: "Validation manuelle",
      description: "Corrigez et validez chaque traduction pour garantir une qualité exceptionnelle",
      emoji: "✅",
      color: "bg-teal-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Comment ça marche ?
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un processus simple et efficace en <span className="text-purple-600 font-semibold">6 étapes</span> pour transformer vos mangas préférés
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-sm bg-white hover:shadow-lg hover-lift smooth-transition relative"
            >
              <div className={`absolute top-0 left-0 w-full h-1 ${step.color}`}></div>
              
              <CardHeader className="text-center pt-8">
                <div className="flex justify-center items-center mb-4 relative">
                  <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                    {step.step}
                  </div>
                  <span className="absolute -top-2 -right-2 text-2xl">{step.emoji}</span>
                </div>
                
                <CardTitle className="text-xl font-bold text-gray-800">
                  {step.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pb-8">
                <p className="text-center text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="text-lg px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl hover-lift smooth-transition"
          >
            <span className="mr-2">🚀</span>
            Commencer maintenant
          </Button>
          
          <p className="mt-4 text-gray-600">
            Rejoignez des milliers de traducteurs passionnés !
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
