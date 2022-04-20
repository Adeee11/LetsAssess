import jwt from "jsonwebtoken";
import admin from "../config/firebaseConfig";

const fireStore = admin.firestore();

// need to ask what types to provide for these
export async function authenticateToken(req: any, res: any, next: any) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // token will be of the form Bearer token
  if (token === null) res.sendStatus(401);
  const docRef = fireStore.doc("miscellaneous/ACCESS_KEY");
  const SECRET_KEY = (await docRef.get()).data();
  if (SECRET_KEY) {
    jwt.verify(
      token,
      SECRET_KEY.JWT_KEY,
      //{ complete: true },
      (err: any, decodedJwt: any) => {
        if (err) return res.sendStatus(403);
        res.locals.decodedJwt = decodedJwt;
        // console.log("DECODED JWT", decodedJwt);
        next();
      }
    );
  } else {
    res.sendStatus(500);
  }
}
