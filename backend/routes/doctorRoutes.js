const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Doctor = require("../models/Doctor");
require("dotenv").config();

const router = express.Router();

// Doctor Signup
router.post("/register", async (req, res) => {
    try {
        const {
            name,
            email,
            password,
            licenseNumber,
            specialization,
            experience,
            phone,
            location,
            verified
        } = req.body;

        let doctor = await Doctor.findOne({ email });
        if (doctor) return res.status(400).json({ message: "Doctor already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);
        doctor = new Doctor({
            name,
            email,
            password: hashedPassword,
            licenseNumber,
            specialization,
            experience,
            phone,
            location,
            verified: verified || false
        });

        await doctor.save();
        res.status(201).json({ message: "Doctor registered successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Doctor Login
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("📩 Login Attempt Received:", { email });

        const doctor = await Doctor.findOne({ email });
        if (!doctor) return res.status(400).json({ message: "Invalid Credentials" });

        const isMatch = await bcrypt.compare(password, doctor.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid Credentials" });

        const token = jwt.sign(
            { id: doctor._id, role: "doctor" },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.json({ token, doctor });
    } catch (error) {
        console.error("🔥 Error during login:", error);
        res.status(500).json({ error: error.message });
    }
});

// Search Doctors by Location and Specialization
router.get("/search", async (req, res) => {
    try {
        const { city, area, specialization } = req.query;

        const doctors = await Doctor.find({
            "location.city": new RegExp(city, "i"),
            "location.area": new RegExp(area, "i"),
            specialization: new RegExp(specialization, "i"),
            verified: true
        });

        res.json(doctors);
    } catch (error) {
        console.error("❌ Search Error:", error);
        res.status(500).json({ error: error.message });
    }
});

// ✅ NEW: Get Doctors by Specialization (e.g., Dentist, Dermatologist)
router.get("/", async (req, res) => {
    try {
        const { specialization } = req.query;

        const filter = specialization ? { specialization: new RegExp(specialization, "i") } : {};

        const doctors = await Doctor.find(filter);

        res.status(200).json(doctors);
    } catch (error) {
        console.error("❌ Error fetching doctors by specialization:", error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
