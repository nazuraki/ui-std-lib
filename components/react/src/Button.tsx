import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual emphasis. Maps to .nb-btn--{variant}. */
  variant?: "default" | "primary" | "accent" | "danger";
  /** Size. "sm" maps to .nb-btn--sm for inline/table-row actions; "md" is the default. */
  size?: "sm" | "md";
}

export function Button({ variant = "default", size = "md", className, ...rest }: ButtonProps) {
  const classes = ["nb-btn"];
  if (variant !== "default") classes.push(`nb-btn--${variant}`);
  if (size === "sm") classes.push("nb-btn--sm");
  if (className) classes.push(className);
  return <button className={classes.join(" ")} {...rest} />;
}
