import React from "react";
import { Icon } from "@iconify/react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { selectedIdState, taskIdListState } from "../store";

export const DirectionButton = ({ direction = "right" }) => {
  const taskIdList = useRecoilValue(taskIdListState);
  const [selectedId, setSelectedId] = useRecoilState(selectedIdState);
  const index = taskIdList.indexOf(selectedId);

  const handleRight = () => {
    const idx = index + 1 === taskIdList.length ? 0 : index + 1;
    setSelectedId(taskIdList[idx]);
  };

  const handleLeft = () => {
    const idx = index - 1 === -1 ? taskIdList.length - 1 : index - 1;
    setSelectedId(taskIdList[idx]);
  };
  return (
    <div className="btn-direction-wrap" onClick={direction === "right" ? handleRight : handleLeft}>
      <button className="btn-direction">
        {direction === "left" && (
          <Icon icon="material-symbols:arrow-back-ios-new-rounded" width={40} />
        )}
        {direction === "right" && (
          <Icon icon="material-symbols:arrow-forward-ios-rounded" width={40} />
        )}
      </button>
    </div>
  );
};
