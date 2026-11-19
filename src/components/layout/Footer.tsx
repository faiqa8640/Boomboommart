import React from 'react';
import { Mail, Phone, MapPin, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#007bc4] text-white pt-12 pb-6 mt-16 font-body">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Main 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/20">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 text-white">
              <div className="w-9 h-9 rounded bg-white text-[#007bc4] flex items-center justify-center font-bold">
                <ShoppingBag size={20} />
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                Boom Boom <span className="text-white/90">MART</span>
              </span>
            </Link>
            <p className="text-xs text-white/80 leading-relaxed max-w-sm">
              Our goal is to continually set new standards for excellence and luxury, the core values driving our company to unparalleled success and ensuring utmost customer satisfaction.
            </p>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-white">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li>
                <Link to="/" className="hover:text-white hover:underline transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-white hover:underline transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-white hover:underline transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/track-order" className="hover:text-white hover:underline transition-colors">
                  Order Tracking
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-white">
              Useful Links
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li>
                <Link to="/shop" className="hover:text-white hover:underline transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-white hover:underline transition-colors">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/checkout" className="hover:text-white hover:underline transition-colors">
                  Checkout
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="hover:text-white hover:underline transition-colors">
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-white">
              Contact Info
            </h4>
            <ul className="space-y-3 text-xs text-white/80">
              <li className="flex items-center space-x-2.5">
                <Mail size={16} className="text-white flex-shrink-0" />
                <a href="mailto:info@boomboommart.com" className="hover:underline">
                  info@boomboommart.com
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone size={16} className="text-white flex-shrink-0" />
                <a href="tel:7868698482" className="hover:underline">
                  (786) 869-8482
                </a>
              </li>
              <li className="flex items-start space-x-2.5">
                <MapPin size={16} className="text-white flex-shrink-0 mt-0.5" />
                <span>7275 Northway Dr, Hanover Park, IL 60133, USA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/70 gap-3">
          <p>Boom Boom Mart © 2026. All Rights Reserved.</p>
          <div className="flex items-center space-x-4 text-xs">
            <span>Secure Payments</span>
            <div className="flex items-center space-x-2 text-[10px] bg-white/10 px-2 py-1 rounded">
              <span>VISA</span>
              <span>•</span>
              <span>MC</span>
              <span>•</span>
              <span>AMEX</span>
              <span>•</span>
              <span>DISC</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
