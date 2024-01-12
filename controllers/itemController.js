const Item = require("../models/item");

const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Index");
});

exports.item_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Item list");
});

exports.item_detail = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Item detail");
});
