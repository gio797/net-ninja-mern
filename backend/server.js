import express from "express";
import dotEnv from "dotenv";
dotEnv.config();

const app = express();

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Welcome to the app" });
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port 4000!`);
});
