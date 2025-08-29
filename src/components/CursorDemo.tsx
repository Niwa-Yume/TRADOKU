import React from 'react';

const CursorDemo = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
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

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent kanji-effect" data-kanji="游">
            Système de Curseurs Manga
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre système de curseurs thématiques inspirés de l'univers manga et de la culture japonaise
          </p>
        </div>

        {/* Grille principale des curseurs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Curseur par défaut */}
          <div className="manga-panel p-8 bg-white/90 backdrop-blur-sm shadow-xl relative">
            <div className="absolute inset-0 opacity-5 rounded-xl seigaiha-pattern"></div>
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center shadow-inner">
                <div className="w-4 h-4 bg-purple-600 rounded-full relative">
                  <div className="w-2 h-2 bg-white rounded-full absolute top-1 left-1"></div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Navigation</h3>
              <p className="text-gray-600 text-sm">Particule d'énergie spirituelle pour la navigation générale</p>
            </div>
          </div>

          {/* Curseur cliquable */}
          <div className="manga-panel p-8 bg-white/90 backdrop-blur-sm shadow-xl relative clickable">
            <div className="absolute inset-0 opacity-5 rounded-xl asanoha-pattern"></div>
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-yellow-100 to-orange-200 rounded-2xl flex items-center justify-center shadow-inner">
                <svg className="w-10 h-10 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9l-5 4.74L18 19l-6-3-6 3 1-5.26L2 9l6.91-.74L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Interaction</h3>
              <p className="text-gray-600 text-sm">Étoile de pouvoir pour les éléments cliquables</p>
            </div>
          </div>

          {/* Curseur texte */}
          <div className="manga-panel p-8 bg-white/90 backdrop-blur-sm shadow-xl relative">
            <div className="absolute inset-0 opacity-5 rounded-xl hokusai-wave-bg"></div>
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl flex items-center justify-center shadow-inner">
                <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                </svg>
              </div>
              <input
                type="text"
                placeholder="Testez ici..."
                className="w-full p-3 border border-gray-200 rounded-lg text-center text-sm mb-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Saisie</h3>
              <p className="text-gray-600 text-sm">Plume de calligraphie pour les zones de texte</p>
            </div>
          </div>

          {/* Curseur draggable */}
          <div className="manga-panel p-8 bg-white/90 backdrop-blur-sm shadow-xl relative draggable">
            <div className="absolute inset-0 opacity-5 rounded-xl benday-dots"></div>
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-100 to-emerald-200 rounded-2xl flex items-center justify-center shadow-inner">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11V7a1 1 0 012 0v4m0 0V7a1 1 0 112 0v4m-3 4V7.5a1 1 0 011-1 1 1 0 011 1V11m0 4v-1a1 1 0 011-1 1 1 0 011 1v1m0 0v1a5 5 0 01-10 0V9a1 1 0 011-1 1 1 0 011 1v6"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Glisser-Déposer</h3>
              <p className="text-gray-600 text-sm">Main d'énergie chakra pour les éléments déplaçables</p>
            </div>
          </div>

          {/* Curseur loading */}
          <div className="manga-panel p-8 bg-white/90 backdrop-blur-sm shadow-xl relative loading">
            <div className="absolute inset-0 opacity-5 rounded-xl seigaiha-pattern"></div>
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-100 to-pink-200 rounded-2xl flex items-center justify-center shadow-inner">
                <div className="magic-circle-loader w-10 h-10"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Chargement</h3>
              <p className="text-gray-600 text-sm">Cercle magique en rotation pour les processus en cours</p>
            </div>
          </div>

          {/* Curseur interdit */}
          <div className="manga-panel p-8 bg-white/90 backdrop-blur-sm shadow-xl relative not-allowed">
            <div className="absolute inset-0 opacity-5 rounded-xl asanoha-pattern"></div>
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-red-100 to-pink-200 rounded-2xl flex items-center justify-center shadow-inner">
                <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M15 9L9 15M9 9l6 6"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Interdit</h3>
              <p className="text-gray-600 text-sm">Aura d'interdiction pour les actions non autorisées</p>
            </div>
          </div>
        </div>

        {/* Section des effets élémentaires */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 kanji-effect" data-kanji="力">
              Effets Élémentaires
            </h3>
            <p className="text-lg text-gray-600">
              Interactions thématiques inspirées des pouvoirs élémentaires des mangas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="element-fire manga-panel p-6 text-white font-bold shadow-xl text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-600"></div>
              <div className="relative z-10">
                <div className="text-3xl mb-3">🔥</div>
                <h4 className="text-lg font-bold">Feu</h4>
                <p className="text-sm opacity-90">Passion destructrice</p>
              </div>
            </div>

            <div className="element-water manga-panel p-6 text-white font-bold shadow-xl text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-600"></div>
              <div className="relative z-10">
                <div className="text-3xl mb-3">💧</div>
                <h4 className="text-lg font-bold">Eau</h4>
                <p className="text-sm opacity-90">Fluidité adaptative</p>
              </div>
            </div>

            <div className="element-earth manga-panel p-6 text-white font-bold shadow-xl text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 to-amber-700"></div>
              <div className="relative z-10">
                <div className="text-3xl mb-3">🌱</div>
                <h4 className="text-lg font-bold">Terre</h4>
                <p className="text-sm opacity-90">Stabilité solide</p>
              </div>
            </div>

            <div className="element-wind manga-panel p-6 text-white font-bold shadow-xl text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-600"></div>
              <div className="relative z-10">
                <div className="text-3xl mb-3">💨</div>
                <h4 className="text-lg font-bold">Vent</h4>
                <p className="text-sm opacity-90">Liberté aérienne</p>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions Easter Eggs */}
        <div className="manga-panel p-8 bg-gradient-to-r from-purple-50 to-pink-50 shadow-xl torii-frame">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 kanji-effect" data-kanji="秘">
              🎮 Easter Eggs Cachés
            </h3>
            <p className="text-gray-600">
              Découvrez les secrets cachés dans l'interface pour débloquer des effets spéciaux
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="manga-panel p-6 bg-white shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">⬆️</span>
                </div>
                <div>
                  <h4 className="font-bold text-purple-600 text-lg">Code Konami</h4>
                  <p className="text-sm text-gray-600">Séquence secrète de touches</p>
                </div>
              </div>
              <p className="text-gray-700 mb-3">
                Tapez <span className="font-mono bg-gray-100 px-2 py-1 rounded text-purple-600">↑↑↓↓←→←→BA</span>
                pour activer le mode "Super Saiyan" avec particules d'énergie
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium onomatopoeia" style={{fontSize: '0.65rem', transform: 'skew(-3deg)'}}>POWER!</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">10s duration</span>
              </div>
            </div>

            <div className="manga-panel p-6 bg-white shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🥷</span>
                </div>
                <div>
                  <h4 className="font-bold text-pink-600 text-lg">Mode Ninja</h4>
                  <p className="text-sm text-gray-600">Triple-clic rapide</p>
                </div>
              </div>
              <p className="text-gray-700 mb-3">
                Cliquez rapidement 3 fois n'importe où pour débloquer le filtre ninja
                avec des couleurs sépia stylisées
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-medium onomatopoeia" style={{fontSize: '0.65rem', transform: 'skew(-3deg)'}}>STEALTH!</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">5s duration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CursorDemo;
