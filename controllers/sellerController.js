const Seller = require("../models/seller");

const asyncHandler = require("express-async-handler");

exports.seller_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Seller list");
});

exports.seller_detail = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Seller detail");
});
