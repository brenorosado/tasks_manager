import { api } from "./api";
import { AuthenticationPayload } from "./../entities/authenticationResponse";

export const authentication = {
  createAccount: (payload: AuthenticationPayload) => {
    return api.post("/accounts", payload);
  },

  authenticate: (payload: AuthenticationPayload) => {
    return api.post("/authenticate", payload);
  }
};