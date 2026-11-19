import React from 'react';

interface BadgeProps {
  type: 'sale' | 'hot' | 'new' | 'featured' | 'outOfStock';
  text?: string;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ type, text, className = '' }) => {
  const getBadgeStyle = () => {
    switch (type) {
      case 'sale':
        return 'bg-[#007bc4] text-white';
      case 'hot':
        return 'bg-red-500 text-white';
      case 'new':
        return 'bg-emerald-600 text-white';
      case 'featured':
        return 'bg-amber-500 text-white';
      case 'outOfStock':
        return 'bg-gray-700 text-white';
      default:
        return 'bg-[#007bc4] text-white';
    }
  };

  const getDefaultText = () => {
    switch (type) {
      case 'sale':
        return 'SALE';
      case 'hot':
        return 'HOT';
      case 'new':
        return 'NEW';
      case 'featured':
        return 'FEATURED';
      case 'outOfStock':
        return 'OUT OF STOCK';
    }
  };

  return (
    <span
      className={`inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-sm ${getBadgeStyle()} ${className}`}
    >
      {text || getDefaultText()}
    </span>
  );
};
