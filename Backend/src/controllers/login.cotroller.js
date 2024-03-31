import { User } from "../models/user.model.js";
import { createToken } from "../utils/authentication.js";
import { VerifyHashedPassword } from "../utils/hashing.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { ApiError } from "../utils/apiError.js";

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!(email && password)) {
    res.status(402).json(new ApiError(402, "Provide all credentials !!"));
    return;
  }
  let user;
  try {
    user = await User.findOne({ email: email });
  } catch (error) {
    res
      .status(500)
      .json(new ApiError(500, "Error occured when querying db", error));
  }

  if (!user || !(await VerifyHashedPassword(password, user.password))) {
    res.status(401).json(new ApiError(401, "Invalid credentials"));
    return;
  }

  const token = createToken(user);

  user.password = undefined;
  res
    .status(200)
    .cookie("jwtToken", token, {
      expires: new Date(Date.now() + 7), // Expires in 7 Days
      httpOnly: true,
      //  secure: true,               // ! turn on when https availble
    })
    .json(new ApiResponse(200, user, "Logged in successfully", token)); // remove token in production
};

export { handleLogin };

//     .json({
//       sucesss: httpStatusCodes[200],
//       message: "Logged in successfully",
//       data: user,
//       token: token, // Incase of unavailability of accessing cookies
//       isAuth: true,
//     });

// res.status(401).json({
//   sucess: httpStatusCodes[401],
//   message: "Invalid credentials!!",
//   isAuth: false,
// });

//  res.status(402).json({
//    sucess: httpStatusCodes[402],
//    message: "Provide all credentials!!",
//    isAuth: false,
//  });
