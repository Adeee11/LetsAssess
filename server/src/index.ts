import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Firebase API");
});

// Assessment routes
app.use("/assessment", require("./routes/assessment"));

// Submission routes
app.use("/result", require("./routes/submission"));

// Candidate routes
app.use("/candidate", require("./routes/candidate"));

const PORT = 9000;

app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`);
});