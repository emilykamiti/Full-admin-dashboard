import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      requiured: true,
      min: 2,
      max: 100,
    },

    email: {
      type: String,
      requiured: true,
      max: 50,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      min: 5,
    },
    city: String,
    state: String,
    occupation: String,
    country: String,
    phoneNumber: String,
    transactions: Array,
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "admin",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
