import CircularGallery from './CircularGallery';

const HowItWorksSection = () => {
  const steps = [
    {
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop&crop=center", // Upload PDF
      text: "Upload Chapter"
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center", // Page processing
      text: "Page Rendering"
    },
    {
      image: "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?w=800&h=600&fit=crop&crop=center", // Bubble detection/annotation
      text: "Bubble Detection"
    },
    {
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&crop=center", // OCR text extraction
      text: "Text Extraction"
    },
    {
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center", // AI translation
      text: "AI Translation"
    },
    {
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop&crop=center", // Manual validation
      text: "Manual Validation"
    }
  ];

  return (
    <section id="how-it-works" className="py-28 px-4 bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Comment ça fonctionne
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre processus de traduction interactive étape par étape dans cette galerie 3D immersive
          </p>
        </div>

        <div style={{height: '500px', position: 'relative'}}>
          <CircularGallery
            items={steps}
            bend={3}
            textColor="#1f2937"
            borderRadius={0.05}
            font="bold 24px Inter"
            scrollSpeed={2}
            scrollEase={0.05}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;