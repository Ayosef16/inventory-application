const Category = require("../models/category");

const asyncHandler = require("express-async-handler");

exports.category_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Category list");
});

exports.category_detail = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Category detail");
});
