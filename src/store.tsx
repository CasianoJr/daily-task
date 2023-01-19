import { atom, atomFamily } from "recoil";

export const themeColorState = atom({
  key: "themeColorState",
  default: { bg: "white", font: "black" },
});

export const taskStateFamily = atomFamily({
  key: "taskStateFamily",
  default: {
    id: "",
    title: "",
    runningTime: 0,
    originalTime: 0,
    theme: "#ffff00",
    timeCreated: Date.now(),
    isRunning: false,
    timeUpdated: Date.now(),
  },
});

export const taskIdListState = atom<string[]>({
  key: "taskIdListState",
  default: [],
});
