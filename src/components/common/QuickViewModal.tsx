import React, { useState } from 'react';
import { X, Heart, ShoppingBag, Check, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { Product } from '../../types';
import { StarRating } from './StarRating';
import { Badge } from './Badge';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { Link } from 'react-router-dom';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(
      product,
      quantity,
      selectedSize || (product.sizes ? product.sizes[0] : undefined),
      selectedColor || (product.colors ? product.colors[0] : undefined)
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const isFavorited = isInWishlist(product.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden max-h-[90vh] flex flex-col md:flex-row animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 text-gray-500 hover:text-gray-900 bg-white/80 hover:bg-white rounded-full shadow-sm transition-all"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Product Media Gallery (Left) */}
        <div className="w-full md:w-1/2 p-6 bg-[#fbfbfb] flex flex-col justify-between border-r border-gray-100">
          <div className="relative aspect-square rounded-md overflow-hidden bg-white border border-gray-200">
            <img
              src={product.images[selectedImage] || product.images[0]}
              alt={product.title}
              className="w-full h-full object-cover object-center"
            />
            {product.discountPercent && (
              <div className="absolute top-3 left-3">
                <Badge type="sale" text={`-${product.discountPercent}%`} />
              </div>
            )}
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-2 mt-4 overflow-x-auto pb-1">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-16 h-16 rounded border-2 overflow-hidden flex-shrink-0 transition-all ${
                    selectedImage === idx
                      ? 'border-[#007bc4] ring-1 ring-[#007bc4]'
                      : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details (Right) */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col overflow-y-auto">
          {/* Breadcrumb Category */}
          <Link
            to={`/category/${product.categorySlug}`}
            onClick={onClose}
            className="text-xs font-semibold text-[#007bc4] uppercase tracking-wider hover:underline"
          >
            {product.category}
          </Link>

          {/* Title */}
          <h2 className="text-xl font-heading font-semibold text-[#242424] mt-1 mb-2 leading-snug">
            {product.title}
          </h2>

          {/* Rating */}
          <div className="flex items-center space-x-2 mb-3">
            <StarRating rating={product.rating} showText reviewCount={product.reviewCount} />
            <span className="text-xs text-gray-400">|</span>
            <span className="text-xs text-emerald-600 font-medium">In Stock</span>
          </div>

          {/* Price */}
          <div className="flex items-baseline space-x-3 mb-4">
            <span className="text-2xl font-bold text-[#007bc4]">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Description snippet */}
          <p className="text-xs text-[#777777] leading-relaxed mb-4 line-clamp-3">
            {product.description}
          </p>

          <hr className="border-gray-100 my-2" />

          {/* Size Selectors if available */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-700">
                  Size / Variant:
                </span>
                <span className="text-xs text-gray-500">{selectedSize || product.sizes[0]}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1.5 text-xs font-medium rounded border transition-all ${
                      (selectedSize || product.sizes![0]) === size
                        ? 'border-[#007bc4] bg-sky-50 text-[#007bc4] font-semibold'
                        : 'border-gray-200 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Color Selectors if available */}
          {product.colors && product.colors.length > 0 && (
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-700">
                  Color:
                </span>
                <span className="text-xs text-gray-500">{selectedColor || product.colors[0]}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 py-1 text-xs rounded-full border transition-all ${
                      (selectedColor || product.colors![0]) === color
                        ? 'border-[#007bc4] bg-[#007bc4] text-white font-semibold'
                        : 'border-gray-200 text-gray-700 hover:border-gray-400 bg-white'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity and Add to Cart */}
          <div className="flex items-center space-x-3 my-4">
            {/* Quantity Stepper */}
            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden bg-white">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-8 h-9 flex items-center justify-center text-gray-600 hover:bg-gray-100 font-bold transition-colors"
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-10 h-9 text-center text-sm font-semibold text-gray-800 outline-none border-x border-gray-200"
              />
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="w-8 h-9 flex items-center justify-center text-gray-600 hover:bg-gray-100 font-bold transition-colors"
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              type="button"
              onClick={handleAddToCart}
              className="flex-1 py-2.5 px-6 bg-[#007bc4] hover:bg-[#006aa8] text-white font-semibold rounded-full uppercase text-xs tracking-wider transition-all duration-200 shadow-sm active:scale-[0.98] flex items-center justify-center space-x-2"
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

            {/* Wishlist Button */}
            <button
              type="button"
              onClick={() => toggleWishlist(product)}
              className={`p-2.5 rounded-full border transition-all ${
                isFavorited
                  ? 'border-red-500 bg-red-50 text-red-500'
                  : 'border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-800'
              }`}
              title={isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}
            >
              <Heart size={18} className={isFavorited ? 'fill-red-500' : ''} />
            </button>
          </div>

          {/* View Full Product Link */}
          <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
            <span>SKU: <strong className="text-gray-700">{product.sku}</strong></span>
            <Link
              to={`/product/${product.slug}`}
              onClick={onClose}
              className="text-[#007bc4] font-medium hover:underline inline-flex items-center space-x-1"
            >
              <span>View full details →</span>
            </Link>
          </div>

          {/* Value Prop Badges */}
          <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-gray-100 text-[11px] text-gray-600">
            <div className="flex items-center space-x-1">
              <Truck size={14} className="text-[#007bc4]" />
              <span>Fast Shipping</span>
            </div>
            <div className="flex items-center space-x-1">
              <RotateCcw size={14} className="text-[#007bc4]" />
              <span>30-Day Return</span>
            </div>
            <div className="flex items-center space-x-1">
              <ShieldCheck size={14} className="text-[#007bc4]" />
              <span>Secure Pay</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
