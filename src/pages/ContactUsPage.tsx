import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <div className="bg-white min-h-screen pb-16 font-body">
      {/* Header Banner */}
      <div className="bg-[#111111] text-white py-14 px-4 border-b border-gray-800 text-center">
        <h1 className="text-3xl md:text-5xl font-heading font-extrabold uppercase tracking-wide mb-2">
          Contact Us
        </h1>
        <div className="flex items-center justify-center space-x-2 text-xs text-gray-400 uppercase tracking-wider">
          <Link to="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-[#007bc4] font-semibold">Contact Us</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Info Cards (5 Cols) */}
          <div className="md:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#007bc4] block mb-2">
                Get In Touch
              </span>
              <h2 className="text-2xl font-heading font-bold text-[#242424] mb-3">
                We'd Love To Hear From You
              </h2>
              <p className="text-xs text-gray-500 leading-relaxed">
                Have a question regarding an order, product specifications, or wholesale opportunities? Our dedicated support team is here to help.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3.5 p-4 rounded-lg bg-gray-50 border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-sky-100 text-[#007bc4] flex items-center justify-center flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800">Email Us</h4>
                  <a href="mailto:info@boomboommart.com" className="text-xs text-[#007bc4] hover:underline font-medium">
                    info@boomboommart.com
                  </a>
                  <p className="text-[11px] text-gray-400 mt-0.5">Response within 24 business hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 p-4 rounded-lg bg-gray-50 border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-sky-100 text-[#007bc4] flex items-center justify-center flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800">Call Us</h4>
                  <a href="tel:7868698482" className="text-xs text-[#007bc4] hover:underline font-medium">
                    (786) 869-8482
                  </a>
                  <p className="text-[11px] text-gray-400 mt-0.5">Mon - Sat: 9:00 AM – 6:00 PM EST</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 p-4 rounded-lg bg-gray-50 border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-sky-100 text-[#007bc4] flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800">Visit Us</h4>
                  <p className="text-xs text-gray-700 font-medium">
                    7275 Northway Dr, Hanover Park, IL 60133, USA
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Message Form (7 Cols) */}
          <div className="md:col-span-7 bg-white p-6 md:p-8 rounded-lg border border-gray-200 shadow-xs">
            <h3 className="font-heading font-bold text-lg text-gray-900 mb-4">
              Send Us a Message
            </h3>

            {submitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-lg text-center space-y-2 animate-fadeIn">
                <CheckCircle2 size={32} className="text-emerald-600 mx-auto" />
                <h4 className="font-heading font-bold text-sm text-emerald-900">Message Sent Successfully!</h4>
                <p className="text-xs text-emerald-700">Thank you for reaching out. We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full p-2.5 text-xs border border-gray-300 rounded outline-none focus:border-[#007bc4]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full p-2.5 text-xs border border-gray-300 rounded outline-none focus:border-[#007bc4]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Question about an order or product"
                    className="w-full p-2.5 text-xs border border-gray-300 rounded outline-none focus:border-[#007bc4]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Your Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we assist you today?"
                    className="w-full p-2.5 text-xs border border-gray-300 rounded outline-none focus:border-[#007bc4]"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary uppercase text-xs tracking-wider px-8 py-3 flex items-center space-x-2"
                >
                  <Send size={14} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
