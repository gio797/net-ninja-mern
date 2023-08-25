import User from "../models/userModel.js";

//login user
export const loginUser = async (req, res) => {
  console.log("hii");
  res.json({ msg: "login user" });
};

//signup user
export const signupUser = async (req, res) => {
  res.json({ msg: "signup user" });
};
