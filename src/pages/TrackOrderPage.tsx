import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Package, Search, CheckCircle, Clock, Truck, Home } from 'lucide-react';

export const TrackOrderPage: React.FC = () => {
  const [orderId, setOrderId] = useState('');
  const [billingEmail, setBillingEmail] = useState('');
  const [trackingResult, setTrackingResult] = useState<any>(null);
  const [searched, setSearched] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);

    // Mock tracking result
    setTrackingResult({
      id: orderId.trim() || 'BBM-782914',
      status: 'Shipped',
      estimatedDelivery: 'November 23, 2026',
      carrier: 'USPS Priority Air',
      trackingNumber: '9400 1000 0000 0000 0000 00',
      steps: [
        { label: 'Order Confirmed', date: 'Nov 19, 2026 - 09:30 AM', completed: true },
        { label: 'Processing & Packed', date: 'Nov 19, 2026 - 02:15 PM', completed: true },
        { label: 'In Transit with Courier', date: 'Nov 20, 2026 - 08:45 AM', completed: true },
        { label: 'Out for Delivery', date: 'Estimated Nov 23, 2026', completed: false },
        { label: 'Delivered', date: 'Pending', completed: false }
      ]
    });
  };

  return (
    <div className="bg-[#fcfcfc] min-h-screen pb-16 font-body">
      {/* Header Banner */}
      <div className="bg-[#111111] text-white py-14 px-4 border-b border-gray-800 text-center">
        <h1 className="text-3xl md:text-5xl font-heading font-extrabold uppercase tracking-wide mb-2">
          Track Your Order
        </h1>
        <div className="flex items-center justify-center space-x-2 text-xs text-gray-400 uppercase tracking-wider">
          <Link to="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-[#007bc4] font-semibold">Order Tracking</span>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 mt-12 space-y-8">
        <div className="bg-white p-6 md:p-8 rounded-lg border border-gray-200 shadow-xs">
          <p className="text-xs text-gray-600 mb-6 leading-relaxed">
            To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.
          </p>

          <form onSubmit={handleTrack} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                Order ID *
              </label>
              <input
                type="text"
                required
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="Found in your confirmation email, e.g. BBM-123456"
                className="w-full p-2.5 text-xs border border-gray-300 rounded outline-none focus:border-[#007bc4]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                Billing Email *
              </label>
              <input
                type="email"
                required
                value={billingEmail}
                onChange={(e) => setBillingEmail(e.target.value)}
                placeholder="Email you used during checkout"
                className="w-full p-2.5 text-xs border border-gray-300 rounded outline-none focus:border-[#007bc4]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#007bc4] hover:bg-[#006aa8] text-white font-bold rounded-full uppercase text-xs tracking-wider transition-all shadow-sm active:scale-95 flex items-center justify-center space-x-2"
            >
              <Search size={15} />
              <span>Track Order</span>
            </button>
          </form>
        </div>

        {/* Tracking Timeline Output */}
        {searched && trackingResult && (
          <div className="bg-white p-6 md:p-8 rounded-lg border border-gray-200 shadow-xs space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-4">
              <div>
                <span className="text-[11px] text-gray-400 uppercase tracking-wider block">Tracking Order:</span>
                <h3 className="font-heading font-bold text-lg text-gray-900">{trackingResult.id}</h3>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-gray-400 uppercase tracking-wider block">Estimated Delivery:</span>
                <span className="text-xs font-bold text-emerald-600">{trackingResult.estimatedDelivery}</span>
              </div>
            </div>

            {/* Steps Timeline */}
            <div className="space-y-6 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-200">
              {trackingResult.steps.map((step: any, idx: number) => (
                <div key={idx} className="relative flex items-start space-x-4 pl-1">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-white z-10 ${
                      step.completed ? 'bg-[#007bc4]' : 'bg-gray-300'
                    }`}
                  >
                    {step.completed ? <CheckCircle size={15} /> : <Clock size={15} />}
                  </div>
                  <div className="flex-1">
                    <h4 className={`text-xs font-bold ${step.completed ? 'text-gray-900' : 'text-gray-400'}`}>
                      {step.label}
                    </h4>
                    <p className="text-[11px] text-gray-500 mt-0.5">{step.date}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 bg-gray-50 rounded text-[11px] text-gray-500 flex justify-between">
              <span>Carrier: <strong>{trackingResult.carrier}</strong></span>
              <span>Tracking #: <strong>{trackingResult.trackingNumber}</strong></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
