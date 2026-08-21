import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "./cx.js";

export type SemanticVariant = "info" | "success" | "warning" | "danger";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: SemanticVariant | "primary";
}
export function Badge({ variant, className, ...rest }: BadgeProps) {
  return <span className={cx("nb-badge", variant && `nb-badge--${variant}`, className)} {...rest} />;
}

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  variant?: SemanticVariant;
  title?: ReactNode;
}
export function Alert({ variant = "info", title, className, children, ...rest }: AlertProps) {
  return (
    <div role="alert" className={cx("nb-alert", `nb-alert--${variant}`, className)} {...rest}>
      {title !== undefined && <span className="nb-alert__title">{title}</span>}
      {children}
    </div>
  );
}

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  /** 0–100 */
  value: number;
  accent?: boolean;
}
export function Progress({ value, accent, className, ...rest }: ProgressProps) {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={clamped}
      className={cx("nb-progress", className)}
      {...rest}
    >
      <div className={cx("nb-progress__bar", accent && "nb-progress__bar--accent")} style={{ width: `${clamped}%` }} />
    </div>
  );
}

export function Spinner({ className, ...rest }: HTMLAttributes<HTMLSpanElement>) {
  return <span role="status" aria-label="loading" className={cx("nb-spinner", className)} {...rest} />;
}
