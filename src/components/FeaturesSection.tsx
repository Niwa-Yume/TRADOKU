import { Upload, MousePointer, Eye, Bot, CheckCircle, Share2 } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Upload className="h-8 w-8 text-purple-600" />,
      title: "Upload PDF",
      description: "Import your manga and webtoon chapters in PDF format in just a few clicks"
    },
    {
      icon: <MousePointer className="h-8 w-8 text-pink-600" />,
      title: "Manual annotation",
      description: "Precisely delimit each speech bubble with our intuitive selection tool"
    },
    {
      icon: <Eye className="h-8 w-8 text-blue-600" />,
      title: "Advanced OCR",
      description: "Automatically extract text from bubbles thanks to our recognition technology"
    },
    {
      icon: <Bot className="h-8 w-8 text-green-600" />,
      title: "AI translation",
      description: "Smart automatic translation pre-filled to assist you"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-orange-600" />,
      title: "Community validation",
      description: "Each translation is checked and validated by the community"
    },
    {
      icon: <Share2 className="h-8 w-8 text-indigo-600" />,
      title: "Reading mode",
      description: "View the final result with a comparative reading mode"
    }
  ];

  return (
    <section id="features" className="relative py-32 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 overflow-hidden">
      {/* Background animated shapes */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <svg className="w-full h-full animate-pulse-slow" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="feat2" cx="50%" cy="50%" r="80%">
              <stop offset="0%" stopColor="#f0abfc" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="320" cy="80" rx="120" ry="80" fill="url(#feat2)" />
          <ellipse cx="80" cy="320" rx="100" ry="60" fill="url(#feat2)" />
        </svg>
      </div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight drop-shadow-xl">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent animate-gradient-x">
              Main features
            </span>
          </h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed">
            Discover the unique tools that make <span className="text-purple-600 font-semibold">TRADOKU</span> the next-gen platform for manga translation.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-12 mb-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative w-full sm:w-[340px] bg-white/90 backdrop-blur-lg rounded-[2.5rem] p-10 shadow-2xl border-0 group overflow-hidden flex flex-col items-center text-center hover:scale-[1.04] hover:-rotate-1 transition-all duration-300"
              style={{ minHeight: 320 }}
            >
              <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full blur-2xl opacity-20 bg-gradient-to-br from-purple-200 via-pink-200 to-orange-200"></div>
              <div className="relative z-10 flex flex-col items-center mb-6">
                <div className="mb-5 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 shadow-lg border-4 border-white">
                  {feature.icon}
                </div>
                <div className="text-2xl font-extrabold text-gray-900 mb-2 tracking-tight drop-shadow-sm uppercase letter-spacing-wide">
                  {feature.title}
                </div>
                <div className="text-lg text-gray-600 leading-relaxed max-w-xs mx-auto font-normal">
                  {feature.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-20">
          <a href="#" className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-14 py-5 rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl text-xl tracking-wide">
            <span className="inline-block animate-bounce-x">✨</span>
            Get started
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
