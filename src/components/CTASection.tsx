import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Zap, Globe } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Subtle geometric background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-gray-400"/>
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Title */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Join the revolution of
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                collaborative translation
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Over 10,000 translators already trust us to share their passion for manga with the world.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Users, number: "10K+", label: "Active translators" },
              { icon: Globe, number: "50+", label: "Supported languages" },
              { icon: Zap, number: "1M+", label: "Pages translated" }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <stat.icon className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Value Propositions */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">For translators</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Advanced translation tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Real-time collaboration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Recognition system</span>
                  </li>
                </ul>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">For readers</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>High-quality translated content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Early access to new releases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Modern and intuitive interface</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start for free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-gray-300 hover:border-purple-600 bg-white hover:bg-purple-50 text-gray-900 hover:text-purple-600 font-semibold px-8 py-3 rounded-lg transition-all duration-300"
            >
              Discover projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;