import type { FC, ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

export const CalculatorTitle: FC<Props> = ({ className = "", children }) => {
  return <h1 className={`font-semibold text-3xl dark:text-dark-300 ${className}`}>{children}</h1>;
};
