import express from "express";
import jwt from "jsonwebtoken";
import slugify from "slugify";
import admin from "../config/firebaseConfig";

const fireStore = admin.firestore();
const getAuth = admin.auth()

const router = express.Router();

// Candidate authentication
// generate a jwt token
router.post("/", async (req, res) => {
  // have to verify whether candidate is present in the database
  const candidateName = req.body.name;
  const candidateId = slugify(req.body.email, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
  });

  try {
    // checking if the candidate has been allowed to take the test
    const candidateDocRef = fireStore.doc(`candidates/${candidateId}`);
    if (!(await candidateDocRef.get()).exists) {
      return res.status(404).json({
        error: `Candidate ${candidateName} not found`,
      });
    }

    // checking if the candidate has already taken the test or not
    const candidateData = (await candidateDocRef.get()).data();
    if (candidateData && candidateData.assessmentTaken) {
      return res.status(403).json({
        error: `Candidate ${candidateName} has already taken the test`,
      });
    }
    await candidateDocRef.update({
      assessmentTaken: true,
    });
    // calculating expiry time
    let expiryTimeInMins: number = 10;
    const assessmentCollectionRef = fireStore.collection("assessment");
    const querySnapshot = await assessmentCollectionRef
      .select("durationInMins")
      .get();
    querySnapshot.forEach((docmentSnapshot) => {
      expiryTimeInMins += docmentSnapshot.data().durationInMins;
    });

    const docRef = fireStore.doc("miscellaneous/ACCESS_KEY");
    const SECRET_KEY = (await docRef.get()).data();
    if (SECRET_KEY) {
      // didn't provide expiry time till now. Need to calculate it separately
      const JWT_TOKEN = jwt.sign(
        {
          email: candidateId,
          name: candidateName,
        },
        SECRET_KEY.JWT_KEY,
        {
          expiresIn: expiryTimeInMins * 60,
        }
      );
      res.json({
        token: JWT_TOKEN,
        exp: expiryTimeInMins * 60,
      });
    } else {
      res.send(500).json({
        error: "SECRET KEY NOT FOUND",
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});



module.exports = router;
