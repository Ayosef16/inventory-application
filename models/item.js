const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create item schema

const ItemSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  description: { type: String, required: true, maxLength: 100 },
  stock: { type: Number, required: true },
  price: { type: Number, required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  seller: { type: Schema.Types.ObjectId, ref: "Seller" },
});

// Create virtual url

ItemSchema.virtual("url").get(function () {
  return `/catalog/item/${this._id}`;
});

// Export the item schema

module.exports = mongoose.model("Item", ItemSchema);
