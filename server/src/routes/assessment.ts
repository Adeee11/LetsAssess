import express from "express";
import { Assessment } from "models/Assessment";
import slugify from "slugify";
import { authenticateToken } from "../middleware/middlewareFunctions";

const router = express.Router();

// ASSESSMENTS
// POST
router.post("/", async (req, res) => {
  const data = req.body;
  const documentName = slugify(data.title.toLowerCase());
  data.assessmentId = documentName;
  try {
    // check whether the assessment is already created or not
    const assessmentCount = await Assessment.count({
      assessmentId: documentName,
    });
    if (assessmentCount)
      return res.status(400).send("Assessment already created");
    await Assessment.create(data);

    res.status(200).send("Assessment stored");
  } catch (error) {
    res.json(error);
  }
});

// ADD QUESTION
router.post("/question", async (req, res) => {
  const data = req.body.question;
  const documentName = slugify(req.body.title.toLowerCase());
  try {
    const result = await Assessment.findOneAndUpdate(
      { assessmentId: documentName },
      { $push: { questions: data } }
    );
    result
      ? res.status(200).send("Question stored")
      : res.status(500).send("Didn't add the question");
  } catch (error) {
    res.json(error);
  }
});

// GET ALL ASSESSMENT DETAILS
router.get("/", authenticateToken, async (req, res) => {
  const decodedJwt = res.locals.decodedJwt;
  try {
    const responseData = await Assessment.find({}).select({
      durationInMins: 1,
      title: 1,
      _id: 0,
    });
    responseData
      ? res.json({
          data: responseData,
          iat: decodedJwt.iat,
          exp: decodedJwt.exp,
        })
      : res.sendStatus(500);
  } catch (error) {
    res.json(error);
  }
});

//GET ASSESSMENT DATA WITHOUT CORRECT OPTION
router.get("/:id/questions", authenticateToken, async (req, res) => {
  const assessmentId = slugify(req.params.id.toLowerCase());
  console.log("Assessment Id", assessmentId);
  try {
    const data = await Assessment.findOne({
      assessmentId: assessmentId,
    }).select({ "questions.correctOption": 0 });

    data
      ? res.json(data)
      : res.status(500).send("Couldn't get data from the database");
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
