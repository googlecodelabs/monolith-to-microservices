const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8091;

//Load orders for pseudo database
const orders = require("../../../data/orders.json").orders;

//Enable cors
app.use(cors());

//Get all orders
app.get("/api/orders", (req, res) => res.json(orders));

//Get orders by ID
app.get("/api/orders/:id", (req, res) =>
  res.json(orders.find(order => order.id === req.params.id))
);

app.listen(port, () =>
  console.log(`Orders microservice listening on port ${port}!`)
);
