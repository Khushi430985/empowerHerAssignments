import bcrypt from "bcrypt";
import { supabase } from "../supabaseClient.js";
import { findUserByEmail } from "../services/userService.js";

export const createUser = async (req, res) => {
  const { name, email, password, age } = req.body;

  const { data: existing } = await findUserByEmail(email);
  if (existing) {
    return res.status(409).json({ error: "Email already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const { error } = await supabase.from("users").insert([
    { name, email, password: hashedPassword, age },
  ]);

  if (error) return res.status(500).json({ error: error.message });

  res.status(201).json({ message: "User created successfully" });
};

export const getUsers = async (req, res) => {
  const { data } = await supabase.from("users").select("*");
  res.json(data);
};

export const getUserById = async (req, res) => {
  const { id } = req.params;

  const { data } = await supabase.from("users").select("*").eq("id", id).single();
  if (!data) return res.status(404).json({ error: "User not found" });

  res.json(data);
};

export const updateUser = async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase.from("users").update(req.body).eq("id", id);
  if (error) return res.status(500).json({ error: error.message });

  res.json({ message: "User updated" });
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase.from("users").delete().eq("id", id);
  if (error) return res.status(500).json({ error: error.message });

  res.json({ message: "User deleted" });
};
