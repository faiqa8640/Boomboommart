import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { ProductCard } from '../product/ProductCard';

interface HomeCleaningDealsProps {
  products: Product[];
  onQuickView?: (product: Product) => void;
}

export const HomeCleaningDeals: React.FC<HomeCleaningDealsProps> = ({ products, onQuickView }) => {
  // Filter cleaning supplies or fallback to first few items
  const cleaningProducts = products
    .filter((p) => p.categorySlug === 'cleaning-supplies' || p.categorySlug === 'bathroom-essentials')
    .slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 mt-12">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b-2 border-gray-100 pb-3 mb-6">
        <div className="relative">
          <h2 className="text-xl md:text-2xl font-heading font-bold text-[#242424] flex items-center space-x-2">
            <span>Home Cleaning Deals</span>
          </h2>
          <span className="absolute -bottom-[14px] left-0 w-24 h-0.5 bg-[#007bc4]" />
        </div>
        <Link
          to="/category/cleaning-supplies"
          className="text-xs font-semibold uppercase tracking-wider text-[#007bc4] hover:underline flex items-center space-x-1"
        >
          <span>View All</span>
          <ArrowRight size={14} />
        </Link>
      </div>

      {/* Main Grid: Left Promo Card + Right Product Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        {/* Left Promo Card (1 Column) */}
        <div className="lg:col-span-1 relative rounded-md overflow-hidden bg-gradient-to-br from-[#007bc4] to-[#005080] p-6 text-white flex flex-col justify-between shadow-sm min-h-[300px]">
          <div className="relative z-10">
            <span className="inline-block px-2.5 py-1 bg-white/20 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider rounded mb-3">
              Limited Offer
            </span>
            <h3 className="text-xl font-heading font-extrabold leading-snug mb-2">
              Home Cleaning Discount - 30%
            </h3>
            <p className="text-xs text-white/80 leading-relaxed mb-4">
              Premium chemical-free sponges, brushes, and sparkling clean essentials.
            </p>
          </div>

          <div className="relative z-10">
            <Link
              to="/category/cleaning-supplies"
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white text-[#007bc4] hover:bg-gray-100 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow"
            >
              <span>Shop Now</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          {/* Decorative Background Element */}
          <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/10 rounded-full blur-xl pointer-events-none" />
        </div>

        {/* Right Products (4 Columns) */}
        <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {cleaningProducts.map((product) => (
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
