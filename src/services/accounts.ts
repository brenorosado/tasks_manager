import api from "./api";

export const accounts = {
  getAccountById: (id: string) => api.get(`/accounts/${id}`)
};