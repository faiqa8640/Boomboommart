import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CheckCircle2, Package, ArrowRight, Printer } from 'lucide-react';

export const OrderConfirmationPage: React.FC = () => {
  const location = useLocation();
  const order = location.state?.order || {
    orderId: 'BBM-' + Math.floor(100000 + Math.random() * 900000),
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    total: 34.50,
    items: [],
    customer: {
      firstName: 'Customer',
      email: 'customer@example.com',
      address: '7275 Northway Dr',
      city: 'Hanover Park',
      country: 'United States'
    }
  };

  return (
    <div className="bg-[#fcfcfc] min-h-screen pb-16 font-body">
      {/* 3-Step Header Banner */}
      <div className="bg-[#111111] text-white py-10 px-4 border-b border-gray-800">
        <div className="max-w-4xl mx-auto flex items-center justify-center space-x-4 md:space-x-8 text-xs md:text-sm uppercase font-bold tracking-wider">
          <span className="text-gray-400">1. Shopping Cart</span>
          <span className="text-gray-600">→</span>
          <span className="text-gray-400">2. Checkout</span>
          <span className="text-gray-600">→</span>
          <span className="text-[#007bc4] font-bold">3. Order Complete</span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 mt-10">
        <div className="bg-white p-8 md:p-12 rounded-lg border border-gray-200 shadow-xs text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 size={38} />
          </div>

          <div>
            <h1 className="text-2xl md:text-3xl font-heading font-extrabold text-gray-900 mb-2">
              Thank You! Your Order Has Been Received.
            </h1>
            <p className="text-xs md:text-sm text-gray-500 max-w-md mx-auto">
              A confirmation email with your order summary has been sent to{' '}
              <strong className="text-gray-800">{order.customer?.email}</strong>.
            </p>
          </div>

          {/* Order Details Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg text-left border border-gray-100 text-xs">
            <div>
              <span className="text-[11px] text-gray-400 uppercase tracking-wider block">Order Number:</span>
              <strong className="text-gray-900">{order.orderId}</strong>
            </div>
            <div>
              <span className="text-[11px] text-gray-400 uppercase tracking-wider block">Date:</span>
              <strong className="text-gray-900">{order.date}</strong>
            </div>
            <div>
              <span className="text-[11px] text-gray-400 uppercase tracking-wider block">Total:</span>
              <strong className="text-[#007bc4]">${order.total ? order.total.toFixed(2) : '0.00'}</strong>
            </div>
            <div>
              <span className="text-[11px] text-gray-400 uppercase tracking-wider block">Payment:</span>
              <strong className="text-gray-900">Verified</strong>
            </div>
          </div>

          {/* Delivery Note */}
          <div className="p-4 bg-sky-50 text-[#007bc4] rounded-lg text-xs flex items-center justify-center space-x-2">
            <Package size={18} />
            <span>Estimated delivery window: <strong>3-5 business days</strong></span>
          </div>

          {/* Actions */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <Link to="/track-order" className="btn-primary uppercase text-xs tracking-wider">
              Track Order Status
            </Link>
            <Link to="/shop" className="btn-outline uppercase text-xs tracking-wider">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
