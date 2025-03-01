import { z } from "zod"

export const SignUpSchem = z.object({
    name: z.string({message: "Name is required!"}).min(2, {message: "Name must have at least size 2!"}).max(12, "The max is 12"),
    email: z.string().email({message: "Inform a valid email!"}).max(27, "The max is 27"),
    password: z.string().min(5, {message: "Invalid Password!"})
})