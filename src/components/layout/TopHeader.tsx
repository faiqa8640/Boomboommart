import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, User as UserIcon, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useAuth } from '../../context/AuthContext';
import { CATEGORIES } from '../../data/mockData';

export const TopHeader: React.FC = () => {
  const navigate = useNavigate();
  const { totalItems, subtotal, openCart } = useCart();
  const { totalWishlistItems } = useWishlist();
  const { user, isAuthenticated, logout, openAuthModal } = useAuth();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim() && selectedCategory === 'all') return;
    
    let searchUrl = `/shop?q=${encodeURIComponent(searchQuery.trim())}`;
    if (selectedCategory !== 'all') {
      searchUrl += `&category=${selectedCategory}`;
    }
    navigate(searchUrl);
  };

  return (
    <div className="bg-white border-b border-gray-100 py-3.5 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center space-x-2.5 flex-shrink-0 group">
          <div className="w-10 h-10 rounded-lg bg-[#007bc4] flex items-center justify-center text-white shadow-md group-hover:bg-[#006aa8] transition-colors">
            <ShoppingBag size={22} className="stroke-[2.2]" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-xl tracking-tight text-[#242424] leading-none">
              Boom Boom <span className="text-[#007bc4]">MART</span>
            </span>
            <span className="text-[9px] uppercase tracking-widest text-[#777777] font-semibold mt-0.5">
              One-Stop Shopping Mart!
            </span>
          </div>
        </Link>

        {/* Search Bar with Category Dropdown */}
        <div className="hidden md:flex flex-1 max-w-2xl mx-4">
          <form
            onSubmit={handleSearch}
            className="w-full flex items-center border-2 border-[#e1e1e1] hover:border-[#007bc4] focus-within:border-[#007bc4] rounded-full overflow-hidden transition-all bg-white"
          >
            {/* Category Select */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-transparent text-xs text-gray-700 font-medium py-2.5 pl-4 pr-2 outline-none border-r border-gray-200 cursor-pointer hidden lg:block"
            >
              <option value="all">Select category</option>
              {CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.slug}>
                  {cat.name}
                </option>
              ))}
            </select>

            {/* Search Input */}
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products"
              className="flex-1 py-2 px-4 text-xs md:text-sm text-gray-800 placeholder-gray-400 outline-none bg-transparent"
            />

            {/* Search Submit Button */}
            <button
              type="submit"
              className="p-2.5 px-5 bg-transparent text-gray-500 hover:text-[#007bc4] transition-colors flex items-center justify-center"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
          </form>
        </div>

        {/* User Account, Wishlist & Cart Actions */}
        <div className="flex items-center space-x-5 lg:space-x-7 flex-shrink-0">
          {/* Account Login / User Info */}
          <div className="hidden sm:flex items-center space-x-2 text-xs font-semibold tracking-wide uppercase">
            {isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-sky-100 text-[#007bc4] flex items-center justify-center font-bold">
                  {user?.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-gray-800 normal-case font-medium max-w-[100px] truncate">
                    {user?.name}
                  </span>
                  <button
                    onClick={logout}
                    className="text-[10px] text-gray-400 hover:text-red-500 flex items-center space-x-1"
                  >
                    <LogOut size={10} />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-1.5 text-gray-700 hover:text-[#007bc4] cursor-pointer">
                <UserIcon size={18} className="text-gray-500" />
                <button
                  type="button"
                  onClick={() => openAuthModal('login')}
                  className="hover:underline"
                >
                  Login
                </button>
                <span className="text-gray-400">/</span>
                <button
                  type="button"
                  onClick={() => openAuthModal('register')}
                  className="hover:underline"
                >
                  Register
                </button>
              </div>
            )}
          </div>

          {/* Wishlist Link with Badge */}
          <Link
            to="/wishlist"
            className="relative p-1.5 text-gray-700 hover:text-[#007bc4] transition-colors"
            title="Wishlist"
          >
            <Heart size={22} className="stroke-[1.8]" />
            <span className="absolute -top-1 -right-1.5 min-w-[18px] h-[18px] px-1 bg-[#007bc4] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              {totalWishlistItems}
            </span>
          </Link>

          {/* Shopping Cart Drawer Trigger with Subtotal */}
          <button
            type="button"
            onClick={openCart}
            className="flex items-center space-x-2.5 p-1 text-gray-700 hover:text-[#007bc4] transition-colors text-left"
            title="Shopping Cart"
          >
            <div className="relative">
              <ShoppingBag size={22} className="stroke-[1.8]" />
              <span className="absolute -top-1 -right-1.5 min-w-[18px] h-[18px] px-1 bg-[#007bc4] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            </div>
            <div className="hidden lg:flex flex-col text-xs leading-tight">
              <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">
                Cart
              </span>
              <span className="font-bold text-[#242424]">
                ${subtotal.toFixed(2)}
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
