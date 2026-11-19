import React, { useState } from 'react';
import { Eye, Heart, ShoppingBag, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { StarRating } from '../common/StarRating';
import { Badge } from '../common/Badge';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  className = ''
}) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [isHovered, setIsHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const isFavorited = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    addToCart(
      product,
      1,
      product.sizes ? product.sizes[0] : undefined,
      product.colors ? product.colors[0] : undefined
    );

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onQuickView) onQuickView(product);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  const hasVariants = (product.sizes && product.sizes.length > 0) || (product.colors && product.colors.length > 0);

  return (
    <div
      className={`group relative bg-white border border-[#e8e8e8] hover:border-gray-300 rounded-md overflow-hidden transition-all duration-300 flex flex-col justify-between hover:shadow-card-hover ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Image Container */}
      <div className="relative aspect-square w-full bg-[#fbfbfb] overflow-hidden">
        <Link to={`/product/${product.slug}`} className="block w-full h-full">
          {/* Main image */}
          <img
            src={product.images[0]}
            alt={product.title}
            className={`w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 ${
              product.images.length > 1 && isHovered ? 'opacity-0' : 'opacity-100'
            }`}
            loading="lazy"
          />

          {/* Secondary Hover Image */}
          {product.images.length > 1 && (
            <img
              src={product.images[1]}
              alt={product.title}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 ${
                isHovered ? 'opacity-100 scale-105' : 'opacity-0'
              }`}
              loading="lazy"
            />
          )}
        </Link>

        {/* Badges (Top Left) */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
          {product.discountPercent && (
            <Badge type="sale" text={`-${product.discountPercent}%`} />
          )}
          {product.isNew && <Badge type="new" text="NEW" />}
          {product.isBestSeller && !product.discountPercent && <Badge type="hot" text="HOT" />}
        </div>

        {/* Action Icons Toolbar (Top Right) */}
        <div className="absolute top-2.5 right-2.5 flex flex-col gap-1.5 z-10 transition-all duration-300 transform md:opacity-0 md:translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
          {/* Wishlist Button */}
          <button
            type="button"
            onClick={handleWishlist}
            className={`w-8 h-8 rounded-full flex items-center justify-center bg-white shadow-md transition-colors ${
              isFavorited
                ? 'text-red-500 fill-red-500'
                : 'text-gray-600 hover:text-red-500 hover:bg-gray-50'
            }`}
            title={isFavorited ? 'Remove from Wishlist' : 'Add to Wishlist'}
            aria-label="Wishlist"
          >
            <Heart size={15} className={isFavorited ? 'fill-red-500' : ''} />
          </button>

          {/* Quick View Button */}
          {onQuickView && (
            <button
              type="button"
              onClick={handleQuickView}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-white text-gray-600 hover:text-[#007bc4] hover:bg-gray-50 shadow-md transition-colors"
              title="Quick View"
              aria-label="Quick View"
            >
              <Eye size={15} />
            </button>
          )}
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-3.5 flex flex-col flex-grow justify-between">
        <div>
          {/* Category */}
          <Link
            to={`/category/${product.categorySlug}`}
            className="text-[11px] font-medium text-gray-400 hover:text-[#007bc4] uppercase tracking-wider block mb-1 transition-colors"
          >
            {product.category}
          </Link>

          {/* Title */}
          <h3 className="text-xs md:text-[13px] font-medium text-[#242424] hover:text-[#007bc4] line-clamp-2 leading-relaxed transition-colors mb-1.5 min-h-[36px]">
            <Link to={`/product/${product.slug}`} title={product.title}>
              {product.title}
            </Link>
          </h3>

          {/* Star Rating */}
          <div className="mb-2">
            <StarRating rating={product.rating} size={12} showText reviewCount={product.reviewCount} />
          </div>
        </div>

        {/* Price & Action Button */}
        <div className="pt-2 border-t border-gray-100">
          <div className="flex items-baseline space-x-2 mb-2.5">
            <span className="text-sm md:text-base font-bold text-[#007bc4]">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Add to Cart / Select options button */}
          {hasVariants ? (
            <Link
              to={`/product/${product.slug}`}
              className="w-full py-1.5 px-3 rounded-full border border-[#007bc4] text-[#007bc4] hover:bg-[#007bc4] hover:text-white text-center text-xs font-semibold uppercase tracking-wider transition-all duration-200 block shadow-2xs"
            >
              Select Options
            </Link>
          ) : (
            <button
              type="button"
              onClick={handleAddToCart}
              className="w-full py-1.5 px-3 rounded-full bg-[#007bc4] hover:bg-[#006aa8] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-2xs flex items-center justify-center space-x-1.5 active:scale-[0.98]"
            >
              {isAdded ? (
                <>
                  <Check size={14} />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <ShoppingBag size={14} />
                  <span>Add to cart</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
