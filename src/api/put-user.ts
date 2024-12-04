import { api } from "@/lib/axios";
import type { UserProps } from "@/types/users";

export async function reqUpdateUser({ id, name }: UserProps) {
  const { firstname, lastname } = name;

  await api.put(`/users/${id}`, {
    firstname,
    lastname,
  });
}
