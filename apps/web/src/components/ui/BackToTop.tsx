'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-gold-500 text-dark-900 rounded-full shadow-lg shadow-gold-500/30 hover:bg-gold-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
