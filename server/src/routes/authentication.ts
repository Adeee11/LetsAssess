import express from "express";
import jwt from "jsonwebtoken";
import slugify from "slugify";
import admin from "../config/firebaseConfig";

const fireStore = admin.firestore();

const router = express.Router();

// generate a jwt token
router.get("/:name/:id", async (req, res) => {
  // have to verify whether candidate is present in the database
  const candidateName = slugify(req.params.name, {
    lower: true,
  });
  const candidateId = slugify(req.params.id, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
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
      SECRET_KEY.JWT_KEY
    );
    res.send(JWT_TOKEN);
  } else {
    res.sendStatus(500);
  }
});

module.exports = router;
