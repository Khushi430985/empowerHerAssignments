import express from "express";
import { signupUser, getMyProfile } from "../controllers/userController.js";
import { validateSignup } from "../validations/userValidation.js";

const router = express.Router();

router.post("/signup", validateSignup, signupUser);
router.get("/myprofile", getMyProfile);

export default router;
