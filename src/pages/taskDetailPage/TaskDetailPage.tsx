import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { useRecoilState, useRecoilValue } from "recoil";
import { selectedIdState, taskDetailsSelector } from "../../store";

export const TaskDetailPage = () => {
  const selectedId = useRecoilValue(selectedIdState);
  const [task, setTaskDetails] = useRecoilState<any>(taskDetailsSelector);
  const timerId = useRef<any>();
  const [count, setCount] = useState(0);

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCount((v) => v + 1);
    }, 1000);
    return () => {
      clearInterval(timerId.current);
      setCount(0);
    };
  }, []);

  useEffect(() => {
    setTaskDetails("init");
  }, [selectedId]);

  useEffect(() => {
    setTaskDetails("update");
  }, [count]);

  const handlePause = () => setTaskDetails("pause");
  const handleStop = () => setTaskDetails("stop");
  const handlePlay = () => setTaskDetails("play");

  if (!task) return null;

  return (
    <div>
      <div className="task-create-wrap-btn">
        <button>
         Edit
        </button>
      </div>
      <div className="detail-wrapper" style={{ backgroundColor: task.theme }}>
        <div className="detail-row-1">
          <div className="detail-elapsed-wrap">
            <div className="col-1-title"> Minitues Elapsed</div>
            <div className="col-1-timed-wrap">
              <span>
                <Icon icon="material-symbols:hourglass-bottom-rounded" width={40} />
              </span>
              <span>{Math.floor(task.originalTime - task.runningTime)}</span>
            </div>
          </div>
          <div className="detail-elapsed-left-wrap">
            <div className="col-1-title"> Minitues Remaining</div>
            <div className="col-1-timed-wrap">
              <span>{Math.floor(task.runningTime)}</span>
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
              {Math.floor(task.runningTime)} :{" "}
              {Math.ceil((task.runningTime * 60) % 60)
                .toString()
                .padStart(2, "0")}
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
  );
};
