"use client";

import { Button } from "@/components/atoms/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/atoms/Card";
import Input from "@/components/atoms/Input";
import Label from "@/components/atoms/Label";
import Textarea from "@/components/atoms/Textarea";
import { useContactForm } from "@/domain/contact/hooks/useContactForm";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { register, handleSubmit, reset, submit, formState } = useContactForm();
  const { errors, isSubmitting } = formState;
  const { toast } = useToast();

  const onSubmit = handleSubmit(
    async (values) => {
      await submit(values);

      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Responderei em breve!",
      });

      reset();
    },
    () => {
      toast({
        title: "Revise os campos destacados",
        description: "Alguns dados precisam de atenção antes do envio.",
        variant: "destructive",
      });
    },
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Envie uma mensagem</CardTitle>
        <CardDescription>
          Preencha o formulário abaixo e entrarei em contato com você em breve.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={onSubmit}
          noValidate
          className="space-y-6"
          aria-label="Formulário de contato"
          aria-busy={isSubmitting}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <Label htmlFor="name">Nome *</Label>
              <Input
                id="name"
                autoComplete="name"
                placeholder="Seu nome completo"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                {...register("name")}
              />
              {errors.name ? (
                <p id="contact-name-error" role="alert" className="text-sm text-destructive">
                  {errors.name.message}
                </p>
              ) : null}
            </div>
            <div className="space-y-3">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="seu@email.com"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
                {...register("email")}
              />
              {errors.email ? (
                <p id="contact-email-error" role="alert" className="text-sm text-destructive">
                  {errors.email.message}
                </p>
              ) : null}
            </div>
          </div>
          <div className="space-y-3">
            <Label htmlFor="subject">Assunto</Label>
            <Input
              id="subject"
              placeholder="Assunto da mensagem"
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? "contact-subject-error" : undefined}
              {...register("subject")}
            />
            {errors.subject ? (
              <p id="contact-subject-error" role="alert" className="text-sm text-destructive">
                {errors.subject.message}
              </p>
            ) : null}
          </div>
          <div className="space-y-3">
            <Label htmlFor="message">Mensagem *</Label>
            <Textarea
              id="message"
              placeholder="Escreva sua mensagem aqui..."
              className="min-h-[144px]"
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
              {...register("message")}
            />
            {errors.message ? (
              <p id="contact-message-error" role="alert" className="text-sm text-destructive">
                {errors.message.message}
              </p>
            ) : null}
          </div>
          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <span
                  aria-hidden
                  className="mr-2 inline-flex size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
                />
                Enviando...
              </>
            ) : (
              <>Enviar mensagem</>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
