import React, { FC, memo, PropsWithChildren, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
}

const BaseLayout: FC<Props> = ({ children, className }) => {
  return (
    <div
      className={`base-layout min-h-screen w-full bg-gradient-to-tl from-stone-300 via-stone-100 to-white ${className ?? ""}`}
    >
      <div className="base-layout-content w-full max-w-full md:max-w-5xl pt-8 md:pt-12 mx-auto">
        {children}
      </div>
    </div>
  );
};

export default memo<PropsWithChildren<Props>>(BaseLayout);
