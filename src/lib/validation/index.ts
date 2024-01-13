import * as z from "zod"

export const registerFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be atleast 2 characters long" }).max(50),
  username: z.string().min(2, { message: "Username must be atleast 8 characters long" }).max(50),
  email: z.string().email({ message: "Email address is invalid" }).min(2).max(50),
  password: z.string().min(8, { message: "Password must be atleast 8 characters long" }).max(50),
})

export const loginFormSchema = z.object({
  email: z.string().email({ message: "Email address is invalid" }).min(2).max(50),
  password: z.string().min(8, { message: "Password must be atleast 8 characters long" }).max(50),
})

export const postFormSchema = z.object({
  caption: z.string().max(2200, { message: "Maximum 2,200 characters." }),
  image: z.custom<File[]>(),
  location: z.string().max(200),
  tags: z.string(),
})
