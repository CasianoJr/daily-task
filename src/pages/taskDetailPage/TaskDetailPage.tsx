import React from "react";
import { Icon } from "@iconify/react";

export const TaskDetailPage = () => {
  return (
    <div className="detail-wrapper" style={{ backgroundColor: "yellow" }}>
      <div className="detail-row-1">
        <div className="detail-elapsed-wrap">
          <div className="col-1-title"> Minitues Elapsed</div>
          <div className="col-1-timed-wrap">
            <span>
              <Icon icon="material-symbols:hourglass-bottom-rounded" width={40} />
            </span>
            <span>{19}</span>
          </div>
        </div>
        <div className="detail-elapsed-left-wrap">
          <div className="col-1-title"> Minitues Remaining</div>
          <div className="col-1-timed-wrap">
            <span>{110}</span>
            <span>
              <Icon icon="material-symbols:hourglass-top-rounded" width={40} />
            </span>
          </div>
        </div>
        <div className="detail-remaining-wrap"></div>
      </div>
      <div className="detail-row-2">
        <div className="detail-main-title">"Demo taks"</div>
        <div className="detail-main-time">
          <div className="detail-time">00: 00</div>
          <div className="detail-time-label">
            <div>Minutes</div>
            <div>Seconds</div>
          </div>
        </div>
      </div>
      <div className="detail-row-3">
        <button className="detail-stop-btn btn-div">
          <Icon icon="material-symbols:stop-circle-outline" width={60} />
        </button>
        <button className="detail-play-btn btn-div">
          <Icon icon="material-symbols:play-circle-outline" width={100} />
        </button>
        <button className="detail-pause-btn btn-div">
          <Icon icon="ic:baseline-pause-circle-outline" width={60} />
        </button>
      </div>
    </div>
  );
};
