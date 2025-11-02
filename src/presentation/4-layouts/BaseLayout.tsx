import React, { FC, memo, PropsWithChildren, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
}

const BaseLayout: FC<Props> = ({ children, className }) => {
  return (
    <div className={`min-h-screen w-full ${className ?? ""}`}>
      <div className="w-full max-w-full md:max-w-5xl pt-8 md:pt-12 mx-auto">{children}</div>
    </div>
  );
};

export default memo<PropsWithChildren<Props>>(BaseLayout);
