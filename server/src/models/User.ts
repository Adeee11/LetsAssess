import mongoose, { model, Schema } from "mongoose";

interface UserType {
  name: string;
  email: string;
  password: string;
}

const userSchema = new Schema<UserType>({
  name: String,
  email: String,
  password: String,
});

const User = model<UserType>("User", userSchema);

export { User };
