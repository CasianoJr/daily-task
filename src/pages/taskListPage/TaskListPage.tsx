import React from "react";
import { Icon } from "@iconify/react";
import { taskIdListState, taskStateFamily } from "../../store";
import { useRecoilValue } from "recoil";

export const TaskListPage = () => {
  const taskIdList = useRecoilValue(taskIdListState);

  return (
    <>
      <div className="task-create-wrap-btn">
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

  return (
    <button className="single-task" style={{ backgroundColor: task.theme }}>
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
