import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, "../db.json");

export default function uniqueEmail(req, res, next) {
  const data = JSON.parse(fs.readFileSync(dbPath, "utf-8"));
  const exists = data.find(u => u.email === req.body.email);

  if (exists) {
    return res.status(409).json({ error: "Email already exists" });
  }

  next();
}
