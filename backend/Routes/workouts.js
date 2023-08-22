import express from "express";
import {
  createWorkout,
  getWorkout,
  getWorkouts,
} from "../controller/workoutControllers.js";

const router = express.Router();

//GET all workouts
router.get("/", getWorkouts);

//Get a single workout
router.get("/:id", getWorkout);

//POST a new workout
router.post("/", createWorkout);

//DELETE workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "workout delete" });
});

//UPDATE workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "workout update" });
});

export default router;
