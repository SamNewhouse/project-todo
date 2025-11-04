import React from "react";

interface CrossIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const CrossIcon: React.FC<CrossIconProps> = ({
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
    className={`cross-icon${className ? " " + className : ""}`}
    {...props}
  >
    <line
      x1="7"
      y1="7"
      x2="17"
      y2="17"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
    />
    <line
      x1="17"
      y1="7"
      x2="7"
      y2="17"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
    />
  </svg>
);

export default CrossIcon;
