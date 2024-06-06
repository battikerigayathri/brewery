import { Schema, model } from "mongoose";

const reviewSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  breweryId: { type: String, required: true },
  content: { type: String, required: true },
  rating: { type: Number, required: true },
});

export default model("Review", reviewSchema);
