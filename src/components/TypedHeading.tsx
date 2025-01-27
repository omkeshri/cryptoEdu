import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export const TypedHeading = () => {
  const el = useRef<HTMLSpanElement>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    if (el.current) {
      typed.current = new Typed(el.current, {
        strings: [
          'Master the Markets',
          'Trade with Confidence',
          'Build Your Future'
        ],
        typeSpeed: 50,
        backSpeed: 65,
        backDelay: 2000,
        startDelay: 300,
        loop: true,
      });
    }

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, []);

  return (
    <div className="text-5xl md:text-6xl font-bold text-white mb-6 h-[120px] md:h-[144px]">
      <span ref={el}></span>
    </div>
  );
};