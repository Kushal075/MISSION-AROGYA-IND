const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Pharmacy = require("../models/Pharmacy");
require("dotenv").config();

const router = express.Router();

// Pharmacy Signup
router.post("/register", async (req, res) => {
    try {
        const { name, email, password, licenseNumber, location, phone } = req.body;

        let pharmacy = await Pharmacy.findOne({ email });
        if (pharmacy) return res.status(400).json({ message: "Pharmacy already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);
        pharmacy = new Pharmacy({ name, email, password: hashedPassword, licenseNumber, location, phone });

        await pharmacy.save();
        res.status(201).json({ message: "Pharmacy registered successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Pharmacy Login
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const pharmacy = await Pharmacy.findOne({ email });

        if (!pharmacy) return res.status(400).json({ message: "Invalid Credentials" });

        const isMatch = await bcrypt.compare(password, pharmacy.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid Credentials" });

        const token = jwt.sign({ id: pharmacy._id, role: "pharmacy" }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ token, pharmacy });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
