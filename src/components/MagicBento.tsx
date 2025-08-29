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

  useEffect(() => {
    // Intersection Observer pour révéler les cartes (restaure l'impression de grille disparue)
    const root = containerRef.current;
    if (!root) return;
    const cards = Array.from(root.querySelectorAll('.bento-card')) as HTMLElement[];
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { root: null, threshold: 0.25 });
    cards.forEach(c => io.observe(c));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    // Parallax pour forêt de bambous (bas uniquement)
    const section = containerRef.current;
    if (!section) return;
    const collect = () => Array.from(section.querySelectorAll('.bamboo-element, .bamboo-silhouette')) as HTMLElement[];
    let bambooEls = collect();
    let ticking = false;
    const update = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (vh - rect.top) / (rect.height + vh)));
      bambooEls.forEach(el => {
        const depth = (el.dataset.depth || (el.classList.contains('bamboo-silhouette') ? 'back' : 'mid')) as 'front' | 'mid' | 'back';
        let factor = -15; // back base plus doux
        if (depth === 'mid') factor = -28;
        if (depth === 'front') factor = -40;
        if (el.classList.contains('bamboo-silhouette')) factor = -10;
        const y = factor * progress;
        el.style.setProperty('--py', y + 'px');
      });
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => { update(); ticking = false; });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    setTimeout(() => { bambooEls = collect(); update(); }, 50);
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section ref={containerRef} className="magic-bento-bg pt-0 pb-20 px-4 relative overflow-hidden enhanced-japanese-bg">
      {/* Background enrichi */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50"></div>

      {/* Kanji flottants pour cette section */}
      <div className="floating-kanji" style={{top: '8%', left: '3%', fontSize: '1.8rem', color: 'rgba(147, 51, 234, 0.12)', animationDelay: '0s'}}>道</div>
      <div className="floating-kanji" style={{top: '15%', right: '5%', fontSize: '1.4rem', color: 'rgba(236, 72, 153, 0.15)', animationDelay: '2s'}}>具</div>
      <div className="floating-kanji" style={{top: '65%', left: '6%', fontSize: '1.6rem', color: 'rgba(59, 130, 246, 0.13)', animationDelay: '4s'}}>力</div>
      <div className="floating-kanji" style={{top: '80%', right: '8%', fontSize: '1.3rem', color: 'rgba(34, 197, 94, 0.16)', animationDelay: '3s'}}>術</div>
      <div className="floating-kanji" style={{top: '35%', left: '90%', fontSize: '1.7rem', color: 'rgba(251, 146, 60, 0.14)', animationDelay: '5s'}}>技</div>
      <div className="floating-kanji" style={{top: '45%', right: '85%', fontSize: '1.5rem', color: 'rgba(168, 85, 247, 0.12)', animationDelay: '1s'}}>機</div>

      {/* Forêt de bambous (bas) */}
      {(() => {
        const bambooLayout: Array<{
          side: 'left' | 'right'; pos: string; h: number; depth: 'front' | 'back' | 'mid'; variant?: 'thin' | 'thick'; ss: string; amp: number; offset: string;
        }> = [
          { side: 'left', pos: '4%', h: 140, depth: 'back', variant: 'thin', ss: '11s', amp: 1.25, offset: '0.15s' },
          { side: 'left', pos: '8%', h: 175, depth: 'front', variant: 'thick', ss: '12s', amp: 1.7, offset: '0.55s' },
          { side: 'right', pos: '12%', h: 160, depth: 'mid', ss: '10.5s', amp: 1.2, offset: '0.25s' },
          { side: 'right', pos: '20%', h: 168, depth: 'front', ss: '10.8s', amp: 1.35, offset: '0.3s' },
          { side: 'right', pos: '22%', h: 190, depth: 'back', variant: 'thick', ss: '12.5s', amp: 1.55, offset: '0.9s' },
          { side: 'left', pos: '25%', h: 135, depth: 'back', variant: 'thin', ss: '9.8s', amp: 1.18, offset: '0.5s' },
          { side: 'right', pos: '30%', h: 172, depth: 'front', ss: '11.2s', amp: 1.45, offset: '0.7s' },
          { side: 'left', pos: '75%', h: 185, depth: 'mid', variant: 'thick', ss: '10.7s', amp: 1.32, offset: '0.65s' },
          { side: 'left', pos: '30%', h: 125, depth: 'front', variant: 'thin', ss: '9.2s', amp: 1.25, offset: '0.95s' },
          { side: 'right', pos: '48%', h: 178, depth: 'front', ss: '11.4s', amp: 1.5, offset: '0.42s' },
          { side: 'left', pos: '55%', h: 150, depth: 'mid', ss: '10.9s', amp: 1.28, offset: '0.33s' },
          { side: 'right', pos: '62%', h: 165, depth: 'back', ss: '12.1s', amp: 1.22, offset: '0.74s' },
        ];
        const extra: typeof bambooLayout = Array.from({ length: 18 }, () => {
          const side = Math.random() > 0.5 ? 'left' : 'right' as const;
          const depthRand = Math.random();
          const depth: 'front' | 'back' | 'mid' = depthRand > 0.66 ? 'front' : depthRand > 0.33 ? 'mid' : 'back';
          return {
            side,
            pos: `${Math.floor(Math.random() * 88) + 4}%`,
            h: 110 + Math.floor(Math.random() * 140), // 110 - 250
            depth,
            variant: Math.random() > 0.75 ? 'thick' : Math.random() > 0.5 ? 'thin' : undefined,
            ss: `${9 + Math.random() * 5}s`,
            amp: +(1.05 + Math.random() * 1.5).toFixed(2),
            offset: `${(Math.random() * 1.1).toFixed(2)}s`
          };
        });
        const merged = [...bambooLayout, ...extra];
        const silhouettes = Array.from({ length: 6 }, (_, i) => {
          const left = 5 + Math.random() * 90;
          const height = 260 + Math.random() * 200; // silhouettes plus hautes
          return <div key={'sil-' + i} className="bamboo-silhouette" data-depth="back" style={{ left: left + '%', height: height + 'px', ['--ss' as any]: (12 + Math.random()*6) + 's', ['--amp' as any]: (1 + Math.random()*1).toFixed(2), ['--offset' as any]: (Math.random()*1.4).toFixed(2)+'s' }} />;
        });
        return (
          <div className="bamboo-forest">
            {silhouettes}
            {merged.map((b, i) => {
              const style: any = {
                height: b.h + 'px',
                [b.side]: b.pos,
                ['--ss']: b.ss,
                ['--amp']: b.amp,
                ['--offset']: b.offset
              };
              const cls = [
                'bamboo-element',
                b.variant === 'thin' ? 'bamboo-thin' : '',
                b.variant === 'thick' ? 'bamboo-thick' : '',
                b.h > 200 ? 'bamboo-tall' : ''
              ].filter(Boolean).join(' ');
              return <div key={i} className={cls} data-depth={b.depth} style={style} />;
            })}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/70 via-white/30 to-transparent" />
          </div>
        );
      })()}

      {/* Particules de sakura plus subtiles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="sakura-particle opacity-25" style={{left: '15%', animationDelay: '0s'}}>🌸</div>
        <div className="sakura-particle opacity-20" style={{left: '75%', animationDelay: '3s'}}>🌸</div>
        <div className="sakura-particle opacity-30" style={{left: '45%', animationDelay: '7s'}}>🌸</div>
        <div className="sakura-particle opacity-15" style={{left: '85%', animationDelay: '5s'}}>🌸</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 pt-0">
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
        {/* Bambous décoratifs retirés */}
      </div>
    </section>
  );
};

export default MagicBento;
