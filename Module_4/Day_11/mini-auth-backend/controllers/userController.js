import bcrypt from "bcrypt";
import { supabase } from "../supabaseClient.js";

export const signupUser = async (req, res) => {
  try {
    const { name, email, age, location, password } = req.body;

    // check duplicate email
    const { data: existingUser } = await supabase
      .from("users")
      .select("id")
      .eq("email", email)
      .single();

    if (existingUser) {
      return res.status(409).json({ error: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const { error } = await supabase.from("users").insert([
      { name, email, age, location, password: hashedPassword },
    ]);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const getMyProfile = async (req, res) => {
  try {
    const { name } = req.query;

    const { data, error } = await supabase
      .from("users")
      .select("id, name, email, age, location")
      .eq("name", name)
      .single();

    if (!data) {
      return res.status(404).json({ error: "User not found" });
    }

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
