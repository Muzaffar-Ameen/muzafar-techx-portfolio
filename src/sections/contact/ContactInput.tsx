import type { InputHTMLAttributes } from "react";

interface ContactInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function ContactInput({
  label,
  className = "",
  ...props
}: ContactInputProps) {
  return (
    <div className="w-full">
      {/* LABEL */}
      {label && (
        <label
          className="
      mb-3
      block

      text-[12px]
      font-semibold
      uppercase
      tracking-[2px]

      text-purple-300

      light:text-black/100
    "
        >
          {label}
        </label>
      )}

      {/* INPUT */}
      <input
        {...props}
        className={`
          h-[58px]
          w-full

          rounded-[18px]

          border
          border-purple-500/20

          bg-[rgba(12,18,35,0.7)]

          px-5

          text-[15px]
          text-white

          outline-none

          backdrop-blur-xl

          transition-all
          duration-300

          placeholder:text-white/30

          focus:border-purple-400/60
          focus:shadow-[0_0_25px_rgba(168,85,247,0.18)]

          light:border-black/40
          light:bg-white
          light:text-black
          light:placeholder:text-black/70

          ${className}
        `}
      />
    </div>
  );
}
