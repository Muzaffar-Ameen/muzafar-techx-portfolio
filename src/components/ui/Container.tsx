import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`
        relative
        z-10

        mx-auto
        w-full
        max-w-[1400px]

        px-4
        sm:px-6
        md:px-8
        lg:px-10
        xl:px-12

        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Container;