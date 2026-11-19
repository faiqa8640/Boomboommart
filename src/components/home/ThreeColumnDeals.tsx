import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { ProductCard } from '../product/ProductCard';

interface ThreeColumnDealsProps {
  products: Product[];
  onQuickView?: (product: Product) => void;
}

export const ThreeColumnDeals: React.FC<ThreeColumnDealsProps> = ({ products, onQuickView }) => {
  // Featured Sale Item (Column 1)
  const saleItem = products.find((p) => p.discountPercent && p.discountPercent >= 30) || products[0];

  // Most Popular 4 Items (Column 2)
  const popularProducts = products
    .filter((p) => p.isBestSeller && p.id !== saleItem?.id)
    .slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 mt-12 mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Column 1: Featured Sale Item (4 cols) */}
        <div className="lg:col-span-4 flex flex-col">
          <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2.5 mb-4">
            <h3 className="font-heading font-bold text-base md:text-lg text-[#242424] flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-[#007bc4]" />
              <span>Sale Item</span>
            </h3>
            <span className="text-xs font-semibold text-[#007bc4] bg-sky-50 px-2 py-0.5 rounded-full">
              Save Big
            </span>
          </div>

          {saleItem && (
            <div className="flex-1">
              <ProductCard
                product={saleItem}
                onQuickView={onQuickView}
                className="h-full"
              />
            </div>
          )}
        </div>

        {/* Column 2: Most Popular 2x2 Grid (5 cols) */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2.5 mb-4">
            <h3 className="font-heading font-bold text-base md:text-lg text-[#242424] flex items-center space-x-1.5">
              <Flame size={18} className="text-red-500 fill-red-500" />
              <span>MOST POPULAR</span>
            </h3>
            <Link
              to="/category/best-selling"
              className="text-xs font-semibold text-[#007bc4] hover:underline"
            >
              See All →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 flex-1">
            {popularProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        </div>

        {/* Column 3: Stacked Promotional Banners (3 cols) */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          {/* Top Banner: Lighting & Fixtures */}
          <div className="relative rounded-md overflow-hidden bg-gray-900 p-5 text-white flex flex-col justify-between shadow-sm min-h-[175px] group">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&auto=format&fit=crop&q=80"
                alt="Lighting & Fixtures"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>

            <div className="relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#90e0ef]">
                Ambient Glow
              </span>
              <h4 className="font-heading font-bold text-sm md:text-base leading-tight mt-0.5">
                Lighting & Fixtures
              </h4>
              <p className="text-[11px] text-gray-300 mt-1">Starting from $14.99</p>
            </div>

            <div className="relative z-10 pt-2">
              <Link
                to="/category/lighting-fixtures"
                className="inline-flex items-center space-x-1 text-xs font-semibold text-white hover:text-[#90e0ef] transition-colors"
              >
                <span>Shop Now</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>

          {/* Bottom Banner: Storage and Organization */}
          <div className="relative rounded-md overflow-hidden bg-gray-900 p-5 text-white flex flex-col justify-between shadow-sm min-h-[175px] group">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=600&auto=format&fit=crop&q=80"
                alt="Storage & Organization"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>

            <div className="relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#90e0ef]">
                Neat & Tidy
              </span>
              <h4 className="font-heading font-bold text-sm md:text-base leading-tight mt-0.5">
                Storage & Organization
              </h4>
              <p className="text-[11px] text-gray-300 mt-1">Up to 40% Off Racks</p>
            </div>

            <div className="relative z-10 pt-2">
              <Link
                to="/category/storage-organization"
                className="inline-flex items-center space-x-1 text-xs font-semibold text-white hover:text-[#90e0ef] transition-colors"
              >
                <span>Shop Now</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
