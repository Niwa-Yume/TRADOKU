import React, { useEffect, useRef, useState } from 'react';

interface InfiniteScrollItem {
  content: React.ReactNode;
}

interface InfiniteScrollProps {
  items: InfiniteScrollItem[];
  isTilted?: boolean;
  tiltDirection?: 'left' | 'right';
  autoplay?: boolean;
  autoplaySpeed?: number;
  autoplayDirection?: 'up' | 'down';
  pauseOnHover?: boolean;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  items,
  isTilted = false,
  tiltDirection = 'left',
  autoplay = true,
  autoplaySpeed = 0.1,
  autoplayDirection = 'down',
  pauseOnHover = true,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number>();

  // Dupliquer les éléments pour créer l'effet infini
  const duplicatedItems = [...items, ...items, ...items];

  useEffect(() => {
    if (!autoplay || !scrollRef.current) return;

    let scrollPosition = 0;
    const container = scrollRef.current;
    const itemHeight = container.scrollHeight / 3; // Divisé par 3 car on a triplé les items

    const animate = () => {
      if (!isPaused && container) {
        const direction = autoplayDirection === 'down' ? 1 : -1;
        scrollPosition += autoplaySpeed * direction;

        // Reset la position quand on atteint la fin/début
        if (scrollPosition >= itemHeight) {
          scrollPosition = 0;
        } else if (scrollPosition <= -itemHeight) {
          scrollPosition = 0;
        }

        container.scrollTop = scrollPosition;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [autoplay, autoplaySpeed, autoplayDirection, isPaused]);

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
  };

  const tiltClass = isTilted ?
    (tiltDirection === 'left' ? '-rotate-6' : 'rotate-6') : '';

  return (
    <div
      className={`overflow-hidden ${tiltClass} transition-transform duration-300`}
      style={{ height: '100%' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={scrollRef}
        className="h-full overflow-hidden"
        style={{
          scrollBehavior: 'smooth',
        }}
      >
        <div className="flex flex-col space-y-4">
          {duplicatedItems.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="text-gray-800">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
