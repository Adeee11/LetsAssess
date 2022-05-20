import express from "express";
import cors from "cors";
import { env } from "env";
import { connectToMongo } from "helpers/helperFunction";

const app = express();

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

app.listen(PORT, async () => {
  console.log(`Server running on Port: ${PORT}`);
  const databaseUrl = env("DATABASE_URL");
  connectToMongo(databaseUrl);
});
