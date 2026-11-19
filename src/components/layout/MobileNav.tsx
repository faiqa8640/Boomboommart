import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Heart, Store, User, Search, ChevronRight } from 'lucide-react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useAuth } from '../../context/AuthContext';
import { CATEGORIES } from '../../data/mockData';

export const MobileNav: React.FC = () => {
  const navigate = useNavigate();
  const { totalItems, openCart } = useCart();
  const { totalWishlistItems } = useWishlist();
  const { isAuthenticated, openAuthModal } = useAuth();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'menu' | 'categories'>('menu');
  const [mobileSearch, setMobileSearch] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mobileSearch.trim()) return;
    navigate(`/shop?q=${encodeURIComponent(mobileSearch.trim())}`);
    setIsMobileMenuOpen(false);
    setMobileSearch('');
  };

  return (
    <>
      {/* Mobile Top Header (Visible on small screens) */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 sticky top-0 z-40">
        {/* Menu Hamburger */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(true)}
          className="p-1.5 text-gray-700 hover:text-[#007bc4] rounded-md transition-colors"
          aria-label="Open mobile menu"
        >
          <Menu size={22} />
        </button>

        {/* Center Logo */}
        <Link to="/" className="flex items-center space-x-1.5">
          <div className="w-7 h-7 rounded bg-[#007bc4] flex items-center justify-center text-white">
            <ShoppingBag size={16} />
          </div>
          <span className="font-heading font-extrabold text-base tracking-tight text-[#242424]">
            Boom Boom <span className="text-[#007bc4]">MART</span>
          </span>
        </Link>

        {/* Cart Icon Trigger */}
        <button
          type="button"
          onClick={openCart}
          className="relative p-1.5 text-gray-700 hover:text-[#007bc4]"
          aria-label="Shopping Cart"
        >
          <ShoppingBag size={22} />
          <span className="absolute -top-1 -right-1 min-w-[16px] h-[16px] px-0.5 bg-[#007bc4] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
            {totalItems}
          </span>
        </button>
      </div>

      {/* Slide-out Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative w-4/5 max-w-sm bg-white h-full shadow-2xl z-10 flex flex-col animate-slideRight">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-[#90e0ef]/30">
              <span className="font-heading font-bold text-sm uppercase tracking-wider text-[#242424]">
                Navigation
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1.5 text-gray-500 hover:text-gray-900 rounded-full"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Mobile Search Input */}
            <div className="p-3 bg-gray-50 border-b border-gray-100">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={mobileSearch}
                  onChange={(e) => setMobileSearch(e.target.value)}
                  className="w-full pl-3 pr-9 py-2 text-xs border border-gray-300 rounded-full outline-none focus:border-[#007bc4]"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#007bc4]"
                >
                  <Search size={15} />
                </button>
              </form>
            </div>

            {/* Tabs: MENU vs CATEGORIES */}
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab('menu')}
                className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider text-center transition-colors ${
                  activeTab === 'menu'
                    ? 'text-[#007bc4] border-b-2 border-[#007bc4]'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                Menu
              </button>
              <button
                onClick={() => setActiveTab('categories')}
                className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider text-center transition-colors ${
                  activeTab === 'categories'
                    ? 'text-[#007bc4] border-b-2 border-[#007bc4]'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                Categories
              </button>
            </div>

            {/* Tab Contents */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1">
              {activeTab === 'menu' ? (
                <div className="space-y-1">
                  <Link
                    to="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2.5 px-3 text-xs font-semibold text-gray-800 hover:bg-sky-50 hover:text-[#007bc4] rounded uppercase"
                  >
                    Home
                  </Link>
                  <Link
                    to="/shop"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2.5 px-3 text-xs font-semibold text-gray-800 hover:bg-sky-50 hover:text-[#007bc4] rounded uppercase"
                  >
                    Shop
                  </Link>
                  <Link
                    to="/about-us"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2.5 px-3 text-xs font-semibold text-gray-800 hover:bg-sky-50 hover:text-[#007bc4] rounded uppercase"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/contact-us"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2.5 px-3 text-xs font-semibold text-gray-800 hover:bg-sky-50 hover:text-[#007bc4] rounded uppercase"
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="/track-order"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2.5 px-3 text-xs font-semibold text-gray-800 hover:bg-sky-50 hover:text-[#007bc4] rounded uppercase"
                  >
                    Track Order
                  </Link>
                  <Link
                    to="/wishlist"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2.5 px-3 text-xs font-semibold text-gray-800 hover:bg-sky-50 hover:text-[#007bc4] rounded uppercase"
                  >
                    Wishlist ({totalWishlistItems})
                  </Link>
                </div>
              ) : (
                <div className="space-y-1">
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/category/${cat.slug}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between py-2.5 px-3 text-xs font-medium text-gray-700 hover:bg-sky-50 hover:text-[#007bc4] rounded border-b border-gray-50"
                    >
                      <span>{cat.name}</span>
                      <ChevronRight size={14} className="text-gray-400" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Drawer Footer Account CTA */}
            <div className="p-4 border-t border-gray-100 bg-gray-50">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openAuthModal();
                }}
                className="w-full py-2.5 bg-[#007bc4] text-white rounded-full text-xs font-semibold uppercase tracking-wider text-center"
              >
                {isAuthenticated ? 'My Account' : 'Login / Register'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sticky Bottom Navigation Bar (Mobile Viewport) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 px-3 py-2 flex items-center justify-around shadow-lg">
        {/* 1. Shop */}
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            `flex flex-col items-center text-[10px] font-medium transition-colors ${
              isActive ? 'text-[#007bc4]' : 'text-gray-500'
            }`
          }
        >
          <Store size={20} />
          <span className="mt-0.5">Shop</span>
        </NavLink>

        {/* 2. Wishlist */}
        <NavLink
          to="/wishlist"
          className={({ isActive }) =>
            `flex flex-col items-center text-[10px] font-medium relative transition-colors ${
              isActive ? 'text-[#007bc4]' : 'text-gray-500'
            }`
          }
        >
          <Heart size={20} />
          {totalWishlistItems > 0 && (
            <span className="absolute -top-1 right-1.5 w-4 h-4 bg-[#007bc4] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
              {totalWishlistItems}
            </span>
          )}
          <span className="mt-0.5">Wishlist</span>
        </NavLink>

        {/* 3. Cart */}
        <button
          type="button"
          onClick={openCart}
          className="flex flex-col items-center text-[10px] font-medium relative text-gray-500 hover:text-[#007bc4]"
        >
          <ShoppingBag size={20} />
          {totalItems > 0 && (
            <span className="absolute -top-1 right-0.5 w-4 h-4 bg-[#007bc4] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
          <span className="mt-0.5">Cart</span>
        </button>

        {/* 4. My Account */}
        <button
          type="button"
          onClick={() => openAuthModal()}
          className="flex flex-col items-center text-[10px] font-medium text-gray-500 hover:text-[#007bc4]"
        >
          <User size={20} />
          <span className="mt-0.5">{isAuthenticated ? 'Account' : 'Login'}</span>
        </button>
      </div>
    </>
  );
};
