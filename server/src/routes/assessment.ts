import express from "express";
import slugify from "slugify";
import admin from "../config/firebaseConfig";
import { removeCorrectOption } from "../helpers/helperFunction";
import { authenticateToken } from "../middleware/middlewareFunctions";

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
router.post("/question", async (req, res) => {
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

// GET ALL ASSESSMENT DETAILS
router.get("/", authenticateToken, async (req, res) => {
  try {
    const collectionRef = firestore.collection("assessment");
    const querySnapshot = await collectionRef
      .select("durationInMins", "title")
      .get();
    const responseData: any[] = [];
    querySnapshot.forEach((documentSnapshot) =>
      responseData.push(documentSnapshot.data())
    );
    res.json(responseData);
  } catch (error) {
    res.json(error);
  }
});

//GET ASSESSMENT DATA WITHOUT CORRECT OPTION
router.get("/:id/questions", authenticateToken, async (req, res) => {
  const assessmentId = slugify(req.params.id.toLowerCase());
  const decodedJwt = res.locals.decodedJwt;
  console.log("DECODED JWT Inside assessment", decodedJwt);

  try {
    const docRef = firestore.doc(`assessment/${assessmentId}`);
    const documentSnapShot = await docRef.get();
    const data = removeCorrectOption(
      JSON.parse(JSON.stringify(documentSnapShot.data()))
    );

    res.json({
      data: data,
      iat: decodedJwt.iat,
      exp: decodedJwt.exp,
    });
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
