import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    // userName: {
    //   type: String,
    //   required: [true, "username is required"],
    //   unique: true,
    //   lowercase: true,
    // },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    collegeName: {
      type: String,
      required: [true, "collegeName is required"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export { User };
