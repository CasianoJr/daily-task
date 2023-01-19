import { atom, atomFamily } from "recoil";

export const themeColorState = atom({
  key: "themeColorState",
  default: { bg: "white", font: "black" },
});
