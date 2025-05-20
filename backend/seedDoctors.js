const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Doctor = require('./models/Doctor');

dotenv.config();

// ✅ Connect to the correct DB (medicare)
mongoose.connect(process.env.MONGO_URI, {
  dbName: 'medicare', // 💥 IMPORTANT: Force the DB name
})
  .then(() => {
    console.log('✅ MongoDB connected');
    seedDoctors();
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });

const specializations = [
  "General Physician", "Pediatrician", "Dermatologist", "Gynaecologist",
  "Sexologist", "Psychiatrist", "Gastroenterologist", "Ayurveda", "Urologist",
  "Neurologist", "Cardiologist", "Orthopedic", "Ophthalmologist"
];

const firstNamesMale = ["Rahul", "Rajesh", "Kiran", "Prathap", "Arjun", "Ravi", "Karthik", "Balaji", "Gopal", "Ramesh", "Mohit", "Vikram", "Harish","Kunal","Narendra","Sandeep","Gaurav","Ishaan","Lakshman","Manish","Nikhil","Omkar","Siddharth"];
const firstNamesFemale = ["Asha", "Sneha", "Anita", "Meena", "Deepa", "Neha", "Swathi", "Divya", "Rekha","Hima","Malathi","Pooja","Ritika","Tanvi"];
const lastNames = ["Mehta", "Nair", "Rao", "Sharma", "Kumar", "Verma", "Singh", "Reddy", "Bhat", "Shetty", "Joshi", "Patel", "Kapoor", "Mishra", "Jain", "Aggarwal", "Das", "Menon", "Ghosh", "Chopra","Kumbera","Nayak","Pillai","Rathod","Sahu","Soni","Tiwari","Yadav","Zaveri","Awasthi","Bansal","Choudhary","Dutta","Garg","Hegde","Iyer","Jadhav","Kaur","Lal","Mandal","Nambiar","Oberoi","Pandey","Qureshi","Rathore"];

const cities = [
  { city: "Bangalore", state: "Karnataka", areas: ["BTM Layout", "Jayanagar", "Whitefield", "HSR Layout", "Marathahalli", "Banashankari", "Majestic", "Malleswaram", "Yeshvathpura", "Electronic city", "Silk Board", "Rajajinagar", "Rajarajeshwari Nagar", "Mahalakshmi Layout", "Peenya", "JP Nagar", "Indira Nagar", "Trinity", "Nagarbhavi", "Basavangudi", "Brookefield", "Manjunath Nagar", "Yelahanka"] },
  { city: "Mumbai", state: "Maharashtra", areas: ["Andheri", "Bandra", "Dadar", "Powai", "Borivali", "Goregaon", "Jogeshwari", "Juhu", "Kandivali West", "Kandivali East", "Khar", "Malad", "Santacruz East", "Santacruz West", "Vile Parle"] },
  { city: "Hyderabad", state: "Telangana", areas: ["Gachibowli", "Banjara Hills", "Madhapur", "Kukatpally", "Secunderabad", "Ameerpet", "Sanathnagar", "Khairatabad", "Musheerbad", "Amberpet", "Nampally", "Jubilee Hills", "Patancheru"] },
  { city: "Delhi", state: "Delhi", areas: ["Saket", "Dwarka", "Rohini", "Lajpat Nagar", "Karol Bagh", "Dilshan Garden", "Rajendra Nagar", "Mahipalpur", "Rajiv Chowk", "Laxmi Nagar", "Anand Vihar", "Mayur Vihar", "Preet Vihar", "Maharani Bagh"] }
];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateDoctor(firstName, lastName, specialization, gender) {
  const fullName = `Dr. ${firstName} ${lastName}`;
  const email = `${firstName.toLowerCase()}${lastName.toLowerCase()}${Math.floor(Math.random() * 1000)}@gmail.com`;
  const phone = String(Math.floor(7000000000 + Math.random() * 1000000000));
  const password = `${firstName.toLowerCase()}${Math.floor(100 + Math.random() * 900)}`;
  const licenseNumber = `LIC${Math.floor(100000 + Math.random() * 900000)}`;
  const fees = Math.floor(Math.random() * 300) + 100;
  const experience = Math.floor(Math.random() * 25) + 1;

  const cityInfo = getRandom(cities);
  const location = {
    city: cityInfo.city,
    state: cityInfo.state,
    area: getRandom(cityInfo.areas)
  };

  const timeSlots = {
    "2025-05-11": ["10:00 AM", "01:00 PM", "03:30 PM"],
    "2025-05-12": ["09:00 AM", "12:00 PM", "06:00 PM"]
  };

  const seed = `${firstName}${lastName}${gender}`;
  const style = gender === "Male" ? "adventurer" : "fun-emoji";
  const profilePic = `https://api.dicebear.com/8.x/${style}/svg?seed=${encodeURIComponent(seed)}`;

  return {
    name: fullName,
    specialization,
    experience,
    phone,
    email,
    password,
    licenseNumber,
    fees,
    location,
    profilePic,
    timeSlots,
    verified: true, // ✅ Always true now
    gender
  };
}

async function seedDoctors() {
  try {
    await Doctor.deleteMany(); // Clears previous entries

    const doctorsToInsert = [];

    for (const specialization of specializations) {
      for (let i = 0; i < 61; i++) {
        const isMale = Math.random() > 0.5;
        const firstName = getRandom(isMale ? firstNamesMale : firstNamesFemale);
        const lastName = getRandom(lastNames);
        const gender = isMale ? "Male" : "Female";

        const doctor = generateDoctor(firstName, lastName, specialization, gender);
        doctorsToInsert.push(doctor);
      }
    }

    await Doctor.insertMany(doctorsToInsert);
    console.log(`✅ Seeded ${doctorsToInsert.length} doctors successfully!`);

    console.dir(doctorsToInsert.slice(0, 5), { depth: null });

    mongoose.connection.close();
  } catch (err) {
    console.error('❌ Error seeding doctors:', err);
    mongoose.connection.close();
  }
}
