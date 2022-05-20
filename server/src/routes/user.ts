import express from "express";
import { Assessment } from "models/Assessment";
import { Candidate } from "models/Candidate";
import { Submission } from "models/Submissions";
import slugify from "slugify";
import admin from "../config/firebaseConfig";

const router = express.Router();
const firestore = admin.firestore();

// get all candidates
router.get("/candidates", async (req, res) => {
  try {
    const data = await Candidate.find({}).select({
      candidateName: 1,
      email: 1,
    });
    data
      ? res.status(200).json({
          data: data,
        })
      : res.status(500).send("Candidates not found");
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ASSESSMENT DATA
// NEED TO ADD AUTH FOR USER
router.get("/:assessment/questions", async (req, res) => {
  const assessmentId = slugify(req.params.assessment.toLowerCase());

  try {
    const data = await Assessment.find({ assessmentId: assessmentId }).select({
      questions: 1,
    });

    data
      ? res.status(200).json(data)
      : res.status(500).send("Couldn't get data form the database");
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
  // getting candiateId from auth token so that the user logged in can only acess his data
  const candidateId = slugify(String(req.params.candidate), {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
  });

  try {
    const result = await Submission.find({
      assessmentId: assessmentId,
      candidateId: candidateId,
    }).select({ optionsMarked: 1, _id: 0 });
    result
      ? res.status(200).json(result)
      : res
          .status(400)
          .send(
            `Candidate ${candidateId} hasn't given the assessment ${assessmentId}`
          );
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
