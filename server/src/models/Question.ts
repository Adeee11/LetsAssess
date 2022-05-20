import mongoose, { Schema } from "mongoose";

interface PropsType {
  type: string; // type = code, image, video, sound etc
  content: string; // for code send the code directly, for others send the url to where file is stored
  format: string; // extension of the file. like .png for image, .js for javascript code
}

interface OptionType {
  useCustomComponent: Boolean;
  optionProps: PropsType | null;
  optionId: string;
  optionValue: string;
}

interface QuestionType {
  quesId: string;
  quesValue: string;
  quesType: string;
  useCustomComponent: boolean;
  props: PropsType | null;
  options: OptionType[];
  correctOption: string[];
}

const propsSchema = new Schema<PropsType>({
  type: String,
  content: String,
  format: String,
});

const optionSchema = new Schema<OptionType>({
  useCustomComponent: Boolean,
  optionProps: propsSchema,
  optionId: String || Boolean,
  optionValue: String,
});

const questionSchema = new Schema<QuestionType>({
  quesId: String,
  quesValue: String,
  quesType: String,
  useCustomComponent: Boolean,
  props: propsSchema,
  options: [optionSchema],
  correctOption: [String],
});

export { questionSchema, QuestionType };
