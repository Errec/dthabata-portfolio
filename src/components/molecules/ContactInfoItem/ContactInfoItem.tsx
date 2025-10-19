import { Mail, MapPin, Phone } from "lucide-react";

import type { ContactChannel } from "@/types/contact.types";

const icons = {
  mail: Mail,
  phone: Phone,
  location: MapPin,
} as const;

type ContactInfoItemProps = {
  channel: ContactChannel;
};

const ContactInfoItem = ({ channel }: ContactInfoItemProps) => {
  const Icon = icons[channel.iconName];

  return (
    <div className="flex items-center space-x-3">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
        <Icon aria-hidden className="size-5 text-primary" />
      </div>
      <div>
        <p className="font-medium text-foreground">{channel.label}</p>
        {channel.href ? (
          <a
            href={channel.href}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {channel.value}
          </a>
        ) : (
          <p className="text-sm text-muted-foreground">{channel.value}</p>
        )}
      </div>
    </div>
  );
};

export default ContactInfoItem;
