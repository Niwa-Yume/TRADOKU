
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, MousePointer, Eye, Bot, CheckCircle, Share2 } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Upload className="h-12 w-12 text-primary" />,
      title: "Upload PDF",
      description: "Importez vos chapitres de mangas et webtoons en format PDF en quelques clics",
      emoji: "https://animated-fluent-emoji.vercel.app/inbox-tray.gif"
    },
    {
      icon: <MousePointer className="h-12 w-12 text-primary" />,
      title: "Annotation manuelle",
      description: "Délimitez précisément chaque bulle de texte avec notre outil de sélection intuitive",
      emoji: "https://animated-fluent-emoji.vercel.app/bullseye.gif"
    },
    {
      icon: <Eye className="h-12 w-12 text-primary" />,
      title: "OCR avancé",
      description: "Extraction automatique du texte des bulles grâce à Tesseract.js",
      emoji: "https://animated-fluent-emoji.vercel.app/eye.gif"
    },
    {
      icon: <Bot className="h-12 w-12 text-primary" />,
      title: "IA de traduction",
      description: "Traduction automatique pré-remplie avec Google Translate ou autres APIs",
      emoji: "https://animated-fluent-emoji.vercel.app/robot.gif"
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-primary" />,
      title: "Validation communautaire",
      description: "Chaque traduction est vérifiée et validée par la communauté bulle par bulle",
      emoji: "https://animated-fluent-emoji.vercel.app/check-mark-button.gif"
    },
    {
      icon: <Share2 className="h-12 w-12 text-primary" />,
      title: "Mode lecture",
      description: "Visualisez le résultat final avec un mode lecture comparatif avant/après",
      emoji: "https://animated-fluent-emoji.vercel.app/books.gif"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Fonctionnalités principales
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez tous les outils qui font de TRADOKU la plateforme de référence 
            pour la traduction collaborative de mangas et webtoons
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    {feature.icon}
                    <img 
                      src={feature.emoji} 
                      alt={feature.title}
                      className="absolute -top-2 -right-2 w-8 h-8"
                    />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
