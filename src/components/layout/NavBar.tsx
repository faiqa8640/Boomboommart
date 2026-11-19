import React, { useState, useRef, useEffect } from 'react';
import { Menu, ChevronDown, Facebook, Twitter, Instagram, Youtube, Sparkles } from 'lucide-react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { CATEGORIES } from '../../data/mockData';

interface NavBarProps {
  isHome?: boolean;
}

export const NavBar: React.FC<NavBarProps> = ({ isHome = false }) => {
  const location = useLocation();
  const isHomePage = isHome || location.pathname === '/';

  // On home page, categories are embedded in the hero, but we also support dropdown everywhere
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCategoryOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setIsCategoryOpen(false);
  }, [location.pathname]);

  return (
    <nav className="bg-[#90e0ef] text-[#242424] font-nav relative z-30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between">
        {/* Left: Browse Categories Button */}
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            className="flex items-center space-x-3 bg-[#007bc4] hover:bg-[#006aa8] text-white px-5 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors min-w-[260px] justify-between"
          >
            <div className="flex items-center space-x-2.5">
              <Menu size={18} />
              <span>Browse Categories</span>
            </div>
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${isCategoryOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {/* Categories Dropdown Menu */}
          {isCategoryOpen && (
            <div className="absolute top-full left-0 w-[260px] bg-white border border-gray-200 shadow-dropdown rounded-b-md py-1.5 z-50 animate-fadeIn">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/category/${cat.slug}`}
                  onClick={() => setIsCategoryOpen(false)}
                  className="flex items-center justify-between px-4 py-2.5 text-xs text-gray-700 hover:text-[#007bc4] hover:bg-sky-50 transition-colors border-b border-gray-50 last:border-b-0 font-medium"
                >
                  <span>{cat.name}</span>
                  <span className="text-[10px] text-gray-400 bg-gray-100 rounded-full px-1.5 py-0.5">
                    {cat.productCount}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Center: Main Navigation Menu */}
        <div className="hidden md:flex items-center space-x-8 text-xs font-bold uppercase tracking-wider text-gray-800">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `py-3.5 transition-colors hover:text-[#007bc4] relative ${
                isActive ? 'text-[#007bc4]' : ''
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `py-3.5 transition-colors hover:text-[#007bc4] relative ${
                isActive ? 'text-[#007bc4]' : ''
              }`
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              `py-3.5 transition-colors hover:text-[#007bc4] relative ${
                isActive ? 'text-[#007bc4]' : ''
              }`
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              `py-3.5 transition-colors hover:text-[#007bc4] relative ${
                isActive ? 'text-[#007bc4]' : ''
              }`
            }
          >
            Contact Us
          </NavLink>

          <NavLink
            to="/track-order"
            className={({ isActive }) =>
              `py-3.5 transition-colors hover:text-[#007bc4] relative flex items-center space-x-1 ${
                isActive ? 'text-[#007bc4]' : ''
              }`
            }
          >
            <span>Track Order</span>
          </NavLink>
        </div>

        {/* Right: Social Media Icons */}
        <div className="hidden lg:flex items-center space-x-4 text-gray-700">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#007bc4] transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={16} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#007bc4] transition-colors"
            aria-label="Twitter / X"
          >
            <Twitter size={16} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#007bc4] transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={16} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#007bc4] transition-colors"
            aria-label="YouTube"
          >
            <Youtube size={16} />
          </a>
        </div>
      </div>
    </nav>
  );
};
