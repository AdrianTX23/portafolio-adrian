import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Escribe tu nombre completo").max(80),
  email: z.email("Ingresa un correo válido"),
  message: z.string().trim().min(10, "Cuéntame un poco más (mínimo 10 caracteres)").max(2000),
  company: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
