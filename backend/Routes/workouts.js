import express from "express";

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
router.post("/", (req, res) => {
  res.json({ msg: "POST a new workouts" });
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
