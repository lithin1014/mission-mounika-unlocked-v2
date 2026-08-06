import type { ButtonHTMLAttributes, ReactNode } from "react";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({
  children,
  className = "",
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={`
        rounded-xl
        border
        border-green-500
        bg-green-500/10
        px-6
        py-3
        font-bold
        uppercase
        tracking-[0.25em]
        transition-all
        duration-300
        hover:bg-green-500
        hover:text-black
        active:scale-95
        ${className}
      `}
    >
      {children}
    </button>
  );
}