import mongoose, { Schema } from "mongoose";
import { questionSchema, QuestionType } from "./Question";

interface AssessmentType {
  title: string;
  durationInMins: number;
  assessmentId: string;
  questions: QuestionType[];
}

const assessmentSchema = new Schema<AssessmentType>({
  title: String,
  durationInMins: Number,
  assessmentId: String,
  questions: [questionSchema],
});

const Assessment = mongoose.model<AssessmentType>(
  "Assessment",
  assessmentSchema
);

export { Assessment, AssessmentType };
