import { useEffect, useRef, useState } from 'react';
import { Upload, MousePointer, Eye, Bot, CheckCircle, Share2 } from "lucide-react";

interface MagicBentoProps {
  textAutoHide?: boolean;
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  enableTilt?: boolean;
  enableMagnetism?: boolean;
  clickEffect?: boolean;
  spotlightRadius?: number;
  particleCount?: number;
  glowColor?: string;
}

const MagicBento = ({
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  enableTilt = true,
  enableMagnetism = true,
  clickEffect = true,
  spotlightRadius = 300,
  particleCount = 12,
  glowColor = "132, 0, 255"
}: MagicBentoProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const bentoItems = [
    {
      icon: <Upload className="h-8 w-8 text-purple-600" />,
      title: "Upload PDF",
      description: "Import your manga and webtoon chapters in PDF format in just a few clicks",
      size: "col-span-1 row-span-1"
    },
    {
      icon: <MousePointer className="h-8 w-8 text-pink-600" />,
      title: "Manual annotation",
      description: "Precisely delimit each speech bubble with our intuitive selection tool",
      size: "col-span-2 row-span-1"
    },
    {
      icon: <Eye className="h-8 w-8 text-blue-600" />,
      title: "Advanced OCR",
      description: "Automatically extract text from bubbles thanks to our recognition technology",
      size: "col-span-1 row-span-2"
    },
    {
      icon: <Bot className="h-8 w-8 text-green-600" />,
      title: "AI translation",
      description: "Smart automatic translation pre-filled to assist you",
      size: "col-span-1 row-span-1"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-orange-600" />,
      title: "Community validation",
      description: "Each translation is checked and validated by the community",
      size: "col-span-1 row-span-1"
    },
    {
      icon: <Share2 className="h-8 w-8 text-indigo-600" />,
      title: "Export & Download",
      description: "Export your completed translations in multiple formats for publication",
      size: "col-span-2 row-span-1"
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    if (enableSpotlight || enableMagnetism) {
      document.addEventListener('mousemove', handleMouseMove);
      return () => document.removeEventListener('mousemove', handleMouseMove);
    }
  }, [enableSpotlight, enableMagnetism]);

  const handleCardClick = (e: React.MouseEvent) => {
    if (clickEffect) {
      const card = e.currentTarget as HTMLElement;
      card.style.transform = 'scale(0.95)';
      setTimeout(() => {
        card.style.transform = '';
      }, 150);
    }
  };

  return (
    <section
      id="features"
      className="relative py-32 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 overflow-hidden"
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Stars background */}
      {enableStars && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: particleCount }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Spotlight effect */}
      {enableSpotlight && isHovered && (
        <div
          className="absolute pointer-events-none z-10 rounded-full blur-xl opacity-30"
          style={{
            left: mousePosition.x - spotlightRadius / 2,
            top: mousePosition.y - spotlightRadius / 2,
            width: spotlightRadius,
            height: spotlightRadius,
            background: `radial-gradient(circle, rgba(${glowColor}, 0.3) 0%, transparent 70%)`
          }}
        />
      )}

      <div className="max-w-7xl mx-auto relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            Magic Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our powerful tools designed to transform your manga translation experience
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-3 grid-rows-3 gap-6 max-w-6xl mx-auto">
          {bentoItems.map((item, index) => (
            <div
              key={index}
              className={`
                ${item.size}
                group relative p-6 rounded-2xl bg-white/70 backdrop-blur-sm
                border border-white/20 shadow-lg hover:shadow-2xl
                transition-all duration-500 ease-out cursor-pointer
                ${enableBorderGlow ? 'hover:border-purple-300/50' : ''}
                ${enableTilt ? 'hover:-translate-y-2 hover:rotate-1' : ''}
                ${enableMagnetism ? 'transform-gpu' : ''}
              `}
              style={{
                transform: enableMagnetism && isHovered ?
                  `translate(${(mousePosition.x - 400) * 0.02}px, ${(mousePosition.y - 300) * 0.02}px)` :
                  undefined
              }}
              onClick={handleCardClick}
            >
              {/* Glow effect */}
              {enableBorderGlow && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              )}

              <div className="relative z-10">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className={`text-xl font-semibold text-gray-900 mb-3 ${textAutoHide ? 'group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text' : ''}`}>
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Ripple effect on click */}
              {clickEffect && (
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 scale-0 group-active:scale-100 transition-transform duration-300 ease-out" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-purple-100/20 pointer-events-none" />
    </section>
  );
};

export default MagicBento;
