export interface ProductVariation {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  inStock: boolean;
  sku: string;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  category: string;
  categorySlug: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  sku: string;
  inStock: boolean;
  isFeatured?: boolean;
  isBestSeller?: boolean;
  isNew?: boolean;
  discountPercent?: number;
  images: string[];
  description: string;
  specifications: Record<string, string>;
  colors?: string[];
  sizes?: string[];
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  iconName: string;
  productCount: number;
  image?: string;
  bannerImage?: string;
  description?: string;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
  unitPrice: number;
}

export interface WishlistItem {
  product: Product;
  addedAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  token?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  date: string;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered';
  items: CartItem[];
  total: number;
  shippingAddress: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
  paymentMethod: string;
}
