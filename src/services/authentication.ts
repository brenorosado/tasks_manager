import api from "./api";
import { AuthenticationPayload } from "../entities/authentication";

export const authentication = {
  createAccount: (payload: AuthenticationPayload) => api.post("/accounts", payload),
  authenticate: (payload: AuthenticationPayload) => api.post("/authenticate", payload)
};