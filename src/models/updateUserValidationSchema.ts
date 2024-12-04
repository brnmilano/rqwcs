import { z } from "zod";

export const userFistAndLastName = z.object({
  id: z.number(),
  firstname: z.string().min(1),
  lastname: z.string().min(1),
});

export type UserFistAndLastName = z.infer<typeof userFistAndLastName>;
