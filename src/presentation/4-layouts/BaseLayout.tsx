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
      <div className="w-full max-w-full px-3 py-6 md:max-w-5xl md:px-6 md:py-12 mx-auto">
        {children}
      </div>
    </div>
  );
};

export default memo<PropsWithChildren<Props>>(BaseLayout);
