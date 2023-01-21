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
    timeLastPlay: Date.now(),
    timeRunPause: Date.now(),
  },
});

export const taskIdListState = atom<string[]>({
  key: "taskIdListState",
  default: [],
});

export const selectedIdState = atom<string>({
  key: "selectedIdState",
  default: selector({
    key: "selectedIdState/defau",
    get: ({ get }) => {
      const taskListId = get(taskIdListState);
      return taskListId[0];
    },
  }),
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
        runningTime: v.timeRunPause - (Date.now() - task.timeLastPlay) / 1000 / 60,
        isRunning: v.runningTime - 1 / 30 < 0 ? false : true,
      }));
    }
    if (cmd === "play" && !task.isRunning && task.runningTime - 1 / 60 > 0) {
      set(taskStateFamily(selectedId), (v) => ({
        ...v,
        isRunning: true,
        timeLastPlay: Date.now(),
      }));
    }

    if (cmd === "pause") {
      set(taskStateFamily(selectedId), (v) => ({
        ...v,
        isRunning: false,
        timeRunPause: v.runningTime,
      }));
    }
    if (cmd === "stop") {
      set(taskStateFamily(selectedId), (v) => ({
        ...v,
        isRunning: false,
        runningTime: v.originalTime,
        timeRunPause: v.originalTime,
      }));
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
      timeLastPlay: 0,
      timeRunPause: 0,
    },
  },
});

export const priorityPageState = atom<"listPage" | "detailPage">({
  key: "priorityPageState",
  default: "listPage",
});
