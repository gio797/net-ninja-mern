import express from "express";
import dotEnv from "dotenv";
dotEnv.config();
import mongoose from "mongoose";
import workoutRoutes from "./Routes/workouts.js";

const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/workouts", workoutRoutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Connected to db & listening on port 4000!`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
