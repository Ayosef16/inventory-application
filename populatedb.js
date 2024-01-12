console.log(
  "This script populates items, categories and seller to the database"
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Item = require("./models/item");
const Category = require("./models/category");
const Seller = require("./models/seller");

const items = [];
const categories = [];
const sellers = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createCategories();
  await createSellers();
  await createItems();
  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}

// We pass the index to the ...Create functions so that, for example,
// seller[0] will always be the same seller, regardless of the order
// in which the elements of promise.all's argument complete.
async function itemCreate(
  index,
  name,
  description,
  stock,
  price,
  category,
  seller
) {
  const itemdetail = {
    name,
    description,
    stock,
    price,
    category,
  };
  if (seller != false) itemdetail.seller = seller;

  const item = new Item(itemdetail);
  await item.save();
  items[index] = item;
  console.log(`Added item: ${name}`);
}

async function categoryCreate(index, name, description) {
  const category = new Category({ name, description });
  await category.save();
  categories[index] = category;
  console.log(`Added category: ${name}`);
}

async function sellerCreate(index, name) {
  const seller = new Seller({ name: name });
  await seller.save();
  sellers[index] = seller;
  console.log(`Added seller: ${name}`);
}

async function createItems() {
  console.log("Adding items");
  await Promise.all([
    itemCreate(
      0,
      "Monitor",
      "A screen to display stuff on your computer",
      10,
      249.99,
      categories[0],
      [sellers[0]]
    ),
    itemCreate(
      1,
      "Keyboard",
      "Letters to write on your pc",
      50,
      30.5,
      categories[0],
      [sellers[0]]
    ),
    itemCreate(
      2,
      "Microwave",
      "To heat food with waves",
      5,
      120.99,
      categories[1],
      [sellers[1]]
    ),
    itemCreate(
      3,
      "Food Processor",
      "To make food edible to babies",
      14,
      185.99,
      categories[1],
      [sellers[1]]
    ),
    itemCreate(4, "Skirt", "Only meta to all women", 100, 9.99, categories[2], [
      sellers[2],
    ]),
    itemCreate(5, "Gloves", "To not have calluses", 20, 20.99, categories[3], [
      sellers[3],
    ]),
    itemCreate(5, "Lipstick", "To paint your lips", 69, 15.5, categories[4], [
      sellers[4],
    ]),
  ]);
}

async function createCategories() {
  console.log("Adding categories");
  await Promise.all([
    categoryCreate(0, "Technology", "Tech stuff"),
    categoryCreate(1, "Electronics", "Stuff that uses electricity"),
    categoryCreate(2, "Clothing", "Used to protect the naked human being"),
    categoryCreate(3, "Sports", "Things used to not be a fat ass"),
    categoryCreate(4, "Beauty", "Stuff that makes you look like a barbie"),
  ]);
}

async function createSellers() {
  console.log("Adding sellers");
  await Promise.all([
    sellerCreate(0, "My New PC"),
    sellerCreate(1, "House Forever"),
    sellerCreate(2, "Skirt till it flirts"),
    sellerCreate(3, "Be like Arnold"),
    sellerCreate(4, "Korean Makeup"),
  ]);
}
