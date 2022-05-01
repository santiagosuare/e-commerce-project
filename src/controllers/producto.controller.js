// Mongo
const Daos = require("../daos/mongo/mainMongo.daos.js");
const Product = new Daos.productDaos();

// Firebase
// const Daos = require("../daos/firebase/mainFirebaseDaos");
// const Product = new Daos.ProductDao();

module.exports = {
  //READ PRODUCT
  readAllProducts: async (req, res) => {
    try {
      const products = await Product.getAll();
      res.status(200).send({
        status: 200,
        message: "Productos encontrados",
        productos: products,
      });
    } catch (error) {
      res.status(500).send({
        status: 500,
        message: "Error interno del servidor" + error,
      });
    }
  },
  //CREATE PRODUCT
  createProduct: async (req, res) => {
    try {
      const product = await Product.save(req.body);
      res.status(200).send({
        status: 200,
        message: "Producto creado correctamente",
        producto: { product },
      });
    } catch (error) {
      res.status(500).send({
        status: 500,
        message: "Error interno del servidor producto " + error,
      });
    }
  },
  //READ PRODUCT BY ID
  readProductById: async (req, res) => {
    try {
      const product = await Product.getById(req.params.id);
      res.status(200).send({
        status: 200,
        message: "Producto encontrado",
        producto: product,
      });
    } catch (error) {
      res.status(500).send({
        status: 500,
        message: "Error interno del servidor" + error,
      });
    }
  },
  //UPDATE PRODUCT
  updateProduct: async (req, res) => {
    try {
      const product = await Product.updateById(req.params.id, req.body);
      res.status(200).send({
        status: 200,
        message: "Producto actualizado correctamente",
        producto: product,
      });
    } catch (error) {
      res.status(500).send({
        status: 500,
        message: "Error interno del servidor" + error,
      });
    }
  },
  //DELETE PRODUCT
  deleteProduct: async (req, res) => {
    try {
      const product = await Product.deleteById(req.params.id);
      res.status(200).send({
        status: 200,
        message: "Producto eliminado correctamente",
        producto: product,
      });
    } catch (error) {
      res.status(500).send({
        status: 500,
        message: "Error interno del servidor" + error,
      });
    }
  },
};
