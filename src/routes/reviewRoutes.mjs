import User from "../model/user.mjs";
import Review from "../model/review.mjs";

import { Router } from "express";

const router = Router();

// Add review
router.post("/", async (req, res) => {
  const { breweryId, content, rating, userId } = req.body;
  try {
    const review = new Review({ user: userId, breweryId, content, rating });
    await review.save();
    res.status(201).json({ message: "Review added" });
  } catch (error) {
    res.status(500).json({ error: "Failed to add review" });
  }
});

// Get reviews for a brewery
router.get("/:breweryId", async (req, res) => {
  const { breweryId } = req.params;
  try {
    const reviews = await Review.find({ breweryId }).populate(
      "user",
      "username"
    );
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
});

export default router;
