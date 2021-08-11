const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  product_id: {
    type: String,
    unique: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  images: {
    type: Array,
    default: "https://cdn.store-assets.com/s/160552/f/5670463.jpeg",
  },
  description: String,
  content: String,
  colors: Array,
  sizes: Array,
  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
