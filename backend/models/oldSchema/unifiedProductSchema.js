import mongoose from 'mongoose';

const { Schema } = mongoose;

// Review schema, moved to a separate collection
const reviewSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  user: {
    id: String,
    name: String,
    country: String,
  },
  rating: { type: Number, min: 1, max: 5, required: true },
  comment: {
    heading: String,
    body: String,
  },
  createdAt: { type: Date, default: Date.now },
});

const Review = mongoose.model('Review', reviewSchema);
export default Review;

// Main product schema
const productSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  sku: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true }, // For SEO-friendly URLs
  category: {
    type: String,
    required: true,
    enum: ['Clothing', 'Electronics', 'Decor', 'Furniture', 'Beauty & Skin Care'],
  },
  subCategory: { type: String, required: true },
  productType: { type: String, required: true },
  brand: { type: String, required: true },
  description: String,
  metaTitle: String, // For SEO
  metaDescription: String, // For SEO
  price: { type: Number, required: true },
  currency: { type: String, default: 'USD' },
  availability: {
    type: String,
    enum: ['In Stock', 'Out of Stock', 'Preorder'],
    required: true,
  },
  status: {
    type: String,
    enum: ['Active', 'Inactive', 'Discontinued'],
    default: 'Active',
  },
  stocks: { type: Number, required: true },
  sellerId: { type: Schema.Types.ObjectId, ref: 'Seller', required: true },
  tags: [String],
  media: [
    {
      type: { type: String, enum: ['image', 'video', '360-view'], required: true },
      url: String,
    },
  ],
  variants: [
    {
      sku: { type: String, required: true, unique: true },
      attributes: Schema.Types.Mixed,
      price: Number,
      stocks: Number,
      images: [String],
    },
  ],
  averageRating: { type: Number, default: 0 },
  ratingsCount: { type: Number, default: 0 },
  attributes: { type: Schema.Types.Mixed }, // Category-specific attributes
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Update 'updatedAt' before saving
productSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

// Indexing for performance
productSchema.index({ sku: 1 });
productSchema.index({ category: 1 });
productSchema.index({ brand: 1 });
productSchema.index({ tags: 1 });
productSchema.index({ slug: 1 });
productSchema.index({ sellerId: 1 });
productSchema.index({ status: 1 });
productSchema.index({ availability: 1 });

const Product = mongoose.model('Product', productSchema);
export default Product;




// Clothing attributes example
attributes: {
    gender: { type: String, enum: ['Men', 'Women', 'Unisex', 'Kids'], required: true },
    sizes: [String], // e.g., ['S', 'M', 'L', 'XL']
    colors: [String], // e.g., ['Blue', 'Black']
    material: String,
    materialComposition: [
      {
        material: String,
        percentage: Number,
      },
    ],
    fit: String, // e.g., 'Regular', 'Slim'
    style: String, // e.g., 'Casual', 'Formal'
    occasionToWear: String, // e.g., 'Business', 'Party'
    careInstructions: String,
    sizeChart: String, // URL to size chart
  },
  