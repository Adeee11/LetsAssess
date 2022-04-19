import express from "express";
import slugify from "slugify";
import admin from "../config/firebaseConfig";
import { authenticateToken } from "../middleware/middlewareFunctions";

const router = express.Router();
const firestore = admin.firestore();

// ADDING RESULTS
router.post("/", authenticateToken, async (req, res) => {
  const data = req.body.data;
  const assessmentId = slugify(req.body.assessmentId.toLowerCase());
  try {
    const docRef = firestore.doc(`submissions/${assessmentId}`);
    const result = await docRef.set(data);
    console.log("Result", result);
    res.sendStatus(200);
  } catch (error) {
    res.json(error);
  }
});

// Add candidate for a particular assessment
router.post("/candidate", authenticateToken, async (req, res) => {
  const candidateId = slugify(req.body.candidateId, {
    remove: /[*+~.()'"!:@]/g,
    lower: true,
  });
  const data = req.body.data;
  const assessmentId = slugify(req.body.assessmentId.toLowerCase());
  try {
    const docRef = firestore.doc(`submissions/${assessmentId}`);
    await docRef.update({
      [candidateId]: data,
    });
    res.sendStatus(200);
  } catch (error) {
    res.json(error);
  }
});

// Add answer marked by a candidate for a question for an assessment
router.post("/answer", authenticateToken, async (req, res) => {
  const assessmentId: string = slugify(req.body.assessmentId.toLowerCase());
  const candidateId: string = slugify(req.body.candidateId, {
    remove: /[*+~.()'"!:@]/g,
    lower: true,
  });
  const optionMarked: { optionId: string; quesId: string } =
    req.body.optionMarked;
  try {
    const docRef = firestore.doc(`submissions/${assessmentId}`);
    await docRef.update({
      [`${candidateId}.optionsMarked.${optionMarked.quesId}`]:
        admin.firestore.FieldValue.arrayUnion(...optionMarked.optionId),
    });
    res.sendStatus(200);
  } catch (error) {
    res.json(error);
  }
});

// fetch users who submitted  a particular test
router.get("/:id", authenticateToken, async (req, res) => {
  const assessmentId = req.params.id;
  try {
    const docRef = firestore.doc(`submissions/${assessmentId}`);
    const documentSnapShot = await docRef.get();
    const data = documentSnapShot.data();
    res.json(data);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
