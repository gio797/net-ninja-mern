import express from "express";
import {
  createWorkout,
  deleteWorkout,
  getWorkout,
  getWorkouts,
  updateWorkout,
} from "../controller/workoutControllers.js";

const router = express.Router();

//GET all workouts
router.get("/", getWorkouts);

//Get a single workout
router.get("/:id", getWorkout);

//POST a new workout
router.post("/", createWorkout);

//DELETE workout
router.delete("/:id", deleteWorkout);

//UPDATE workout
router.patch("/:id", updateWorkout);

export default router;
