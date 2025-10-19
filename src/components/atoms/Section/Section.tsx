import { forwardRef } from "react";

import { cn } from "@/utils/cn";

type SectionElement = HTMLElementTagNameMap["section"];

type SectionProps = React.ComponentPropsWithoutRef<"section"> & {
  as?: keyof Pick<HTMLElementTagNameMap, "section" | "div" | "article">;
};

const Section = forwardRef<SectionElement, SectionProps>(function Section(
  { as: Component = "section", className, ...props },
  ref,
) {
  return <Component ref={ref as never} className={cn("py-20 px-4 sm:px-6 lg:px-8", className)} {...props} />;
});

export default Section;
