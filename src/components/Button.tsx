import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  children: ReactNode;
  variant?: "primary" | "outline";
  to?: string;
};

export default function Button({
  children,
  variant = "primary",
  to,
}: Props) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-medium transition";

  const styles =
    variant === "primary"
      ? "bg-black text-white hover:opacity-80"
      : "border border-black text-black hover:bg-black hover:text-white";

  const className = `${base} ${styles}`;

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return <button className={className}>{children}</button>;
}
