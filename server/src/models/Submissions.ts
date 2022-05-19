import mongoose, { Schema } from "mongoose";

const optionMarkedSchema = new Schema({
  quesID: String,
  answers: [String], // it would contain options ID
});

const submissionSchema = new Schema({
  assessmentId: String, // need to connect it to assessment database
  candidateId: String, // need to connect it to candidate database
  optionsMarked: [optionMarkedSchema],
});

const Submission = mongoose.model("Submission", submissionSchema);

export { Submission };
