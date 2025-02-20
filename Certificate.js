const mongoose = require("mongoose");

const CertificateSchema = new mongoose.Schema({
  username: { type: String, required: true },
  eventTitle: { type: String, required: true },
  issuedOn: { type: Date, default: Date.now },
});

const Certificate = mongoose.model("Certificate", CertificateSchema);
module.exports = Certificate;
