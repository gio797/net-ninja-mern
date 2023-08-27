import express from "express";
import {
  createWorkout,
  deleteWorkout,
  getWorkout,
  getWorkouts,
  updateWorkout,
} from "../controller/workoutControllers.js";
import requireAuth from "../middleware/requireAuth.js";

const router = express.Router();

// require auth for all workout routes
router.use(requireAuth);

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
