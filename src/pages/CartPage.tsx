import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ArrowRight, ShoppingBag, CheckCircle, Tag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const { items, removeFromCart, updateQuantity, subtotal, clearCart } = useCart();

  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState('');

  const shipping = subtotal > 50 || subtotal === 0 ? 0 : 5.00;
  const finalTotal = Math.max(0, subtotal - discount + shipping);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'BOOM30') {
      const disc = subtotal * 0.3;
      setDiscount(disc);
      setCouponMessage('Coupon BOOM30 applied! 30% discount deducted.');
    } else if (couponCode.trim().toUpperCase() === 'WELCOME10') {
      const disc = 10;
      setDiscount(disc);
      setCouponMessage('$10 Welcome discount applied.');
    } else {
      setCouponMessage('Invalid coupon code. Try "BOOM30" or "WELCOME10".');
    }
  };

  return (
    <div className="bg-[#fcfcfc] min-h-screen pb-16 font-body">
      {/* 3-Step Checkout Banner (As inspected on Boom Boom Mart) */}
      <div className="bg-[#111111] text-white py-10 px-4 border-b border-gray-800">
        <div className="max-w-4xl mx-auto flex items-center justify-center space-x-4 md:space-x-8 text-xs md:text-sm uppercase font-bold tracking-wider">
          <span className="text-[#007bc4] flex items-center space-x-1.5">
            <span className="w-5 h-5 rounded-full bg-[#007bc4] text-white flex items-center justify-center text-[10px]">1</span>
            <span>Shopping Cart</span>
          </span>
          <span className="text-gray-600">→</span>
          <span className="text-gray-400 flex items-center space-x-1.5">
            <span className="w-5 h-5 rounded-full bg-gray-800 text-gray-400 flex items-center justify-center text-[10px]">2</span>
            <span>Checkout</span>
          </span>
          <span className="text-gray-600">→</span>
          <span className="text-gray-400 flex items-center space-x-1.5">
            <span className="w-5 h-5 rounded-full bg-gray-800 text-gray-400 flex items-center justify-center text-[10px]">3</span>
            <span>Order Complete</span>
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-10">
        {items.length === 0 ? (
          /* Empty Cart State matching reference */
          <div className="max-w-xl mx-auto bg-white p-10 md:p-14 text-center rounded-lg border border-gray-200 shadow-xs space-y-4">
            <div className="w-20 h-20 rounded-full bg-sky-50 text-[#007bc4] flex items-center justify-center mx-auto">
              <ShoppingBag size={40} />
            </div>
            <h2 className="text-xl md:text-2xl font-heading font-bold text-gray-800">
              Your cart is currently empty.
            </h2>
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed max-w-md mx-auto">
              Before proceeding to checkout you must add some products to your shopping cart. You will find a lot of interesting products on our "Shop" page.
            </p>
            <div className="pt-2">
              <Link to="/shop" className="btn-primary uppercase text-xs tracking-wider px-8 py-3">
                Return To Shop
              </Link>
            </div>
          </div>
        ) : (
          /* Populated Cart Table & Totals */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Products Table (8 Cols) */}
            <div className="lg:col-span-8 bg-white rounded-lg border border-gray-200 overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50 text-gray-700 text-xs uppercase font-bold tracking-wider">
                      <th className="py-3 px-4">Product</th>
                      <th className="py-3 px-4">Price</th>
                      <th className="py-3 px-4">Quantity</th>
                      <th className="py-3 px-4">Subtotal</th>
                      <th className="py-3 px-4 text-center">Remove</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-xs">
                    {items.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                        {/* Thumbnail & Title */}
                        <td className="py-4 px-4 flex items-center space-x-3 min-w-[240px]">
                          <img
                            src={item.product.images[0]}
                            alt={item.product.title}
                            className="w-14 h-14 rounded object-cover border border-gray-200 flex-shrink-0"
                          />
                          <div>
                            <Link
                              to={`/product/${item.product.slug}`}
                              className="font-semibold text-gray-800 hover:text-[#007bc4] line-clamp-2"
                            >
                              {item.product.title}
                            </Link>
                            {(item.selectedSize || item.selectedColor) && (
                              <div className="text-[10px] text-gray-400 mt-0.5 space-x-2">
                                {item.selectedSize && <span>Size: {item.selectedSize}</span>}
                                {item.selectedColor && <span>Color: {item.selectedColor}</span>}
                              </div>
                            )}
                          </div>
                        </td>

                        {/* Unit Price */}
                        <td className="py-4 px-4 font-medium text-gray-700">
                          ${item.unitPrice.toFixed(2)}
                        </td>

                        {/* Quantity */}
                        <td className="py-4 px-4">
                          <div className="flex items-center border border-gray-200 rounded-full w-24 overflow-hidden bg-white">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-7 h-7 flex items-center justify-center text-gray-500 hover:bg-gray-100 font-bold"
                            >
                              -
                            </button>
                            <span className="flex-1 text-center font-bold text-gray-800">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-7 h-7 flex items-center justify-center text-gray-500 hover:bg-gray-100 font-bold"
                            >
                              +
                            </button>
                          </div>
                        </td>

                        {/* Total per Item */}
                        <td className="py-4 px-4 font-bold text-[#007bc4]">
                          ${(item.unitPrice * item.quantity).toFixed(2)}
                        </td>

                        {/* Delete Button */}
                        <td className="py-4 px-4 text-center">
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-red-500 p-1 transition-colors"
                            title="Remove"
                          >
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Coupon Bar & Clear Cart */}
              <div className="p-4 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <form onSubmit={handleApplyCoupon} className="flex items-center space-x-2 w-full sm:w-auto">
                  <div className="relative flex-1 sm:w-60">
                    <Tag size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Coupon code (try BOOM30)"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 text-xs border border-gray-300 rounded-full uppercase outline-none focus:border-[#007bc4]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="py-2 px-5 bg-gray-800 hover:bg-black text-white text-xs font-semibold rounded-full uppercase tracking-wider"
                  >
                    Apply
                  </button>
                </form>

                <button
                  type="button"
                  onClick={clearCart}
                  className="text-xs text-red-500 hover:underline font-medium"
                >
                  Clear Cart
                </button>
              </div>

              {couponMessage && (
                <div className="p-3 bg-sky-50 border-t border-sky-100 text-xs text-[#007bc4] font-medium flex items-center space-x-1.5">
                  <CheckCircle size={14} />
                  <span>{couponMessage}</span>
                </div>
              )}
            </div>

            {/* Cart Totals Summary Card (4 Cols) */}
            <div className="lg:col-span-4 bg-white p-6 rounded-lg border border-gray-200 shadow-xs space-y-4">
              <h3 className="font-heading font-bold text-base uppercase tracking-wider text-gray-800 pb-3 border-b border-gray-100">
                Cart Totals
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-gray-800">${subtotal.toFixed(2)}</span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-medium">
                    <span>Discount</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? <strong className="text-emerald-600">Free Shipping</strong> : `$${shipping.toFixed(2)}`}</span>
                </div>

                {subtotal < 50 && (
                  <p className="text-[11px] text-gray-400 bg-sky-50 p-2 rounded">
                    Add ${(50 - subtotal).toFixed(2)} more to qualify for Free Shipping!
                  </p>
                )}

                <hr className="border-gray-100 my-2" />

                <div className="flex justify-between text-sm font-bold text-gray-900">
                  <span>Total</span>
                  <span className="text-xl text-[#007bc4]">${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => navigate('/checkout')}
                className="w-full py-3.5 bg-[#007bc4] hover:bg-[#006aa8] text-white font-bold rounded-full uppercase text-xs tracking-wider transition-all duration-200 shadow-md active:scale-95 flex items-center justify-center space-x-2 mt-4"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight size={14} />
              </button>

              <Link
                to="/shop"
                className="block text-center text-xs text-gray-500 hover:text-[#007bc4] pt-2 hover:underline"
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
