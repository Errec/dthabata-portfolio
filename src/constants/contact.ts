import type { ContactChannel } from "@/types/contact.types";

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    label: "Email",
    value: "dornelasthabata@gmail.com",
    href: "mailto:dornelasthabata@gmail.com",
    iconName: "mail",
  },
  {
    label: "Telefone",
    value: "+55 (31) 99667-7177",
    href: "tel:+5531996677177",
    iconName: "phone",
  },
  {
    label: "Localização",
    value: "Rio de Janeiro/RJ, Brasil",
    iconName: "location",
  },
];
