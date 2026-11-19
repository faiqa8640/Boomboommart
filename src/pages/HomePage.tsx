import React, { useState } from 'react';
import { PRODUCTS } from '../data/mockData';
import { HeroSection } from '../components/home/HeroSection';
import { HomeCleaningDeals } from '../components/home/HomeCleaningDeals';
import { FeaturedDecor } from '../components/home/FeaturedDecor';
import { DualPromoBanners } from '../components/home/DualPromoBanners';
import { HomeKitchenShowcase } from '../components/home/HomeKitchenShowcase';
import { WelcomeDealBanner } from '../components/home/WelcomeDealBanner';
import { ThreeColumnDeals } from '../components/home/ThreeColumnDeals';
import { QuickViewModal } from '../components/common/QuickViewModal';
import { Product } from '../types';

export const HomePage: React.FC = () => {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  return (
    <div className="bg-white min-h-screen font-body">
      {/* 1. Hero Section with persistent Left Category Sidebar & Main Slider */}
      <HeroSection />

      {/* 2. Home Cleaning Deals (Left Promo Card + 4 Products) */}
      <HomeCleaningDeals
        products={PRODUCTS}
        onQuickView={(p) => setQuickViewProduct(p)}
      />

      {/* 3. Featured Products / Home Decor Grid (4-Column) */}
      <FeaturedDecor
        products={PRODUCTS}
        onQuickView={(p) => setQuickViewProduct(p)}
      />

      {/* 4. Dual Promotional Banners with Live Countdown Timer */}
      <DualPromoBanners />

      {/* 5. Home and Kitchen Items Tabbed Showcase */}
      <HomeKitchenShowcase
        products={PRODUCTS}
        onQuickView={(p) => setQuickViewProduct(p)}
      />

      {/* 6. Full-Width Welcome Deal Banner (Up to 30% Off) */}
      <WelcomeDealBanner />

      {/* 7. Three-Column Deal Grid (Sale Item + Most Popular 2x2 + Stacked Promo Banners) */}
      <ThreeColumnDeals
        products={PRODUCTS}
        onQuickView={(p) => setQuickViewProduct(p)}
      />

      {/* Shared Quick View Modal */}
      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      )}
    </div>
  );
};
