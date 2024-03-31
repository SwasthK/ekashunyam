import { User } from "../models/user.model.js";
import { createToken } from "../utils/authentication.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";

const handleRegistration = async (req, res) => {
  const { email, password, collegeName } = req.body;
  if (!(email && password && collegeName)) {
    res
      .status(402)
      .json(new ApiError(402, "Please provide all the credentials"));
    return;
  }

  let isEmailAlreadyExist = {};
  try {
    isEmailAlreadyExist = await User.findOne({ email: email });
  } catch (error) {
    res
      .status(500)
      .json(new ApiError(500, "duplicate email validation error", error));
    return;
  }

  if (isEmailAlreadyExist) {
    res.status(409).json(new ApiError(409, "Email already exist"));
    return;
  }

  let user = {};
  try {
    user = await User.create({
      email: email.toLowerCase().trim(),
      password: password.trim(),
      collegeName,
    });
  } catch (error) {
    res.status(500).json(new ApiError(500, "user creation  error", error));
    return;
  }

  const token = createToken(user);
  user.password = undefined;

  res
    .status(201)
    .cookie("jwtToken", token, {
      expires: new Date(Date.now() + 7), // Expires in 7 Days
      httpOnly: true,
      // ! secure: true,  turn on when https availble
    })
    .json(new ApiResponse(201, user, "Registraion complete", token)); // Remove token in production
};

export { handleRegistration };

// res
//   .status(201)
//   .cookie("jwtToken", token, {
//     expires: new Date(Date.now() + 7), // Expires in 7 Days
//     httpOnly: true,
//   })
//   .json({
//     sucesss: httpStatusCodes[201],
//     message: "registration complete",
//     data: user,
//     token: token, // Incase of unavailability of accessing cookies
//     isAuth: true,
//   });
//};

// res.status(402).json({
//   sucesss: httpStatusCodes[402],
//   message: "Please provide all the credentials",
// });
