import mongoose from "mongoose";
import * as z from "zod";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
  },
  lastName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate(value: string) {
      z.string().email().parse(value);
    },
  },
  password: {
    type: String,
    required: true,
  },
  profilePicUrl: {
    type: String,
  },

  isVerified: {
    type: Boolean,
    default: false,
  },
  verificationOtp: {
    type: String,
    default: "",
  },
  verificationOtpExpiresAt: {
    type: Number,
    default: 0,
  },
  passwordResetOtp: {
    type: String,
    default: "",
  },
  passwordResetOtpExpiresAt: {
    type: Number,
    default: 0,
  },
  isAccountPublic: {
    type: Boolean,
    default: true,
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
