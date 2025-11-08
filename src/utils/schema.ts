import { z } from "zod";

export const RegisterBodySchema = z.object({
  firstName: z.string().min(3).max(20),
  lastName: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(6),
  profilePicUrl: z.string().url().optional(),
});
