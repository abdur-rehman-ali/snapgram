import * as z from "zod"

export const registerFomSchema = z.object({
  name: z.string().min(2).max(50),
  username: z.string().min(2).max(50),
  email: z.string().email().min(2).max(50),
  password: z.string().min(8).max(50),
})