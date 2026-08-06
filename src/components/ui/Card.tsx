import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-green-500/20
        bg-black/40
        p-6
        transition
        hover:border-green-400
        hover:shadow-lg
        ${className}
      `}
    >
      {children}
    </div>
  );
}