const mongoose = require("mongoose");

const pharmacySchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    licenseNumber: { type: String, required: true, unique: true }, // For verification
    location: { type: String, required: true },
    phone: { type: String, required: true },
    verified: { type: Boolean, default: false }, // Admin will verify
}, { timestamps: true });

module.exports = mongoose.model("Pharmacy", pharmacySchema);
