import React from "react";
import { Icon } from "@iconify/react";
import { modalTaskState, selectedIdState, taskIdListState, taskStateFamily } from "../../store";
import { useRecoilValue, useSetRecoilState } from "recoil";

const uuid = () => {
  return Date.now().toString();
};

export const TaskListPage = () => {
  const taskIdList = useRecoilValue(taskIdListState);
  const setModal = useSetRecoilState(modalTaskState);

  const handleAddBtn = () => {
    setModal({
      open: true,
      payload: {
        id: uuid(),
        title: "",
        runningTime: 0,
        originalTime: 0,
        theme: "",
        timeCreated: 0,
        isRunning: false,
        timeUpdated: 0,
      },
    });
  };

  return (
    <>
      <div className="task-create-wrap-btn" onClick={handleAddBtn}>
        <button>
          <Icon icon="material-symbols:add" width={"100%"} />
        </button>
      </div>
      <div className="task-main-wrap">
        <h1>Daily Tasks</h1>
        <div className="list-task-wrapper">
          {taskIdList.map((v) => (
            <MapTaskList key={v} id={v} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TaskListPage;

const MapTaskList = ({ id }: { id: string }) => {
  const task = useRecoilValue(taskStateFamily(id));
  const setSelectedId = useSetRecoilState(selectedIdState);
  const handleSelectId = () => {
    setSelectedId(id);
  };

  return (
    <button
      className="single-task"
      onClick={handleSelectId}
      style={{ backgroundColor: task.theme }}
    >
      <div className="single-task-title">{task.title}</div>
      <div className="task-note">
        <div className="task-time">{task.runningTime.toFixed(1)}</div>
        <div>
          <Icon icon="ic:baseline-access-time" width={18} />
        </div>
        <div>
          <Icon icon="material-symbols:keyboard-arrow-right" width={18} />
        </div>
      </div>
    </button>
  );
};
