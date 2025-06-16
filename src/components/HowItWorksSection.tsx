import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HowItWorksSection = () => {
  const steps = [
    {
      step: "1",
      title: "Upload Chapter",
      description: "Import your PDF file containing the chapter to translate",
      emoji: "",
      color: "bg-blue-500"
    },
    {
      step: "2", 
      title: "Page Rendering",
      description: "View each manga page with our high-definition rendering system",
      emoji: "",
      color: "bg-purple-500"
    },
    {
      step: "3",
      title: "Bubble Annotation",
      description: "Manually outline text areas with our selection tool",
      emoji: "",
      color: "bg-green-500"
    },
    {
      step: "4",
      title: "OCR Extraction",
      description: "Japanese/Korean text is automatically extracted from each bubble",
      emoji: "",
      color: "bg-orange-500"
    },
    {
      step: "5",
      title: "AI Translation",
      description: "An intelligent automatic translation is generated to assist you",
      emoji: "",
      color: "bg-indigo-500"
    },
    {
      step: "6",
      title: "Manual Validation",
      description: "Edit and validate each translation to ensure outstanding quality",
      emoji: "",
      color: "bg-teal-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              How does it work?
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple and efficient <span className="text-purple-600 font-semibold">6-step</span> process to transform your favorite manga
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-sm bg-white hover:shadow-lg hover-lift smooth-transition relative"
            >
              <div className={`absolute top-0 left-0 w-full h-1 ${step.color}`}></div>
              
              <CardHeader className="text-center pt-8">
                <div className="flex justify-center items-center mb-4 relative">
                  <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                    {step.step}
                  </div>
                </div>
                
                <CardTitle className="text-xl font-bold text-gray-800">
                  {step.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pb-8">
                <p className="text-center text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="text-lg px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl hover-lift smooth-transition"
          >
            <span className="mr-2">🚀</span>
            Start now
          </Button>
          
          <p className="mt-4 text-gray-600">
            Join thousands of passionate translators!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;