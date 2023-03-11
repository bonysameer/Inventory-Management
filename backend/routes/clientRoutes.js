 const express = require("express")
 const {getProducts} = require("../controllers/clientControllers.js")

 const router = express.Router();

 router.get("./product", getProducts);

 module.exports = router;