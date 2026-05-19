import type { TextareaHTMLAttributes } from "react";

interface ContactTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export default function ContactTextarea({
  label,
  className = "",
  ...props
}: ContactTextareaProps) {
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

      {/* TEXTAREA */}
      <textarea
        {...props}
        className={`
          min-h-[180px]
          w-full

          resize-none

          rounded-[18px]

          border
          border-purple-500/20

          bg-[rgba(12,18,35,0.7)]

          px-5
          py-4

          text-[15px]
          leading-7
          text-white

          outline-none

          backdrop-blur-xl

          transition-all
          duration-300

          placeholder:text-white/30

          focus:border-purple-400/60
          focus:shadow-[0_0_25px_rgba(168,85,247,0.18)]

          light:border-black/10
          light:bg-white
          light:text-black
          light:placeholder:text-black/35

          ${className}
        `}
      />
    </div>
  );
}
