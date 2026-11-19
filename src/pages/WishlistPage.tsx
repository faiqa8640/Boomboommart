import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

export const WishlistPage: React.FC = () => {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div className="bg-[#fcfcfc] min-h-screen pb-16 font-body">
      {/* Dark Wishlist Header (As inspected on Boom Boom Mart) */}
      <div className="bg-[#111111] text-white py-12 px-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold uppercase tracking-wide mb-2 text-white">
            Wishlist
          </h1>
          <div className="flex items-center justify-center space-x-2 text-xs text-gray-400 uppercase tracking-wider">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#007bc4] font-semibold">Wishlist</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-10">
        {items.length === 0 ? (
          /* Empty State */
          <div className="max-w-xl mx-auto bg-white p-10 md:p-14 text-center rounded-lg border border-gray-200 shadow-xs space-y-4">
            <div className="w-20 h-20 rounded-full bg-red-50 text-red-400 flex items-center justify-center mx-auto">
              <Heart size={40} className="stroke-[1.5]" />
            </div>
            <h2 className="text-xl md:text-2xl font-heading font-bold text-gray-800">
              This wishlist is empty.
            </h2>
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed max-w-md mx-auto">
              You don't have any products in the wishlist yet. You will find a lot of interesting products on our "Shop" page.
            </p>
            <div className="pt-2">
              <Link to="/shop" className="btn-primary uppercase text-xs tracking-wider px-8 py-3">
                Return To Shop
              </Link>
            </div>
          </div>
        ) : (
          /* Populated Wishlist Table */
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50 text-gray-700 text-xs uppercase font-bold tracking-wider">
                    <th className="py-3 px-4 text-center">Remove</th>
                    <th className="py-3 px-4">Product</th>
                    <th className="py-3 px-4">Unit Price</th>
                    <th className="py-3 px-4">Stock Status</th>
                    <th className="py-3 px-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-xs">
                  {items.map(({ product }) => (
                    <tr key={product.id} className="hover:bg-gray-50/50 transition-colors">
                      {/* Remove */}
                      <td className="py-4 px-4 text-center">
                        <button
                          type="button"
                          onClick={() => removeFromWishlist(product.id)}
                          className="text-gray-400 hover:text-red-500 p-1 transition-colors"
                          title="Remove from Wishlist"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>

                      {/* Product details */}
                      <td className="py-4 px-4 flex items-center space-x-3 min-w-[260px]">
                        <img
                          src={product.images[0]}
                          alt={product.title}
                          className="w-14 h-14 rounded object-cover border border-gray-200 flex-shrink-0"
                        />
                        <Link
                          to={`/product/${product.slug}`}
                          className="font-semibold text-gray-800 hover:text-[#007bc4] line-clamp-2"
                        >
                          {product.title}
                        </Link>
                      </td>

                      {/* Unit Price */}
                      <td className="py-4 px-4 font-bold text-[#007bc4]">
                        ${product.price.toFixed(2)}
                      </td>

                      {/* Stock Status */}
                      <td className="py-4 px-4">
                        <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold text-emerald-700 bg-emerald-50">
                          In Stock
                        </span>
                      </td>

                      {/* Add to Cart CTA */}
                      <td className="py-4 px-4 text-center">
                        <button
                          type="button"
                          onClick={() => addToCart(product, 1)}
                          className="py-2 px-5 bg-[#007bc4] hover:bg-[#006aa8] text-white text-xs font-semibold rounded-full uppercase tracking-wider transition-colors inline-flex items-center space-x-1.5"
                        >
                          <ShoppingBag size={13} />
                          <span>Add to Cart</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
