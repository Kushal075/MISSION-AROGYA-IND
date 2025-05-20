// backend/controllers/doctorController.js

const Doctor = require('../models/doctorModel'); // Adjust path if different

// @desc    Get doctors by specialization
// @route   GET /api/doctors
// @access  Public
const getDoctorsBySpecialization = async (req, res) => {
  try {
    const specialization = req.query.specialization;

    // If no specialization provided, return all
    const filter = specialization ? { specialization } : {};

    const doctors = await Doctor.find(filter);

    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch doctors' });
  }
};

module.exports = {
  getDoctorsBySpecialization,
};
