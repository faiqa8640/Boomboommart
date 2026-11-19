import React from 'react';
import { ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export const WelcomeDealBanner: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 mt-12">
      <div className="relative rounded-lg overflow-hidden bg-gradient-to-r from-[#007bc4] via-[#006aa8] to-[#005080] p-8 md:p-12 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="max-w-xl text-center md:text-left z-10">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-white/20 backdrop-blur-xs rounded-full text-[11px] font-bold uppercase tracking-wider mb-3">
            <Tag size={13} />
            <span>Welcome Offer</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-heading font-extrabold leading-tight mb-2">
            Welcome Deal – Upto 30% OFF
          </h2>
          <p className="text-xs md:text-sm text-white/90 leading-relaxed">
            Enjoy premium quality home essentials, cookware, and modern decor with guaranteed fast shipping on your first order.
          </p>
        </div>

        <div className="z-10 flex-shrink-0">
          <Link
            to="/shop"
            className="inline-flex items-center space-x-2 px-8 py-3.5 bg-white text-[#007bc4] hover:bg-gray-100 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-lg active:scale-95"
          >
            <span>Shop Now</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Decorative Circle Elements */}
        <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      </div>
    </section>
  );
};
