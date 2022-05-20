import express from "express";
import slugify from "slugify";
import admin from "../config/firebaseConfig";
import { areArraysEqual } from "../helpers/helperFunction";
import { Candidate } from "models/Candidate";
import { Submission } from "models/Submissions";
import { Assessment } from "models/Assessment";

const router = express.Router();
const firestore = admin.firestore();

// ADD Candidate
router.post("/", async (req, res) => {
  const candidateId = slugify(req.body.email, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
  });
  const data = req.body;
  data["assessmentTaken"] = false;
  data["candidateId"] = candidateId;
  try {
    // checking if a candidate already exists
    const candidate = await Candidate.findOne({ candidateId: candidateId });

    if (candidate) return res.status(400).send("Candidate already exist");
    // adding candidate to the database
    const result = await Candidate.create(data);
    result
      ? res.status(200).send("Candidate Added")
      : res.status(500).send("Error while storing candidate in the database");
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
    // getting options marked by the candidate for the assessment
    const submission = await Submission.findOne({
      assessmentId: assessmentId,
      candidateId: candidateId,
    }).select({ optionsMarked: 1, _id: 0 });
    if (!submission)
      return res.status(400).send("Candidate hasn't taken the test");
    const optionsMarked = submission.optionsMarked;

    // getting correct options for each question of the assessment
    const correctOptions = await Assessment.findOne({
      assessmentId: assessmentId,
    }).select({ "questions.quesId": 1, "questions.correctOption": 1, _id: 0 });

    // calculating marks obtained by the candidate for the assessment
    let totalMarks: number = 0;

    // need to change it so that it first check question id of optionsMarked inside
    // correctOptions.questions array and then compare correctionOption and answers array.
    // will work fine for the current id
    optionsMarked.forEach((optionMarked, index) => {
      if (
        // checking if questions are same
        optionMarked.quesId === correctOptions.questions[index].quesId &&
        // checking if the answers and correct options are the same
        areArraysEqual(
          optionMarked.answers,
          correctOptions.questions[index].correctOption
        )
      ) {
        totalMarks += 1;
      }
    });

    // need to store it candidate collection too
    const isUpdated = await Candidate.updateOne(
      { candidateId: candidateId },
      {
        $set: {
          testsTaken: [
            {
              assessmentId: assessmentId,
              marksObtained: totalMarks,
            },
          ],
        },
      }
    );

    isUpdated ? res.send(`${totalMarks}`) : res.sendStatus(500);
  } catch (error) {
    res.json(error);
  }
});

// Get all test done by a candidate
router.get("/:id/assessments", async (req, res) => {
  const candidateId = slugify(req.params.id, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
  });
 
  try {
    const data = await Candidate.findOne({ candidateId: candidateId }).select({
      testsTaken: 1,
    });
    if (!data) return res.status(400).send("Candidate doesn't exist");
    data.testsTaken.length !== 0
      ? res.json({
          data: data.testsTaken,
        })
      : res.json({
          msg: "Marks not calculated for this candidate. First calculate marks please",
        });
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
