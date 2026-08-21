import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual emphasis. Maps to .nb-btn--{variant}. */
  variant?: "default" | "primary" | "accent" | "danger";
}

export function Button({ variant = "default", className, ...rest }: ButtonProps) {
  const classes = ["nb-btn"];
  if (variant !== "default") classes.push(`nb-btn--${variant}`);
  if (className) classes.push(className);
  return <button className={classes.join(" ")} {...rest} />;
}
