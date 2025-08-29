import { useEffect, useRef } from 'react';

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

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll('.bento-card');

    // Add stars background
    if (enableStars) {
      const starsContainer = document.createElement('div');
      starsContainer.className = 'stars-container';
      starsContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
      `;

      for (let i = 0; i < particleCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.cssText = `
          position: absolute;
          width: 2px;
          height: 2px;
          background: rgba(${glowColor}, 0.8);
          border-radius: 50%;
          top: ${Math.random() * 100}%;
          left: ${Math.random() * 100}%;
          animation: twinkle ${2 + Math.random() * 3}s infinite;
        `;
        starsContainer.appendChild(star);
      }

      container.appendChild(starsContainer);
    }

    // Add spotlight effect
    if (enableSpotlight) {
      const spotlight = document.createElement('div');
      spotlight.className = 'spotlight';
      spotlight.style.cssText = `
        position: absolute;
        width: ${spotlightRadius}px;
        height: ${spotlightRadius}px;
        background: radial-gradient(circle, rgba(${glowColor}, 0.1) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 1;
        transition: all 0.3s ease;
      `;
      container.appendChild(spotlight);

      const handleMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left - spotlightRadius / 2;
        const y = e.clientY - rect.top - spotlightRadius / 2;
        spotlight.style.transform = `translate(${x}px, ${y}px)`;
      };

      container.addEventListener('mousemove', handleMouseMove);
    }

    // Add card effects
    cards.forEach((card) => {
      const cardElement = card as HTMLElement;

      if (enableTilt || enableMagnetism) {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = cardElement.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const deltaX = e.clientX - centerX;
          const deltaY = e.clientY - centerY;

          if (enableTilt) {
            const rotateX = (deltaY / rect.height) * 10;
            const rotateY = (deltaX / rect.width) * -10;
            cardElement.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
          }

          if (enableMagnetism) {
            const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
            if (distance < 150) {
              const pullX = deltaX * 0.1;
              const pullY = deltaY * 0.1;
              cardElement.style.transform += ` translate(${pullX}px, ${pullY}px)`;
            }
          }
        };

        const handleMouseLeave = () => {
          cardElement.style.transform = '';
        };

        cardElement.addEventListener('mousemove', handleMouseMove);
        cardElement.addEventListener('mouseleave', handleMouseLeave);
      }

      if (clickEffect) {
        const handleClick = (e: MouseEvent) => {
          const ripple = document.createElement('div');
          const rect = cardElement.getBoundingClientRect();
          const size = Math.max(rect.width, rect.height);
          const x = e.clientX - rect.left - size / 2;
          const y = e.clientY - rect.top - size / 2;

          ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(${glowColor}, 0.3);
            border-radius: 50%;
            transform: translate(${x}px, ${y}px) scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
            z-index: 2;
          `;

          cardElement.style.position = 'relative';
          cardElement.appendChild(ripple);

          setTimeout(() => ripple.remove(), 600);
        };

        cardElement.addEventListener('click', handleClick);
      }
    });

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes twinkle {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.2); }
      }
      
      @keyframes ripple {
        to { transform: translate(${0}px, ${0}px) scale(2); opacity: 0; }
      }
      
      .bento-card {
        transition: all 0.3s ease;
        will-change: transform;
      }
      
      ${enableBorderGlow ? `
        .bento-card:hover {
          box-shadow: 0 0 30px rgba(${glowColor}, 0.4);
        }
      ` : ''}
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [enableStars, enableSpotlight, enableBorderGlow, enableTilt, enableMagnetism, clickEffect, spotlightRadius, particleCount, glowColor]);

  return (
    <section ref={containerRef} className="py-20 px-4 relative overflow-hidden">
      {/* Background avec bambous */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="bamboo-element absolute top-10 left-[10%] h-32 opacity-60" style={{animationDelay: '0s'}}></div>
        <div className="bamboo-element absolute top-20 right-[15%] h-24 opacity-40" style={{animationDelay: '1s'}}></div>
        <div className="bamboo-element absolute bottom-20 left-[20%] h-28 opacity-50" style={{animationDelay: '2s'}}></div>
        <div className="bamboo-element absolute bottom-10 right-[25%] h-20 opacity-70" style={{animationDelay: '0.5s'}}></div>
        <div className="bamboo-element absolute top-1/2 left-[5%] h-36 opacity-30" style={{animationDelay: '1.5s'}}></div>
        <div className="bamboo-element absolute top-1/3 right-[8%] h-22 opacity-45" style={{animationDelay: '2.5s'}}></div>
      </div>

      {/* Particules de sakura flottantes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="sakura-particle" style={{left: '15%', animationDelay: '0s'}}>🌸</div>
        <div className="sakura-particle" style={{left: '75%', animationDelay: '3s'}}>🌸</div>
        <div className="sakura-particle" style={{left: '45%', animationDelay: '7s'}}>🌸</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent kanji-effect" data-kanji="道">
            Outils de traduction puissants
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre suite d'outils conçus pour faciliter la traduction collaborative de mangas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Upload & OCR */}
          <div className="bento-card col-span-1 lg:col-span-2 p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-purple-100 hover:border-purple-300 transition-all duration-300 manga-panel japanese-emoji emoji-origami">
            <div className="absolute inset-0 opacity-5 rounded-2xl asanoha-pattern"></div>
            <div className="flex items-start gap-6 relative z-10">
              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white naruto-spiral">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Upload PDF & OCR intelligent</h3>
                <p className="text-gray-600 mb-4">Uploadez vos chapitres PDF et laissez notre OCR avancé extraire automatiquement le texte des bulles avec une précision optimisée pour les mangas.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium onomatopoeia" style={{fontSize: '0.75rem', transform: 'skew(-5deg)'}}>SCAN!</span>
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">Détection de bulles</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: AI Translation */}
          <div className="bento-card p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-purple-100 hover:border-purple-300 transition-all duration-300 manga-panel japanese-emoji emoji-ninja">
            <div className="absolute inset-0 opacity-5 rounded-2xl seigaiha-pattern"></div>
            <div className="relative z-10">
              <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-6 w-fit magic-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">IA de traduction contextuelle</h3>
              <p className="text-gray-600 mb-4">Notre IA comprend le contexte manga et propose des traductions adaptées au style et aux expressions propres aux comics japonais.</p>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium onomatopoeia" style={{fontSize: '0.75rem', transform: 'skew(-5deg)'}}>WHOOSH!</span>
            </div>
          </div>

          {/* Card 3: Collaborative Review */}
          <div className="bento-card p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-purple-100 hover:border-purple-300 transition-all duration-300 manga-panel japanese-emoji emoji-sake">
            <div className="absolute inset-0 opacity-5 rounded-2xl hokusai-wave-bg"></div>
            <div className="relative z-10">
              <div className="p-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white mb-6 w-fit anime-float">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Révision collaborative</h3>
              <p className="text-gray-600 mb-4">Travaillez en équipe pour valider et améliorer les traductions avec un système de commentaires et de suggestions.</p>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium onomatopoeia" style={{fontSize: '0.75rem', transform: 'skew(-5deg)'}}>TEAM!</span>
            </div>
          </div>

          {/* Card 4: Quality Control */}
          <div className="bento-card col-span-1 lg:col-span-2 p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-purple-100 hover:border-purple-300 transition-all duration-300 manga-panel torii-frame japanese-emoji emoji-katana">
            <div className="absolute inset-0 opacity-5 rounded-2xl benday-dots"></div>
            <div className="flex items-start gap-6 relative z-10">
              <div className="p-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white power-aura">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Contrôle qualité & Export</h3>
                <p className="text-gray-600 mb-4">Système de validation à plusieurs niveaux avec prévisualisation en temps réel et export vers différents formats pour publication.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium onomatopoeia" style={{fontSize: '0.75rem', transform: 'skew(-5deg)'}}>PERFECT!</span>
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">Export professionnel</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Éléments décoratifs japonais */}
        <div className="absolute top-10 right-10 bamboo-element h-20 opacity-20"></div>
        <div className="absolute bottom-10 left-10 bamboo-element h-16 opacity-20" style={{animationDelay: '1s'}}></div>
      </div>
    </section>
  );
};

export default MagicBento;
