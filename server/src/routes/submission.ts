import express from "express";
import slugify from "slugify";
import admin from "../config/firebaseConfig";
import { authenticateToken } from "../middleware/middlewareFunctions";
import { OptionMarkedType, Submission } from "models/Submissions";

const router = express.Router();
const firestore = admin.firestore();

// No need for this
// // ADDING RESULTS
// router.post("/", authenticateToken, async (req, res) => {
//   const data = req.body.data;
//   const assessmentId = slugify(req.body.assessmentId.toLowerCase());

//   try {
//     // const docRef = firestore.doc(`submissions/${assessmentId}`);
//     // const result = await docRef.set(data);
//     const result =

//     res.sendStatus(200);
//   } catch (error) {
//     res.json(error);
//   }
// });

// Add candidate for a particular assessment
router.post("/candidate", authenticateToken, async (req, res) => {
  // getting candiateId from auth token so that the candidate logged in can only acess his data
  const candidateId = slugify(String(res.locals.decodedJwt.email), {
    remove: /[*+~.()'"!:@]/g,
    lower: true,
  });
  const data = req.body;
  data["candidateId"] = candidateId;
  console.log(`Data: `, data);
  const assessmentId = slugify(req.body.assessmentId.toLowerCase());
  try {
    // check if candidate has already given the test
    const check = await Submission.findOne({
      candidateId: candidateId,
      assessmentId: assessmentId,
    });
    console.log(`Check`, check);
    if (check)
      return res.status(400).send("Candidate has already given the test");

    // submitting the assessment for a particular candidate
    const submission = await Submission.create(data);
    submission
      ? res
          .status(200)
          .send(`${assessmentId} assessment for ${candidateId} submitted`)
      : res.status(500).send("Can't store assessment in the database");
  } catch (error) {
    res.json(error);
  }
});

// Add answer marked by a candidate for a question for an assessment
router.post("/answer", authenticateToken, async (req, res) => {
  const assessmentId: string = slugify(req.body.assessmentId.toLowerCase());
  // getting candiateId from auth token so that the user logged in can only acess his data
  const candidateId: string = slugify(String(res.locals.decodedJwt.email), {
    remove: /[*+~.()'"!:@]/g,
    lower: true,
  });
  const optionMarked: OptionMarkedType = {
    answers: req.body.optionMarked.optionId,
    quesId: req.body.optionMarked.quesId,
  };

  try {
    // check if the candidate has already submitted the data for the assessment
    const submission = await Submission.findOne({
      candidateId: candidateId,
      assessmentId: assessmentId,
    }).select({ _id: 1 });
    if (submission) {
      const isUpdated = await Submission.updateOne(
        {
          _id: submission._id,
        },
        { $push: { optionsMarked: optionMarked } }
      );
      isUpdated
        ? res.status(200).send("Answer Marked")
        : res
            .status(500)
            .send("Some error while submitting data in the database");
    } else {
      const newSubmission = Submission.create({
        candidateId: candidateId,
        assessmentId: assessmentId,
        optionsMarked: [optionMarked],
      });
      newSubmission
        ? res.status(200).send("Answer Marked")
        : res
            .status(500)
            .send("Some error while submitting data in the database");
    }
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
});

// fetch candidateId of all candidates who submitted  a particular test
router.get("/:id", authenticateToken, async (req, res) => {
  const assessmentId = req.params.id;
  try {
    const candidates = await Submission.find({
      assessmentId: assessmentId,
    }).select({
      candidateId: 1,
      _id: 0,
    });

    console.log(`Candidates`, candidates);
    candidates
      ? res.status(200).json({
          candidatesId: candidates,
        })
      : res
          .status(500)
          .send("Error while retrieving candidates from the database");
  } catch (error) {
    res.json(error);
  }
});

// fetch the optionsMarked by a candidate for a particular test
router.get(
  "/options-marked/:assessment",
  authenticateToken,
  async (req, res) => {
    const assessmentId = slugify(req.params.assessment, {
      lower: true,
      remove: /[*+~.()'"!:@]/g,
    });
    // getting candiateId from auth token so that the user logged in can only acess his data
    const candidateId = slugify(String(res.locals.decodedJwt.email), {
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
  }
);

module.exports = router;
