import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="community" className="py-20 px-4 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Rejoignez la communauté TRADOKU
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            🌟 Plus de traducteurs = Plus de mangas traduits !
          </p>
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl mx-auto">
            Que vous soyez traducteur expérimenté, passionné de mangas ou simple lecteur curieux, 
            votre contribution compte. Ensemble, rendons les meilleurs mangas et webtoons 
            accessibles à tous !
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-background/60 backdrop-blur rounded-lg border">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-2">Créateurs</h3>
              <p className="text-muted-foreground">
                Partagez vos œuvres et obtenez des traductions de qualité
              </p>
            </div>
            <div className="p-6 bg-background/60 backdrop-blur rounded-lg border">
              <div className="text-4xl mb-4">🔤</div>
              <h3 className="text-xl font-semibold mb-2">Traducteurs</h3>
              <p className="text-muted-foreground">
                Mettez vos compétences linguistiques au service de la communauté
              </p>
            </div>
            <div className="p-6 bg-background/60 backdrop-blur rounded-lg border">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-xl font-semibold mb-2">Lecteurs</h3>
              <p className="text-muted-foreground">
                Profitez d'un catalogue grandissant de contenus traduits
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              🚀 Créer un compte gratuit
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              📋 Voir les projets en cours
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;