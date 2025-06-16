import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, MousePointer, Eye, Bot, CheckCircle, Share2 } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Upload className="h-8 w-8 text-purple-600" />,
      title: "Upload PDF",
      description: "Import your manga and webtoon chapters in PDF format in just a few clicks",
      emoji: "📁"
    },
    {
      icon: <MousePointer className="h-8 w-8 text-pink-600" />,
      title: "Manual annotation",
      description: "Precisely delimit each speech bubble with our intuitive selection tool",
      emoji: "🎯"
    },
    {
      icon: <Eye className="h-8 w-8 text-blue-600" />,
      title: "Advanced OCR",
      description: "Automatically extract text from bubbles thanks to our recognition technology",
      emoji: "👁️"
    },
    {
      icon: <Bot className="h-8 w-8 text-green-600" />,
      title: "AI translation",
      description: "Smart automatic translation pre-filled to assist you",
      emoji: "🤖"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-orange-600" />,
      title: "Community validation",
      description: "Each translation is checked and validated by the community",
      emoji: "✅"
    },
    {
      icon: <Share2 className="h-8 w-8 text-indigo-600" />,
      title: "Reading mode",
      description: "View the final result with a comparative reading mode",
      emoji: "📚"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Main features
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover all the tools that make <span className="text-purple-600 font-semibold">TRADOKU</span> the reference platform for collaborative translation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-sm bg-white hover:shadow-lg hover-lift smooth-transition"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center items-center mb-4 relative">
                  <div className="p-3 bg-gray-50 rounded-xl">
                    {feature.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 text-2xl">{feature.emoji}</span>
                </div>
                
                <CardTitle className="text-xl font-bold text-gray-800">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-center text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <p className="text-lg font-semibold text-gray-800 mb-2">Ready to get started?</p>
            <p className="text-gray-600">Join our community of passionate translators!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
