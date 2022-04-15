import express from "express";
import * as admin from "firebase-admin";
import slugify from "slugify";
import cors from "cors";
import { applicationDefault } from "firebase-admin/app";

// didn't upload the private key. remember to generate it in the code.
// Need to check the difference between intialized without any parameter and with parameter
admin.initializeApp({
  credential: admin.credential.cert(
    "/home/nitin/Downloads/service-account-file.json"
  ), // default credentials were not working and the file path couldn't be imported
  databaseURL: "https://letsassess-ad436-default-rtdb.firebaseio.com",
});

const firestore = admin.firestore();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (rreq, res) => {
  res.send("Firebase API");
});

// ASSESSMENTS
// POST
app.post("/assessment", async (req, res) => {
  const data = req.body;
  const documentName = slugify(data.title.toLowerCase());

  let docRef = firestore.doc(`assessment/${documentName}`);
  await docRef.set(data);
  res.sendStatus(200);
});

// ADD QUESTION
// need to ask how to name this api endpoint
app.post("/assessment/add-question", async (req, res) => {
  const data = req.body.question;
  const documentName = slugify(req.body.title.toLowerCase());
  const docRef = firestore.doc(`assessment/${documentName}`);
  await docRef.update({
    questions: admin.firestore.FieldValue.arrayUnion(data),
  });
  res.sendStatus(200);
});

// function to remove correctOption from the data
const removeCorrectOption = (data: {
  durationInMins: number;
  questions: {
    options: any[];
    props: any;
    quesId: string;
    quesValue: string;
    quesType: string;
    useCustomComponent: boolean;
  }[];
}) => {
  const newData: {
    durationInMins: number;
    questions: any[];
  } = {
    durationInMins: data.durationInMins,
    questions: [],
  };

  data.questions.map((question) => {
    const newQuestion = {
      options: [...question.options],
      props: { ...question.props },
      quesId: question.quesId,
      quesValue: question.quesValue,
      quesType: question.quesType,
      useCustomComponent: question.useCustomComponent,
    };
    newData.questions.push(newQuestion);
  });

  return newData;
};

//GET ASSESSMENT DATA WITHOUT CORRECT OPTIONstring
app.get("/assessment/:id", async (req, res) => {
  const assessmentId = slugify(req.params.id.toLowerCase());
  const docRef = firestore.doc(`assessment/${assessmentId}`);
  const documentSnapShot = await docRef.get();
  const data = removeCorrectOption(
    JSON.parse(JSON.stringify(documentSnapShot.data()))
  );
  res.json(data);
});

const PORT = 9000;

app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`);
});
