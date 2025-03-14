const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();
console.log("🔍 MONGO_URI:", process.env.MONGO_URI);
// ✅ Initialize Express First
const app = express();
const PORT = process.env.PORT || 8080;

// ✅ Middleware
app.use(cors({ origin: "http://localhost:3000" })); 
app.use(express.json()); 

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// ✅ Registration Route (Fix for 404 error)
app.post("/api/register", async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Mock response (Replace this with database logic)
    return res.status(201).json({ message: "User registered successfully!" });

  } catch (error) {
    console.error("Registration Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// ✅ Start Server
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((error) => console.error("❌ MongoDB Connection Error:", error));