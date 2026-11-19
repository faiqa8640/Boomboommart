import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export const CartDrawer: React.FC = () => {
  const { isCartOpen, closeCart, items, removeFromCart, updateQuantity, subtotal, totalItems } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Slide-out Drawer Container */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl z-10 flex flex-col justify-between animate-slideLeft">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-white">
          <div className="flex items-center space-x-2">
            <ShoppingBag size={20} className="text-[#007bc4]" />
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-[#242424]">
              Shopping Cart ({totalItems})
            </h3>
          </div>
          <button
            onClick={closeCart}
            className="p-1.5 text-gray-400 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close cart drawer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-gray-300">
                <ShoppingBag size={32} />
              </div>
              <div>
                <p className="font-heading font-semibold text-gray-800 text-sm">
                  No products in the cart.
                </p>
                <p className="text-xs text-gray-400 mt-1 max-w-xs">
                  Before proceeding to checkout you must add some products to your shopping cart.
                </p>
              </div>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn-primary uppercase text-xs tracking-wider"
              >
                Return To Shop
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {items.map((item) => (
                <div key={item.id} className="py-3.5 flex space-x-3 group">
                  {/* Thumbnail */}
                  <Link
                    to={`/product/${item.product.slug}`}
                    onClick={closeCart}
                    className="w-18 h-18 rounded bg-[#f9f9f9] border border-gray-200 overflow-hidden flex-shrink-0"
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.title}
                      className="w-full h-full object-cover"
                    />
                  </Link>

                  {/* Details */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <Link
                          to={`/product/${item.product.slug}`}
                          onClick={closeCart}
                          className="text-xs font-medium text-gray-800 hover:text-[#007bc4] line-clamp-2 leading-snug"
                        >
                          {item.product.title}
                        </Link>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-500 p-0.5 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>

                      {/* Variant tags */}
                      {(item.selectedSize || item.selectedColor) && (
                        <div className="text-[10px] text-gray-400 mt-0.5 space-x-1.5">
                          {item.selectedSize && <span>Size: {item.selectedSize}</span>}
                          {item.selectedColor && <span>Color: {item.selectedColor}</span>}
                        </div>
                      )}
                    </div>

                    {/* Quantity & Unit price */}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-gray-200 rounded-full overflow-hidden">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center text-xs text-gray-500 hover:bg-gray-100 font-bold"
                        >
                          -
                        </button>
                        <span className="w-7 text-center text-xs font-semibold text-gray-700">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center text-xs text-gray-500 hover:bg-gray-100 font-bold"
                        >
                          +
                        </button>
                      </div>

                      <span className="text-xs font-bold text-[#007bc4]">
                        ${(item.unitPrice * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Subtotal & Action Buttons */}
        {items.length > 0 && (
          <div className="p-4 border-t border-gray-200 bg-gray-50 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-600">
                Subtotal:
              </span>
              <span className="text-base font-bold text-[#007bc4]">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <p className="text-[10px] text-gray-400 text-center">
              Taxes and shipping calculated at checkout.
            </p>

            <div className="grid grid-cols-2 gap-2">
              <Link
                to="/cart"
                onClick={closeCart}
                className="w-full py-2.5 px-3 border border-gray-300 hover:border-[#007bc4] hover:text-[#007bc4] text-gray-800 text-center text-xs font-bold uppercase tracking-wider rounded-full transition-all bg-white"
              >
                View Cart
              </Link>
              <Link
                to="/checkout"
                onClick={closeCart}
                className="w-full py-2.5 px-3 bg-[#007bc4] hover:bg-[#006aa8] text-white text-center text-xs font-bold uppercase tracking-wider rounded-full transition-all shadow-sm flex items-center justify-center space-x-1"
              >
                <span>Checkout</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
