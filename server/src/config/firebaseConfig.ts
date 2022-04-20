import * as admin from "firebase-admin";
import path from "path";

// didn't upload the private key. remember to generate it in the code.
// Need to check the difference between intialized without any parameter and with parameter
admin.initializeApp({
  credential: admin.credential.cert(
    path.join(__dirname, "service-account-file.json")
  ), // default credentials were not working and the file path couldn't be imported
  databaseURL: "https://letsassess-ad436-default-rtdb.firebaseio.com",
});

export default admin;
