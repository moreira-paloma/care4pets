import { api } from "./api";

export function getPets() {
  return api.get("/pets");
}

export function createPet(data) {
  return api.post("/pets", data);
}

export function updatePet(id, data) {
  return api.put(`/pets/${id}`, data);
}

export function deletePet(id) {
  return api.delete(`/pets/${id}`);
}
