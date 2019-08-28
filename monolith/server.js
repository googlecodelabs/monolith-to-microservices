const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;

//Load orders and products for pseudo database
const orders = require("./data/orders.json").orders;
const products = require("./data/products.json").products;

//Serve website
app.use(express.static(path.join(__dirname, "public")));

//Get all products
app.get("/service/products", (req, res) => res.json(products));

//Get products by ID
app.get("/service/products/:id", (req, res) =>
  res.json(products.find(product => product.id === req.params.id))
);

//Get all orders
app.get("/service/orders", (req, res) => res.json(orders));

//Get orders by ID
app.get("/service/orders/:id", (req, res) =>
  res.json(orders.find(order => order.id === req.params.id))
);

//Client side routing fix on page refresh or direct browsing to non-root directory
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"), err => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

//Start the server
app.listen(port, () => console.log(`Monolith listening on port ${port}!`));
