require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const http = require("http"); // 👈 Required to attach Socket.IO
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app); // 👈 Use server instead of app.listen()

// Middleware
app.use(cors());
app.use(express.json());

// Default Route
app.get("/", (req, res) => {
    res.send("API is Running...");
});

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    console.error("❌ ERROR: MONGO_URI is missing in .env file!");
    process.exit(1);
}

mongoose.connect(MONGO_URI, {
    dbName: "medicare",
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("✅ MongoDB Connected Successfully!"))
    .catch((err) => {
        console.error("❌ MongoDB Connection Failed:", err);
        process.exit(1);
    });

// Routes
const doctorRoutes = require("./routes/doctorRoutes");
const patientRoutes = require("./routes/patientRoutes");
const pharmacyRoutes = require("./routes/pharmacyRoutes");

app.use("/api/doctors", doctorRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api/pharmacies", pharmacyRoutes);

// Error Handling
app.use((req, res) => {
    res.status(404).send("Route Not Found");
});

// SOCKET.IO SETUP
const io = new Server(server, {
    cors: {
        origin: "*", // or specify frontend URL
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    console.log(`📡 User connected: ${socket.id}`);

    socket.on("join-room", (roomId) => {
        socket.join(roomId);
        socket.to(roomId).emit("user-joined", socket.id);
    });

    socket.on("send-offer", ({ offer, to }) => {
        io.to(to).emit("receive-offer", { offer, from: socket.id });
    });

    socket.on("send-answer", ({ answer, to }) => {
        io.to(to).emit("receive-answer", { answer, from: socket.id });
    });

    socket.on("send-ice-candidate", ({ candidate, to }) => {
        io.to(to).emit("receive-ice-candidate", { candidate, from: socket.id });
    });

    socket.on("disconnect", () => {
        console.log(`❌ User disconnected: ${socket.id}`);
    });
});

// Start Server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
