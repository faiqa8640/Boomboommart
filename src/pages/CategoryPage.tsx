import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CATEGORIES, PRODUCTS } from '../data/mockData';
import { ProductCard } from '../components/product/ProductCard';
import { QuickViewModal } from '../components/common/QuickViewModal';
import { Product } from '../types';

export const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const category = CATEGORIES.find((c) => c.slug === slug);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [sortBy, setSortBy] = useState('default');

  const categoryProducts = useMemo(() => {
    let prods = PRODUCTS.filter((p) => p.categorySlug === slug);
    // If few products, show some related so the page looks rich
    if (prods.length < 4) {
      prods = [...prods, ...PRODUCTS.filter((p) => p.categorySlug !== slug).slice(0, 4 - prods.length)];
    }

    if (sortBy === 'price-low') return [...prods].sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') return [...prods].sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') return [...prods].sort((a, b) => b.rating - a.rating);
    return prods;
  }, [slug, sortBy]);

  return (
    <div className="bg-[#fcfcfc] min-h-screen pb-16 font-body">
      {/* Category Hero Header */}
      <div className="bg-[#111111] text-white py-12 px-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold uppercase tracking-wide mb-2">
            {category?.name || 'Category'}
          </h1>
          <div className="flex items-center justify-center space-x-2 text-xs text-gray-400 uppercase tracking-wider mb-4">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-white transition-colors">
              Categories
            </Link>
            <span>/</span>
            <span className="text-[#007bc4] font-semibold">{category?.name}</span>
          </div>
          {category?.description && (
            <p className="text-xs text-gray-300 max-w-xl mx-auto leading-relaxed">
              {category.description}
            </p>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-8">
        {/* Toolbar */}
        <div className="bg-white p-3.5 rounded-md border border-[#e8e8e8] shadow-xs mb-6 flex items-center justify-between">
          <span className="text-xs text-gray-500 font-medium">
            Showing <strong className="text-gray-800">{categoryProducts.length}</strong> items in {category?.name}
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs text-gray-700 border border-gray-200 rounded-md py-1.5 px-3 bg-white outline-none focus:border-[#007bc4] cursor-pointer"
          >
            <option value="default">Default sorting</option>
            <option value="rating">Sort by average rating</option>
            <option value="price-low">Sort by price: low to high</option>
            <option value="price-high">Sort by price: high to low</option>
          </select>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categoryProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p) => setQuickViewProduct(p)}
            />
          ))}
        </div>
      </div>

      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      )}
    </div>
  );
};
