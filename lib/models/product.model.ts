import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    url: { type: String, required: true, unique: true },
    currency: { type: String, required: true },
    image: { type: String, required: true },
    title: { type: String, required: true },
    currentPrice: { type: Number, required: true },
    originalPrice: { type: Number, required: true },
    priceHistory: [
      {
        price: { type: Number, required: true },
        date: { type: Date, default: Date.now },
      },
    ],
    lowestPrice: { type: Number },
    highestPrice: { type: Number },
    averagePrice: { type: Number },
    discountRate: { type: Number },
    category: { type: String, required: true },
    reviewsCount: { type: Number, required: true },
    stars: { type: Number, required: true },
    isOutOfStock: { type: Boolean, default: false },
    description: { type: String },
    users: [{ email: { type: String, required: true } }],
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
