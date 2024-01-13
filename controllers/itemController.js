const Item = require("../models/item");
const Category = require("../models/category");
const Seller = require("../models/seller");

const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  const [itemCount, categoryCount, sellerCount] = await Promise.all([
    Item.countDocuments().exec(),
    Category.countDocuments().exec(),
    Seller.countDocuments().exec(),
  ]);
  res.render("index", {
    title: "Inventory Application Home",
    item_count: itemCount,
    category_count: categoryCount,
    seller_count: sellerCount,
  });
});

exports.item_list = asyncHandler(async (req, res, next) => {
  res.render("item_list", { title: "Item List" });
});

exports.item_detail = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Item detail");
});
