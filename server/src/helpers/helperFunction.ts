import * as bcrypt from "bcrypt";
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

// encrypt Password
export const encryptPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  return hashPassword;
};

// compare Password
export const comparePassword = async (password: string, dbPassword: string) => {
  const isSame = bcrypt.compare(password, dbPassword);
  return isSame;
};
