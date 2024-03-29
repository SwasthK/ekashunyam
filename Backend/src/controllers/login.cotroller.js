import { User } from "../models/user.model.js";
import { createToken } from "../utils/authentication.js";
import { httpStatusCodes } from "../utils/httpStatusCodes.js";

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!(email && password)) {
    res.status(402).json({
      sucess: httpStatusCodes[402],
      message: "Provide all credentials!!",
      isAuth: false,
    });
    return;
  }
  let user;
  try {
    user = await User.findOne({ email: email, password: password });
  } catch (error) {
    console.log("Error occured when fetching data in login :", error);
  }

  if (!user) {
    res.status(401).json({
      sucess: httpStatusCodes[401],
      message: "Invalid credentials!!",
      isAuth: false,
    });
    return;
  }

  const token = createToken(user);

  user.password = undefined;
  res
    .status(200)
    .cookie("jwtToken", token, {
      expires: new Date(Date.now() + 7), // Expires in 7 Days
      httpOnly: true,
    })
    .json({
      sucesss: httpStatusCodes[200],
      message: "Logged in successfully",
      data: user,
      token: token, // Incase of unavailability of accessing cookies
      isAuth: true,
    });
};

export { handleLogin };
