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
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-lg border-b shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <BookOpen className="h-8 w-8 text-purple-600" />
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            TRADOKU
          </span>
          <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium">
            BETA
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { href: "#features", text: "Features" },
            { href: "#how-it-works", text: "How it works" },
            { href: "#community", text: "Community" }
          ].map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
            >
              {item.text}
            </a>
          ))}
        </nav>

        {/* Search and Login */}
        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search for a manga..."
              className="pl-10 w-64 border-gray-200 focus:border-purple-500"
            />
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6">
            Login
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white/95 backdrop-blur-lg">
          <div className="container py-4 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search for a manga..." className="pl-10 w-full" />
            </div>
            <nav className="flex flex-col gap-2">
              {[
                { href: "#features", text: "Features" },
                { href: "#how-it-works", text: "How it works" },
                { href: "#community", text: "Community" }
              ].map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="text-gray-700 hover:text-purple-600 transition-colors p-2 rounded"
                >
                  {item.text}
                </a>
              ))}
            </nav>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
              Login
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;