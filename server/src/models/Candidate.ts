import mongoose, { Schema } from "mongoose";

interface TestResultType {
  assessmentId: string;
  marksObtained: number;
}

interface CandidateType {
  candidateId: string;
  assessmentTaken: boolean;
  candidateName: string;
  email: string;
  testsTaken: TestResultType;
}

const testResultSchema = new Schema({
  assessmentId: String,
  marksObtained: Number,
});

const candidateSchema = new Schema({
  candidateId: String,
  assessmentTaken: Boolean,
  candidateName: String,
  email: String,
  testsTaken: [testResultSchema],
});

const Candidate = mongoose.model<CandidateType>("Candidate", candidateSchema);

export { Candidate };
