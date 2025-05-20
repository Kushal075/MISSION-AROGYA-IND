const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Doctor = require('./models/Doctor');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    return getSpecializationCounts();
  })
  .then(() => mongoose.disconnect())
  .catch(err => {
    console.error("❌ Error:", err);
    mongoose.disconnect();
  });

async function getSpecializationCounts() {
  const result = await Doctor.aggregate([
    {
      $group: {
        _id: "$specialization",
        count: { $sum: 1 }
      }
    },
    {
      $sort: { count: -1 }
    }
  ]);

  console.log("📊 Specialization Counts:");
  console.table(result);
}
