import { z } from "zod";

const userSchema = z.object({
    nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
    email: z.string().email("Debe ser un email válido"),
    edad: z.number().int().min(0, "Edad debe ser mayor a 0").optional()
});

const userUpdateSchema = z.object({
    nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres").optional(),
    email: z.string().email("Debe ser un email válido").optional(),
    edad: z.number().int().min(0, "Edad debe ser mayor a 0").optional()
});

const idSchema = z.object({
    id: z.string().regex(/^\d+$/, "ID debe ser un número positivo")
});

export { userSchema, userUpdateSchema, idSchema };