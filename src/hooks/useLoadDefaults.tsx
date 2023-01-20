import { useEffect, useRef } from "react";
import { useRecoilCallback } from "recoil";
import { taskIdListState, taskStateFamily } from "../store";

const defaultTasks = [
  {
    id: "1",
    title: "Design the app",
    runningTime: 120,
    theme: "#ffff00",
    timeCreated: Date.now(),
    isRunning: false,
    timeUpdated: Date.now(),
    originalTime: 120,
  },
  {
    id: "2",
    title: "Mobile devs sync",
    runningTime: 30,
    theme: "#add8a3",
    timeCreated: Date.now(),
    isRunning: false,
    timeUpdated: Date.now(),
    originalTime: 30,
  },
  {
    id: "3",
    title: "Lunch with family",
    runningTime: 60,
    theme: "#f89497",
    timeCreated: Date.now(),
    isRunning: false,
    timeUpdated: Date.now(),
    originalTime: 60,
  },
];

export const useLoadDefault = () => {
  const init = useRecoilCallback(({ snapshot, set }) => async () => {
    const list: string[] = [];
    defaultTasks.forEach((t) => {
      list.push(t.id);
      set(taskStateFamily(t.id), t);
    });

    set(taskIdListState, list);
  });

  const once = useRef(false);
  useEffect(() => {
    if (!once.current) {
      once.current = true;
      init();
    }
    return () => {};
  }, [init]);
};
