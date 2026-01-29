import express from "express";
import { signupUser } from "../controllers/userController.js";
import { validateSignup } from "../validations/userValidation.js";

const router = express.Router();

router.post("/signup", validateSignup, signupUser);

export default router;
