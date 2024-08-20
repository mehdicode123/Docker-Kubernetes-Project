db = db.getSiblingDB('ecommerce');
db.createUser({
  user: "mehdiismaaili498",
  pwd: "mongopass123",
  roles: [{ role: "readWrite", db: "ecommerce" }]
});

