const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create seller schema

const SellerSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
});

// Create the virtual url

SellerSchema.Schema.virtual("url").get(function () {
  return `/catalog/seller/${this._id}`;
});

// Export the schema

module.exports = mongoose.model("Seller", SellerSchema);
