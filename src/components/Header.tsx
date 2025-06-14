
import { useState, useEffect } from "react";
import { Menu, X, Search, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${
      scrolled 
        ? 'bg-background/80 backdrop-blur-xl border-b shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-3 slide-in-left">
          <div className="relative">
            <BookOpen className="h-10 w-10 text-primary float-animation" />
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full blur opacity-30 animate-pulse"></div>
          </div>
          <span className="text-3xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent gradient-shift">
            TRADOKU
          </span>
          <div className="text-xs bg-gradient-to-r from-orange-400 to-red-500 text-white px-2 py-1 rounded-full font-bold animate-bounce">
            BETA
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { href: "#features", text: "Fonctionnalités" },
            { href: "#how-it-works", text: "Comment ça marche" },
            { href: "#community", text: "Communauté" }
          ].map((item, index) => (
            <a 
              key={item.href}
              href={item.href} 
              className={`relative text-foreground/80 hover:text-foreground transition-all duration-300 font-medium slide-in-up animate-delay-${(index + 1) * 100} group`}
            >
              {item.text}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Search Bar with enhanced styling */}
        <div className="hidden md:flex items-center gap-4 slide-in-right">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground transition-colors group-hover:text-purple-500" />
            <Input
              placeholder="Rechercher un manga..."
              className="pl-10 w-72 bg-background/50 backdrop-blur border-2 border-transparent hover:border-purple-500/50 focus:border-purple-500 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-2 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Connexion
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-purple-500/20 transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 rotate-in" />
          ) : (
            <Menu className="h-6 w-6 scale-in" />
          )}
        </button>
      </div>

      {/* Enhanced Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur-xl manga-reveal">
          <div className="container py-6 space-y-6">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher un manga..."
                className="pl-10 w-full bg-background/50 backdrop-blur border-2 border-purple-500/30 focus:border-purple-500"
              />
            </div>
            <nav className="flex flex-col gap-4">
              {[
                { href: "#features", text: "Fonctionnalités" },
                { href: "#how-it-works", text: "Comment ça marche" },
                { href: "#community", text: "Communauté" }
              ].map((item, index) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className={`text-foreground/80 hover:text-foreground transition-colors font-medium p-3 rounded-lg hover:bg-purple-500/10 slide-in-left animate-delay-${(index + 1) * 100}`}
                >
                  {item.text}
                </a>
              ))}
            </nav>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-full">
              Connexion
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
