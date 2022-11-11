const mongoose = require("mongoose");

const DatsSchema = mongoose.Schema(
  {
    UserEmail: { type: String },
    Name: { type: String },
    Address: { type: String },
    Phone: { type: String, unique: true },
    Email: { type: String },

    CreatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const SuppliersModel = mongoose.model("suppliers", DatsSchema);
module.exports = SuppliersModel;
