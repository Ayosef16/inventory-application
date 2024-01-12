const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create the category schema

const CategorySchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  description: { type: String, required: true, maxLength: 100 },
});

// Create the virtual for the category url

CategorySchema.virtual("url").get(function () {
  return `/catalog/category/${this._id}`;
});

// Export model

module.exports = mongoose.model("Category", CategorySchema);
