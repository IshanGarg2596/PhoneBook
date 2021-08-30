const express = require("express");
const connectDB = require("./config/db");

const app = express();

//connectDB
connectDB();

// Init Middleware to send and receive json data
app.use(express.json({ extends: false }));

app.get("/", (req, res) => res.json({ msg: "Welcome to Contact keeper API" }));

// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
