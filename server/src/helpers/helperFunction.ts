import mongoose from "mongoose";

// function to remove correctOption from the data
export const removeCorrectOption = (data: {
  durationInMins: number;
  questions: {
    options: any[];
    props: any;
    quesId: string;
    quesValue: string;
    quesType: string;
    useCustomComponent: boolean;
  }[];
}) => {
  const newData: {
    durationInMins: number;
    questions: any[];
  } = {
    durationInMins: data.durationInMins,
    questions: [],
  };

  data.questions.map((question) => {
    const newQuestion = {
      options: [...question.options],
      props: { ...question.props },
      quesId: question.quesId,
      quesValue: question.quesValue,
      quesType: question.quesType,
      useCustomComponent: question.useCustomComponent,
    };
    newData.questions.push(newQuestion);
  });

  return newData;
};

// check if two arrays have same contents
export const areArraysEqual = (arr1: any[], arr2: any[]) => {
  if (arr1.join(",") === arr2.join(",")) {
    return true;
  } else {
    return false;
  }
};

// connect to mongoDB database database
export const connectToMongo = async (databaseUrl: string) => {
  try {
    await mongoose.connect(databaseUrl);
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
};
