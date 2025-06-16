import { useState, useEffect } from "react";
import { Menu, X, Search, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

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
        ? 'bg-white/90 backdrop-blur-xl border-b border-purple-100 shadow-lg'
        : 'bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50/60 backdrop-blur-md'
    }`}>
      <div className="container flex h-20 items-center justify-between relative">
        {/* Logo modernisé avec effet glow et animation */}
        <Link to="/" className="flex items-center gap-3 group hover:scale-105 transition-transform">
          <span className="relative flex items-center">
            <span className="absolute -inset-2 rounded-full bg-gradient-to-tr from-purple-300 via-pink-200 to-orange-200 opacity-40 blur-md group-hover:opacity-60 transition-all"></span>
            <BookOpen className="h-10 w-10 text-purple-600 drop-shadow-lg animate-float-y" />
          </span>
          <span className="text-3xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent tracking-tight animate-gradient-x drop-shadow-xl">
            TRADOKU
          </span>
          <span className="text-xs bg-gradient-to-r from-purple-200 via-pink-100 to-orange-100 text-purple-700 px-3 py-1 rounded-full font-bold shadow-sm ml-2 animate-pulse-slow">
            BETA
          </span>
        </Link>

        {/* Desktop Navigation modernisé */}
        <nav className="hidden md:flex items-center gap-10 text-lg font-semibold">
          <Link
            to="/"
            className="relative px-3 py-1 text-gray-700 hover:text-purple-700 transition-colors duration-200 after:content-[''] after:block after:h-0.5 after:bg-gradient-to-r after:from-purple-400 after:to-pink-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
          >
            Home
          </Link>
          <Link
            to="/translate"
            className="relative px-3 py-1 text-purple-600 hover:text-pink-600 transition-colors duration-200 after:content-[''] after:block after:h-0.5 after:bg-gradient-to-r after:from-pink-400 after:to-orange-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
          >
            Translate
          </Link>
        </nav>

        {/* Search and Login modernisé */}
        <div className="hidden md:flex items-center gap-5">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-purple-400" />
            <Input
              placeholder="Search manga..."
              className="pl-12 w-64 border-0 bg-white/70 rounded-xl shadow-inner focus:ring-2 focus:ring-purple-300 transition-all"
            />
          </div>
          <Link
            to="/login"
            className="text-gray-700 hover:text-purple-600 transition-colors px-3 py-1 rounded-xl font-medium"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white px-5 py-2 rounded-xl font-bold shadow-md hover:scale-105 transition-transform"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button modernisé */}
        <button
          className="md:hidden p-3 rounded-full bg-gradient-to-tr from-purple-100 via-pink-100 to-orange-100 shadow-md hover:scale-110 transition-all"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-7 w-7 text-purple-600" /> : <Menu className="h-7 w-7 text-purple-600" />}
        </button>
      </div>

      {/* Mobile Menu modern UX */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white/95 backdrop-blur-xl shadow-xl animate-fade-in-down">
          <div className="container py-6 space-y-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-purple-400" />
              <Input placeholder="Search manga..." className="pl-12 w-full border-0 bg-white/80 rounded-xl shadow-inner focus:ring-2 focus:ring-purple-300 transition-all" />
            </div>
            <nav className="flex flex-col gap-3 text-lg font-semibold">
              <Link
                to="/"
                className="px-4 py-2 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/translate"
                className="px-4 py-2 rounded-xl text-purple-600 hover:bg-gradient-to-r hover:from-pink-50 hover:to-orange-50 transition-colors"
              >
                Translate
              </Link>
              <Link
                to="/login"
                className="px-4 py-2 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-colors"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white font-bold shadow-md mt-2 hover:scale-105 transition-transform"
              >
                Sign Up
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;