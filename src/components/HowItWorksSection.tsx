import CircularGallery from './CircularGallery';

const HowItWorksSection = () => {
  const steps = [
    {
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop&crop=center", // Document upload
      text: "Upload Chapter"
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center", // Computer screen/rendering
      text: "Page Rendering"
    },
    {
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop&crop=center", // Drawing/annotation
      text: "Bubble Annotation"
    },
    {
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop&crop=center", // Text scanning/OCR
      text: "OCR Extraction"
    },
    {
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center", // AI/Robot
      text: "AI Translation"
    },
    {
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop&crop=center", // Validation/checking
      text: "Manual Validation"
    }
  ];

  return (
    <section id="how-it-works" className="py-28 px-4 bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience our interactive 3D gallery showcasing the manga translation process
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