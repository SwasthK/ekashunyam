import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHanlder } from "../utils/asyncHandler.js";
import { verifyToken } from "../utils/authentication.js";

const handleVerifyToken = asyncHanlder((req, res) => {
  // const token = req.headers.authorization.split("Bearer ")[1].trim();
  const token = req.cookies.accessToken;
  const isTokenValid = verifyToken(token);
  if (isTokenValid) {
    res.status(200).json(new ApiResponse(200, null, "Token is valid", token)); // might remove token
    return;
  }
});

export { handleVerifyToken };
