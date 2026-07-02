import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant?: "primary" | "outline";
};

export default function Button({ children, variant = "primary" }: Props) {
  const base = "px-6 py-3 rounded-xl text-sm font-medium transition";

  const styles =
    variant === "primary"
      ? "bg-black text-white hover:opacity-80"
      : "border border-black text-black hover:bg-black hover:text-white";

  return <button className={`${base} ${styles}`}>{children}</button>;
}
