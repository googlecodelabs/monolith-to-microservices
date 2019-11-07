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
const port = process.env.PORT || 8082;

//Load product for pseudo database
const products = require("./data/products.json").products;

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
