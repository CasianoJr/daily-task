import { useEffect, useRef, useState } from "react";
import { useRecoilCallback } from "recoil";
import { taskIdListState, taskStateFamily } from "../store";

export const useUpdateRunning = (time = 5000) => {
  const [count, setCount] = useState({});
  const timerId = useRef<any>();

  const runUpdate = useRecoilCallback(({ snapshot, set }) => async () => {
    const taskIdList = await snapshot.getPromise(taskIdListState);

    taskIdList.forEach(async (id) => {
      const task: any = await snapshot.getPromise(taskStateFamily(id));
      if (task.isRunning) {
        set(taskStateFamily(id), (v) => ({
          ...v,
          runningTime: v.timeRunPause - (Date.now() - task.timeLastPlay) / 1000 / 60,
          isRunning: v.runningTime - 1 / 30 < 0 ? false : true,
        }));
      }
    });
  });

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCount({});
    }, time);
    return () => {
      clearInterval(timerId.current);
      setCount(0);
    };
  }, []);

  useEffect(() => {
    runUpdate();
  }, [count]);
};
