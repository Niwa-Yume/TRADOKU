import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Zap, Globe } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-br from-gray-50 via-purple-50 to-white overflow-hidden">
      {/* Animated geometric background pattern */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <svg className="w-full h-full animate-pulse-slow" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="bg1" cx="50%" cy="50%" r="80%">
              <stop offset="0%" stopColor="#e9d5ff" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="320" cy="80" r="120" fill="url(#bg1)" />
          <circle cx="80" cy="320" r="100" fill="url(#bg1)" />
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main CTA Title */}
          <div className="mb-12">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight tracking-tight drop-shadow-xl">
              <span className="block">Join the revolution of</span>
              <span className="block bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent animate-gradient-x">
                collaborative translation
              </span>
            </h2>
            <p className="text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium">
              Over 10,000 translators already trust our tools to create professional manga translations.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Users, number: "10K+", label: "Active translators", color: "from-purple-400 to-pink-400" },
              { icon: Globe, number: "50+", label: "Supported languages", color: "from-pink-400 to-orange-300" },
              { icon: Zap, number: "1M+", label: "Pages translated", color: "from-orange-400 to-purple-400" }
            ].map((stat, index) => (
              <div key={index} className="relative bg-white rounded-2xl p-8 shadow-xl border-0 group overflow-hidden hover:scale-[1.03] transition-transform duration-300">
                <div className={`absolute -top-8 -right-8 w-32 h-32 rounded-full blur-2xl opacity-30 bg-gradient-to-br ${stat.color}`}></div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className={`mb-4 p-4 rounded-full bg-gradient-to-tr ${stat.color} shadow-lg animate-float-y`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-extrabold text-gray-900 mb-1 tracking-tight">{stat.number}</div>
                  <div className="text-base text-gray-600 font-medium tracking-wide uppercase letter-spacing-wide">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Value Propositions */}
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border-0 mb-16 flex flex-col md:flex-row gap-12 items-center justify-center">
            <div className="flex-1 text-left">
              <h3 className="text-2xl font-bold text-purple-700 mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-purple-500" /> For translators
              </h3>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-center gap-3">
                  <span className="inline-block w-2 h-2 bg-purple-600 rounded-full"></span>
                  Advanced translation tools
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-block w-2 h-2 bg-purple-600 rounded-full"></span>
                  Real-time collaboration
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-block w-2 h-2 bg-purple-600 rounded-full"></span>
                  Recognition system
                </li>
              </ul>
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-2xl font-bold text-pink-700 mb-4 flex items-center gap-3">
                <Globe className="w-6 h-6 text-pink-500" /> For readers
              </h3>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-center gap-3">
                  <span className="inline-block w-2 h-2 bg-pink-600 rounded-full"></span>
                  High-quality translated content
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-block w-2 h-2 bg-pink-600 rounded-full"></span>
                  Early access to new releases
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-block w-2 h-2 bg-pink-600 rounded-full"></span>
                  Modern and intuitive interface
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Buttons améliorées */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-10">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 hover:from-purple-700 hover:to-pink-700 text-white font-extrabold px-14 py-5 rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl text-xl flex items-center gap-3 animate-bounce-x"
            >
              <ArrowRight className="h-6 w-6" />
              Start for free
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-gray-300 hover:border-purple-600 bg-white hover:bg-purple-50 text-gray-900 hover:text-purple-600 font-semibold px-14 py-5 rounded-2xl transition-all duration-300 text-xl flex items-center gap-3"
            >
              <Zap className="h-6 w-6 text-purple-500" />
              Discover projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;