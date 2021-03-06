import mongoose, { Schema } from "mongoose";

interface OptionMarkedType {
  quesId: string;
  answers: string[];
}

interface SubmissionType {
  assessmentId: string;
  candidateId: string;
  optionsMarked: OptionMarkedType[];
}

const optionMarkedSchema = new Schema<OptionMarkedType>({
  quesId: String,
  answers: [String], // it would contain options ID
});

const submissionSchema = new Schema<SubmissionType>({
  assessmentId: String, // need to connect it to assessment database
  candidateId: String, // need to connect it to candidate database
  optionsMarked: [optionMarkedSchema],
});

const Submission = mongoose.model<SubmissionType>(
  "Submission",
  submissionSchema
);

export { Submission, OptionMarkedType, SubmissionType };
