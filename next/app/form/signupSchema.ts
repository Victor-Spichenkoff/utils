import { z } from "zod"

export const SignUpSchem = z.object({
    name: z.string({message: "Name is required!"}).min(2, {message: "Name must have at least size 2!"}),
    email: z.string().email({message: "Inform a valid email!"}),
    password: z.string().min(5, {message: "Invalid Password!"})
})