const express = require("express");
const router = express.Router();

let products = require("./productosRouter.js");
let cards = require("./carritoRouter.js");
let user = require("./userRouter.js");

router.use("/user", user);
router.use("/productos", products);
router.use("/carrito", cards);

module.exports = router;
