import { supabase } from "../supabaseClient.js";

/**
 * ADD TODO
 */
export const addTodo = async (req, res) => {
  try {
    const { title, description, userId } = req.body;

    // Check user exists
    const { data: user } = await supabase
      .from("users")
      .select("id")
      .eq("id", userId)
      .single();

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const { error } = await supabase.from("todos").insert([
      {
        title,
        description,
        user_id: userId,
      },
    ]);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.json({ message: "Todo added successfully" });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

/**
 * GET USER TODOS
 */
export const getMyTodos = async (req, res) => {
  try {
    const { userId } = req.params;

    // Check user exists
    const { data: user } = await supabase
      .from("users")
      .select("id")
      .eq("id", userId)
      .single();

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const { data, error } = await supabase
      .from("todos")
      .select("*")
      .eq("user_id", userId);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

/**
 * UPDATE TODO
 */
export const updateTodo = async (req, res) => {
  try {
    const { todoId } = req.params;
    const { title, description, is_completed } = req.body;

    const { data: todo } = await supabase
      .from("todos")
      .select("*")
      .eq("id", todoId)
      .single();

    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    const { error } = await supabase
      .from("todos")
      .update({
        title,
        description,
        is_completed,
      })
      .eq("id", todoId);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.json({ message: "Todo updated successfully" });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

/**
 * DELETE TODO
 */
export const deleteTodo = async (req, res) => {
  try {
    const { todoId } = req.params;

    const { error } = await supabase.from("todos").delete().eq("id", todoId);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.json({ message: "Todo deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
