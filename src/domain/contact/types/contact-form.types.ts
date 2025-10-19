import type { z } from "zod";

import type { contactFormSchema } from "@/domain/contact/utils/contact-form-schema";

export type ContactFormValues = z.infer<typeof contactFormSchema>;
