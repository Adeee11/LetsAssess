import express from "express";
import jwt from "jsonwebtoken";
import admin from "../config/firebaseConfig";

const fireStore = admin.firestore();

const router = express.Router();

// generate a jwt token
router.post("/", async (req, res) => {
  // have to verify whether candidate is present in the database
  const candidateName = req.body.candidateName;
  const candidateEmail = req.body.email;
  const docRef = fireStore.doc("miscellaneous/ACCESS_KEY");
  const SECRET_KEY = (await docRef.get()).data();
  if (SECRET_KEY) {
    // didn't provide expiry time till now. Need to calculate it separately
    const JWT_TOKEN = jwt.sign(
      {
        email: candidateEmail,
        name: candidateName,
      },
      SECRET_KEY.JWT_KEY
    );
    res.send(JWT_TOKEN);
  } else {
    res.sendStatus(500);
  }
});

module.exports = router;
