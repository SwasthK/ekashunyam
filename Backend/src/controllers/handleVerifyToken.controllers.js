import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { verifyToken } from "../utils/authentication.js";

const handleVerifyToken = (req, res) => {
  const token = req.headers.authorization.split("Bearer ")[1].trim();
  const isTokenValid = verifyToken(token);
  if (isTokenValid) {
    res.status(200).json(new ApiResponse(200, null, "Token is valid", token)); // might remove token
    return;
  }
  res.status(401).json(new ApiError(401, "Invalid token"));
};

export { handleVerifyToken };
