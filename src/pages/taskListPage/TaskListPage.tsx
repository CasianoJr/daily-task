import React from "react";
import { Icon } from "@iconify/react";

export const TaskListPage = () => {
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
          {/* list  */}
          <button className="single-task" style={{ backgroundColor: "yellow" }}>
            <div className="single-task-title">App task</div>
            <div className="task-note">
              <div className="task-time">Time</div>
              <div>
                <Icon icon="ic:baseline-access-time" width={18} />
              </div>
              <div>
                <Icon icon="material-symbols:keyboard-arrow-right" width={18} />
              </div>
            </div>
          </button>
          {/* list end  */}
        </div>
      </div>
    </>
  );
};
