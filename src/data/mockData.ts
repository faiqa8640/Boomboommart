import { Product, Category } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'cat-1',
    name: 'Best Selling',
    slug: 'best-selling',
    iconName: 'Flame',
    productCount: 48,
    description: 'Explore top rated and most popular customer favorites across all departments.'
  },
  {
    id: 'cat-2',
    name: 'Home Decor',
    slug: 'home-decor',
    iconName: 'Home',
    productCount: 35,
    description: 'Elevate your living space with aesthetic ornaments, sculptures, and accents.'
  },
  {
    id: 'cat-3',
    name: 'Lighting & Fixtures',
    slug: 'lighting-fixtures',
    iconName: 'Lamp',
    productCount: 22,
    description: 'Modern ambient lighting, bedside lamps, LED fixtures, and decorative lights.'
  },
  {
    id: 'cat-4',
    name: 'Bedroom Decorations',
    slug: 'bedroom-decorations',
    iconName: 'Bed',
    productCount: 19,
    description: 'Transform your bedroom into a cozy sanctuary with plush decor and accents.'
  },
  {
    id: 'cat-5',
    name: 'Wall Art & Accessories',
    slug: 'wall-art-accessories',
    iconName: 'Palette',
    productCount: 27,
    description: 'Canvas prints, 3D wall hangings, mirrors, and modern artistic accents.'
  },
  {
    id: 'cat-6',
    name: 'Cleaning Supplies',
    slug: 'cleaning-supplies',
    iconName: 'Sparkles',
    productCount: 31,
    description: 'High-performance cleaning tools, sponges, brushes, and squeegees.'
  },
  {
    id: 'cat-7',
    name: 'Tissues',
    slug: 'tissues',
    iconName: 'Box',
    productCount: 14,
    description: 'Luxury multi-ply facial tissues, napkins, and decorative tissue dispensers.'
  },
  {
    id: 'cat-8',
    name: 'Kitchenware',
    slug: 'kitchenware',
    iconName: 'UtensilsCrossed',
    productCount: 42,
    description: 'Premium cookware, pans, spatulas, knives, and kitchen utensil sets.'
  },
  {
    id: 'cat-9',
    name: 'Bathroom Essentials',
    slug: 'bathroom-essentials',
    iconName: 'Bath',
    productCount: 26,
    description: 'Organizers, floor brushes, non-slip mats, dispensers, and shower tools.'
  },
  {
    id: 'cat-10',
    name: 'Storage & Organization',
    slug: 'storage-organization',
    iconName: 'Package',
    productCount: 38,
    description: 'Multi-tiered racks, wardrobe organizers, pantry bins, and storage boxes.'
  }
];

export const PRODUCTS: Product[] = [
  // 1. Kitchenware - Nonstick Pancake Frying Pan (Reference hero product)
  {
    id: 'prod-1',
    title: '19-25cm Nonstick Pancake Frying Pan Durable Saucepan Kitchen Omelette',
    slug: '19-25cm-nonstick-pancake-frying-pan-durable-saucepan-kitchen-omelette',
    category: 'Kitchenware',
    categorySlug: 'kitchenware',
    price: 13.72,
    originalPrice: 19.60,
    discountPercent: 30,
    rating: 4.8,
    reviewCount: 8,
    sku: '3256806692067726',
    inStock: true,
    isFeatured: true,
    isBestSeller: true,
    images: [
      'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1584990347449-3990fb8c7145?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80'
    ],
    sizes: ['19cm', '21cm', '23cm', '25cm'],
    colors: ['Granite Grey', 'Matte Black'],
    description: 'Engineered with multi-layer high-durability nonstick coating, this skillet delivers even thermal distribution for effortless pancake flipping, omelettes, and steaks. The heat-resistant ergonomic wooden handle provides comfortable grip and stay-cool safety.',
    specifications: {
      'Material': 'Aluminum Alloy + Granite Coating',
      'Handle': 'Solid Beechwood with Thermal Insulation',
      'Stove Compatibility': 'Gas, Induction, Electric, Ceramic',
      'Coating': 'PFOA-Free Ultra Non-Stick',
      'Dishwasher Safe': 'Yes (Hand wash recommended)'
    },
    tags: ['Cookware', 'Nonstick', 'Skillet', 'Kitchen Essentials']
  },

  // 2. Kitchenware - 12pcs Silicone Wooden Handle Set
  {
    id: 'prod-2',
    title: '12pcs Set of Multi-color Silicone Wooden Handle Kitchenware Set Non Stick Pot',
    slug: '12pcs-set-multi-color-silicone-wooden-handle-kitchenware',
    category: 'Kitchenware',
    categorySlug: 'kitchenware',
    price: 24.50,
    originalPrice: 35.00,
    discountPercent: 30,
    rating: 4.9,
    reviewCount: 16,
    sku: '3256805128394012',
    inStock: true,
    isFeatured: true,
    isBestSeller: true,
    images: [
      'https://images.unsplash.com/photo-1593618998160-e34014e67546?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=800&auto=format&fit=crop&q=80'
    ],
    colors: ['Nordic Green', 'Warm Pink', 'Slate Grey', 'Classic Black'],
    description: 'Complete 12-piece culinary utensil set made of food-grade heat-resistant silicone (up to 446°F / 230°C) paired with polished natural acacia wood handles. Includes soup ladle, slotted turner, whisk, tongs, brush, and matching countertop storage canister.',
    specifications: {
      'Set Count': '12 Pieces with Container',
      'Head Material': 'BPA-Free Food-grade Silicone',
      'Handle Material': 'Natural Acacia Wood',
      'Heat Resistance': 'Up to 230°C (446°F)'
    },
    tags: ['Utensils', 'Silicone', 'Cooking Set', 'Kitchenware']
  },

  // 3. Home Cleaning Deals - Melamine Sponge Magic Eraser
  {
    id: 'prod-3',
    title: 'Melamine Sponge Magic Sponge Eraser Cleaner Cleaning Multi-pack',
    slug: 'melamine-sponge-magic-sponge-eraser-cleaner',
    category: 'Cleaning Supplies',
    categorySlug: 'cleaning-supplies',
    price: 4.99,
    originalPrice: 8.50,
    discountPercent: 41,
    rating: 4.7,
    reviewCount: 42,
    sku: '3256801994827110',
    inStock: true,
    isFeatured: true,
    isNew: true,
    images: [
      'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&auto=format&fit=crop&q=80'
    ],
    sizes: ['10 Pcs Pack', '20 Pcs Pack', '50 Pcs Mega Pack'],
    description: 'High-density micro-abrasive foam effortlessly removes scuffs, grease, soap scum, and stubborn stains using only water. Safe on walls, baseboards, ceramic tiles, sneakers, and glass with zero chemical residue.',
    specifications: {
      'Density': 'Standard 16kg/m³ High Compression',
      'Size Per Piece': '10cm x 6cm x 2cm',
      'Eco-Friendly': 'Non-toxic, Chemical-free'
    },
    tags: ['Cleaning', 'Magic Eraser', 'Eco-friendly', 'Home Deals']
  },

  // 4. Home Decor - 3D Hummingbird Crystal Ball
  {
    id: 'prod-4',
    title: '1 Pc 3D Hummingbird Crystal Ball Creative Laser Engraving Night Light',
    slug: '1-pc-3d-hummingbird-crystal-ball-creative-laser-engraving',
    category: 'Home Decor',
    categorySlug: 'home-decor',
    price: 18.20,
    originalPrice: 26.00,
    discountPercent: 30,
    rating: 5.0,
    reviewCount: 12,
    sku: '3256807819230491',
    inStock: true,
    isFeatured: true,
    isBestSeller: true,
    images: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80'
    ],
    sizes: ['60mm Sphere', '80mm Sphere'],
    colors: ['Warm Yellow LED Base', 'Color Changing RGB Base'],
    description: 'Intricately etched inside premium K9 crystal utilizing 3D laser engraving technology. Comes with a solid natural wood USB-powered LED pedestal that casts enchanting celestial patterns onto your ceiling and walls.',
    specifications: {
      'Crystal Grade': 'Optically Pure K9 Glass',
      'Base Material': 'Solid Beechwood with USB Cable',
      'Light Source': 'Warm Ambient LED 3W'
    },
    tags: ['Crystal Ball', 'Night Light', 'Home Decor', 'Gifts']
  },

  // 5. Lighting & Fixtures - Minimalist Modern Bedside Lamp
  {
    id: 'prod-5',
    title: 'Nordic Touch-Dimming Cordless Ambient Table Lamp for Bedroom & Living Room',
    slug: 'nordic-touch-dimming-cordless-ambient-table-lamp',
    category: 'Lighting & Fixtures',
    categorySlug: 'lighting-fixtures',
    price: 29.99,
    originalPrice: 45.00,
    discountPercent: 33,
    rating: 4.8,
    reviewCount: 19,
    sku: '3256804499120334',
    inStock: true,
    isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?w=800&auto=format&fit=crop&q=80'
    ],
    colors: ['Brushed Brass', 'Matte Black', 'Frosted Silver'],
    description: 'Sleek aluminum silhouette equipped with 3-level touch-sensitive brightness control (warm white, neutral, daylight). Built-in 4000mAh rechargeable lithium battery provides up to 18 hours of continuous illumination.',
    specifications: {
      'Battery Capacity': '4000mAh Lithium Ion (USB-C Fast Charging)',
      'Run Time': '8 to 18 Hours',
      'Dimming Levels': '3-Stage Stepless Touch Dimmer',
      'Color Temp': '3000K - 6000K Adjustable'
    },
    tags: ['Lighting', 'Cordless Lamp', 'Modern Living', 'Bedside']
  },

  // 6. Bathroom Essentials - 2-in-1 Floor Scrub Brush with Squeegee
  {
    id: 'prod-6',
    title: '2-in-1 Long Handle Tile Floor Scrub Brush with Stiff Bristles & Silicone Squeegee',
    slug: '2-in-1-floor-scrub-brush-stiff-bristles-squeegee',
    category: 'Bathroom Essentials',
    categorySlug: 'bathroom-essentials',
    price: 11.45,
    originalPrice: 16.50,
    discountPercent: 30,
    rating: 4.6,
    reviewCount: 14,
    sku: '3256809012349182',
    inStock: true,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=800&auto=format&fit=crop&q=80'
    ],
    colors: ['Nordic White/Grey', 'Emerald Green'],
    description: 'Heavy duty 120-degree rotating triangular brush head reaches deep into corner grout lines and tile crevices. Turn it around to instantly wipe away excess wastewater with the integrated soft rubber squeegee blade.',
    specifications: {
      'Handle Length': 'Adjustable 44 to 53 inches Stainless Steel',
      'Brush Material': 'Stiff V-Shape PP Bristles',
      'Squeegee Blade': 'Flexible High-Grade TPR Rubber'
    },
    tags: ['Bathroom', 'Floor Brush', 'Cleaning', 'Home Essentials']
  },

  // 7. Kitchenware - 1PC Stainless Steel Cooking Spatula Shovel Colander
  {
    id: 'prod-7',
    title: '1PC Kitchen Stainless Steel Cooking Spatula Shovel Colander Kitchenware Pots Set',
    slug: '1pc-kitchen-stainless-steel-cooking-spatula-colander',
    category: 'Kitchenware',
    categorySlug: 'kitchenware',
    price: 8.90,
    originalPrice: 12.00,
    discountPercent: 25,
    rating: 4.7,
    reviewCount: 11,
    sku: '3256802209184712',
    inStock: true,
    isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80'
    ],
    sizes: ['Wok Spatula', 'Soup Ladle', 'Slotted Shovel', 'Skimmer Colander'],
    description: 'Forged from food-grade 304 stainless steel with a mirror-polished finish and a hollow heat-resistant handle for comfortable balanced frying and deep cooking.',
    specifications: {
      'Grade': 'SUS 304 Food-Safe Stainless Steel',
      'Handle': 'Hollow Thermal-Break Ergonomic Handle',
      'Length': '38 cm'
    },
    tags: ['Kitchen Utensils', 'Stainless Steel', 'Wok Spatula']
  },

  // 8. Storage & Organization - Multi-tier Rotating Spice Rack & Pantry Organizer
  {
    id: 'prod-8',
    title: '360 Rotating Multi-Tier Kitchen Lazy Susan Spice Rack & Cosmetic Organizer',
    slug: '360-rotating-multi-tier-kitchen-lazy-susan-spice-rack',
    category: 'Storage & Organization',
    categorySlug: 'storage-organization',
    price: 16.99,
    originalPrice: 24.99,
    discountPercent: 32,
    rating: 4.9,
    reviewCount: 23,
    sku: '3256803399120098',
    inStock: true,
    isFeatured: true,
    isBestSeller: true,
    images: [
      'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1593618998160-e34014e67546?w=800&auto=format&fit=crop&q=80'
    ],
    sizes: ['Single Tier (23cm)', 'Double Tier (27cm)'],
    colors: ['Clear Acrylic with Gold Trim', 'Translucent Smoke Grey'],
    description: 'Smooth stainless steel ball bearing turntable provides seamless 360-degree rotation. Raised edges prevent bottles, jars, and condiments from toppling during quick access.',
    specifications: {
      'Material': 'BPA-Free Heavy Duty PET Plastic',
      'Bearing': 'Smooth Stainless Steel Ball Bearings',
      'Max Load': '10 kg evenly distributed'
    },
    tags: ['Storage', 'Organization', 'Pantry', 'Lazy Susan']
  },

  // 9. Wall Art & Accessories - Abstract Canvas Oil Painting
  {
    id: 'prod-9',
    title: 'Textured Modern Abstract Minimalist Canvas Wall Art with Black Floating Frame',
    slug: 'textured-modern-abstract-canvas-wall-art',
    category: 'Wall Art & Accessories',
    categorySlug: 'wall-art-accessories',
    price: 42.00,
    originalPrice: 65.00,
    discountPercent: 35,
    rating: 4.9,
    reviewCount: 9,
    sku: '3256808819203490',
    inStock: true,
    isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80'
    ],
    sizes: ['40x60cm', '50x70cm', '60x90cm'],
    description: 'Hand-embellished 3D plaster relief texture on high-thread canvas mounted inside a premium moisture-resistant aluminum floating frame. Comes pre-installed with heavy-duty hanging hardware.',
    specifications: {
      'Canvas': '380g Waterproof Polyester Canvas',
      'Frame': 'Aluminum Alloy Brushed Floating Frame',
      'Ready to Hang': 'Yes'
    },
    tags: ['Wall Art', 'Canvas', 'Abstract', 'Living Room']
  },

  // 10. Bedroom Decorations - Luxury Soft Microfiber Pillowcases Set
  {
    id: 'prod-10',
    title: 'Luxury 1800 Thread Count Ultra-Soft Cooling Microfiber Bedding Pillowcase Pair',
    slug: 'luxury-1800-thread-count-ultra-soft-cooling-pillowcase-pair',
    category: 'Bedroom Decorations',
    categorySlug: 'bedroom-decorations',
    price: 9.99,
    originalPrice: 15.00,
    discountPercent: 33,
    rating: 4.8,
    reviewCount: 34,
    sku: '3256801129482710',
    inStock: true,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop&q=80'
    ],
    colors: ['Snow White', 'Midnight Blue', 'Sage Green', 'Champagne Gold'],
    sizes: ['Standard (20x26 in)', 'King (20x36 in)'],
    description: 'Silky smooth double-brushed microfiber offers breathable hypoallergenic sleep comfort all year round. Envelope closure keeps pillows securely tucked in place without zipper snags.',
    specifications: {
      'Weave': '1800 Thread Count Hydro-Brushed Microfiber',
      'Closure': 'Envelope Flap',
      'Care': 'Machine Wash Cold, Tumble Dry Low'
    },
    tags: ['Bedding', 'Pillows', 'Bedroom', 'Luxury']
  },

  // 11. Tissues - Premium Wooden Top Tissue Dispenser Box
  {
    id: 'prod-11',
    title: 'Nordic Aesthetic Rectangular Tissue Box Holder with Natural Bamboo Lid',
    slug: 'nordic-aesthetic-rectangular-tissue-box-holder',
    category: 'Tissues',
    categorySlug: 'tissues',
    price: 7.99,
    originalPrice: 11.99,
    discountPercent: 33,
    rating: 4.7,
    reviewCount: 15,
    sku: '3256804918237721',
    inStock: true,
    isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80'
    ],
    colors: ['Minimalist White', 'Frosted Smoke', 'Forest Green'],
    description: 'Clean Scandinavian lines crafted with durable matte PP resin and topped with sustainably harvested polished bamboo. Wide rounded opening ensures smooth tear-free tissue retrieval.',
    specifications: {
      'Lid': '100% Solid Natural Bamboo',
      'Body': 'Thick Shock-Proof Polypropylene',
      'Dimensions': '21cm x 13cm x 10cm'
    },
    tags: ['Tissues', 'Organizer', 'Nordic Decor', 'Desk Accessories']
  },

  // 12. Kitchenware - Plastic Handheld Potato & Fruit Slicer
  {
    id: 'prod-12',
    title: '1PC Plastic Kitchen Handheld Potato Slicer Tomato Cutter Tool Lemon Cutting',
    slug: '1pc-plastic-kitchen-handheld-potato-slicer-tomato-cutter',
    category: 'Kitchenware',
    categorySlug: 'kitchenware',
    price: 3.49,
    originalPrice: 6.99,
    discountPercent: 50,
    rating: 4.5,
    reviewCount: 28,
    sku: '3256809988112345',
    inStock: true,
    isFeatured: true,
    isBestSeller: true,
    images: [
      'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=800&auto=format&fit=crop&q=80'
    ],
    colors: ['Vibrant Green', 'Bright Orange'],
    description: 'Tong-style grip clamp with parallel precision guide slots allows uniform, paper-thin slicing of lemons, limes, tomatoes, and potatoes while keeping fingers safely away from the knife blade.',
    specifications: {
      'Material': 'BPA-Free Food Grade ABS Plastic',
      'Grip': 'Spring-assisted Ergonomic Clamp',
      'Slots': '8 Uniform Slicing Channels'
    },
    tags: ['Kitchen Gadgets', 'Slicer', 'Safety Cutter']
  },

  // 13. Home Decor - Boho Macrame Wall Hanging
  {
    id: 'prod-13',
    title: 'Handwoven Boho Macrame Wall Hanging Tapestry with Wooden Dowel & Fringe',
    slug: 'handwoven-boho-macrame-wall-hanging-tapestry',
    category: 'Wall Art & Accessories',
    categorySlug: 'wall-art-accessories',
    price: 22.99,
    originalPrice: 34.00,
    discountPercent: 32,
    rating: 4.8,
    reviewCount: 31,
    sku: '3256801123098765',
    inStock: true,
    isFeatured: true,
    isNew: true,
    images: [
      'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=800&auto=format&fit=crop&q=80'
    ],
    sizes: ['40x60cm', '60x80cm', '80x100cm'],
    colors: ['Natural Beige', 'Dusty Rose', 'Sage White'],
    description: 'Artisan hand-knotted from 100% natural cotton rope on a solid pine dowel with jute twine hanger. Each piece features alternating spiral, square, and lark\'s head knot patterns with a layered fringe finish.',
    specifications: {
      'Material': '100% Natural Cotton Macrame Cord',
      'Rod': 'Kiln-Dried Solid Pine Dowel',
      'Hanger': 'Braided Jute Rope Loop'
    },
    tags: ['Macrame', 'Boho', 'Wall Art', 'Handmade']
  },

  // 14. Storage & Organization - Stackable Drawer Organizer Set
  {
    id: 'prod-14',
    title: '6-Piece Clear Acrylic Stackable Drawer Organizer Set for Makeup, Jewelry & Office',
    slug: '6-piece-clear-acrylic-stackable-drawer-organizer-set',
    category: 'Storage & Organization',
    categorySlug: 'storage-organization',
    price: 19.99,
    originalPrice: 29.99,
    discountPercent: 33,
    rating: 4.9,
    reviewCount: 44,
    sku: '3256807711220348',
    inStock: true,
    isFeatured: false,
    isBestSeller: true,
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=800&auto=format&fit=crop&q=80'
    ],
    sizes: ['4-Piece Set', '6-Piece Set', '9-Piece Mega Set'],
    description: 'Crystal-clear 4mm thick premium acrylic with polished beveled edges. Modular slot design allows mixing small, medium, and large compartments. Fully stackable up to 3 layers high with interlocking corners.',
    specifications: {
      'Material': '4mm Ultra-Clear Acrylic (Non-Yellowing)',
      'Stackable': 'Yes, up to 3 layers',
      'Set Includes': '2 Large + 2 Medium + 2 Small Trays'
    },
    tags: ['Organizer', 'Acrylic', 'Makeup Storage', 'Drawer']
  },

  // 15. Bedroom Decorations - Blackout Curtain Panel Pair
  {
    id: 'prod-15',
    title: '2-Panel Thermal Blackout Curtains with Grommet Top for Bedroom Privacy',
    slug: '2-panel-thermal-blackout-curtains-grommet-top',
    category: 'Bedroom Decorations',
    categorySlug: 'bedroom-decorations',
    price: 32.50,
    originalPrice: 50.00,
    discountPercent: 35,
    rating: 4.7,
    reviewCount: 56,
    sku: '3256801908883210',
    inStock: true,
    isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&auto=format&fit=crop&q=80'
    ],
    sizes: ['52x63 inch', '52x84 inch', '52x96 inch'],
    colors: ['Navy Blue', 'Charcoal Grey', 'Blush Pink', 'Forest Green', 'Ivory White'],
    description: '100% triple-weave polyester fabric blocks 99% of sunlight and reduces outside noise by 40%. 8 reinforced silver grommets (inner diameter 1.6") glide smoothly on any standard or decorative rod up to 1.5" diameter.',
    specifications: {
      'Fabric': 'Triple-Weave 100% Polyester',
      'Blackout Level': '99% Light Blocking',
      'Grommet': '8 Silver Grommets per Panel, 1.6" ID',
      'Care': 'Machine Wash Cold, Tumble Dry Low'
    },
    tags: ['Curtains', 'Blackout', 'Bedroom', 'Window Treatment']
  },

  // 16. Cleaning Supplies - Spin Mop with Foot Pedal Bucket
  {
    id: 'prod-16',
    title: 'Self-Wringing Spin Mop and Bucket System with Foot Pedal & 2 Microfiber Heads',
    slug: 'self-wringing-spin-mop-bucket-system-foot-pedal',
    category: 'Cleaning Supplies',
    categorySlug: 'cleaning-supplies',
    price: 36.99,
    originalPrice: 54.99,
    discountPercent: 33,
    rating: 4.8,
    reviewCount: 72,
    sku: '3256803498112056',
    inStock: true,
    isFeatured: false,
    isNew: true,
    images: [
      'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&auto=format&fit=crop&q=80'
    ],
    colors: ['Aqua Blue', 'Orange'],
    description: 'No-touch foot-pedal spin basket keeps hands clean and dry during mopping. 360-degree rotating triangular microfiber head reaches deep under furniture and into tight corners. Collapsible handle telescopes from 35" to 51".',
    specifications: {
      'Bucket Capacity': '5-Litre Heavy Duty Plastic',
      'Mop Head': '360° Rotating Microfiber (500g)',
      'Handle': 'Extendable 35-51 inch Stainless Steel',
      'Replacement Heads': '2 Included'
    },
    tags: ['Mop', 'Spin Mop', 'Floor Cleaning', 'Home Essentials']
  },

  // 17. Kitchenware - Silicone Collapsible Food Storage Containers
  {
    id: 'prod-17',
    title: '5-Pack BPA-Free Silicone Collapsible Food Storage Containers with Airtight Lids',
    slug: '5-pack-bpa-free-silicone-collapsible-food-storage-containers',
    category: 'Kitchenware',
    categorySlug: 'kitchenware',
    price: 27.99,
    originalPrice: 39.99,
    discountPercent: 30,
    rating: 4.6,
    reviewCount: 38,
    sku: '3256806011923488',
    inStock: true,
    isFeatured: false,
    isBestSeller: true,
    images: [
      'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80'
    ],
    sizes: ['250ml', '500ml', '800ml', '1200ml', '5-Pack Set'],
    colors: ['Pastel Rainbow Set', 'Monochrome Grey Set'],
    description: 'Medical-grade platinum silicone collapses flat when empty, saving 60% of storage space. Leak-proof locking lids are microwave, freezer, and dishwasher safe. Nesting design means no mismatched lid hunting.',
    specifications: {
      'Material': 'Platinum Food-Grade Silicone + PP Lid',
      'Temperature Range': '-40°C to 230°C',
      'Microwave Safe': 'Yes (Without Lid)',
      'Dishwasher Safe': 'Yes (Top Rack)'
    },
    tags: ['Food Storage', 'Silicone', 'Meal Prep', 'Kitchen']
  },

  // 18. Bathroom Essentials - Bamboo Toothbrush Holder & Organizer
  {
    id: 'prod-18',
    title: 'Natural Bamboo Bathroom Countertop Organizer with 4 Toothbrush Holes & Soap Dish',
    slug: 'natural-bamboo-bathroom-countertop-organizer',
    category: 'Bathroom Essentials',
    categorySlug: 'bathroom-essentials',
    price: 14.99,
    originalPrice: 21.99,
    discountPercent: 32,
    rating: 4.7,
    reviewCount: 19,
    sku: '3256809012012233',
    inStock: true,
    isFeatured: true,
    isNew: true,
    images: [
      'https://images.unsplash.com/photo-1620626011761-996317702519?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=80'
    ],
    colors: ['Natural Bamboo', 'Dark Walnut Finish'],
    description: 'Sustainably harvested Moso bamboo processed with eco-friendly water-based sealant. Drainage holes beneath soap dish prevent waterlogging and bacterial growth. Wide base with anti-slip silicone feet provides stability.',
    specifications: {
      'Material': 'Grade A Moso Bamboo + Silicone Base Pads',
      'Toothbrush Slots': '4',
      'Dimensions': '20cm x 7cm x 10cm'
    },
    tags: ['Bathroom', 'Bamboo', 'Eco-friendly', 'Organizer']
  },

  // 19. Home Decor - Geometric Metal Candle Holder Set
  {
    id: 'prod-19',
    title: '3-Piece Geometric Metal Tea Light Candle Holders Set - Centerpiece & Table Decor',
    slug: '3-piece-geometric-metal-tealight-candle-holder-set',
    category: 'Home Decor',
    categorySlug: 'home-decor',
    price: 16.50,
    originalPrice: 24.00,
    discountPercent: 31,
    rating: 4.9,
    reviewCount: 27,
    sku: '3256808109284512',
    inStock: true,
    isFeatured: true,
    isBestSeller: true,
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80'
    ],
    colors: ['Matte Black', 'Antique Gold', 'Brushed Copper'],
    description: 'Precision-cut powder-coated iron wire forms intricate star, diamond, and hexagon frames that cast beautiful shadow patterns through candlelight. Graduated heights (8cm, 12cm, 16cm) create a dynamic tablescape.',
    specifications: {
      'Material': 'Powder-Coated Iron Wire',
      'Set Count': '3 Pieces (Small, Medium, Large)',
      'Compatible Candles': 'Standard & Jumbo Tea Lights'
    },
    tags: ['Candle Holder', 'Home Decor', 'Geometric', 'Centerpiece']
  },

  // 20. Lighting & Fixtures - LED Strip Lights with Remote
  {
    id: 'prod-20',
    title: '5M RGB LED Strip Lights with Remote & App Control for Bedroom TV Backlight',
    slug: '5m-rgb-led-strip-lights-remote-app-control-bedroom',
    category: 'Lighting & Fixtures',
    categorySlug: 'lighting-fixtures',
    price: 12.99,
    originalPrice: 19.99,
    discountPercent: 35,
    rating: 4.6,
    reviewCount: 89,
    sku: '3256805588012340',
    inStock: true,
    isFeatured: false,
    isNew: true,
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?w=800&auto=format&fit=crop&q=80'
    ],
    colors: ['RGB Multicolor', 'Warm White Only', 'Cool White Only'],
    description: '5-meter self-adhesive LED strip with 300 SMD 5050 RGB LEDs. Pairs with both included 44-key IR remote and free smartphone app via Bluetooth 5.0 for 16 million colors, 20 scene modes, and music-sync.',
    specifications: {
      'Length': '5 Meters (Extendable to 10m)',
      'LED Type': '300x SMD 5050 RGB',
      'Control': '44-key Remote + Bluetooth App',
      'Power': '12V DC 3A Adapter Included'
    },
    tags: ['LED Strips', 'RGB', 'Smart Lighting', 'Bedroom']
  },

  // 21. Storage & Organization - Over-Door Shoe Organizer
  {
    id: 'prod-21',
    title: '24-Pocket Over-The-Door Hanging Shoe Organizer with Reinforced Hooks',
    slug: '24-pocket-over-door-hanging-shoe-organizer',
    category: 'Storage & Organization',
    categorySlug: 'storage-organization',
    price: 11.99,
    originalPrice: 17.99,
    discountPercent: 33,
    rating: 4.5,
    reviewCount: 61,
    sku: '3256801122011298',
    inStock: true,
    isFeatured: false,
    isBestSeller: false,
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=800&auto=format&fit=crop&q=80'
    ],
    colors: ['Beige/Tan', 'Dark Grey', 'White/Clear'],
    description: 'Non-woven fabric with deep clear-window pockets provides organized shoe storage for 12 pairs without floor space. 2 heavy-duty stainless steel over-door hooks accommodate doors up to 1.75" thick.',
    specifications: {
      'Pockets': '24 Clear-Window Non-Woven Pockets',
      'Hooks': '2 Reinforced Stainless Steel Over-Door Hooks',
      'Door Clearance': 'Fits Doors Up to 1.75 inch Thick'
    },
    tags: ['Shoe Organizer', 'Over-Door', 'Storage', 'Closet']
  },

  // 22. Tissues - Decorative Ceramic Tissue Box Cover
  {
    id: 'prod-22',
    title: 'Modern Geometric Ceramic Tissue Box Cover for Bathroom Dresser - Nordic Minimalist',
    slug: 'modern-geometric-ceramic-tissue-box-cover',
    category: 'Tissues',
    categorySlug: 'tissues',
    price: 18.00,
    originalPrice: 26.00,
    discountPercent: 31,
    rating: 4.8,
    reviewCount: 22,
    sku: '3256807889012237',
    inStock: true,
    isFeatured: false,
    isBestSeller: false,
    images: [
      'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1620626011761-996317702519?w=800&auto=format&fit=crop&q=80'
    ],
    colors: ['Matte White', 'Sage Green', 'Terracotta'],
    description: 'Hand-thrown stoneware with hand-painted geometric embossing fired at 1250°C for chip-resistant durability. The wide rectangular slot accepts standard Kleenex box dimensions. Drainage channel prevents base moisture.',
    specifications: {
      'Material': 'High-Fired Stoneware Ceramic',
      'Compatible Size': 'Fits Standard 85-Count Tissue Boxes',
      'Dimensions': '25cm x 13cm x 15cm',
      'Base': 'Felt Pad Feet (Anti-scratch)'
    },
    tags: ['Tissue Box', 'Ceramic', 'Bathroom Decor', 'Nordic']
  },

  // 23. Cleaning Supplies - Microfiber Cleaning Cloth Set
  {
    id: 'prod-23',
    title: '20-Pack Professional Microfiber Cleaning Cloths Ultra-Absorbent Lint-Free Towels',
    slug: '20-pack-professional-microfiber-cleaning-cloths',
    category: 'Cleaning Supplies',
    categorySlug: 'cleaning-supplies',
    price: 15.99,
    originalPrice: 22.00,
    discountPercent: 27,
    rating: 4.7,
    reviewCount: 94,
    sku: '3256803309012119',
    inStock: true,
    isFeatured: false,
    isBestSeller: true,
    images: [
      'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=800&auto=format&fit=crop&q=80'
    ],
    sizes: ['10-Pack', '20-Pack', '30-Pack'],
    colors: ['Mixed Colour Pack', 'All Blue', 'All Yellow'],
    description: '400GSM 70/30 polyester-polyamide split-fibre weave captures 99% of bacteria and dust without chemicals. Absorbs 7x its weight in liquid. Machine washable up to 300 times without losing effectiveness.',
    specifications: {
      'GSM': '400 GSM Ultra-Dense Microfiber',
      'Blend': '70% Polyester + 30% Polyamide',
      'Size': '40cm x 40cm per Cloth',
      'Machine Washable': 'Yes, up to 300 cycles'
    },
    tags: ['Cleaning Cloth', 'Microfiber', 'Eco-Friendly', 'Multi-Surface']
  },

  // 24. Bedroom Decorations - Plush Bedroom Rug
  {
    id: 'prod-24',
    title: 'Ultra-Soft Fluffy Shaggy Bedroom Rug Anti-Slip Plush Carpet for Bedside Floor',
    slug: 'ultra-soft-fluffy-shaggy-bedroom-rug-anti-slip-plush',
    category: 'Bedroom Decorations',
    categorySlug: 'bedroom-decorations',
    price: 23.99,
    originalPrice: 36.00,
    discountPercent: 33,
    rating: 4.9,
    reviewCount: 48,
    sku: '3256809908123340',
    inStock: true,
    isFeatured: true,
    isNew: true,
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop&q=80'
    ],
    sizes: ['50x80cm', '60x120cm', '80x150cm', '100x200cm'],
    colors: ['Cloud White', 'Silver Grey', 'Blush Pink', 'Deep Navy'],
    description: 'Extra-long 3cm pile height ultra-soft microfiber shag feels like sinking your feet into a cloud. Non-slip latex backing prevents movement on hardwood, tile, and laminate floors. Machine washable on delicate cycle.',
    specifications: {
      'Pile Height': '3cm Ultra-Long Shag',
      'Base': 'Anti-Slip Latex Backing',
      'Material': '100% Polyester Microfiber Shag',
      'Care': 'Machine Washable, Delicate Cold'
    },
    tags: ['Bedroom Rug', 'Shaggy', 'Plush', 'Soft Floor Mat']
  }
];

export const HERO_SLIDES = [
  {
    id: 1,
    title: 'Modern Living Room Decor & Lighting',
    subtitle: 'Exclusive Collection 2026',
    discount: 'Up to 50% Off',
    ctaText: 'Shop Now',
    ctaLink: '/shop',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    title: 'Premium Cookware & Nonstick Essentials',
    subtitle: 'Chef-Grade Quality For Every Home',
    discount: 'Starting from $8.99',
    ctaText: 'Explore Kitchen',
    ctaLink: '/category/kitchenware',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    title: 'Transform Your Bathroom Experience',
    subtitle: 'Luxury Organizers & Spa Accents',
    discount: 'Save 30% Today',
    ctaText: 'Shop Bathroom',
    ctaLink: '/category/bathroom-essentials',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1600&auto=format&fit=crop&q=80'
  }
];
