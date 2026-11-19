import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CATEGORIES, HERO_SLIDES } from '../../data/mockData';

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 mt-4">
      <div className="flex gap-6 items-stretch">
        {/* Left Column: Persistent Categories Sidebar (260px wide on desktop) */}
        <div className="hidden lg:block w-[260px] flex-shrink-0 bg-white border border-[#e8e8e8] rounded-md shadow-xs overflow-hidden">
          <div className="bg-[#007bc4] text-white py-3 px-4 text-xs font-bold uppercase tracking-wider flex items-center justify-between">
            <span>Categories</span>
            <Sparkles size={14} />
          </div>
          <div className="divide-y divide-gray-100 py-1">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to={`/category/${cat.slug}`}
                className="flex items-center justify-between px-4 py-2.5 text-xs text-gray-700 hover:text-[#007bc4] hover:bg-sky-50/60 transition-colors font-medium group"
              >
                <span className="group-hover:translate-x-0.5 transition-transform">
                  {cat.name}
                </span>
                <ChevronRight size={13} className="text-gray-300 group-hover:text-[#007bc4]" />
              </Link>
            ))}
          </div>
        </div>

        {/* Right Column: Hero Banner Carousel */}
        <div className="flex-1 relative rounded-md overflow-hidden min-h-[380px] lg:min-h-[460px] bg-gray-900 shadow-sm flex items-center">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center transition-all duration-700 transform scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          </div>

          {/* Floating Glassmorphism Text Card */}
          <div className="relative z-10 p-6 md:p-12 max-w-xl text-white">
            <span className="inline-block px-3 py-1 bg-[#007bc4] text-white text-[11px] font-bold uppercase tracking-wider rounded-full mb-3 shadow-sm">
              {slide.discount}
            </span>
            <p className="text-xs uppercase tracking-widest text-[#90e0ef] font-semibold mb-1">
              {slide.subtitle}
            </p>
            <h1 className="text-2xl md:text-4xl font-heading font-extrabold leading-tight text-white mb-4">
              {slide.title}
            </h1>
            <Link
              to={slide.ctaLink}
              className="inline-flex items-center space-x-2 px-7 py-3 bg-[#007bc4] hover:bg-[#006aa8] text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
            >
              <span>{slide.ctaText}</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Carousel Arrows */}
          <button
            onClick={() =>
              setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
            }
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/30 hover:bg-white text-white hover:text-[#007bc4] flex items-center justify-center backdrop-blur-xs transition-all opacity-0 group-hover:opacity-100 hover:scale-105"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/30 hover:bg-white text-white hover:text-[#007bc4] flex items-center justify-center backdrop-blur-xs transition-all opacity-0 group-hover:opacity-100 hover:scale-105"
            aria-label="Next Slide"
          >
            <ChevronRight size={18} />
          </button>

          {/* Slide Indicator Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === idx ? 'w-6 bg-[#007bc4]' : 'w-2 bg-white/50 hover:bg-white'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
