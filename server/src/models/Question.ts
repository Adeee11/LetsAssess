import mongoose, { Schema } from "mongoose";

const propsSchema = new Schema({
  type: String, // type = code, image, video, sound etc
  content: String, // for code send the code directly, for others send the url to where file is stored
  format: String, // extension of the file. like .png for image, .js for javascript code
});

const optionSchema = new Schema({
  useCustomComponent: Boolean,
  optionProps: propsSchema,
  optionId: String,
  optionValue: String,
});

const questionSchema = new Schema({
  quesId: String,
  quesValue: String,
  quesType: String,
  useCustomComponent: Boolean,
  props: propsSchema,
  options: [optionSchema],
  correctOption: [String],
});

const Question = mongoose.model("Question", questionSchema);

export { Question, questionSchema };
