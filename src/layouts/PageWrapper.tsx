import React from "react";
import { useRecoilValue } from "recoil";
import { themeColorState } from "../store";

type Props = {
  children: JSX.Element;
};

export const PageWrapper = ({ children }: Props) => {
  const theme = useRecoilValue(themeColorState);

  return (
    <div className="app-wrapper" style={{ backgroundColor: theme.bg, color: theme.font }}>
      {children}
    </div>
  );
};
