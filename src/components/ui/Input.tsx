import type { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({
  className = "",
  ...props
}: Props) {
  return (
    <input
      {...props}
      className={`
        w-full
        rounded-xl
        border
        border-green-500/30
        bg-black/40
        px-5
        py-4
        outline-none
        text-white
        placeholder:text-gray-500
        focus:border-green-400
        transition
        ${className}
      `}
    />
  );
}