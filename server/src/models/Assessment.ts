import mongoose, { Schema } from "mongoose";
import { questionSchema } from "./Question";

const assessmentSchema = new Schema({
  title: String,
  durationInMins: Number,
  assessmentId: String,
  questions: [questionSchema],
});

const Assessment = mongoose.model("Assessment", assessmentSchema);

export { Assessment };
