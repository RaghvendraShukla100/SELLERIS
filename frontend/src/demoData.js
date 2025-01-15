// for mobile
const productListMobile = [
  {
    id: 1,
    name: "iPhone 16 Pro Max 256 GB: 5G Mobile Phone with Camera Control, 4K 120 fps Dolby Vision and a Huge Leap in Battery Life. Works with AirPods; Black Titanium",
    category: "electronics",
    subCategory: "mobile",
    genericName: "smart phone",
    brand: "apple",
    os: "ios",
    RAM: ["256 GB", "1 TB", "512 GB"],
    ROM: ["512 GB", "1 TB", "2 TB"],
    displaySize: "6.9 inches",
    displayResolution: "4K",
    inBox: "handset, data cable, and user manual",
    detailsAboutThisItem: ["point 1", "point 2", "point 3", "point 4"],
    description: "description of the product",
    specialPromotionalImages: [
      "link1",
      "link2",
      "link3",
      "link4",
      "link5",
      "link6",
    ],
    images: [
      {
        red: ["link1", "link2", "link3", "link4", "link5", "link6"],
      },
      {
        green: ["link1", "link2", "link3", "link4", "link5", "link6"],
      },
      {
        black: ["link1", "link2", "link3", "link4", "link5", "link6"],
      },
    ],
    reviews: [
      {
        user: {
          id: "",
          name: "",
          date: "",
          country: "",
        },
        rating: 4,
        comment: {
          heading: "",
          body: "",
        },
      },
    ],
    price: "999 USD",
    availability: "in stock",
    warranty: "1 year manufacturer warranty",
    customerServiceContact: "support@apple.com",
    shippingDetails: {
      cost: "Free",
      estimatedDelivery: "3-5 business days",
    },
    productDimensions: {
      length: "16 cm",
      width: "7.5 cm",
      height: "0.8 cm",
      weight: "238 grams",
    },
    additionalFeatures: ["Face ID", "Wireless Charging", "Water Resistant"],
    discountsOrOffers: "10% off with promo code APPLE10",
  },
];

// for laptops

const productListLaptop = [
  {
    id: 1,
    name: "MacBook Pro 16-inch M1 Max: 32GB RAM, 1TB SSD, Space Gray",
    category: "electronics",
    subCategory: "laptop",
    genericName: "computers",
    brand: "apple",
    os: "macOS",
    RAM: ["16 GB", "32 GB", "64 GB"],
    ROM: ["512 GB", "1 TB", "2 TB", "4 TB"],
    displaySize: "16 inches",
    displayResolution: "Retina Display",
    inBox: "laptop, USB-C cable, power adapter, and user manual",
    detailsAboutThisItem: ["point 1", "point 2", "point 3", "point 4"],
    description: "description of the product",
    specialPromotionalImages: [
      "link1",
      "link2",
      "link3",
      "link4",
      "link5",
      "link6",
    ],
    images: [
      {
        spaceGray: ["link1", "link2", "link3", "link4", "link5", "link6"],
      },
      {
        silver: ["link1", "link2", "link3", "link4", "link5", "link6"],
      },
    ],
    reviews: [
      {
        user: {
          id: "",
          name: "",
          date: "",
          country: "",
        },
        rating: 5,
        comment: {
          heading: "",
          body: "",
        },
      },
    ],
    price: "2499 USD",
    availability: "in stock",
    warranty: "1 year manufacturer warranty",
    customerServiceContact: "support@apple.com",
    shippingDetails: {
      cost: "Free",
      estimatedDelivery: "5-7 business days",
    },
    productDimensions: {
      length: "35.79 cm",
      width: "24.59 cm",
      height: "1.62 cm",
      weight: "2.0 kg",
    },
    additionalFeatures: [
      "M1 Max chip",
      "Thunderbolt 4 ports",
      "Liquid Retina XDR display",
    ],
    discountsOrOffers: "5% off with promo code MACBOOK5",
  },
];
// for TV

const productListTV = [
  {
    id: 1,
    name: "Samsung QLED 8K UHD 75-inch Smart TV: Stunning Picture Quality with AI Upscaling, 120Hz Refresh Rate, and Quantum HDR 64X",
    category: "electronics",
    subCategory: "television",
    genericName: "tv",
    brand: "samsung",
    screenType: "QLED",
    displayResolution: ["8K", "4K"],
    screenSize: ["75 inches", "65 inches", "55 inches"],
    smartFeatures: [
      "Built-in Voice Assistants",
      "SmartThings App",
      "Multi View",
      "Web Browser",
    ],
    ports: ["HDMI", "USB", "Ethernet", "Optical Audio"],
    inBox: "TV, remote control, power cable, user manual, wall mount kit",
    detailsAboutThisItem: ["point 1", "point 2", "point 3", "point 4"],
    description: "description of the product",
    specialPromotionalImages: [
      "link1",
      "link2",
      "link3",
      "link4",
      "link5",
      "link6",
    ],
    images: [
      {
        front: ["link1", "link2", "link3", "link4", "link5", "link6"],
      },
      {
        side: ["link1", "link2", "link3", "link4", "link5", "link6"],
      },
      {
        back: ["link1", "link2", "link3", "link4", "link5", "link6"],
      },
    ],
    reviews: [
      {
        user: {
          id: "",
          name: "",
          date: "",
          country: "",
        },
        rating: 5,
        comment: {
          heading: "",
          body: "",
        },
      },
    ],
    price: "3999 USD",
    availability: "in stock",
    warranty: "2 year manufacturer warranty",
    customerServiceContact: "support@samsung.com",
    shippingDetails: {
      cost: "Free",
      estimatedDelivery: "7-10 business days",
    },
    productDimensions: {
      length: "167.3 cm",
      width: "96.2 cm",
      height: "3.5 cm",
      weight: "38.5 kg",
    },
    additionalFeatures: [
      "AI Upscaling",
      "Quantum HDR 64X",
      "120Hz Refresh Rate",
      "Dolby Atmos",
    ],
    discountsOrOffers: "15% off with promo code SAMSUNGTV15",
  },
];

// categeory clothing
// for mens
const productListMens = [
  {
    id: 1,
    name: "Men's Classic Fit T-Shirt - 100% Cotton, Crew Neck, Short Sleeve",
    category: "clothing",
    subCategory: "men",
    productType: "t-shirt",
    genericName: "t-shirt",
    brand: "Uniqlo",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Grey", "Navy", "Red"],
    material: "100% Cotton",
    fit: "Classic Fit",
    inBox: "1 T-Shirt",
    detailsAboutThisItem: [
      "Soft and breathable fabric",
      "Machine washable",
      "Tag-free comfort",
      "Classic crew neck",
    ],
    description: "description of the product",
    specialPromotionalImages: [
      "link1",
      "link2",
      "link3",
      "link4",
      "link5",
      "link6",
    ],
    images: [
      {
        black: ["link1", "link2", "link3", "link4", "link5", "link6"],
      },
      {
        white: ["link1", "link2", "link3", "link4", "link5", "link6"],
      },
      {
        grey: ["link1", "link2", "link3", "link4", "link5", "link6"],
      },
      {
        navy: ["link1", "link2", "link3", "link4", "link5", "link6"],
      },
      {
        red: ["link1", "link2", "link3", "link4", "link5", "link6"],
      },
    ],
    reviews: [
      {
        user: {
          id: "",
          name: "",
          date: "",
          country: "",
        },
        rating: 4,
        comment: {
          heading: "",
          body: "",
        },
      },
    ],
    price: "19.99 USD",
    availability: "in stock",
    warranty: "30-day return policy",
    customerServiceContact: "support@uniqlo.com",
    shippingDetails: {
      cost: "Free on orders over 50 USD",
      estimatedDelivery: "3-5 business days",
    },
    productDimensions: {
      length: "30 inches (size L)",
      chest: "22 inches (size L)",
      sleeveLength: "8 inches (size L)",
      weight: "200 grams",
    },
    additionalFeatures: [
      "Pre-shrunk fabric",
      "Available in multiple colors",
      "Perfect for casual wear",
    ],
    discountsOrOffers: "Buy 2, get 10% off with promo code TSHIRT10",
  },
];
// for womens
const productListWomens = [
  {
    id: 1,
    name: "Women's Summer Maxi Dress - Floral Print, Sleeveless, V-Neck",
    category: "clothing",
    subCategory: "women",
    genericName: "dress",
    productType: "dress",
    brand: "H&M",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Blue", "Red", "Green", "Black", "White"],
    material: "100% Polyester",
    fit: "Regular Fit",
    inBox: "1 Dress",
    detailsAboutThisItem: [
      "Lightweight and breathable fabric",
      "Machine washable",
      "Perfect for casual and semi-formal occasions",
      "Adjustable straps",
    ],
    description: "description of the product",
    specialPromotionalImages: [
      "link1",
      "link2",
      "link3",
      "link4",
      "link5",
      "link6",
    ],
    images: [
      {
        blue: ["link1", "link2", "link3", "link4", "link5", "link6"],
      },
      {
        red: ["link1", "link2", "link3", "link4", "link5", "link6"],
      },
      {
        green: ["link1", "link2", "link3", "link4", "link5", "link6"],
      },
      {
        black: ["link1", "link2", "link3", "link4", "link5", "link6"],
      },
      {
        white: ["link1", "link2", "link3", "link4", "link5", "link6"],
      },
    ],
    reviews: [
      {
        user: {
          id: "",
          name: "",
          date: "",
          country: "",
        },
        rating: 4.5,
        comment: {
          heading: "",
          body: "",
        },
      },
    ],
    price: "39.99 USD",
    availability: "in stock",
    warranty: "30-day return policy",
    customerServiceContact: "support@hm.com",
    shippingDetails: {
      cost: "Free on orders over 50 USD",
      estimatedDelivery: "3-5 business days",
    },
    productDimensions: {
      length: "52 inches (size M)",
      bust: "36 inches (size M)",
      waist: "30 inches (size M)",
      weight: "300 grams",
    },
    additionalFeatures: [
      "Elastic waistband",
      "Available in multiple patterns",
      "Perfect for summer wear",
    ],
    discountsOrOffers: "Buy 2, get 15% off with promo code DRESS15",
  },
];
//  for kids
const productListKids = [
  {
    id: 1,
    name: "Kids' Fun Dinosaur T-Shirt - 100% Cotton, Short Sleeve, Crew Neck",
    category: "clothing",
    subCategory: "kids",
    productType: "t-shirt",
    genericName: "top",
    brand: "Carter's",
    sizes: ["2T", "3T", "4T", "5T", "6", "7"],
    colors: ["Blue", "Green", "Yellow", "Red", "Orange"],
    gender: "unisex",
    material: "100% Cotton",
    fit: "Regular Fit",
    inBox: "1 T-Shirt",
    detailsAboutThisItem: [
      "Soft and breathable fabric",
      "Machine washable",
      "Tag-free comfort",
      "Cute dinosaur print",
    ],
    description: "description of the product",
    specialPromotionalImages: [
      "link1",
      "link2",
      "link3",
      "link4",
      "link5",
      "link6",
    ],
    images: [
      {
        blue: ["link1", "link2", "link3", "link4", "link5", "link6"],
      },
      {
        green: ["link1", "link2", "link3", "link4", "link5", "link6"],
      },
      {
        yellow: ["link1", "link2", "link3", "link4", "link5", "link6"],
      },
      {
        red: ["link1", "link2", "link3", "link4", "link5", "link6"],
      },
      {
        orange: ["link1", "link2", "link3", "link4", "link5", "link6"],
      },
    ],
    reviews: [
      {
        user: {
          id: "",
          name: "",
          date: "",
          country: "",
        },
        rating: 4.7,
        comment: {
          heading: "",
          body: "",
        },
      },
    ],
    price: "14.99 USD",
    availability: "in stock",
    warranty: "30-day return policy",
    customerServiceContact: "support@carters.com",
    shippingDetails: {
      cost: "Free on orders over 50 USD",
      estimatedDelivery: "3-5 business days",
    },
    productDimensions: {
      length: "20 inches (size 5T)",
      chest: "13 inches (size 5T)",
      sleeveLength: "6 inches (size 5T)",
      weight: "100 grams",
    },
    additionalFeatures: [
      "Pre-shrunk fabric",
      "Available in multiple colors",
      "Perfect for casual wear",
    ],
    discountsOrOffers: "Buy 2, get 10% off with promo code KIDSTEE10",
  },
];

//  category home decore
// for curtains
const productListCurtains = [
  {
    id: 1,
    name: "Elegant Velvet Curtains - Light Blocking, Thermal Insulated, Set of 2",
    category: "home decor",
    subCategory: "curtains",
    brand: "Home Bliss",
    sizes: ["52x63 inches", "52x84 inches", "52x95 inches"],
    colors: ["Navy Blue", "Gray", "Beige", "Burgundy"],
    material: "Velvet",
    fit: "Standard",
    inBox: "2 Curtains, 2 Tiebacks",
    detailsAboutThisItem: [
      "Light blocking",
      "Thermal insulated",
      "Energy efficient",
      "Machine washable",
    ],
    description: "description of the product",
    specialPromotionalImages: [
      "link1",
      "link2",
      "link3",
      "link4",
      "link5",
      "link6",
    ],
    images: [
      { navyBlue: ["link1", "link2", "link3", "link4", "link5", "link6"] },
      { gray: ["link1", "link2", "link3", "link4", "link5", "link6"] },
      { beige: ["link1", "link2", "link3", "link4", "link5", "link6"] },
      { burgundy: ["link1", "link2", "link3", "link4", "link5", "link6"] },
    ],
    reviews: [
      {
        user: { id: "", name: "", date: "", country: "" },
        rating: 4.8,
        comment: { heading: "", body: "" },
      },
    ],
    price: "49.99 USD",
    availability: "in stock",
    warranty: "1 year manufacturer warranty",
    customerServiceContact: "support@homebliss.com",
    shippingDetails: {
      cost: "Free on orders over 50 USD",
      estimatedDelivery: "5-7 business days",
    },
    productDimensions: {
      length: "84 inches (standard size)",
      width: "52 inches (standard size)",
      weight: "2.5 kg",
    },
    additionalFeatures: [
      "Noise reducing",
      "Available in multiple colors",
      "Easy to install",
    ],
    discountsOrOffers: "10% off with promo code CURTAIN10",
  },
];

//for paintings
const productListPaintings = [
  {
    id: 1,
    name: "Hand-Painted Abstract Canvas Painting - 24x36 inches, Framed",
    category: "home decor",
    subCategory: "paintings",
    brand: "Artistic Expressions",
    dimensions: "24x36 inches",
    colors: ["Multicolor"],
    material: "Canvas",
    fit: "Framed",
    inBox: "1 Painting",
    detailsAboutThisItem: [
      "Hand-painted",
      "High-quality canvas",
      "Ready to hang",
      "UV resistant",
    ],
    description: "description of the product",
    specialPromotionalImages: [
      "link1",
      "link2",
      "link3",
      "link4",
      "link5",
      "link6",
    ],
    images: [
      { multicolor: ["link1", "link2", "link3", "link4", "link5", "link6"] },
    ],
    reviews: [
      {
        user: { id: "", name: "", date: "", country: "" },
        rating: 4.5,
        comment: { heading: "", body: "" },
      },
    ],
    price: "119.99 USD",
    availability: "in stock",
    warranty: "2 year manufacturer warranty",
    customerServiceContact: "support@artisticexpressions.com",
    shippingDetails: {
      cost: "Free on orders over 100 USD",
      estimatedDelivery: "7-10 business days",
    },
    productDimensions: {
      length: "36 inches",
      width: "24 inches",
      height: "1.5 inches",
      weight: "2 kg",
    },
    additionalFeatures: [
      "Vibrant colors",
      "Unique design",
      "Perfect for living rooms",
    ],
    discountsOrOffers: "15% off with promo code PAINT15",
  },
];

//   for clocks
const productListClocks = [
  {
    id: 1,
    name: "Vintage Wall Clock - Silent Non-Ticking, 12-inch, Roman Numerals",
    category: "home decor",
    subCategory: "clocks",
    brand: "Timeless Decor",
    colors: ["Antique Gold", "Bronze", "Black"],
    material: "Metal",
    fit: "Wall Mount",
    inBox: "1 Clock, 1 Hook",
    detailsAboutThisItem: [
      "Silent non-ticking",
      "Easy to read",
      "Durable metal construction",
      "Battery operated",
    ],
    description: "description of the product",
    specialPromotionalImages: [
      "link1",
      "link2",
      "link3",
      "link4",
      "link5",
      "link6",
    ],
    images: [
      { antiqueGold: ["link1", "link2", "link3", "link4", "link5", "link6"] },
      { bronze: ["link1", "link2", "link3", "link4", "link5", "link6"] },
      { black: ["link1", "link2", "link3", "link4", "link5", "link6"] },
    ],
    reviews: [
      {
        user: { id: "", name: "", date: "", country: "" },
        rating: 4.7,
        comment: { heading: "", body: "" },
      },
    ],
    price: "29.99 USD",
    availability: "in stock",
    warranty: "1 year manufacturer warranty",
    customerServiceContact: "support@timelessdecor.com",
    shippingDetails: {
      cost: "Free on orders over 50 USD",
      estimatedDelivery: "3-5 business days",
    },
    productDimensions: {
      diameter: "12 inches",
      depth: "1.5 inches",
      weight: "800 grams",
    },
    additionalFeatures: ["Battery included", "Easy to hang", "Timeless design"],
    discountsOrOffers: "10% off with promo code CLOCK10",
  },
];
// for articles
const productListDecorativeArticles = [
  {
    id: 1,
    name: "Decorative Ceramic Vase - Handcrafted, 10-inch, Floral Design",
    category: "home decor",
    subCategory: "decorative articles",
    brand: "Elegant Homes",
    colors: ["White", "Blue", "Green"],
    material: "Ceramic",
    fit: "Tabletop",
    inBox: "1 Vase",
    detailsAboutThisItem: [
      "Handcrafted",
      "High-quality ceramic",
      "Unique floral design",
      "Waterproof",
    ],
    description: "description of the product",
    specialPromotionalImages: [
      "link1",
      "link2",
      "link3",
      "link4",
      "link5",
      "link6",
    ],
    images: [
      { white: ["link1", "link2", "link3", "link4", "link5", "link6"] },
      { blue: ["link1", "link2", "link3", "link4", "link5", "link6"] },
      { green: ["link1", "link2", "link3", "link4", "link5", "link6"] },
    ],
    reviews: [
      {
        user: { id: "", name: "", date: "", country: "" },
        rating: 4.6,
        comment: { heading: "", body: "" },
      },
    ],
    price: "39.99 USD",
    availability: "in stock",
    warranty: "30-day return policy",
    customerServiceContact: "support@eleganthomes.com",
    shippingDetails: {
      cost: "Free on orders over 50 USD",
      estimatedDelivery: "5-7 business days",
    },
    productDimensions: {
      height: "10 inches",
      diameter: "6 inches",
      weight: "1.2 kg",
    },
    additionalFeatures: [
      "Perfect for fresh or artificial flowers",
      "Elegant design",
      "Great for gifting",
    ],
    discountsOrOffers: "10% off with promo code VASE10",
  },
];

//  category furnitures
// for sofa
const productListSofa = [
  {
    id: 1,
    name: "Modern 3-Seater Sofa - Fabric Upholstery, Solid Wood Frame",
    category: "furniture",
    subCategory: "sofa",
    brand: "Ikea",
    sizes: ["3-Seater", "2-Seater", "Sectional"],
    colors: ["Gray", "Blue", "Beige"],
    material: "Fabric",
    frameMaterial: "Solid Wood",
    cushionMaterial: "High-Density Foam",
    inBox: "1 Sofa, 3 Cushions",
    detailsAboutThisItem: [
      "Comfortable seating",
      "Durable fabric upholstery",
      "Solid wood frame",
      "Easy to assemble",
    ],
    description: "description of the product",
    specialPromotionalImages: [
      "link1",
      "link2",
      "link3",
      "link4",
      "link5",
      "link6",
    ],
    images: [
      { gray: ["link1", "link2", "link3", "link4", "link5", "link6"] },
      { blue: ["link1", "link2", "link3", "link4", "link5", "link6"] },
      { beige: ["link1", "link2", "link3", "link4", "link5", "link6"] },
    ],
    reviews: [
      {
        user: { id: "", name: "", date: "", country: "" },
        rating: 4.5,
        comment: { heading: "", body: "" },
      },
    ],
    price: "499.99 USD",
    availability: "in stock",
    warranty: "5 year manufacturer warranty",
    customerServiceContact: "support@ikea.com",
    shippingDetails: {
      cost: "Free on orders over 300 USD",
      estimatedDelivery: "7-10 business days",
    },
    productDimensions: {
      length: "84 inches",
      width: "35 inches",
      height: "34 inches",
      weight: "50 kg",
    },
    additionalFeatures: [
      "Removable cushion covers",
      "Stain-resistant fabric",
      "Available in multiple colors",
    ],
    discountsOrOffers: "10% off with promo code SOFA10",
  },
];
// for chair
const productListChair = [
  {
    id: 1,
    name: "Ergonomic Office Chair - Adjustable Height, Lumbar Support",
    category: "furniture",
    subCategory: "chair",
    brand: "Herman Miller",
    colors: ["Black", "Gray", "White"],
    material: "Mesh",
    frameMaterial: "Aluminum",
    cushionMaterial: "Memory Foam",
    inBox: "1 Chair",
    detailsAboutThisItem: [
      "Ergonomic design",
      "Adjustable height",
      "Lumbar support",
      "Breathable mesh back",
    ],
    description: "description of the product",
    specialPromotionalImages: [
      "link1",
      "link2",
      "link3",
      "link4",
      "link5",
      "link6",
    ],
    images: [
      { black: ["link1", "link2", "link3", "link4", "link5", "link6"] },
      { gray: ["link1", "link2", "link3", "link4", "link5", "link6"] },
      { white: ["link1", "link2", "link3", "link4", "link5", "link6"] },
    ],
    reviews: [
      {
        user: { id: "", name: "", date: "", country: "" },
        rating: 4.7,
        comment: { heading: "", body: "" },
      },
    ],
    price: "399.99 USD",
    availability: "in stock",
    warranty: "12 year manufacturer warranty",
    customerServiceContact: "support@hermanmiller.com",
    shippingDetails: {
      cost: "Free on orders over 200 USD",
      estimatedDelivery: "5-7 business days",
    },
    productDimensions: {
      length: "26 inches",
      width: "24 inches",
      height: "48 inches",
      weight: "25 kg",
    },
    additionalFeatures: [
      "Adjustable armrests",
      "360-degree swivel",
      "Tilt mechanism",
    ],
    discountsOrOffers: "15% off with promo code CHAIR15",
  },
];
// for tables
const productListTable = [
  {
    id: 1,
    name: "Extendable Dining Table - Solid Wood, Seats 6-8",
    category: "furniture",
    subCategory: "table",
    brand: "West Elm",
    colors: ["Natural Wood", "Dark Walnut"],
    material: "Solid Wood",
    frameMaterial: "Metal",
    inBox: "1 Table",
    detailsAboutThisItem: [
      "Extendable design",
      "Seats 6-8",
      "Solid wood construction",
      "Easy to clean",
    ],
    description: "description of the product",
    specialPromotionalImages: [
      "link1",
      "link2",
      "link3",
      "link4",
      "link5",
      "link6",
    ],
    images: [
      { naturalWood: ["link1", "link2", "link3", "link4", "link5", "link6"] },
      { darkWalnut: ["link1", "link2", "link3", "link4", "link5", "link6"] },
    ],
    reviews: [
      {
        user: { id: "", name: "", date: "", country: "" },
        rating: 4.6,
        comment: { heading: "", body: "" },
      },
    ],
    price: "899.99 USD",
    availability: "in stock",
    warranty: "5 year manufacturer warranty",
    customerServiceContact: "support@westelm.com",
    shippingDetails: {
      cost: "Free on orders over 500 USD",
      estimatedDelivery: "7-10 business days",
    },
    productDimensions: {
      length: "72-90 inches",
      width: "36 inches",
      height: "30 inches",
      weight: "60 kg",
    },
    additionalFeatures: [
      "Extendable leaves",
      "Durable finish",
      "Available in multiple colors",
    ],
    discountsOrOffers: "10% off with promo code TABLE10",
  },
];

// for cupboards

const productListCupboards = [
  {
    id: 1,
    name: "Modern Wardrobe - Sliding Doors, Adjustable Shelves",
    category: "furniture",
    subCategory: "cupboards",
    brand: "Ikea",
    colors: ["White", "Brown", "Black"],
    material: "Particle Board",
    frameMaterial: "Metal",
    inBox: "1 Wardrobe, Assembly Instructions",
    detailsAboutThisItem: [
      "Sliding doors",
      "Adjustable shelves",
      "Spacious storage",
      "Easy to assemble",
    ],
    description: "description of the product",
    specialPromotionalImages: [
      "link1",
      "link2",
      "link3",
      "link4",
      "link5",
      "link6",
    ],
    images: [
      { white: ["link1", "link2", "link3", "link4", "link5", "link6"] },
      { brown: ["link1", "link2", "link3", "link4", "link5", "link6"] },
      { black: ["link1", "link2", "link3", "link4", "link5", "link6"] },
    ],
    reviews: [
      {
        user: { id: "", name: "", date: "", country: "" },
        rating: 4.4,
        comment: { heading: "", body: "" },
      },
    ],
    price: "299.99 USD",
    availability: "in stock",
    warranty: "2 year manufacturer warranty",
    customerServiceContact: "support@ikea.com",
    shippingDetails: {
      cost: "Free on orders over 200 USD",
      estimatedDelivery: "7-10 business days",
    },
    productDimensions: {
      length: "80 inches",
      width: "24 inches",
      height: "72 inches",
      weight: "80 kg",
    },
    additionalFeatures: [
      "Soft-close doors",
      "Multiple configurations",
      "Available in multiple colors",
    ],
    discountsOrOffers: "5% off with promo code WARDROBE5",
  },
];

//  category beauty & skincare
// face wash
const productListFaceWash = [
  {
    id: 1,
    name: "Gentle Foaming Face Wash - Cleanses & Hydrates, For All Skin Types",
    category: "beauty & skincare",
    subCategory: "face wash",
    brand: "Neutrogena",
    sizes: ["100ml", "200ml"],
    ingredients: ["Water", "Glycerin", "Sodium Laureth Sulfate", "Aloe Vera"],
    skinType: "All",
    inBox: "1 Face Wash",
    detailsAboutThisItem: [
      "Removes dirt and oil",
      "Hydrates skin",
      "Dermatologist recommended",
      "Non-comedogenic",
    ],
    description: "description of the product",
    specialPromotionalImages: [
      "link1",
      "link2",
      "link3",
      "link4",
      "link5",
      "link6",
    ],
    images: [
      { bottle: ["link1", "link2", "link3", "link4", "link5", "link6"] },
    ],
    reviews: [
      {
        user: { id: "", name: "", date: "", country: "" },
        rating: 4.8,
        comment: { heading: "", body: "" },
      },
    ],
    price: "9.99 USD",
    availability: "in stock",
    warranty: "30-day return policy",
    customerServiceContact: "support@neutrogena.com",
    shippingDetails: {
      cost: "Free on orders over 25 USD",
      estimatedDelivery: "3-5 business days",
    },
    productDimensions: {
      length: "5 inches",
      width: "2 inches",
      height: "2 inches",
      weight: "150 grams",
    },
    additionalFeatures: [
      "Soap-free formula",
      "Suitable for daily use",
      "Paraben-free",
    ],
    discountsOrOffers: "10% off with promo code FACEWASH10",
  },
];

// for soap
const productListSoap = [
  {
    id: 1,
    name: "Natural Handmade Soap - Lavender & Honey, Moisturizing Bar",
    category: "beauty & skincare",
    subCategory: "soap",
    brand: "The Body Shop",
    sizes: ["100g", "150g"],
    ingredients: [
      "Olive Oil",
      "Coconut Oil",
      "Shea Butter",
      "Lavender Essential Oil",
      "Honey",
    ],
    skinType: "All",
    inBox: "1 Soap Bar",
    detailsAboutThisItem: [
      "Moisturizing",
      "Gentle on skin",
      "Handmade",
      "Natural ingredients",
    ],
    description: "description of the product",
    specialPromotionalImages: [
      "link1",
      "link2",
      "link3",
      "link4",
      "link5",
      "link6",
    ],
    images: [{ bar: ["link1", "link2", "link3", "link4", "link5", "link6"] }],
    reviews: [
      {
        user: { id: "", name: "", date: "", country: "" },
        rating: 4.7,
        comment: { heading: "", body: "" },
      },
    ],
    price: "5.99 USD",
    availability: "in stock",
    warranty: "30-day return policy",
    customerServiceContact: "support@thebodyshop.com",
    shippingDetails: {
      cost: "Free on orders over 25 USD",
      estimatedDelivery: "3-5 business days",
    },
    productDimensions: {
      length: "3 inches",
      width: "2 inches",
      height: "1 inch",
      weight: "120 grams",
    },
    additionalFeatures: [
      "Cruelty-free",
      "Suitable for sensitive skin",
      "Eco-friendly packaging",
    ],
    discountsOrOffers: "15% off with promo code SOAP15",
  },
];

//   for lotions
const productListLotion = [
  {
    id: 1,
    name: "Hydrating Body Lotion - Aloe & Vitamin E, Non-Greasy Formula",
    category: "beauty & skincare",
    subCategory: "lotion",
    brand: "Aveeno",
    sizes: ["200ml", "400ml"],
    ingredients: ["Aloe Vera", "Vitamin E", "Shea Butter", "Glycerin"],
    skinType: "Dry, Sensitive",
    inBox: "1 Lotion Bottle",
    detailsAboutThisItem: [
      "Hydrates and soothes skin",
      "Non-greasy",
      "Fast absorbing",
      "Dermatologist recommended",
    ],
    description: "description of the product",
    specialPromotionalImages: [
      "link1",
      "link2",
      "link3",
      "link4",
      "link5",
      "link6",
    ],
    images: [
      { bottle: ["link1", "link2", "link3", "link4", "link5", "link6"] },
    ],
    reviews: [
      {
        user: { id: "", name: "", date: "", country: "" },
        rating: 4.9,
        comment: { heading: "", body: "" },
      },
    ],
    price: "12.99 USD",
    availability: "in stock",
    warranty: "30-day return policy",
    customerServiceContact: "support@aveeno.com",
    shippingDetails: {
      cost: "Free on orders over 25 USD",
      estimatedDelivery: "3-5 business days",
    },
    productDimensions: {
      length: "7 inches",
      width: "3 inches",
      height: "2 inches",
      weight: "250 grams",
    },
    additionalFeatures: ["Fragrance-free", "Paraben-free", "Hypoallergenic"],
    discountsOrOffers: "10% off with promo code LOTION10",
  },
];
