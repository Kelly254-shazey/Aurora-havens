'use client';

import { useEffect, useState, useRef } from 'react';

interface ImpactCounterProps {
  label: string;
  value: number;
  suffix?: string;
  icon?: React.ReactNode;
  duration?: number;
}

export function ImpactCounter({ label, value, suffix = '', icon, duration = 2000 }: ImpactCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * value));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <div ref={ref} className="text-center group">
      {icon && (
        <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 border border-white/10 group-hover:border-foundation-hot/30 group-hover:bg-white/15 transition-all duration-300">
          {icon}
        </div>
      )}
      <div className="text-3xl lg:text-4xl font-display font-bold mb-1">
        <span className="bg-gradient-to-r from-foundation-baby via-white to-foundation-baby bg-clip-text text-transparent">
          {count.toLocaleString()}{suffix}
        </span>
      </div>
      <div className="text-sm text-white/70 font-medium">{label}</div>
    </div>
  );
}
