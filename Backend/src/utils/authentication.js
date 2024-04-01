import jwt from "jsonwebtoken";
import { ApiError } from "./apiError.js";
const secretKey = process.env.jwtsecretKey || "for deocker only";
function createToken(user) {
  return jwt.sign({ id: user._id, mail: user.email }, secretKey, {
    expiresIn: "7d", //expires in 7 days
  });
}

function verifyToken(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    throw new ApiError(401, "Invalid token");
  }
}

export { createToken, verifyToken };
