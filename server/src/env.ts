import dotenv from "dotenv";

dotenv.config();

export const env = (
  varName: "FIREBASE_SERVICE_ACCOUNT_FILE" | "FIREBASE_SERVICE_ACCOUNT_JSON" | "FIREBASE_DATABASE_URL" | "PORT"
) => {
  return process.env[varName];
};
