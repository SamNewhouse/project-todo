import React from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, className, ...props }) => (
  <div className="flex flex-col w-full">
    {label && <label className="mb-2 text-base font-semibold text-stone-700">{label}</label>}
    <input
      className={`
        w-full border-2 border-gray-300 rounded-xl px-4 py-3 text-base bg-gray-50 shadow-inner outline-none transition
        focus:border-blue-500 focus:bg-white
        md:px-5 md:py-3 md:text-lg
        ${className ?? ""}
      `}
      {...props}
    />
  </div>
);

export default TextInput;
