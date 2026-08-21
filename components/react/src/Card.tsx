import type { HTMLAttributes } from "react";

export type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...rest }: CardProps) {
  return <div className={className ? `nb-card ${className}` : "nb-card"} {...rest} />;
}
