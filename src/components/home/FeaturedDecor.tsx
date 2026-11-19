import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { ProductCard } from '../product/ProductCard';

interface FeaturedDecorProps {
  products: Product[];
  onQuickView?: (product: Product) => void;
}

export const FeaturedDecor: React.FC<FeaturedDecorProps> = ({ products, onQuickView }) => {
  const decorProducts = products
    .filter((p) => p.categorySlug === 'home-decor' || p.categorySlug === 'lighting-fixtures' || p.categorySlug === 'wall-art-accessories')
    .slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 mt-12">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b-2 border-gray-100 pb-3 mb-6">
        <div className="relative">
          <h2 className="text-xl md:text-2xl font-heading font-bold text-[#242424]">
            Featured Home Decor
          </h2>
          <span className="absolute -bottom-[14px] left-0 w-24 h-0.5 bg-[#007bc4]" />
        </div>
        <Link
          to="/category/home-decor"
          className="text-xs font-semibold uppercase tracking-wider text-[#007bc4] hover:underline flex items-center space-x-1"
        >
          <span>View All</span>
          <ArrowRight size={14} />
        </Link>
      </div>

      {/* 4-column product grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {decorProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={onQuickView}
          />
        ))}
      </div>
    </section>
  );
};
