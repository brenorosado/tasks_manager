import api from "./api";
import { Category } from "../entities/category";

export default {
  createCategory: (payload: Category) => api.post("/categories", payload),
  updateCategory: (payload: Category) => api.put("/categories", payload),
  deleteCategory: (categoryId: string) => api.delete(`/categories?id=${categoryId}`),
  getProjectCategories: (projectId: string) => api.get(`/categories?projectId=${projectId}`)
};