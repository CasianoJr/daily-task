import { atom, atomFamily, selector } from "recoil";

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

export const selectedIdState = atom<string>({
  key: "selectedIdState",
  default: "",
});

export const taskDetailsSelector = selector<string | any>({
  key: "taskDetailsSelector",
  get: ({ get }) => {
    const selectedId = get(selectedIdState);
    if (!selectedId) return null;
    return get(taskStateFamily(selectedId));
  },
  set: ({ set, get }, cmd) => {
    const selectedId = get(selectedIdState);
    const task = get(taskStateFamily(selectedId));
    if (cmd === "update" && task.isRunning) {
      set(taskStateFamily(selectedId), (v) => ({
        ...v,
        runningTime: v.runningTime - 1 / 60,
        timeUpdated: Date.now(),
      }));
    }
    if (cmd === "play") {
      set(taskStateFamily(selectedId), (v) => ({ ...v, isRunning: true, timeUpdated: Date.now() }));
    }

    if (cmd === "pause") {
      set(taskStateFamily(selectedId), (v) => ({ ...v, isRunning: false }));
    }
    if (cmd === "stop") {
      set(taskStateFamily(selectedId), (v) => ({
        ...v,
        isRunning: false,
        runningTime: v.originalTime,
      }));
    }
    if (cmd === "init" && task.isRunning) {
      const millisec = Date.now() - task.timeUpdated;
      const sec = task.runningTime * 60 - millisec / 1000;
      if (sec > 0) {
        set(taskStateFamily(selectedId), (v) => ({
          ...v,
          runningTime: sec < 0 ? v.runningTime : sec / 60,
        }));
      }
    }
  },
});

export const modalTaskState = atom<{ open: boolean; payload: TaskProps }>({
  key: "modalTaskState",
  default: {
    open: false,
    payload: {
      id: "",
      title: "",
      runningTime: 0,
      originalTime: 0,
      theme: "",
      timeCreated: 0,
      isRunning: false,
      timeUpdated: 0,
    },
  },
});
