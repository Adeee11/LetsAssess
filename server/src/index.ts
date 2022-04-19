import express from "express";
import * as admin from "firebase-admin";
import slugify from "slugify";
import cors from "cors";

// didn't upload the private key. remember to generate it in the code.
// Need to check the difference between intialized without any parameter and with parameter
admin.initializeApp({
  credential: admin.credential.cert(
    "H:/Operating System/letsassess-ad436-firebase-adminsdk-rli5w-8e69a15e18.json"
  ), // default credentials were not working and the file path couldn't be imported
  databaseURL: "https://letsassess-ad436-default-rtdb.firebaseio.com",
});

const firestore = admin.firestore();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Firebase API");
});

// ASSESSMENTS
// POST
app.post("/assessment", async (req, res) => {
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
app.post("/assessment/add-question", async (req, res) => {
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

//GET ASSESSMENT DATA WITHOUT CORRECT OPTION
app.get("/assessment/:id", async (req, res) => {
  const assessmentId = slugify(req.params.id.toLowerCase());
  try {
    const docRef = firestore.doc(`assessment/${assessmentId}`);
    const documentSnapShot = await docRef.get();
    const data = removeCorrectOption(
      JSON.parse(JSON.stringify(documentSnapShot.data()))
    );
    res.json(data);
  } catch (error) {
    res.json(error);
  }
});   

// ADDING RESULTS
app.post("/result", async (req, res) => {
  const data = req.body.data;
  const assessmentId = slugify(req.body.assessmentId.toLowerCase());
  try {
    const docRef = firestore.doc(`results/${assessmentId}`);
    const result = await docRef.set(data);
    console.log("Result", result);
    res.sendStatus(200);
  } catch (error) {
    res.json(error);   
  }
});

// Add candidate for a particular assessment
app.post("/result/add-candidate", async (req, res) => {
  const candidateId = slugify(req.body.candidateId, {
    remove: /[*+~.()'"!:@]/g, 
    lower: true,
  });
  const data = req.body.data;
  const assessmentId = slugify(req.body.assessmentId.toLowerCase());
  try {
    const docRef = firestore.doc(`results/${assessmentId}`);
    await docRef.update({
      [candidateId]: data,
    });
    res.sendStatus(200);
  } catch (error) {
    res.json(error);
  }
});

// Add answer marked by a candidate for a question for an assessment
app.post("/result/add-answer", async (req, res) => {
  const assessmentId: string = slugify(req.body.assessmentId.toLowerCase());
  const candidateId: string = slugify(req.body.candidateId, {
    remove: /[*+~.()'"!:@]/g,
    lower: true,   
  });
  const optionMarked: { optionId: string; quesId: string } =
    req.body.optionMarked;
  try {
    const docRef = firestore.doc(`results/${assessmentId}`);
    await docRef.update({
      [`${candidateId}.optionsMarked.${optionMarked.quesId}`]:
        admin.firestore.FieldValue.arrayUnion(optionMarked.optionId),
    });
    res.sendStatus(200);
  } catch (error) {
    res.json(error);
  }
});

// fetch users who submitted  a particular test
app.get("/result/:id", async (req, res) => {
  const assessmentId = req.params.id;
  try {
    const docRef = firestore.doc(`results/${assessmentId}`);
    const documentSnapShot = await docRef.get();
    const data = documentSnapShot.data();
    res.json(data);
  } catch (error) {
    res.json(error);
  }
});

// ADD Candidate
app.post("/candidate", async (req, res) => {
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
app.post("/candidate/calculate-marks", async (req, res) => {
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
      res.json(data[candidateId]);
    } else {
      res.send("No candidate found");
    }
  } catch (error) {
    res.json(error);
  }
});

const PORT = 9000;

app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`);
}); 