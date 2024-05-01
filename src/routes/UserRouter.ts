import express from "express";
import authenticate from "../middlewares/Auth";
import {
  registerUser,
  loginUser,
  logoutUser,
  getAllUser,
} from "../controllers/UserController";

const userRouter = express.Router();

// routes
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/logout", logoutUser);

userRouter.get("/", authenticate, getAllUser);

export default userRouter;
