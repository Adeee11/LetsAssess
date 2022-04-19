import express from "express";
import slugify from "slugify";
import admin from "../config/firebaseConfig";
import { removeCorrectOption } from "../helpers/helperFunction";

const router = express.Router();
const firestore = admin.firestore();

// ASSESSMENTS
// POST
router.post("/", async (req, res) => {
  const data = req.body;
  const documentName = slugify(data.title.toLowerCase());
  try {
    let docRef = firestore.doc(`assessment/${documentName}`);
    await docRef.set(data);
    res.sendStatus(200);
  } catch (error) {
    res.json(error);
  }
});

// ADD QUESTION
// need to ask how to name this api endpoint
router.post("/add-question", async (req, res) => {
  const data = req.body.question;
  const documentName = slugify(req.body.title.toLowerCase());
  try {
    const docRef = firestore.doc(`assessment/${documentName}`);
    await docRef.update({
      questions: admin.firestore.FieldValue.arrayUnion(data),
    });
    res.sendStatus(200);
  } catch (error) {
    res.json(error);
  }
});

//GET ASSESSMENT DATA WITHOUT CORRECT OPTION
router.get("/:id", async (req, res) => {
  const assessmentId = slugify(req.params.id.toLowerCase());
  try {
    const docRef = firestore.doc(`assessment/${assessmentId}`);
    const documentSnapShot = await docRef.get();
    const data = removeCorrectOption(
      JSON.parse(JSON.stringify(documentSnapShot.data()))
    );
    res.json(data);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router