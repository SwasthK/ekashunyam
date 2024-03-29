import { httpStatusCodes } from "../utils/httpStatusCodes.js";
import { User } from "../models/user.model.js";
import { createToken } from "../utils/authentication.js";

const handleRegistration = async (req, res) => {
  const { email, password, collegeName } = req.body;
  if (!(email && password && collegeName)) {
    res.status(402).json({
      sucesss: httpStatusCodes[402],
      message: "Please provide all the credentials",
    });
    return;
  }

  let isEmailAlreadyExist = {};
  try {
    isEmailAlreadyExist = await User.findOne({ email: email });
  } catch (error) {
    console.log("Error occured when checking the duplicate email :", error);
  }

  if (isEmailAlreadyExist) {
    res.status(409).json({
      sucesss: httpStatusCodes[409],
      message: "email already exist",
    });
    return;
  }

  let user = {};
  try {
    user = await User.create({
      email,
      password,
      collegeName,
    });
  } catch (error) {
    console.log("Error occured while creating new user :", error);
  }

  const token = createToken(user);
  user.password = undefined;

  res
    .status(201)
    .cookie("jwtToken", token, {
      expires: new Date(Date.now() + 7), // Expires in 7 Days
      httpOnly: true,
    })
    .json({
      sucesss: httpStatusCodes[201],
      message: "registration complete",
      data: user,
      token: token, // Incase of unavailability of accessing cookies
      isAuth: true,
    });
};

export { handleRegistration };
