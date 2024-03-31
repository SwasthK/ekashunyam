class ApiError {
  constructor(statusCode, message = "some thing went wrong", err = []) {
    this.statusCode = statusCode;
    this.message = message;
    this.success = false;
    this.err = err;
  }
}

export { ApiError };
