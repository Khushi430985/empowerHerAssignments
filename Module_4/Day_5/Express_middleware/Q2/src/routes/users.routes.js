import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import upload from "../middleware/upload.middleware.js";
import uniqueEmail from "../middleware/uniqueEmail.middleware.js";
import cloudinary from "../config/cloudinary.config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, "../db.json");

const router = express.Router();

function readDB() {
  return JSON.parse(fs.readFileSync(dbPath, "utf-8"));
}

function writeDB(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

router.post("/signup", upload.single("profile"), uniqueEmail, async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Profile image is required" });
    }

    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { resource_type: "image" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      ).end(req.file.buffer);
    });

    const users = readDB();

    const newUser = {
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      profilePic: result.secure_url
    };

    users.push(newUser);
    writeDB(users);

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        profilePic: newUser.profilePic
      }
    });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default router;
