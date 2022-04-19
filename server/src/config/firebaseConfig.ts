import * as admin from "firebase-admin";

// didn't upload the private key. remember to generate it in the code.
// Need to check the difference between intialized without any parameter and with parameter
admin.initializeApp({
  credential: admin.credential.cert(
    "H:/Operating System/letsassess-ad436-firebase-adminsdk-rli5w-8e69a15e18.json"
  ), // default credentials were not working and the file path couldn't be imported
  databaseURL: "https://letsassess-ad436-default-rtdb.firebaseio.com",
});

export default admin 
