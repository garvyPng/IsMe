import { ReactNode } from "react";

interface BtnSecondaryProps {
  children: ReactNode; // Типизация children
}

export const BtnSecondary = ({ children }: BtnSecondaryProps) => {
  return (
    <button className="px-6 py-2 border border-gray-300 rounded-md  hover:bg-gray-100">
      {children}
    </button>
  );
};