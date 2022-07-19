const mongoose = require("mongoose");
const connectMongoDb = require("../config/mongo");
const schemaUser = require("../../models/schemaUser");

class User {
  async connectDb() {
    return await connectMongoDb();
  }

  async getAll() {
    try {
      await this.connectDb();
      const users = await schemaUser.find();
      mongoose.disconnect();
      return users;
    } catch (error) {
      throw Error(error.message);
    }
  }

  async save(user) {
    try {
      await this.connectDb();
      if (!user || typeof user !== "object") {
        throw Error("No se a agregado un usuario");
      }
      if (Object.keys(user).length === 0) {
        throw Error("No se a agregado un usuario");
      }
      console.log("Conecte");
      const userModel = await schemaUser.create({
        ...user,
        timestamp: Date.now(),
      });
      mongoose.disconnect();
      return userModel;
    } catch (error) {
      throw Error("No se conecto");
    }
  }
}

module.exports = User;
