const Daos = require("../daos/mongo/mainMongo.daos");
const User = new Daos.userDaos();
const logger = require("../logs/logs");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "./src/.env" });

const PRIVATE_KEY = process.env.PRIVATE_KEY;

const { generateToken } = require("../service/security/configJWT");

module.exports = {
  //READ USER AND PASSWORD
  readUserByNameAndPassword: async (req, res) => {
    try {
      const user = await User.getByNameAndPassword(
        req.query.email,
        req.query.password
      );
      if (user === null) {
        res.status(404).send({
          status: 404,
          message: "User not found",
        });
        logger.warn(`User not found`);
      } else {
        const token = generateToken(user);
        res.status(200).send({
          status: 200,
          message: "Success login",
          token: token,
        });
        logger.info(`Success login`);
        logger.info(`Token: ${token}`);
      }
    } catch (error) {
      res.status(500).send({
        status: 500,
        message: "Error login",
        data: error,
      });
      logger.error(`Error login ${error}`);
    }
  },

  infoUserLog: async (req, res) => {
    try {
      const token = req.query.token;
      const tokenEncode = jwt.decode(token, PRIVATE_KEY);

      res.status(200).send({
        status: 200,
        message: "Success info user log",
        data: tokenEncode,
      });
      logger.info(`Success info user log`);
    } catch (error) {
      res.status(500).send({
        status: 500,
        message: "Error info user log",
        data: error,
      });
      logger.error(`Error info user log ${error}`);
    }
  },
};
