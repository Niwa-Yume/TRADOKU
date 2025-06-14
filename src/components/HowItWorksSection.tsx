
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HowItWorksSection = () => {
  const steps = [
    {
      step: "1",
      title: "Upload du chapitre",
      description: "Importez votre fichier PDF contenant le chapitre à traduire",
      emoji: "https://animated-fluent-emoji.vercel.app/file-folder.gif",
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "2", 
      title: "Rendu des pages",
      description: "Visualisez chaque page du manga avec notre système de rendu optimisé",
      emoji: "https://animated-fluent-emoji.vercel.app/page-with-curl.gif",
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "3",
      title: "Annotation des bulles",
      description: "Délimitez manuellement les zones de texte avec notre outil de sélection",
      emoji: "https://animated-fluent-emoji.vercel.app/bullseye.gif",
      color: "from-green-500 to-emerald-500"
    },
    {
      step: "4",
      title: "Extraction OCR",
      description: "Le texte est automatiquement extrait de chaque bulle sélectionnée",
      emoji: "https://animated-fluent-emoji.vercel.app/magnifying-glass-tilted-left.gif",
      color: "from-orange-500 to-red-500"
    },
    {
      step: "5",
      title: "Traduction IA",
      description: "Une traduction automatique est générée et pré-remplie pour vous aider",
      emoji: "https://animated-fluent-emoji.vercel.app/robot.gif",
      color: "from-indigo-500 to-purple-500"
    },
    {
      step: "6",
      title: "Validation manuelle",
      description: "Corrigez et validez chaque traduction pour assurer la qualité",
      emoji: "https://animated-fluent-emoji.vercel.app/check-mark-button.gif",
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un processus simple en 6 étapes pour transformer vos mangas préférés
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300">
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${step.color}`}></div>
              <CardHeader className="text-center pt-6">
                <div className="flex justify-center items-center mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-xl mr-3`}>
                    {step.step}
                  </div>
                  <img 
                    src={step.emoji} 
                    alt={step.title}
                    className="w-10 h-10"
                  />
                </div>
                <CardTitle className="text-xl font-bold">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="text-lg px-8 py-6 flex items-center gap-2">
            <img src="https://animated-fluent-emoji.vercel.app/rocket.gif" alt="rocket" className="w-5 h-5" />
            Commencer maintenant
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
