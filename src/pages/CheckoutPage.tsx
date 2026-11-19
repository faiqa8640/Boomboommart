import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ShieldCheck, Lock, CreditCard, Truck, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { items, subtotal, clearCart } = useCart();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'United States',
    paymentMethod: 'card'
  });

  const [loading, setLoading] = useState(false);

  const shipping = subtotal > 50 || subtotal === 0 ? 0 : 5.00;
  const total = subtotal + shipping;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    setLoading(true);

    // Simulate order placement
    setTimeout(() => {
      const order = {
        orderId: 'BBM-' + Math.floor(100000 + Math.random() * 900000),
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        items: [...items],
        total,
        shipping,
        subtotal,
        customer: formData
      };

      try {
        localStorage.setItem('boomboommart_latest_order', JSON.stringify(order));
      } catch (err) {
        console.error(err);
      }

      clearCart();
      setLoading(false);
      navigate('/order-complete', { state: { order } });
    }, 1500);
  };

  if (items.length === 0) {
    return (
      <div className="bg-[#fcfcfc] min-h-screen py-16 px-4 text-center font-body">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg border border-gray-200 shadow-xs space-y-4">
          <h2 className="text-xl font-heading font-bold text-gray-800">Your cart is empty</h2>
          <p className="text-xs text-gray-500">Add products to your cart before proceeding to checkout.</p>
          <Link to="/shop" className="btn-primary uppercase text-xs">Return to Shop</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#fcfcfc] min-h-screen pb-16 font-body">
      {/* 3-Step Breadcrumbs */}
      <div className="bg-[#111111] text-white py-10 px-4 border-b border-gray-800">
        <div className="max-w-4xl mx-auto flex items-center justify-center space-x-4 md:space-x-8 text-xs md:text-sm uppercase font-bold tracking-wider">
          <Link to="/cart" className="text-gray-400 hover:text-white flex items-center space-x-1.5">
            <span className="w-5 h-5 rounded-full bg-gray-800 text-gray-400 flex items-center justify-center text-[10px]">1</span>
            <span>Shopping Cart</span>
          </Link>
          <span className="text-gray-600">→</span>
          <span className="text-[#007bc4] flex items-center space-x-1.5">
            <span className="w-5 h-5 rounded-full bg-[#007bc4] text-white flex items-center justify-center text-[10px]">2</span>
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
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Billing & Shipping Details (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-lg border border-gray-200 shadow-xs space-y-6">
            <h2 className="font-heading font-bold text-lg uppercase tracking-wider text-gray-900 border-b border-gray-100 pb-3">
              Billing & Shipping Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  className="w-full p-2.5 text-xs border border-gray-300 rounded outline-none focus:border-[#007bc4]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  className="w-full p-2.5 text-xs border border-gray-300 rounded outline-none focus:border-[#007bc4]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full p-2.5 text-xs border border-gray-300 rounded outline-none focus:border-[#007bc4]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(786) 869-8482"
                  className="w-full p-2.5 text-xs border border-gray-300 rounded outline-none focus:border-[#007bc4]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                Street Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="House number and street name"
                className="w-full p-2.5 text-xs border border-gray-300 rounded outline-none focus:border-[#007bc4]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Hanover Park"
                  className="w-full p-2.5 text-xs border border-gray-300 rounded outline-none focus:border-[#007bc4]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                  Postal / ZIP Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  placeholder="60133"
                  className="w-full p-2.5 text-xs border border-gray-300 rounded outline-none focus:border-[#007bc4]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                  Country
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full p-2.5 text-xs border border-gray-300 rounded outline-none focus:border-[#007bc4] bg-white cursor-pointer"
                >
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Australia">Australia</option>
                </select>
              </div>
            </div>

            {/* Payment Method */}
            <div className="pt-4 border-t border-gray-100">
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-gray-800 mb-3">
                Payment Method
              </h3>
              <div className="space-y-2.5">
                <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 border-gray-200">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={handleChange}
                    className="text-[#007bc4] focus:ring-[#007bc4]"
                  />
                  <CreditCard size={18} className="text-[#007bc4]" />
                  <span className="text-xs font-semibold text-gray-800">Credit / Debit Card (Simulated)</span>
                </label>

                <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 border-gray-200">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={handleChange}
                    className="text-[#007bc4] focus:ring-[#007bc4]"
                  />
                  <Truck size={18} className="text-gray-600" />
                  <span className="text-xs font-semibold text-gray-800">Cash on Delivery</span>
                </label>
              </div>
            </div>
          </div>

          {/* Right: Order Summary (5 cols) */}
          <div className="lg:col-span-5 bg-white p-6 md:p-8 rounded-lg border border-gray-200 shadow-xs space-y-5">
            <h2 className="font-heading font-bold text-lg uppercase tracking-wider text-gray-900 border-b border-gray-100 pb-3">
              Your Order
            </h2>

            {/* Product items mini list */}
            <div className="divide-y divide-gray-100 max-h-64 overflow-y-auto">
              {items.map((item) => (
                <div key={item.id} className="py-2.5 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2.5">
                    <img
                      src={item.product.images[0]}
                      alt=""
                      className="w-10 h-10 rounded object-cover border border-gray-200"
                    />
                    <div>
                      <span className="font-semibold text-gray-800 line-clamp-1 max-w-[200px]">
                        {item.product.title}
                      </span>
                      <span className="text-gray-400 text-[11px]">Qty: {item.quantity}</span>
                    </div>
                  </div>
                  <span className="font-bold text-gray-800">
                    ${(item.unitPrice * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            {/* Pricing breakdown */}
            <div className="space-y-2 pt-3 border-t border-gray-100 text-xs">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>{shipping === 0 ? <strong className="text-emerald-600">Free</strong> : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-gray-900 pt-2 border-t border-gray-100">
                <span>Total</span>
                <span className="text-xl text-[#007bc4]">${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-[#007bc4] hover:bg-[#006aa8] text-white font-bold rounded-full uppercase text-xs tracking-wider transition-all duration-200 shadow-md active:scale-95 flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {loading ? (
                <span>Processing Order...</span>
              ) : (
                <>
                  <Lock size={15} />
                  <span>Place Order (${total.toFixed(2)})</span>
                </>
              )}
            </button>

            <div className="flex items-center justify-center space-x-2 text-[11px] text-gray-400 pt-2">
              <ShieldCheck size={14} className="text-emerald-600" />
              <span>Guaranteed 256-bit SSL encrypted checkout</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
