import React, { FC, memo, PropsWithChildren, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
}

const BaseLayout: FC<Props> = ({ children, className }) => {
  return (
    <div
      className={`min-h-screen w-full bg-gradient-to-t from-gray-200 via-gray-100 to-gray-50 ${
        className ?? ""
      }`}
    >
      <div className="w-full max-w-5xl mx-auto px-6 py-12">{children}</div>
    </div>
  );
};

export default memo<PropsWithChildren<Props>>(BaseLayout);
