import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string({ required_error: "Informe seu nome." })
    .trim()
    .min(2, "Informe seu nome completo."),
  email: z
    .string({ required_error: "Informe seu email." })
    .trim()
    .email("Informe um endereço de email válido."),
  subject: z
    .string()
    .trim()
    .max(80, "O assunto deve ter no máximo 80 caracteres.")
    .default(""),
  message: z
    .string({ required_error: "Escreva sua mensagem." })
    .trim()
    .min(10, "A mensagem deve ter pelo menos 10 caracteres."),
});

export const contactFormDefaultValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
} satisfies z.infer<typeof contactFormSchema>;
