const express = require("express");
const router = express.Router();

// Require controller modules.
const item_controller = require("../controllers/itemController");
const category_controller = require("../controllers/categoryController");
const seller_controller = require("../controllers/sellerController");

// ITEM ROUTES

// Get catalog home page
router.get("/", item_controller.index);

// Get request for list of all items.
router.get("/items", item_controller.item_list);

// Get request for one item.
router.get("/item/:id");

// CATEGORY ROUTES

// Get request for list of all categories.
router.get("/categories", category_controller.category_list);

// Get request for one categoty.
router.get("/category/:id", category_controller.category_detail);

// SELLER ROUTES

// Get request for list of all sellers
router.get("/sellers", seller_controller.seller_list);

// Get request for one seller.
router.get("/seller/:id", seller_controller.seller_detail);

module.exports = router;
