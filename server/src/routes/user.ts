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

// Get all options marked by a particular candidate
router.get("/options-marked/:assessment/:candidate", async (req, res) => {
  const assessmentId = slugify(req.params.assessment, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
  });
  const candidateId = slugify(req.params.candidate, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
  });

  try {
    const docRef = firestore.doc(`submissions/${assessmentId}`);
    let optionsMarked: any;
    const data = (await docRef.get()).data();
    if (data && !data[candidateId]) {
      if (!optionsMarked) {
        return res.json({
          msg: "No options marked yet.",
          optionsMarked: {},
        });
      }
    } else if (data) {
      optionsMarked = data[candidateId].optionsMarked;
      const keys = Object.keys(optionsMarked);

      res.status(200).json({
        optionsMarked: optionsMarked,
      });
    } else {
      res.status(400).json({
        error: `Couldn't get the data for the assessment ${assessmentId} `,
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
