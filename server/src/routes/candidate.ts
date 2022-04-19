import express from "express";
import slugify from "slugify";
import admin from "../config/firebaseConfig";
import { areArraysEqual } from "../helpers/helperFunction";

const router = express.Router();
const firestore = admin.firestore();

// ADD Candidate
router.post("/", async (req, res) => {
  const candidateId = slugify(req.body.email, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
  });
  const data = req.body;
  try {
    const docRef = firestore.doc(`candidates/${candidateId}`);
    await docRef.set(data);
    res.sendStatus(200);
  } catch (error) {
    res.json(error);
  }
});

// Calculate marks for the candidate
router.post("/marks", async (req, res) => {
  const candidateId = slugify(req.body.email, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
  });
  const assessmentId = slugify(req.body.assessmentId, { lower: true });

  try {
    const docRef = firestore.doc(`results/${assessmentId}`);
    const documentSnapshot = await docRef.get();
    const data: any = documentSnapshot.data();
    if (candidateId in data) {
      // res.json(data[candidateId]);
      const answersMarked = data[candidateId].optionMarked;
      const assessmentDocRef = firestore.doc(`assessment/${assessmentId}`);
      const assessmentData = (await assessmentDocRef.get()).data();
      let questions: {
        quesId: string;
        quesValue: string;
        quesType: string;
        props: any;
        correctOption: string[];
      }[];
      let totalMarks: number = 0;
      if (assessmentData) {
        questions = assessmentData.questions;
        questions.map((question) => {
          areArraysEqual(
            answersMarked[question.quesId],
            question.correctOption
          ) && (totalMarks += 4);
        });
      }

      const candidateRef = firestore.doc(`candidates/${candidateId}`);
      candidateRef.update({
        testsTaken: admin.firestore.FieldValue.arrayUnion({
          assessmentId: assessmentId,
          marksObtained: totalMarks,
        }),
      });
      res.send(totalMarks)
    } else {
      res.send("No candidate found");
    }
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
