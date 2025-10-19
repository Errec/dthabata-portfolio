import { cn } from "@/utils/cn";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingTagName = `h${HeadingLevel}`;

const headingTagMap = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
} as const satisfies Record<HeadingLevel, HeadingTagName>;

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  headingLevel?: HeadingLevel;
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
  const HeadingTag = headingTagMap[headingLevel];

  return (
    <header className={wrapperClassName}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      ) : null}
      <HeadingTag id={id} className={headingClassName}>
        {title}
      </HeadingTag>
      {description ? (
        <p className={cn("max-w-2xl text-base text-muted-foreground", align === "center" && "mx-auto")}>{description}</p>
      ) : null}
    </header>
  );
};

export default SectionHeading;
