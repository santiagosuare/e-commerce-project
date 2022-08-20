const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  email: { type: String, require: true, max: 100 },
  type: { type: String, require: true, max: 100 },
  bodyMenssage: { type: String, require: true, max: 100 },
  timestamp: { type: String, require: true },
});

module.exports = mongoose.model("chatstests", chatSchema);
