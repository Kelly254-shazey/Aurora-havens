'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  if (testimonials.length === 0) return null;

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-600 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-2">
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl shadow-black/5 border border-gray-100 relative overflow-hidden">
                <div className="absolute top-6 right-6 text-gold-500/10">
                  <Quote className="w-16 h-16" />
                </div>

                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4.5 h-4.5 ${
                        i < testimonial.rating
                          ? 'text-gold-500 fill-gold-500'
                          : 'text-gray-200'
                      }`}
                    />
                  ))}
                </div>

                <p className="text-gray-600 text-lg leading-relaxed mb-8 relative z-10">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-100 to-gold-200 rounded-full overflow-hidden flex items-center justify-center border-2 border-gold-500/20">
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="font-display font-bold text-gold-700">
                        {testimonial.name[0]}
                      </span>
                    )}
                  </div>
                  <div>
                    <div className="font-display font-semibold text-dark-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {testimonials.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-xl shadow-black/10 border border-gray-100 flex items-center justify-center hover:bg-gold-500 hover:text-dark-900 transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-xl shadow-black/10 border border-gray-100 flex items-center justify-center hover:bg-gold-500 hover:text-dark-900 transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 bg-gold-500'
                : 'w-2 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
