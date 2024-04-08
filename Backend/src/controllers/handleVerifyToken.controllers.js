import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { verifyToken } from "../utils/authentication.js";

const handleVerifyToken = asyncHandler((req, res) => {
  const authorizationHeader = req.headers.authorization;
  let token = null;
  if (authorizationHeader && authorizationHeader.startsWith("Bearer ")) {
    token = authorizationHeader.split("Bearer ")[1].trim();
  }

  const isTokenValid = verifyToken(token);
  if (isTokenValid) {
    res.status(200).json(new ApiResponse(200, null, "Token is valid", token)); // might remove token
  }
});

export { handleVerifyToken };