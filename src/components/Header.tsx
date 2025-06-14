import { useState } from "react";
import { Menu, X, Search, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            TRADOKU
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
            Fonctionnalités
          </a>
          <a href="#how-it-works" className="text-foreground/80 hover:text-foreground transition-colors">
            Comment ça marche
          </a>
          <a href="#community" className="text-foreground/80 hover:text-foreground transition-colors">
            Communauté
          </a>
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher un manga..."
              className="pl-10 w-64"
            />
          </div>
          <Button>Connexion</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher un manga..."
                className="pl-10 w-full"
              />
            </div>
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
                Fonctionnalités
              </a>
              <a href="#how-it-works" className="text-foreground/80 hover:text-foreground transition-colors">
                Comment ça marche
              </a>
              <a href="#community" className="text-foreground/80 hover:text-foreground transition-colors">
                Communauté
              </a>
            </nav>
            <Button className="w-full">Connexion</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;