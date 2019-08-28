const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8092;

//Load product for pseudo database
const products = require("../../data/products.json").products;

//Enable cors
app.use(cors());

//Get all products
app.get("/api/products", (req, res) => res.json(products));

//Get products by ID
app.get("/api/products/:id", (req, res) =>
  res.json(products.find(product => product.id === req.params.id))
);

app.listen(port, () =>
  console.log(`Products microservice listening on port ${port}!`)
);
