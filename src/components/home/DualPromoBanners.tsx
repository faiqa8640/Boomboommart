import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const DualPromoBanners: React.FC = () => {
  // Live countdown timer state (e.g. 48 hours countdown)
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 36,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Banner 1: Bathroom Essentials */}
        <div className="relative rounded-md overflow-hidden bg-gray-900 min-h-[220px] p-6 md:p-8 flex flex-col justify-center text-white shadow-sm group">
          {/* Background image */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1000&auto=format&fit=crop&q=80"
              alt="Bathroom Essentials"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          </div>

          <div className="relative z-10 max-w-sm">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#90e0ef] block mb-1">
              Bathroom Essentials
            </span>
            <h3 className="text-xl md:text-2xl font-heading font-extrabold leading-tight mb-2">
              Transform Your Bathroom, Transform Your Day!
            </h3>
            <p className="text-xs text-gray-300 mb-4 line-clamp-2">
              Discover non-slip mats, squeegees, organizers, and spa-grade essentials.
            </p>
            <Link
              to="/category/bathroom-essentials"
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#007bc4] hover:bg-[#006aa8] text-white rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow active:scale-95"
            >
              <span>Shop Now</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* Banner 2: Bedroom Decorations with Countdown */}
        <div className="relative rounded-md overflow-hidden bg-gray-900 min-h-[220px] p-6 md:p-8 flex flex-col justify-center text-white shadow-sm group">
          {/* Background image */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1000&auto=format&fit=crop&q=80"
              alt="Bedroom Decorations"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          </div>

          <div className="relative z-10 max-w-sm">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#90e0ef] block mb-1">
              Bedroom Decorations
            </span>
            <h3 className="text-xl md:text-2xl font-heading font-extrabold leading-tight mb-2">
              Make your Bedroom just like a heaven.
            </h3>

            {/* Live Countdown Timer */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center space-x-1.5 text-center">
                <div className="bg-white/20 backdrop-blur-xs px-2 py-1 rounded">
                  <span className="text-xs font-bold font-mono">
                    {String(timeLeft.days).padStart(2, '0')}
                  </span>
                  <span className="text-[8px] uppercase block text-gray-300">Days</span>
                </div>
                <span className="font-bold">:</span>
                <div className="bg-white/20 backdrop-blur-xs px-2 py-1 rounded">
                  <span className="text-xs font-bold font-mono">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="text-[8px] uppercase block text-gray-300">Hrs</span>
                </div>
                <span className="font-bold">:</span>
                <div className="bg-white/20 backdrop-blur-xs px-2 py-1 rounded">
                  <span className="text-xs font-bold font-mono">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-[8px] uppercase block text-gray-300">Min</span>
                </div>
                <span className="font-bold">:</span>
                <div className="bg-white/20 backdrop-blur-xs px-2 py-1 rounded">
                  <span className="text-xs font-bold font-mono">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-[8px] uppercase block text-gray-300">Sec</span>
                </div>
              </div>
            </div>

            <Link
              to="/category/bedroom-decorations"
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#007bc4] hover:bg-[#006aa8] text-white rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow active:scale-95"
            >
              <span>Shop Now</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
