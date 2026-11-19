import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ShieldCheck, HeartHandshake, Truck, Star } from 'lucide-react';

export const AboutUsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-16 font-body">
      {/* Header Banner */}
      <div className="bg-[#111111] text-white py-14 px-4 border-b border-gray-800 text-center">
        <h1 className="text-3xl md:text-5xl font-heading font-extrabold uppercase tracking-wide mb-2">
          About Us
        </h1>
        <div className="flex items-center justify-center space-x-2 text-xs text-gray-400 uppercase tracking-wider">
          <Link to="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-[#007bc4] font-semibold">About Us</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 lg:px-8 mt-12 space-y-12">
        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#007bc4] block mb-2">
              Who We Are
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#242424] leading-tight mb-4">
              Setting New Standards for Excellence & Luxury
            </h2>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-4">
              At Boom Boom Mart, our goal is to continually set new standards for excellence and luxury. These core values drive our company to unparalleled success and ensure the utmost customer satisfaction.
            </p>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              From premium nonstick kitchenware to aesthetic ambient lighting and ergonomic home organizers, every product is hand-picked to bring enduring elegance and effortless utility to modern homes.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1000&auto=format&fit=crop&q=80"
              alt="Boom Boom Mart Interior"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* 4 Value Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-gray-100">
          <div className="p-5 bg-gray-50 rounded-lg text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-sky-100 text-[#007bc4] flex items-center justify-center mx-auto">
              <Award size={24} />
            </div>
            <h3 className="font-heading font-bold text-sm text-gray-800">Unmatched Quality</h3>
            <p className="text-xs text-gray-500">Every piece is inspected for thermal durability, finish, and safety.</p>
          </div>

          <div className="p-5 bg-gray-50 rounded-lg text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-sky-100 text-[#007bc4] flex items-center justify-center mx-auto">
              <Truck size={24} />
            </div>
            <h3 className="font-heading font-bold text-sm text-gray-800">Fast Shipping</h3>
            <p className="text-xs text-gray-500">Speedy dispatch and tracking updates right to your door.</p>
          </div>

          <div className="p-5 bg-gray-50 rounded-lg text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-sky-100 text-[#007bc4] flex items-center justify-center mx-auto">
              <ShieldCheck size={24} />
            </div>
            <h3 className="font-heading font-bold text-sm text-gray-800">Secure Payments</h3>
            <p className="text-xs text-gray-500">Multi-gateway 256-bit SSL encrypted checkout security.</p>
          </div>

          <div className="p-5 bg-gray-50 rounded-lg text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-sky-100 text-[#007bc4] flex items-center justify-center mx-auto">
              <HeartHandshake size={24} />
            </div>
            <h3 className="font-heading font-bold text-sm text-gray-800">24/7 Support</h3>
            <p className="text-xs text-gray-500">Dedicated help desk ready to answer your questions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
