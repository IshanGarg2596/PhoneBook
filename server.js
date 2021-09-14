const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

//connectDB
connectDB();

// Init Middleware to send and receive json data
app.use(express.json({ extends: false }));

//app.get("/", (req, res) => res.json({ msg: "Welcome to Contact keeper API" }));

// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

// Serve static assets at production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
