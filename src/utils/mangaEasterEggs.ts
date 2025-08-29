// Easter eggs et interactions manga pour TRADOKU
// Inspiré des codes secrets dans les jeux vidéo et animes

class MangaEasterEggs {
  constructor() {
    this.konamiCode = [
      'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
      'KeyB', 'KeyA'
    ];
    this.konamiIndex = 0;
    this.tripleClickCount = 0;
    this.tripleClickTimer = null;
    this.init();
  }

  init() {
    this.setupKonamiCode();
    this.setupTripleClick();
    this.setupScrollReveal();
    this.setupCursorTrail();
    this.setupElementalEffects();
  }

  // Code Konami - active le mode "Super Saiyan"
  setupKonamiCode() {
    document.addEventListener('keydown', (e) => {
      if (e.code === this.konamiCode[this.konamiIndex]) {
        this.konamiIndex++;
        if (this.konamiIndex === this.konamiCode.length) {
          this.activateKonamiMode();
          this.konamiIndex = 0;
        }
      } else {
        this.konamiIndex = 0;
      }
    });
  }

  activateKonamiMode() {
    document.body.classList.add('konami-mode');
    this.createPowerUpNotification('TRADOKU POWER UP! 🔥⚡️');

    // Ajoute des particules d'énergie
    this.createEnergyParticles();

    setTimeout(() => {
      document.body.classList.remove('konami-mode');
    }, 10000);
  }

  // Triple click - Mode ninja (référence Naruto)
  setupTripleClick() {
    document.addEventListener('click', (e) => {
      this.tripleClickCount++;

      if (this.tripleClickTimer) {
        clearTimeout(this.tripleClickTimer);
      }

      this.tripleClickTimer = setTimeout(() => {
        if (this.tripleClickCount >= 3) {
          this.activateNinjaMode();
        }
        this.tripleClickCount = 0;
      }, 500);
    });
  }

  activateNinjaMode() {
    document.body.classList.add('ninja-mode');
    this.createPowerUpNotification('Mode Ninja activé! 🥷');

    setTimeout(() => {
      document.body.classList.remove('ninja-mode');
    }, 5000);
  }

  // Révélation au scroll (comme les panneaux de manga)
  setupScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Ajoute un petit effet sparkle
          this.addSparkleEffect(entry.target);
        }
      });
    });

    // Observer tous les éléments avec la classe reveal-on-scroll
    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      observer.observe(el);
    });
  }

  // Traînée de curseur magique
  setupCursorTrail() {
    let trails = [];
    const maxTrails = 8;

    document.addEventListener('mousemove', (e) => {
      // Créer une nouvelle particule de traînée
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.cssText = `
        position: fixed;
        width: 6px;
        height: 6px;
        background: radial-gradient(circle, #8855ff 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        left: ${e.clientX - 3}px;
        top: ${e.clientY - 3}px;
        transition: all 0.5s ease-out;
        opacity: 1;
      `;

      document.body.appendChild(trail);
      trails.push(trail);

      // Supprimer les anciennes traînées
      if (trails.length > maxTrails) {
        const oldTrail = trails.shift();
        if (oldTrail && oldTrail.parentNode) {
          oldTrail.style.opacity = '0';
          oldTrail.style.transform = 'scale(0)';
          setTimeout(() => {
            if (oldTrail.parentNode) {
              oldTrail.parentNode.removeChild(oldTrail);
            }
          }, 500);
        }
      }
    });
  }

  // Effets élémentaires au hover (inspiré des magies d'anime)
  setupElementalEffects() {
    const elements = {
      fire: ['🔥', '#ff4500'],
      water: ['💧', '#1e90ff'],
      earth: ['🌱', '#8b4513'],
      wind: ['💨', '#98fb98'],
      lightning: ['⚡', '#ffd700']
    };

    Object.keys(elements).forEach(elementType => {
      document.querySelectorAll(`.element-${elementType}`).forEach(el => {
        el.addEventListener('mouseenter', () => {
          this.createElementalBurst(el, elements[elementType]);
        });
      });
    });
  }

  // Création d'explosion élémentaire
  createElementalBurst(element, [emoji, color]) {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        const particle = document.createElement('div');
        particle.textContent = emoji;
        particle.style.cssText = `
          position: absolute;
          font-size: 1.5rem;
          pointer-events: none;
          z-index: 1000;
          animation: magic-sparkle 1s ease-out forwards;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
        `;

        element.style.position = 'relative';
        element.appendChild(particle);

        setTimeout(() => {
          if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
          }
        }, 1000);
      }, i * 100);
    }
  }

  // Notification de power-up
  createPowerUpNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      background: linear-gradient(45deg, #ff6b35, #f7931e, #ffd700);
      color: white;
      padding: 20px 40px;
      border-radius: 20px;
      font-size: 2rem;
      font-weight: bold;
      z-index: 10000;
      box-shadow: 0 0 50px rgba(255, 107, 53, 0.8);
      animation: power-up 2s ease-in-out;
      text-align: center;
      border: 3px solid #fff;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 100);

    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 3000);
  }

  // Particules d'énergie
  createEnergyParticles() {
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        const particle = document.createElement('div');
        particle.textContent = ['✦', '✧', '⭐', '💫', '✨'][Math.floor(Math.random() * 5)];
        particle.style.cssText = `
          position: fixed;
          font-size: ${Math.random() * 20 + 10}px;
          left: ${Math.random() * 100}vw;
          top: ${Math.random() * 100}vh;
          pointer-events: none;
          z-index: 9999;
          animation: float-spirit 3s ease-in-out forwards;
          color: ${['#8855ff', '#ff20a0', '#ffd700', '#00bfff'][Math.floor(Math.random() * 4)]};
        `;

        document.body.appendChild(particle);

        setTimeout(() => {
          if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
          }
        }, 3000);
      }, i * 200);
    }
  }

  // Effet sparkle sur révélation
  addSparkleEffect(element) {
    const sparkle = document.createElement('div');
    sparkle.textContent = '✨';
    sparkle.style.cssText = `
      position: absolute;
      top: -20px;
      right: -20px;
      font-size: 1.5rem;
      animation: magic-sparkle 2s ease-in-out;
      pointer-events: none;
      z-index: 100;
    `;

    element.style.position = 'relative';
    element.appendChild(sparkle);

    setTimeout(() => {
      if (sparkle.parentNode) {
        sparkle.parentNode.removeChild(sparkle);
      }
    }, 2000);
  }

  // Détection de séquences de scroll (référence aux combos de fighting games)
  setupScrollCombos() {
    let scrollPattern = [];
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';

      scrollPattern.push(direction);
      if (scrollPattern.length > 6) {
        scrollPattern.shift();
      }

      // Combo secret: down, down, up, up, down, up
      if (scrollPattern.join('') === 'downdownupupdownup') {
        this.activateScrollCombo();
        scrollPattern = [];
      }

      lastScrollY = currentScrollY;
    });
  }

  activateScrollCombo() {
    this.createPowerUpNotification('Combo de Scroll! 🌊');
    document.querySelectorAll('*').forEach(el => {
      el.style.transition = 'all 2s ease';
      el.style.transform = 'rotateY(360deg)';
      setTimeout(() => {
        el.style.transform = '';
      }, 2000);
    });
  }
}

// Initialisation automatique
export default function initMangaEasterEggs() {
  if (typeof window !== 'undefined') {
    window.mangaEasterEggs = new MangaEasterEggs();
  }
}
