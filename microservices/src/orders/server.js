/*
Copyright 2019 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8081;

//Load orders for pseudo database
const orders = require("./data/orders.json").orders;

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
