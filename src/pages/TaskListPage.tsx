import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { Icon } from "@iconify/react";
import {
  modalTaskState,
  priorityPageState,
  selectedIdState,
  taskIdListState,
  taskStateFamily,
} from "../store";
import { useMobileQueryPage } from "../hooks/useMobileQueryPage";

const uuid = () => Date.now().toString();

export const TaskListPage = () => {
  const taskIdList = useRecoilValue(taskIdListState);
  const setModal = useSetRecoilState(modalTaskState);
  const priorityPage = useMobileQueryPage();

  const handleAddBtn = () => {
    setModal({
      open: true,
      payload: {
        id: uuid(),
        title: "",
        runningTime: 0,
        originalTime: 0,
        theme: "#ffff00",
        timeCreated: 0,
        isRunning: false,
        timeLastPlay: 0,
        timeRunPause: 0,
      },
    });
  };

  if (priorityPage === "detailPage") return null;

  return (
    <div className="app-wrapper">
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
    </div>
  );
};

export default TaskListPage;

const MapTaskList = ({ id }: { id: string }) => {
  const task = useRecoilValue(taskStateFamily(id));
  const [selectedId, setSelectedId] = useRecoilState(selectedIdState);
  const setPriorityPage = useSetRecoilState(priorityPageState);

  const handleSelectId = () => {
    setPriorityPage("detailPage");
    setSelectedId(id);
  };

  return (
    <button
      className={`single-task ${selectedId === id && "active-task"}`}
      onClick={handleSelectId}
      onFocus={handleSelectId}
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
