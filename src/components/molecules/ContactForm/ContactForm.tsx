"use client";

import { useState } from "react";

import { Button } from "@/components/atoms/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/atoms/Card";
import Input from "@/components/atoms/Input";
import Label from "@/components/atoms/Label";
import Textarea from "@/components/atoms/Textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Responderei em breve!",
    });

    setIsSubmitting(false);
    event.currentTarget.reset();
  };

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
          onSubmit={handleSubmit}
          className="space-y-6"
          aria-label="Formulário de contato"
          aria-busy={isSubmitting}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <Label htmlFor="name">Nome *</Label>
              <Input id="name" name="name" placeholder="Seu nome completo" required autoComplete="name" />
            </div>
            <div className="space-y-3">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" placeholder="seu@email.com" required autoComplete="email" />
            </div>
          </div>
          <div className="space-y-3">
            <Label htmlFor="subject">Assunto</Label>
            <Input id="subject" name="subject" placeholder="Assunto da mensagem" />
          </div>
          <div className="space-y-3">
            <Label htmlFor="message">Mensagem *</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Escreva sua mensagem aqui..."
              className="min-h-[120px]"
              required
            />
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
