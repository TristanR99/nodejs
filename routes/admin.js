const path = require("path");
const express = require("express");
const rootDir = require("../util/path");
const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  let { title } = req.body;
  products.push({ title: title });
  console.log(products);

  res.redirect("/");
});

exports.routes = router;
exports.products = products;
