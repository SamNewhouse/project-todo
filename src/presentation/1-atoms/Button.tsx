import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => (
  <button
    className={`px-8 py-3 text-xl bg-blue-600 text-white font-semibold rounded-xl shadow-md transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
      w-full sm:px-4 sm:py-3 sm:text-lg
      ${className ?? ""}
    `}
    {...props}
  >
    {children}
  </button>
);

export default Button;
