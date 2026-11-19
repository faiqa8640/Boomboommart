import React, { useState } from 'react';
import { ArrowRight, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { ProductCard } from '../product/ProductCard';

interface HomeKitchenShowcaseProps {
  products: Product[];
  onQuickView?: (product: Product) => void;
}

export const HomeKitchenShowcase: React.FC<HomeKitchenShowcaseProps> = ({ products, onQuickView }) => {
  const [activeTab, setActiveTab] = useState<'new' | 'best' | 'featured'>('best');

  // Filter kitchenware products according to active tab
  const kitchenProducts = products.filter((p) => p.categorySlug === 'kitchenware');

  const filteredProducts = kitchenProducts.filter((p) => {
    if (activeTab === 'new') return p.isNew || p.id === 'prod-12';
    if (activeTab === 'featured') return p.isFeatured;
    return p.isBestSeller || true;
  }).slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 mt-12">
      {/* Section Header with Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-gray-100 pb-3 mb-6 gap-3">
        <div className="relative">
          <h2 className="text-xl md:text-2xl font-heading font-bold text-[#242424]">
            Home & Kitchen Items
          </h2>
          <span className="absolute -bottom-[14px] left-0 w-24 h-0.5 bg-[#007bc4]" />
        </div>

        {/* Tab Switchers */}
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider">
          <button
            onClick={() => setActiveTab('best')}
            className={`px-3 py-1.5 rounded-full transition-colors ${
              activeTab === 'best'
                ? 'bg-[#007bc4] text-white shadow-xs'
                : 'text-gray-500 hover:text-gray-900 bg-gray-100'
            }`}
          >
            Best Selling
          </button>
          <button
            onClick={() => setActiveTab('new')}
            className={`px-3 py-1.5 rounded-full transition-colors ${
              activeTab === 'new'
                ? 'bg-[#007bc4] text-white shadow-xs'
                : 'text-gray-500 hover:text-gray-900 bg-gray-100'
            }`}
          >
            New
          </button>
          <button
            onClick={() => setActiveTab('featured')}
            className={`px-3 py-1.5 rounded-full transition-colors ${
              activeTab === 'featured'
                ? 'bg-[#007bc4] text-white shadow-xs'
                : 'text-gray-500 hover:text-gray-900 bg-gray-100'
            }`}
          >
            Featured Items
          </button>
        </div>
      </div>

      {/* Grid: Left Promo Card + Right Tabbed Products */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {/* Left Promo Card */}
        <div className="lg:col-span-1 relative rounded-md overflow-hidden bg-gray-900 p-6 text-white flex flex-col justify-between shadow-sm min-h-[320px] group">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80"
              alt="Home and Kitchen"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>

          <div className="relative z-10">
            <span className="inline-block px-2.5 py-1 bg-[#007bc4] text-white text-[10px] font-bold uppercase tracking-wider rounded mb-3">
              Hot Collection
            </span>
            <h3 className="text-xl font-heading font-extrabold leading-tight mb-2">
              Home and Kitchen Items
            </h3>
            <p className="text-xs text-gray-300">
              High-durability nonstick cookware, chef spatulas, and modern accessories.
            </p>
          </div>

          <div className="relative z-10 pt-4">
            <Link
              to="/category/kitchenware"
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#007bc4] hover:bg-[#006aa8] text-white rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow"
            >
              <span>Shop Now</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* Right 3 Product Cards */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
