import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { modalTaskState, priorityPageState, taskDetailsSelector } from "../store";
import { useMobileQueryPage } from "../hooks/useMobileQueryPage";
import { DirectionButton } from "../component/DirectionButton";

export const TaskDetailPage = () => {
  const priorityPage = useMobileQueryPage();
  const [task, setTaskDetails] = useRecoilState<any>(taskDetailsSelector);
  const timerId = useRef<any>();
  const [count, setCount] = useState({});
  const setModal = useSetRecoilState(modalTaskState);
  const priority = useMobileQueryPage();
  const setPriorityPage = useSetRecoilState(priorityPageState);

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCount({});
    }, 1000);
    return () => {
      clearInterval(timerId.current);
      setCount(0);
    };
  }, []);

  useEffect(() => {
    setTaskDetails("update");
  }, [count]);

  const handlePause = () => setTaskDetails("pause");
  const handleStop = () => setTaskDetails("stop");
  const handlePlay = () => setTaskDetails("play");

  const handleBack = () => {
    setPriorityPage("listPage");
  };

  const handleEditBtn = () => {
    setModal({ open: true, payload: task });
  };
  if (!task) return null;

  const minutes = Math.floor(task.runningTime);
  const seconds = Math.floor((task.runningTime - minutes) * 60)
    .toString()
    .padStart(2, "0");

  if (priorityPage === "listPage") return null;

  return (
    <>
      <DirectionButton direction="left" />
      <div className="app-wrapper">
        <div>
          <div className="task-create-wrap-btn">
            {priority && (
              <button onClick={handleBack} style={{ marginRight: "auto" }}>
                Back
              </button>
            )}
            <button onClick={handleEditBtn}>Edit</button>
          </div>
          <div className="detail-wrapper" style={{ backgroundColor: task.theme }}>
            <div className="detail-row-1">
              <div className="detail-elapsed-wrap">
                <div className="col-1-title"> Minutes Elapsed</div>
                <div className="col-1-timed-wrap">
                  <span>
                    <Icon icon="material-symbols:hourglass-bottom-rounded" width={40} />
                  </span>
                  <span>{(task.originalTime - task.runningTime).toFixed(1)}</span>
                </div>
              </div>
              <div className="detail-elapsed-left-wrap">
                <div className="col-1-title col-1-title-left"> Minutes Remaining</div>
                <div className="col-1-timed-wrap">
                  <span>{task.runningTime.toFixed(1)}</span>
                  <span>
                    <Icon icon="material-symbols:hourglass-top-rounded" width={40} />
                  </span>
                </div>
              </div>
              <div className="detail-remaining-wrap"></div>
            </div>
            <div className="detail-row-2">
              <div className="detail-main-title">{task.title}</div>
              <div className="detail-main-time">
                <div className="detail-time">
                  {minutes} :{seconds}
                </div>
                <div className="detail-time-label">
                  <div>Minutes</div>
                  <div>Seconds</div>
                </div>
              </div>
            </div>
            <div className="detail-row-3">
              <button className="detail-stop-btn btn-div" onClick={handleStop}>
                <Icon icon="material-symbols:stop-circle-outline" width={60} />
              </button>
              <button className="detail-play-btn btn-div" onClick={handlePlay}>
                <Icon icon="material-symbols:play-circle-outline" width={100} />
              </button>
              <button className="detail-pause-btn btn-div" onClick={handlePause}>
                <Icon icon="ic:baseline-pause-circle-outline" width={60} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <DirectionButton direction="right" />
    </>
  );
};
