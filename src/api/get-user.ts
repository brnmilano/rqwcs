import { api } from "@/lib/axios";

export async function getUsers() {
  const response = await api.get("/users");

  return response.data.users;
}
