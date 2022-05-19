import express from "express";
import cors from "cors";
import { env } from "env";
import mongoose from "mongoose";

const app = express();

// connectiing to database
const databaseUrl = "mongodb://localhost:27017/letAssess";
try {
  (async function () {
    await mongoose.connect(databaseUrl);
    console.log("database connected");
  })();
} catch (error) {
  console.log(error);
}

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Firebase API");
});

// Assessment routes
app.use("/assessment", require("./routes/assessment"));

// Submission routes
app.use("/submission", require("./routes/submission"));

// Candidate routes
app.use("/candidate", require("./routes/candidate"));

// Authentication
app.use("/authenticate", require("./routes/authentication"));

// User route
app.use("/user", require("./routes/user"));

const PORT = env("PORT") || 9000;

app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`);
});
