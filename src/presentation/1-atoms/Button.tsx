import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => (
  <button
    className={`px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-xl shadow-md transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ${
      className ?? ""
    }`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
