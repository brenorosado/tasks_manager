import { ProjectPayload } from "../entities/project";
import api from "./api";

export const fetchProjects = {
  getUserProjects: () => api.get("/user-projects"),

  createProject: (payload: ProjectPayload) => api.post("/projects", payload)
};