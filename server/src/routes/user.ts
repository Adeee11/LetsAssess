import express from "express";
import { encryptPassword } from "helpers/helperFunction";
import { Assessment } from "models/Assessment";
import { Candidate } from "models/Candidate";
import { Submission } from "models/Submissions";
import { User } from "models/User";
import slugify from "slugify";

const router = express.Router();

// add a user
router.post("/", async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = await encryptPassword(req.body.password);

    const user = await User.create({
      name: name,
      email: email,
      password: password,
    });
    user
      ? res.status(200).send("User created")
      : res.status(500).send("Some error when creating user in db");
  } catch (error) {
    res.status(500).json(error);
  }
});

// get all candidates
router.get("/candidates", async (req, res) => {
  try {
    const data = await Candidate.find({}).select({});
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
    const data = await Assessment.findOne({
      assessmentId: assessmentId,
    }).select({
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
    const result = await Submission.findOne({
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
