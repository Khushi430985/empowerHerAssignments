import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

const dbPath = path.join(__dirname, "db.json");

function readDB() {
  const data = fs.readFileSync(dbPath, "utf-8");
  return JSON.parse(data);
}

function writeDB(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

app.get("/students", (req, res) => {
  const students = readDB();
  res.json(students);
});

app.post("/students", (req, res) => {
  const students = readDB();
  const newStudent = req.body;

  if (!newStudent.name || !newStudent.course || !newStudent.year) {
    return res.status(400).json({ message: "All fields are required" });
  }

  newStudent.id = students.length > 0 ? students[students.length - 1].id + 1 : 1;
  students.push(newStudent);
  writeDB(students);

  res.json({ message: "Student added successfully", student: newStudent });
});

app.put("/students", (req, res) => {
  const students = readDB();
  const { id } = req.body;

  const index = students.findIndex((s) => s.id === Number(id));

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  students[index] = { ...students[index], ...req.body };
  writeDB(students);

  res.json({ message: "Student updated successfully", student: students[index] });
});

app.delete("/students/:id", (req, res) => {
  const students = readDB();
  const id = Number(req.params.id);

  const index = students.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  const deletedStudent = students.splice(index, 1);
  writeDB(students);

  res.json({ message: "Student deleted successfully", student: deletedStudent[0] });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
