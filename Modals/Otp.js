const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OtpSchema = new Schema({
  email: { type: String, required: true },
  otp: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: 900 },
});

const OtpModal = mongoose.model("Otp", OtpSchema);

module.exports = OtpModal;
