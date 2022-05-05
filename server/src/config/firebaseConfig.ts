import * as admin from "firebase-admin";
import path from "path";
import { env } from "../env";

// didn't upload the private key. remember to generate it in the code.
// Need to check the difference between intialized without any parameter and with parameter

const getCert = () => {
  const JSON = env("FIREBASE_SERVICE_ACCOUNT_JSON");
  const file = env("FIREBASE_SERVICE_ACCOUNT_FILE");
  if (JSON) {
    return JSON;
  }
  
  if (file) {
    return path.resolve(__dirname,...file.split('/'));
  }
};

admin.initializeApp({
  credential: admin.credential.cert(getCert()), // default credentials were not working and the file path couldn't be imported
  databaseURL: env("FIREBASE_DATABASE_URL"),
});

export default admin;
