const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    dob: { type: String, required: true },
    picture: { type: String, default: "" },
    bio: { type: String, default: "I'm new here" },
    education: { type: String, default: "" },
    interest: { type: Array },
    state: { type: String, required: true },
    gender: { type: String, required: true },
    liked: { type: Array },
    favorite: { type: Array },
    isAdmin: { type: Boolean },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
