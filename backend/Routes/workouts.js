import express from "express";
import Workout from "../models/workoutModel.js";

const router = express.Router();

//GET all workouts
router.get("/", (req, res) => {
  res.json({ msg: "GET all workouts" });
});

//Get a single workout
router.get("/:id", (req, res) => {
  //   console.log(req.params);
  res.json({ msg: "GET a single workouts" });
});

//POST a new workout
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//DELETE workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "workout delete" });
});

//UPDATE workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "workout update" });
});

export default router;
