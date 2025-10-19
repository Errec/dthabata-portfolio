import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { submitContactForm } from "@/domain/contact/services/contact-service";
import type { ContactFormValues } from "@/domain/contact/types/contact-form.types";
import { contactFormDefaultValues, contactFormSchema } from "@/domain/contact/utils/contact-form-schema";

export const useContactForm = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: contactFormDefaultValues,
    mode: "onBlur",
  });

  const submit = async (values: ContactFormValues) => {
    await submitContactForm(values);
  };

  return {
    register: form.register,
    handleSubmit: form.handleSubmit,
    reset: form.reset,
    formState: form.formState,
    submit,
  };
};
