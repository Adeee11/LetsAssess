import mongoose from "mongoose";

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
