import { Button } from "@/components/ui/button";
import { CheckCircle, Upload, Eye, Bot, Edit, FileText, BookOpen } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      step: "1",
      title: "Upload Chapter",
      description: "Import your PDF file containing the chapter to translate.",
      icon: <Upload className="h-7 w-7 text-blue-500" />,
      color: "bg-blue-100 border-blue-300"
    },
    {
      step: "2",
      title: "Page Rendering",
      description: "View each manga page with our high-definition rendering system.",
      icon: <BookOpen className="h-7 w-7 text-purple-500" />,
      color: "bg-purple-100 border-purple-300"
    },
    {
      step: "3",
      title: "Bubble Annotation",
      description: "Manually outline text areas with our tool.",
      icon: <Edit className="h-7 w-7 text-green-500" />,
      color: "bg-green-100 border-green-300"
    },
    {
      step: "4",
      title: "OCR Extraction",
      description: "Japanese/Korean text is automatically extracted from each bubble.",
      icon: <Eye className="h-7 w-7 text-orange-500" />,
      color: "bg-orange-100 border-orange-300"
    },
    {
      step: "5",
      title: "AI Translation",
      description: "An intelligent automatic translation is generated to assist you.",
      icon: <Bot className="h-7 w-7 text-indigo-500" />,
      color: "bg-indigo-100 border-indigo-300"
    },
    {
      step: "6",
      title: "Manual Validation",
      description: "Edit and validate each translation to ensure outstanding quality.",
      icon: <CheckCircle className="h-7 w-7 text-teal-500" />,
      color: "bg-teal-100 border-teal-300"
    }
  ];

  return (
    <section id="how-it-works" className="py-28 px-4 bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight drop-shadow-sm">
            <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
              How does it work?
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            A simple and efficient <span className="text-purple-600 font-semibold">6-step</span> process to transform your favorite manga.
          </p>
        </div>

        <div className="relative flex justify-center mb-24">
          <div className="absolute hidden md:block left-0 right-0 top-1/2 transform -translate-y-1/2 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 z-0" style={{height: 4}} />
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 w-full z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center group">
                <div className={`w-20 h-20 flex items-center justify-center rounded-full border-4 shadow-lg mb-6 transition-transform duration-200 group-hover:scale-110 ${step.color}`}>
                  {step.icon}
                </div>
                <div className="flex flex-col items-center text-center mb-2">
                  <div className="text-xl md:text-2xl font-extrabold text-gray-900 mb-1 tracking-tight leading-tight drop-shadow-sm">
                    {step.title}
                  </div>
                  <div className="text-gray-600 text-base md:text-lg leading-snug max-w-[200px] md:max-w-[220px] mx-auto font-normal">
                    {step.description}
                  </div>
                </div>
                <span className="text-xs text-gray-400 font-mono mt-1">Step {step.step}</span>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-8 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 z-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="text-lg px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl shadow-xl hover:scale-105 transition-transform duration-200 border-0"
          >
            <span className="mr-2">🚀</span>
            Start now
          </Button>
          <p className="mt-8 text-gray-700 text-lg max-w-xl mx-auto">
            <span className="font-semibold text-purple-600">Thousands of passionate translators</span> are already making manga accessible to everyone. Join the movement!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;