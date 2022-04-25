const express = require("express");
const adminRouter = express.Router();

adminRouter.get(
  "/",
  function (req, res, next) {
    if (req.query.admin == 1) {
      console.log("Admin logueado");
      next();
    } else {
      res.status(401).send("No estas autorizado");
    }
  },
  function (req, res) {
    res.send("Admin ON");
  }
);

module.exports = adminRouter;
