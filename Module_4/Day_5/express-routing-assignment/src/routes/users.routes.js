import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, "../db.json");


function readDB() {
  const data = fs.readFileSync(dbPath, "utf-8");
  return JSON.parse(data);
}

function writeDB(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}


router.post("/add", (req, res) => {
  const db = readDB();
  const newUser = req.body;

  if (!newUser.id || !newUser.name) {
    return res.status(400).json({ message: "User must have id and name" });
  }

  const exists = db.users.find(u => u.id === newUser.id);
  if (exists) {
    return res.status(400).json({ message: "User already exists" });
  }

  db.users.push(newUser);
  writeDB(db);

  res.status(201).json({ message: "User added successfully", user: newUser });
});


router.get("/", (req, res) => {
  const db = readDB();
  res.json(db.users);
});

router.get("/:userId", (req, res) => {
  const { userId } = req.params;
  const db = readDB();

  const user = db.users.find(u => u.id == userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});


router.put("/update/:userId", (req, res) => {
  const { userId } = req.params;
  const db = readDB();

  const index = db.users.findIndex(u => u.id == userId);
  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  db.users[index] = { ...db.users[index], ...req.body };
  writeDB(db);

  res.json({ message: "User updated", user: db.users[index] });
});


router.delete("/delete/:userId", (req, res) => {
  const { userId } = req.params;
  const db = readDB();

  const index = db.users.findIndex(u => u.id == userId);
  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  const deletedUser = db.users.splice(index, 1);
  writeDB(db);

  res.json({ message: "User deleted", user: deletedUser[0] });
});

export default router;
