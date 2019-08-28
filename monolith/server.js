const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;

//Load orders and products for pseudo database
const orders = require("./orders.json").orders;
const products = require("./products.json").products;

//Serve website
app.use(express.static(path.join(__dirname, "public")));

//Get all products
app.get("/products", (req, res) => res.json(products));

//Get products by ID
app.get("/products/:id", (req, res) =>
  res.json(products.find(product => product.id === req.params.id))
);

//Get all orders
app.get("/orders", (req, res) => res.json(orders));

//Get orders by ID
app.get("/orders/:id", (req, res) =>
  res.json(orders.find(order => order.id === req.params.id))
);

//Start the server
app.listen(port, () => console.log(`Monolith listening on port ${port}!`));
