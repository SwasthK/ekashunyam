import mongoose from "mongoose";

const participantSchema = mongoose.Schema({
  participantName: {
    type: String,
    required: [true, "Participant name is required"],
  },
  contactNumber: {
    type: String,
    required: [true, "contact number name is required"],
  },
});

const eventSchema = mongoose.Schema({
  eventName: {
    type: String,
    required: [true, "Event name is required"],
  },
  participants: {
    type: [participantSchema],
    required: [true, "Participants are required"],
  },
});

const registrationSchema = mongoose.Schema(
  {
    registeredUser: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      unique: true,
    },
    event: {
      type: [eventSchema],
      required: [true, "events are required"],
    },
  },
  { timestamps: true }
);

const Registration = mongoose.model("Registration", registrationSchema);
export { Registration };
