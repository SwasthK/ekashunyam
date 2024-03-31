import { ApiResponse } from "./apiResponse.js";

const asyncHanlder = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    res
      .status(500 || error.statusCode)
      .json(new ApiResponse(error.statusCode, error.data || {}, error.message));
    // console.log("Runtime Error handlerd by asycnHanlder:", error);   //enable for runtime error
  }
};

export { asyncHanlder };
