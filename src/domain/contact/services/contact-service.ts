import type { ContactFormValues } from "@/domain/contact/types/contact-form.types";

const SUBMIT_DELAY_IN_MS = 1200;

export async function submitContactForm(values: ContactFormValues): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, SUBMIT_DELAY_IN_MS));

  // Este stub simula uma chamada de API. Substitua pela integração real quando disponível.
  void values;
}
