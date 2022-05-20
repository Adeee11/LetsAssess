import { env } from "env";
import jwt from "jsonwebtoken";

// need to ask what types to provide for these
export async function authenticateToken(req: any, res: any, next: any) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // token will be of the form Bearer token
  if (token === null) res.sendStatus(401);
  const accessKey = env("ACCESS_KEY");
  if (accessKey) {
    jwt.verify(token, accessKey, (err: any, decodedJwt: any) => {
      if (err) return res.sendStatus(403);
      res.locals.decodedJwt = decodedJwt;
      next();
    });
  } else {
    res.sendStatus(500);
  }
}
