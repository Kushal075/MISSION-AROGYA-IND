const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Patient = require("../models/Patient");
require("dotenv").config();

const router = express.Router();

// Patient Signup
router.post("/register", async (req, res) => {
    try {
        const { name, email, password, age, gender, phone } = req.body;

        let patient = await Patient.findOne({ email });
        if (patient) return res.status(400).json({ message: "Patient already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);
        patient = new Patient({ name, email, password: hashedPassword, age, gender, phone });

        await patient.save();
        res.status(201).json({ message: "Patient registered successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Patient Login
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const patient = await Patient.findOne({ email });

        if (!patient) return res.status(400).json({ message: "Invalid Credentials" });

        const isMatch = await bcrypt.compare(password, patient.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid Credentials" });

        const token = jwt.sign({ id: patient._id, role: "patient" }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ token, patient });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
