import React, { ReactNode } from "react";

const PreviewLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full dark:bg-[#1f1f1f] cursor-default">{children}</div>
  );
};

export default PreviewLayout;
