import bcrypt from "bcryptjs";
import mongoose from "mongoose";

const profileImageSchema = new mongoose.Schema(
  {
    url: { type: String, default: "" },
    publicId: { type: String, default: "" },
  },
  { _id: false },
);

const userSchema = new mongoose.Schema(
  {
    displayName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      minlength: 3,
      maxlength: 30,
      match: /^[a-z0-9_]+$/,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      maxlength: 254,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      select: false,
    },
    profilePicture: { type: profileImageSchema, default: () => ({}) },
    coverPicture: { type: profileImageSchema, default: () => ({}) },
    bio: {
      type: String,
      default: "",
      maxlength: 160,
    },
    dateOfBirth: {
      type: Date,
      default: null,
      validate: {
        validator: (date) => !date || date <= new Date(),
        message: "Date of birth cannot be in the future.",
      },
    },
    location: {
      type: String,
      default: "",
      trim: true,
      maxlength: 100,
    },
    website: {
      type: String,
      default: "",
      trim: true,
      maxlength: 2048,
    },
  },
  { timestamps: true },
);

userSchema.pre("save", async function () {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
});

userSchema.methods.comparePassword = function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
