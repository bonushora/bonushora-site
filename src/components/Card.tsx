import type { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="p-6 rounded-xl border bg-white shadow-sm">
      {children}
    </div>
  );
}
