import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { LayoutGrid, Grid3X3, Grid2X2, SlidersHorizontal, ChevronRight, X } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/mockData';
import { ProductCard } from '../components/product/ProductCard';
import { QuickViewModal } from '../components/common/QuickViewModal';
import { Product } from '../types';

export const ShopPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategoryParam = searchParams.get('category');
  const searchQuery = searchParams.get('q') || '';

  const [selectedCategory, setSelectedCategory] = useState<string>(activeCategoryParam || 'all');
  const [priceRange, setPriceRange] = useState<number>(70);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [onSaleOnly, setOnSaleOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>('default');
  const [gridCols, setGridCols] = useState<3 | 4>(4);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Available unique colors and sizes from dataset
  const allColors = useMemo(() => {
    const set = new Set<string>();
    PRODUCTS.forEach((p) => p.colors?.forEach((c) => set.add(c)));
    return Array.from(set);
  }, []);

  const allSizes = useMemo(() => {
    const set = new Set<string>();
    PRODUCTS.forEach((p) => p.sizes?.forEach((s) => set.add(s)));
    return Array.from(set).slice(0, 8);
  }, []);

  // Filter & sort logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Search query
      if (searchQuery && !product.title.toLowerCase().includes(searchQuery.toLowerCase()) && !product.description.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      // Category
      if (selectedCategory !== 'all' && product.categorySlug !== selectedCategory) {
        return false;
      }
      // Price
      if (product.price > priceRange) {
        return false;
      }
      // Color
      if (selectedColor && (!product.colors || !product.colors.includes(selectedColor))) {
        return false;
      }
      // Size
      if (selectedSize && (!product.sizes || !product.sizes.includes(selectedSize))) {
        return false;
      }
      // Stock
      if (inStockOnly && !product.inStock) {
        return false;
      }
      // Sale
      if (onSaleOnly && !product.discountPercent) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'popular') return (b.reviewCount || 0) - (a.reviewCount || 0);
      return 0; // default
    });
  }, [searchQuery, selectedCategory, priceRange, selectedColor, selectedSize, inStockOnly, onSaleOnly, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('all');
    setPriceRange(70);
    setSelectedColor('');
    setSelectedSize('');
    setInStockOnly(false);
    setOnSaleOnly(false);
    setSortBy('default');
    setSearchParams({});
  };

  return (
    <div className="bg-[#fcfcfc] min-h-screen pb-16 font-body">
      {/* Dark Shop Hero Header Banner (As inspected on Boom Boom Mart) */}
      <div className="relative bg-[#111111] text-white py-10 md:py-14 px-4 overflow-hidden border-b border-gray-800">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold uppercase tracking-wide mb-2 text-white">
            Shop
          </h1>
          {/* Breadcrumbs */}
          <div className="flex items-center justify-center space-x-2 text-xs text-gray-400 uppercase tracking-wider mb-6">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#007bc4] font-semibold">Shop</span>
          </div>

          {/* Quick-filter Category Pills Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#007bc4] text-white'
                  : 'bg-white/10 hover:bg-white/20 text-gray-300'
              }`}
            >
              All Products
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  selectedCategory === cat.slug
                    ? 'bg-[#007bc4] text-white'
                    : 'bg-white/10 hover:bg-white/20 text-gray-300'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Shop Container */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-8">
        <div className="flex gap-8 items-start">
          {/* Left Sidebar Filters (Desktop) */}
          <aside className="hidden lg:block w-64 flex-shrink-0 space-y-6 bg-white p-5 rounded-md border border-[#e8e8e8] shadow-xs">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-gray-800">
                Filters
              </h3>
              {(selectedCategory !== 'all' || selectedColor || selectedSize || inStockOnly || onSaleOnly) && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-[#007bc4] hover:underline"
                >
                  Reset All
                </button>
              )}
            </div>

            {/* Filter by Category */}
            <div>
              <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-gray-700 mb-2.5">
                Categories
              </h4>
              <div className="space-y-1.5 text-xs">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.slug === selectedCategory ? 'all' : cat.slug)}
                    className={`w-full flex items-center justify-between py-1 transition-colors text-left ${
                      selectedCategory === cat.slug
                        ? 'text-[#007bc4] font-bold'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className="text-[10px] text-gray-400 bg-gray-50 px-1.5 py-0.5 rounded">
                      {cat.productCount}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Filter by Price Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-gray-700">
                  Filter by Price
                </h4>
                <span className="text-xs font-bold text-[#007bc4]">${priceRange}</span>
              </div>
              <input
                type="range"
                min="0"
                max="70"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-[#007bc4] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                <span>$0</span>
                <span>$70</span>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Filter by Color Swatches */}
            {allColors.length > 0 && (
              <div>
                <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-gray-700 mb-2.5">
                  Filter by Color
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {allColors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(selectedColor === color ? '' : color)}
                      className={`text-[11px] px-2.5 py-1 rounded-full border transition-all ${
                        selectedColor === color
                          ? 'border-[#007bc4] bg-[#007bc4] text-white font-semibold'
                          : 'border-gray-200 text-gray-600 hover:border-gray-400 bg-white'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <hr className="border-gray-100" />

            {/* Filter by Size */}
            {allSizes.length > 0 && (
              <div>
                <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-gray-700 mb-2.5">
                  Filter by Size
                </h4>
                <div className="space-y-1.5">
                  {allSizes.map((size) => (
                    <label
                      key={size}
                      className="flex items-center space-x-2 text-xs text-gray-600 cursor-pointer hover:text-gray-900"
                    >
                      <input
                        type="checkbox"
                        checked={selectedSize === size}
                        onChange={() => setSelectedSize(selectedSize === size ? '' : size)}
                        className="rounded border-gray-300 text-[#007bc4] focus:ring-[#007bc4]"
                      />
                      <span>{size}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            <hr className="border-gray-100" />

            {/* Stock Status */}
            <div>
              <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-gray-700 mb-2">
                Status
              </h4>
              <div className="space-y-1.5">
                <label className="flex items-center space-x-2 text-xs text-gray-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="rounded border-gray-300 text-[#007bc4] focus:ring-[#007bc4]"
                  />
                  <span>In Stock Only</span>
                </label>
                <label className="flex items-center space-x-2 text-xs text-gray-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={onSaleOnly}
                    onChange={(e) => setOnSaleOnly(e.target.checked)}
                    className="rounded border-gray-300 text-[#007bc4] focus:ring-[#007bc4]"
                  />
                  <span>On Sale</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Right Product Grid Area */}
          <main className="flex-1 min-w-0">
            {/* Top Toolbar */}
            <div className="bg-white p-3.5 rounded-md border border-[#e8e8e8] shadow-xs mb-5 flex flex-wrap items-center justify-between gap-3">
              {/* Result Count & Mobile Filter Button */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setIsMobileFilterOpen(true)}
                  className="lg:hidden p-2 text-xs font-semibold bg-gray-100 rounded flex items-center space-x-1.5 text-gray-700"
                >
                  <SlidersHorizontal size={14} />
                  <span>Filters</span>
                </button>
                <p className="text-xs text-gray-500 font-medium">
                  Showing <strong className="text-gray-800">{filteredProducts.length}</strong> products
                  {searchQuery && <span> for "{searchQuery}"</span>}
                </p>
              </div>

              {/* Grid Column Switcher & Sorting */}
              <div className="flex items-center space-x-4">
                {/* Grid Switchers (Desktop) */}
                <div className="hidden sm:flex items-center space-x-1 border-r border-gray-200 pr-3 text-gray-400">
                  <button
                    onClick={() => setGridCols(3)}
                    className={`p-1.5 rounded hover:text-gray-800 ${
                      gridCols === 3 ? 'text-[#007bc4] bg-sky-50' : ''
                    }`}
                    title="3 Columns"
                  >
                    <Grid3X3 size={16} />
                  </button>
                  <button
                    onClick={() => setGridCols(4)}
                    className={`p-1.5 rounded hover:text-gray-800 ${
                      gridCols === 4 ? 'text-[#007bc4] bg-sky-50' : ''
                    }`}
                    title="4 Columns"
                  >
                    <LayoutGrid size={16} />
                  </button>
                </div>

                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-xs text-gray-700 border border-gray-200 rounded-md py-1.5 px-3 bg-white outline-none focus:border-[#007bc4] cursor-pointer"
                >
                  <option value="default">Default sorting</option>
                  <option value="popular">Sort by popularity</option>
                  <option value="rating">Sort by average rating</option>
                  <option value="price-low">Sort by price: low to high</option>
                  <option value="price-high">Sort by price: high to low</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white p-12 text-center rounded-md border border-gray-200 shadow-xs space-y-3">
                <p className="font-heading font-semibold text-gray-700 text-base">
                  No products found matching your selection.
                </p>
                <p className="text-xs text-gray-400">
                  Try adjusting your price range, clearing filters, or browsing other categories.
                </p>
                <button onClick={clearFilters} className="btn-primary uppercase text-xs">
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div
                className={`grid grid-cols-2 ${
                  gridCols === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'
                } gap-4`}
              >
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={(p) => setQuickViewProduct(p)}
                  />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      )}

      {/* Mobile Filters Drawer */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs"
            onClick={() => setIsMobileFilterOpen(false)}
          />
          <div className="relative w-4/5 max-w-xs bg-white h-full shadow-2xl z-10 p-5 overflow-y-auto space-y-5 animate-slideRight">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <span className="font-heading font-bold text-sm uppercase">Filter Products</span>
              <button onClick={() => setIsMobileFilterOpen(false)}>
                <X size={20} />
              </button>
            </div>

            {/* Category */}
            <div>
              <h4 className="font-semibold text-xs uppercase mb-2">Categories</h4>
              <div className="space-y-1 text-xs">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.slug);
                      setIsMobileFilterOpen(false);
                    }}
                    className={`block w-full text-left py-1 ${
                      selectedCategory === cat.slug ? 'text-[#007bc4] font-bold' : 'text-gray-600'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div>
              <div className="flex justify-between text-xs mb-1 font-semibold">
                <span>Max Price:</span>
                <span className="text-[#007bc4]">${priceRange}</span>
              </div>
              <input
                type="range"
                min="0"
                max="70"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-[#007bc4]"
              />
            </div>

            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="w-full py-2.5 bg-[#007bc4] text-white rounded-full text-xs font-bold uppercase tracking-wider"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
