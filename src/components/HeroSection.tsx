
import { Button } from "@/components/ui/button";
import { FileText, Users, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              TRADOKU
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Plateforme communautaire de traduction
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 flex items-center justify-center gap-3">
            <img src="https://animated-fluent-emoji.vercel.app/book.gif" alt="book" className="w-6 h-6" />
            Mangas • 
            <img src="https://animated-fluent-emoji.vercel.app/artist-palette.gif" alt="palette" className="w-6 h-6" />
            Webtoons • 
            <img src="https://animated-fluent-emoji.vercel.app/page-facing-up.gif" alt="page" className="w-6 h-6" />
            Fichiers PDF
          </p>
          
          <div className="text-lg text-foreground/80 mb-12 max-w-3xl mx-auto">
            <p className="mb-4">
              Transformez vos mangas et webtoons préférés grâce à notre plateforme collaborative. 
              Chaque page est soigneusement annotée, les bulles sont traduites manuellement avec 
              l'aide optionnelle de l'IA, puis validées une par une par notre communauté.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="text-lg px-8 py-6 flex items-center gap-2">
              <img src="https://animated-fluent-emoji.vercel.app/rocket.gif" alt="rocket" className="w-5 h-5" />
              Commencer à traduire
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 flex items-center gap-2">
              <img src="https://animated-fluent-emoji.vercel.app/open-book.gif" alt="open book" className="w-5 h-5" />
              Explorer les projets
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <p className="text-2xl font-bold">PDF Upload</p>
              <p className="text-muted-foreground">Simple & rapide</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <p className="text-2xl font-bold">Communauté</p>
              <p className="text-muted-foreground">Collaborative</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <p className="text-2xl font-bold">IA Intégrée</p>
              <p className="text-muted-foreground">Traduction assistée</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
