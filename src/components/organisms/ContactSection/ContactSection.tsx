import Section from "@/components/atoms/Section";
import SectionHeading from "@/components/atoms/SectionHeading";
import ContactForm from "@/components/molecules/ContactForm";
import ContactInfoItem from "@/components/molecules/ContactInfoItem";
import { CONTACT_CHANNELS } from "@/constants/contact";

const ContactSection = () => (
  <Section id="contact" aria-labelledby="contact-heading">
    <div className="mx-auto max-w-6xl">
      <SectionHeading
        id="contact-heading"
        title="Contato"
        eyebrow="Vamos conversar"
        description="Sinta-se à vontade para entrar em contato enviando o formulário abaixo. Responderei o mais rápido possível."
      />

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
        <aside className="space-y-8 text-muted-foreground">
          <div className="space-y-4 text-foreground">
            <h3 className="text-2xl font-semibold">Vamos conversar</h3>
            <p>
              Estou sempre interessada em ouvir sobre novos projetos e oportunidades. Compartilhe algumas informações e vamos
              descobrir como posso ajudar.
            </p>
          </div>
          <div className="space-y-6">
            {CONTACT_CHANNELS.map((channel) => (
              <ContactInfoItem key={channel.label} channel={channel} />
            ))}
          </div>
          <p className="text-sm">
            Tempo de resposta médio:
            {" "}
            <span className="font-medium text-foreground">24 horas</span>
          </p>
        </aside>

        <ContactForm />
      </div>
    </div>
  </Section>
);

export default ContactSection;
