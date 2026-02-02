import { supabase } from "../config/supabase.js";

export const createTodo = async (req, res) => {
  try {
    const { title } = req.body;
    const userId = req.user.userId;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const { data, error } = await supabase
      .from("todos")
      .insert([{ title, userId }])
      .select()
      .single();

    if (error) return res.status(400).json({ message: "Error creating todo" });

    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getTodos = async (req, res) => {
  const userId = req.user.userId;

  const { data, error } = await supabase
    .from("todos")
    .select("*")
    .eq("userId", userId);

  if (error) return res.status(400).json({ message: "Error fetching todos" });

  res.status(200).json(data);
};

export const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  const userId = req.user.userId;

  const { data: existing } = await supabase
    .from("todos")
    .select("*")
    .eq("id", id)
    .single();

  if (!existing) {
    return res.status(404).json({ message: "Todo not found" });
  }

  if (existing.userId !== userId) {
    return res.status(403).json({ message: "Forbidden: Not your todo" });
  }

  const { data, error } = await supabase
    .from("todos")
    .update({ title, completed })
    .eq("id", id)
    .select()
    .single();

  if (error) return res.status(400).json({ message: "Update failed" });

  res.status(200).json(data);
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.userId;

  const { data: existing } = await supabase
    .from("todos")
    .select("*")
    .eq("id", id)
    .single();

  if (!existing) {
    return res.status(404).json({ message: "Todo not found" });
  }

  if (existing.userId !== userId) {
    return res.status(403).json({ message: "Forbidden: Not your todo" });
  }

  await supabase.from("todos").delete().eq("id", id);

  res.status(200).json({ message: "Todo deleted" });
};
