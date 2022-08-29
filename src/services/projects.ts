import { ProjectPayload } from "../entities/project";
import api from "./api";

export const fetchProjects = {
  getProjectById: (id: string) => api.get(`/projects/${id}`),

  getUserProjects: () => api.get("/projects"),

  createProject: (payload: ProjectPayload) => api.post("/projects", payload),

  updateProject: (payload: ProjectPayload) => api.put("/projects", payload)
};