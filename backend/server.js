import express from "express";
import dotEnv from "dotenv";
dotEnv.config();
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

app.listen(process.env.PORT, () => {
  console.log(`listening on port 4000!`);
});
