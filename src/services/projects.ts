import { ProjectPayload } from "../entities/project";
import api from "./api";

export const fetchProjects = {
  getUserProjects: () => api.get("/projects"),
  getProjectById: (id: string) => api.get(`/projects/${id}`),
  createProject: (payload: ProjectPayload) => api.post("/projects", payload),
  updateProject: (payload: ProjectPayload) => api.put("/projects", payload),
  deleteProject: (id: string) => api.delete(`/projects?id=${id}`)
};