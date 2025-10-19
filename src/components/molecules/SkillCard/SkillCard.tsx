"use client";

import type { CSSProperties, FocusEventHandler } from "react";
import Image from "next/image";
import { useState } from "react";

import { cn } from "@/utils/cn";

export type SkillCardProps = {
  name: string;
  icon: string;
  summary: string;
  accent?: string;
};

const SkillCard = ({ name, icon, summary, accent = "#0e8388" }: SkillCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  const enableFlip = () => {
    if (!isLocked) {
      setIsFlipped(true);
    }
  };

  const disableFlip = () => {
    if (!isLocked) {
      setIsFlipped(false);
    }
  };

  const handleToggle = () => {
    setIsLocked((previousLocked) => {
      const nextLocked = !previousLocked;
      setIsFlipped(nextLocked);
      return nextLocked;
    });
  };

  const handleBlur: FocusEventHandler<HTMLButtonElement> = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setIsLocked(false);
      setIsFlipped(false);
    }
  };

  return (
    <button
      type="button"
      className={cn(
        "skill-card group relative w-full overflow-visible rounded-xl border border-border bg-card/80 text-left shadow-sm transition-all hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        isFlipped && "shadow-lg",
      )}
      data-flipped={isFlipped ? "true" : "false"}
      onMouseEnter={enableFlip}
      onFocus={enableFlip}
      onMouseLeave={disableFlip}
      onClick={handleToggle}
      onBlur={handleBlur}
      aria-pressed={isLocked}
      aria-label={`${name} - detalhes da habilidade`}
      style={{ "--skill-accent": accent } as CSSProperties}
    >
      <span className="skill-card__inner">
        <span className="skill-card__face skill-card__face--front">
          <span className="skill-card__icon" aria-hidden>
            <Image src={icon} alt="" width={56} height={56} />
          </span>
          <span className="skill-card__label">{name}</span>
        </span>
        <span className="skill-card__face skill-card__face--back">
          <span className="skill-card__title">{name}</span>
          <span className="skill-card__description">{summary}</span>
        </span>
      </span>
    </button>
  );
};

export default SkillCard;
