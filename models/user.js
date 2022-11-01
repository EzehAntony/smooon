import { Schema, models, model } from "mongoose";

const userSchema = new Schema(
    {
        firstname: { type: String, required: true },
        lastname: { type: String, required: true },
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        dob: { type: String, required: true },
        picture: { type: String, default: "" },
        bio: { type: String, default: "Hello everyone, I'm new here and I hope to meet someone good! " },
        education: { type: String, default: "" },
        interest: { type: Array },
        state: { type: String, required: true },
        gender: { type: String, required: true },
        liked: { type: Array },
        favorite: { type: Array },
        isAdmin: { type: Boolean, default: false },
    },
    { timestamps: true }
);

export default models.user || model("user", userSchema);
