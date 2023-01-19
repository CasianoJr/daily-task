import React from "react";

type Props = {
  children: JSX.Element;
};

export const PageWrapper = ({ children }: Props) => {
  return <div className="app-wrapper">{children}</div>;
};
