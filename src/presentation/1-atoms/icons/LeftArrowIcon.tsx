import React from "react";

interface BackArrowIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const LeftArrowIcon: React.FC<BackArrowIconProps> = ({
  width = 32,
  height = 32,
  className = "",
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={`left-arrow-icon${className ? " " + className : ""}`}
    {...props}
  >
    <polyline
      points="15 19 8 12 15 5"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export default LeftArrowIcon;
