import express from "express";
import admin from "../config/firebaseConfig";

const router = express.Router();
const firestore = admin.firestore();

router.get("/candidates", async (req, res) => {
  try {
    const collectionRef = firestore.collection(`candidates`);
    const querySnapshot = await collectionRef
      .select("candidateName", "email")
      .get();
    const data: any[] = [];
    querySnapshot.forEach((documentSnapshot) =>
      data.push(documentSnapshot.data())
    );
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
