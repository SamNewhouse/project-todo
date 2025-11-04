import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, className, checked, ...props }) => (
  <label className="checkbox flex items-center gap-3 cursor-pointer select-none relative">
    <span
      className={[
        "checkbox-box relative inline-flex items-center justify-center w-6 h-6 border-2 rounded-md transition-colors ease-in-out duration-300",
        checked ? "bg-gray-700 border-gray-700" : "bg-white border-gray-300 hover:bg-gray-300",
        className ?? "",
      ].join(" ")}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={props.onChange}
        className="checkbox-input absolute w-full h-full opacity-0 cursor-pointer"
        {...props}
      />
      {checked && (
        <svg
          className="checkbox-icon pointer-events-none"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <polyline
            points="5,10 9,15 15,6"
            fill="none"
            stroke="#fff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </span>
    {label && (
      <span className="checkbox-label text-base md:text-lg text-stone-700 font-medium ml-1">
        {label}
      </span>
    )}
  </label>
);

export default Checkbox;
