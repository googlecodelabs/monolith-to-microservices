const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8090;

//Serve website
app.use(express.static(path.join(__dirname, "public")));

//Client side routing fix on page refresh or direct browsing to non-root directory
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"), err => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

//Start the server
app.listen(port, () => console.log(`Frontend microservice listening on port ${port}!`));
