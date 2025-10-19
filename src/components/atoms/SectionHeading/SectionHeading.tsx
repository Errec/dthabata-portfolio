import { createElement } from "react";

import { cn } from "@/utils/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  id?: string;
};

const alignment: Record<NonNullable<SectionHeadingProps["align"]>, string> = {
  left: "items-start text-left",
  center: "items-center text-center",
};

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
  headingLevel = 2,
  id,
}: SectionHeadingProps) => {
  const headingClassName =
    "text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight";
  const wrapperClassName = cn("mb-16 flex flex-col gap-4", alignment[align]);

  return (
    <header className={wrapperClassName}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      ) : null}
      {createElement(
        `h${headingLevel}` as keyof JSX.IntrinsicElements,
        { id, className: headingClassName },
        title,
      )}
      {description ? (
        <p className={cn("max-w-2xl text-base text-muted-foreground", align === "center" && "mx-auto")}>{description}</p>
      ) : null}
    </header>
  );
};

export default SectionHeading;
