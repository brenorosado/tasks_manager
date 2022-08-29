import api from "./api";
import { Category } from "../entities/category";

export default {
  createCategory: (payload: Category) => api.post("/categories", payload),
  
  getProjectCategories: (projectId: string) => api.get(`/tasks?projectId=${projectId}`)
};