// OP1:
db.products.insertMany([
  {
    product_id: 1,
    name: "Samsung Smart TV",
    category: "Electronics",
    price: 45000
  },
  {
    product_id: 2,
    name: "Men T-Shirt",
    category: "Clothing",
    price: 800
  },
  {
    product_id: 3,
    name: "Milk Packet",
    category: "Groceries",
    price: 60,
    expiry_date: new Date("2024-12-30")
  }
]);

// OP2:
db.products.find({
  category: "Electronics",
  price: { $gt: 20000 }
});

// OP3:
db.products.find({
  category: "Groceries",
  expiry_date: { $lt: new Date("2025-01-01") }
});

// OP4:
db.products.updateOne(
  { product_id: 1 },
  { $set: { discount_percent: 10 } }
);

// OP5:
db.products.createIndex({ category: 1 });
// This index improves search speed when filtering by category
