import axiosInstance from "./axiosInstance";

// Get all todos
export const getTodos = async () => {
  const response = await axiosInstance.get("/todos");
  return response.data;
};

// Get todo by id
export const getTodoById = async (id) => {
  const response = await axiosInstance.get(`/todos/${id}`);
  return response.data;
};
