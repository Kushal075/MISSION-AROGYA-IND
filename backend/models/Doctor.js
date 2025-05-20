// models/Doctor.js
const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    licenseNumber: { type: String, required: true, unique: true },
    specialization: { type: String, required: true },
    experience: { type: Number, required: true },
    phone: { type: String, required: true },
    location: {
        city: { type: String, required: true },
        area: { type: String, required: true },
        state: { type: String, required: true }
    },
    verified: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model("Doctor", doctorSchema);
