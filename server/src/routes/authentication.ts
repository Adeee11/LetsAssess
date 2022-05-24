import { env } from "env";
import express from "express";
import { comparePassword } from "helpers/helperFunction";
import jwt from "jsonwebtoken";
import { Assessment } from "models/Assessment";
import { Candidate } from "models/Candidate";
import { User } from "models/User";
import slugify from "slugify";

const router = express.Router();

// Candidate authentication
// generate a jwt token
router.post("/", async (req, res) => {
  // have to verify whether candidate is present in the database
  const candidateName = req.body.name;
  const candidateId = slugify(req.body.email, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
  });

  try {
    // checking if the candidate exist
    const candidate = await Candidate.findOne({ candidateId: candidateId });
    if (!candidate)
      return res.status(404).send(`Candidate ${candidateName} not found`);

    // checking if the candidate has already taken the test or not
    if (candidate.assessmentTaken)
      return res
        .status(403)
        .send(`Candidate ${candidateName} has already taken the test`);
    // calculating expiry time
    let expiryTimeInMins: number = 10;

    const assessments = await Assessment.find({}).select({ durationInMins: 1 });

    assessments.forEach((assessment) => {
      expiryTimeInMins += assessment.durationInMins;
    });

    const accessKey = env("ACCESS_KEY");
    if (accessKey) {
      // didn't provide expiry time till now. Need to calculate it separately
      const JWT_TOKEN = jwt.sign(
        {
          email: candidateId,
          name: candidateName,
        },
        accessKey,
        {
          expiresIn: expiryTimeInMins * 60,
        }
      );
      res.json({
        token: JWT_TOKEN,
        exp: expiryTimeInMins * 60,
      });
    } else {
      res.send(500).json({
        error: "SECRET KEY NOT FOUND",
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// User authenication and login
router.post("/user", async (req, res) => {
  const userEmail = req.body.email;
  const password = req.body.password;
  try {
    const user = await User.findOne({ email: userEmail });
    if (!comparePassword(password, user.password))
      return res.status(403).send("Password doesn't match");
    const accessKey = env("ACCESS_KEY");
    if (accessKey) {
      // currently giving no expiry time to user token
      const JWT_TOKEN = jwt.sign(userEmail, accessKey);
      return JWT_TOKEN
        ? res.status(200).send(JWT_TOKEN)
        : res.status(403).send("Error while creating token");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
