import { useEffect, useRef, useState } from "react";
import { useRecoilCallback, useRecoilState } from "recoil";
import { priorityPageState } from "../store";

export const useMobileQueryPage = () => {
  const pPriority = useRecoilState(priorityPageState);
  const [priority, setPriority] = useState<null | string>(null);
  const query = window.matchMedia("(max-width: 750px)");
  const queryPriority = useRecoilCallback(({ snapshot, set }) => async () => {
    const priorityPage = await snapshot.getPromise(priorityPageState);
    setPriority(query.matches ? priorityPage : null);
  });

  useEffect(() => {
    queryPriority();
    window.addEventListener("resize", queryPriority);
    return () => {
      window.removeEventListener("resize", queryPriority);
    };
  }, [query, pPriority]);

  return priority;
};
