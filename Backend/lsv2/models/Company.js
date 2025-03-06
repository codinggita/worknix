const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  companyId: { type: String, required: true, unique: true },
});

const Company = mongoose.model("Company", companySchema);
module.exports = Company;
