import mongoose, { Schema } from "mongoose";

const testResultSchema = new Schema({
  assessmentId: String,
  marksObtained: String,
});

const candidateSchema = new Schema({
  candidateId: String,
  assessmentTaken: Boolean,
  candidateName: String,
  email: String,
  testsTaken: [testResultSchema],
});

const Candidate = mongoose.model("Candidate", candidateSchema);

export { Candidate };
