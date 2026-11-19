import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Heart, ShoppingBag, Check, ShieldCheck, Truck, RotateCcw, Share2, Facebook, Twitter, Mail } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';
import { StarRating } from '../components/common/StarRating';
import { Badge } from '../components/common/Badge';
import { ProductCard } from '../components/product/ProductCard';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes ? product.sizes[0] : '');
  const [selectedColor, setSelectedColor] = useState<string>(product.colors ? product.colors[0] : '');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'reviews' | 'shipping'>('desc');
  const [added, setAdded] = useState(false);

  // User review submission state
  const [reviews, setReviews] = useState([
    {
      id: 1,
      author: 'David H.',
      rating: 5,
      date: 'November 12, 2026',
      content: 'Excellent build quality and very fast shipping! Looks even better in person.'
    },
    {
      id: 2,
      author: 'Sarah M.',
      rating: 4,
      date: 'October 28, 2026',
      content: 'Really happy with this purchase. Super functional and fits the decor nicely.'
    }
  ]);
  const [newReviewAuthor, setNewReviewAuthor] = useState('');
  const [newReviewContent, setNewReviewContent] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
    navigate('/checkout');
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewAuthor.trim() || !newReviewContent.trim()) return;

    setReviews([
      {
        id: Date.now(),
        author: newReviewAuthor.trim(),
        rating: newReviewRating,
        date: 'Just now',
        content: newReviewContent.trim()
      },
      ...reviews
    ]);

    setNewReviewAuthor('');
    setNewReviewContent('');
  };

  const isFavorited = isInWishlist(product.id);

  // Related products
  const relatedProducts = PRODUCTS.filter(
    (p) => p.categorySlug === product.categorySlug && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="bg-white min-h-screen pb-16 font-body">
      {/* Top Breadcrumb Bar */}
      <div className="bg-gray-50 border-b border-gray-100 py-3.5 px-4 lg:px-8 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto flex items-center space-x-2">
          <Link to="/" className="hover:text-[#007bc4]">Home</Link>
          <span>/</span>
          <Link to={`/category/${product.categorySlug}`} className="hover:text-[#007bc4]">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-gray-800 font-medium truncate max-w-md">{product.title}</span>
        </div>
      </div>

      {/* Main Product Showcase Section */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: Gallery (6 Columns) */}
          <div className="md:col-span-6 flex flex-col-reverse sm:flex-row gap-4">
            {/* Vertical Thumbnail Strip */}
            {product.images.length > 1 && (
              <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-y-auto sm:w-20 flex-shrink-0">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square rounded border-2 overflow-hidden flex-shrink-0 transition-all ${
                      selectedImage === idx
                        ? 'border-[#007bc4] ring-1 ring-[#007bc4]'
                        : 'border-gray-200 hover:border-gray-400 opacity-80 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Main Viewport */}
            <div className="flex-1 relative aspect-square rounded-lg overflow-hidden bg-[#fafafa] border border-gray-200 group">
              <img
                src={product.images[selectedImage] || product.images[0]}
                alt={product.title}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              {product.discountPercent && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge type="sale" text={`-${product.discountPercent}%`} />
                </div>
              )}
            </div>
          </div>

          {/* Right: Product Details (6 Columns) */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#007bc4] uppercase tracking-wider block mb-1">
                {product.category}
              </span>

              <h1 className="text-2xl md:text-3xl font-heading font-bold text-[#242424] leading-snug mb-3">
                {product.title}
              </h1>

              {/* Rating & Stock */}
              <div className="flex items-center space-x-3 mb-4">
                <StarRating rating={product.rating} showText reviewCount={product.reviewCount} />
                <span className="text-gray-300">|</span>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                  In Stock (SKU: {product.sku})
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline space-x-3 mb-5 pb-5 border-b border-gray-100">
                <span className="text-3xl font-heading font-extrabold text-[#007bc4]">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-base text-gray-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                {product.discountPercent && (
                  <span className="text-xs font-semibold text-red-500 bg-red-50 px-2 py-0.5 rounded">
                    Save {product.discountPercent}%
                  </span>
                )}
              </div>

              {/* Short Description */}
              <p className="text-xs md:text-sm text-[#777777] leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Variant Selectors: Sizes */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-800">
                      Select Size / Option:
                    </span>
                    <span className="text-xs font-medium text-[#007bc4]">{selectedSize}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`px-3.5 py-1.5 text-xs font-semibold rounded-md border transition-all ${
                          selectedSize === size
                            ? 'border-[#007bc4] bg-[#007bc4] text-white shadow-xs'
                            : 'border-gray-200 text-gray-700 hover:border-gray-400 bg-white'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Variant Selectors: Colors */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-800">
                      Color:
                    </span>
                    <span className="text-xs font-medium text-[#007bc4]">{selectedColor}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        type="button"
                        onClick={() => setSelectedColor(color)}
                        className={`px-3.5 py-1.5 text-xs font-semibold rounded-full border transition-all ${
                          selectedColor === color
                            ? 'border-[#007bc4] bg-sky-50 text-[#007bc4] ring-1 ring-[#007bc4]'
                            : 'border-gray-200 text-gray-700 hover:border-gray-400 bg-white'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Add to Cart Actions */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                {/* Quantity */}
                <div className="flex items-center border border-gray-300 rounded-full overflow-hidden bg-white h-11">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-10 h-full flex items-center justify-center text-gray-600 hover:bg-gray-100 font-bold"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-12 h-full text-center text-sm font-semibold text-gray-800 outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-10 h-full flex items-center justify-center text-gray-600 hover:bg-gray-100 font-bold"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-1 py-3 px-6 bg-[#007bc4] hover:bg-[#006aa8] text-white font-bold rounded-full uppercase text-xs tracking-wider transition-all duration-200 shadow-md active:scale-95 flex items-center justify-center space-x-2"
                >
                  {added ? (
                    <>
                      <Check size={16} />
                      <span>Added to Cart!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={16} />
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>

                {/* Buy Now */}
                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="py-3 px-6 bg-[#242424] hover:bg-black text-white font-bold rounded-full uppercase text-xs tracking-wider transition-all duration-200 shadow-md active:scale-95"
                >
                  Buy Now
                </button>

                {/* Wishlist */}
                <button
                  type="button"
                  onClick={() => toggleWishlist(product)}
                  className={`p-3 rounded-full border transition-all ${
                    isFavorited
                      ? 'border-red-500 bg-red-50 text-red-500'
                      : 'border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-900'
                  }`}
                  title={isFavorited ? 'In Wishlist' : 'Add to Wishlist'}
                >
                  <Heart size={18} className={isFavorited ? 'fill-red-500' : ''} />
                </button>
              </div>

              {/* Value Badges */}
              <div className="grid grid-cols-3 gap-3 p-4 bg-gray-50 rounded-lg text-xs text-gray-600 mb-6">
                <div className="flex items-center space-x-2">
                  <Truck size={16} className="text-[#007bc4] flex-shrink-0" />
                  <span className="font-medium">Free Fast Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <RotateCcw size={16} className="text-[#007bc4] flex-shrink-0" />
                  <span className="font-medium">30 Days Returns</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheck size={16} className="text-[#007bc4] flex-shrink-0" />
                  <span className="font-medium">100% Genuine</span>
                </div>
              </div>
            </div>

            {/* Meta Tags & Share */}
            <div className="pt-4 border-t border-gray-100 text-xs text-gray-500 space-y-2">
              <p>Category: <strong className="text-gray-800">{product.category}</strong></p>
              <p>Tags: <span className="text-gray-700">{product.tags.join(', ')}</span></p>
              <div className="flex items-center space-x-3 pt-2">
                <span>Share:</span>
                <a href="#fb" className="text-gray-400 hover:text-[#007bc4]"><Facebook size={14} /></a>
                <a href="#tw" className="text-gray-400 hover:text-[#007bc4]"><Twitter size={14} /></a>
                <a href="#email" className="text-gray-400 hover:text-[#007bc4]"><Mail size={14} /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Info Section (Description, Reviews, Shipping) */}
        <div className="mt-16 border-t border-gray-200 pt-8">
          <div className="flex items-center justify-center space-x-8 border-b border-gray-200 pb-4 mb-8 text-xs md:text-sm font-bold uppercase tracking-wider">
            <button
              onClick={() => setActiveTab('desc')}
              className={`pb-3 relative transition-colors ${
                activeTab === 'desc'
                  ? 'text-[#007bc4] font-extrabold'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Description
              {activeTab === 'desc' && (
                <span className="absolute -bottom-4 left-0 right-0 h-0.5 bg-[#007bc4]" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('reviews')}
              className={`pb-3 relative transition-colors ${
                activeTab === 'reviews'
                  ? 'text-[#007bc4] font-extrabold'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Reviews ({reviews.length})
              {activeTab === 'reviews' && (
                <span className="absolute -bottom-4 left-0 right-0 h-0.5 bg-[#007bc4]" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('shipping')}
              className={`pb-3 relative transition-colors ${
                activeTab === 'shipping'
                  ? 'text-[#007bc4] font-extrabold'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Shipping & Delivery
              {activeTab === 'shipping' && (
                <span className="absolute -bottom-4 left-0 right-0 h-0.5 bg-[#007bc4]" />
              )}
            </button>
          </div>

          {/* Tab 1: Description & Specs */}
          {activeTab === 'desc' && (
            <div className="max-w-4xl mx-auto space-y-6 text-xs md:text-sm text-gray-700 leading-relaxed animate-fadeIn">
              <p>{product.description}</p>
              <h4 className="font-heading font-bold text-sm uppercase text-gray-900 pt-2">
                Technical Specifications
              </h4>
              <div className="border border-gray-200 rounded-md overflow-hidden">
                <table className="w-full text-left text-xs">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, val], idx) => (
                      <tr key={key} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="py-2.5 px-4 font-semibold text-gray-800 w-1/3 border-b border-gray-100">
                          {key}
                        </td>
                        <td className="py-2.5 px-4 text-gray-600 border-b border-gray-100">
                          {val}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tab 2: Reviews */}
          {activeTab === 'reviews' && (
            <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
              <div className="space-y-4">
                {reviews.map((rev) => (
                  <div key={rev.id} className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-heading font-semibold text-xs text-gray-900">{rev.author}</span>
                      <span className="text-[11px] text-gray-400">{rev.date}</span>
                    </div>
                    <StarRating rating={rev.rating} size={12} />
                    <p className="text-xs text-gray-600 mt-2">{rev.content}</p>
                  </div>
                ))}
              </div>

              {/* Add Review Form */}
              <div className="p-6 bg-white border border-gray-200 rounded-lg">
                <h4 className="font-heading font-bold text-sm uppercase text-gray-800 mb-3">
                  Add a Review
                </h4>
                <form onSubmit={handleAddReview} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Your Rating</label>
                    <select
                      value={newReviewRating}
                      onChange={(e) => setNewReviewRating(Number(e.target.value))}
                      className="text-xs border border-gray-300 rounded p-2"
                    >
                      <option value={5}>5 Stars - Excellent</option>
                      <option value={4}>4 Stars - Good</option>
                      <option value={3}>3 Stars - Average</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={newReviewAuthor}
                      onChange={(e) => setNewReviewAuthor(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full p-2.5 text-xs border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Your Review</label>
                    <textarea
                      required
                      rows={3}
                      value={newReviewContent}
                      onChange={(e) => setNewReviewContent(e.target.value)}
                      placeholder="Write your feedback..."
                      className="w-full p-2.5 text-xs border border-gray-300 rounded"
                    />
                  </div>
                  <button type="submit" className="btn-primary uppercase text-xs">
                    Submit Review
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Tab 3: Shipping */}
          {activeTab === 'shipping' && (
            <div className="max-w-4xl mx-auto space-y-4 text-xs md:text-sm text-gray-700 leading-relaxed animate-fadeIn">
              <h4 className="font-heading font-bold text-sm text-gray-900">
                Shipping Information
              </h4>
              <p>
                We provide standard ground and expedited air delivery options across the continental United States and international hubs. Orders are processed within 24-48 business hours.
              </p>
              <h4 className="font-heading font-bold text-sm text-gray-900 pt-2">
                Hassle-Free Returns
              </h4>
              <p>
                Not satisfied with your order? Return any unworn or undamaged items within 30 days of delivery for a full refund or exchange.
              </p>
            </div>
          )}
        </div>

        {/* Related Products Showcase */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="font-heading font-bold text-xl text-[#242424] mb-6">
              Related Products
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
