import { ReactNode } from "react";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
}

export default function GlassPanel({
  children,
  className = "",
}: GlassPanelProps) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-green-500/20
        bg-green-500/5
        backdrop-blur-xl
        shadow-2xl
        p-8
        ${className}
      `}
    >
      {children}
    </div>
  );
}