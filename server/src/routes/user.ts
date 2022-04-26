import express from "express";
import slugify from "slugify";
import admin from "../config/firebaseConfig";
import { removeCorrectOption } from "../helpers/helperFunction";

const router = express.Router();
const firestore = admin.firestore();

router.get("/candidates", async (req, res) => {
  try {
    const collectionRef = firestore.collection(`candidates`);
    const querySnapshot = await collectionRef
      .select("candidateName", "email")
      .get();
    const data: any[] = [];
    querySnapshot.forEach((documentSnapshot) =>
      data.push(documentSnapshot.data())
    );
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ASSESSMENT DATA WITHOUT CORRECT OPTION
// NEED TO ADD AUTH FOR USER
router.get("/:assessment/questions", async (req, res) => {
  const assessmentId = slugify(req.params.assessment.toLowerCase());

  try {
    const docRef = firestore.doc(`assessment/${assessmentId}`);
    const documentSnapShot = await docRef.get();
    const data = documentSnapShot.data();

    res.json(data);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
