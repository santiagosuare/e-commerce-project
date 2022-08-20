const mongoose = require("mongoose");
const connectMongoDb = require("../config/mongo.js");
const schemaProduct = require("../../models/schemaChat.js");

class Chat {
  async connectDb() {
    return await connectMongoDb();
  }

  async getAll() {
    try {
      await this.connectDb();
      const products = await schemaProduct.find();
      mongoose.disconnect();
      return products;
    } catch (error) {
      throw Error(error.message);
    }
  }

  async save(message) {
    try {
      await this.connectDb();
      if (!message || typeof message !== "object") {
        throw Error("No se a agregado un producto");
      }
      if (Object.keys(message).length === 0) {
        throw Error("No se a agregado un producto");
      }
      console.log("Conecte");
      const productModel = await schemaProduct.create({
        ...message,
        timestamp: Date.now(),
      });
      mongoose.disconnect();
      return productModel;
    } catch (error) {
      throw Error("No se conecto");
    }
  }
}

module.exports = Chat;
