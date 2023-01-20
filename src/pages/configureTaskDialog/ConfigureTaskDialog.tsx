import React from "react";
import { Icon } from "@iconify/react";
import { useRecoilState } from "recoil";
import { modalTaskState } from "../../store";

const ConfigureTaskDialog = () => {
  const [{ open, payload }, setModal] = useRecoilState(modalTaskState);

  const handleClose = () => {
    setModal((v) => ({ ...v, open: false }));
  };
  return (
    <div className="modal-background" style={{ display: open ? "" : "none" }}>
      <div className="modal-wrapper">
        <div className="modal-header">Configure Task</div>
        <div className="modal-content-wrap">
          <div className="modal-div">
            <input className="modal-title-input" value={"Design the app"}></input>
          </div>
          <div className="modal-div">
            <div className="modal-div-1">
              <span>
                <Icon icon="mdi:checkerboard" />
              </span>{" "}
              <span>Length</span>
            </div>
            <input className="modal-length-input" value={"120 minutes"}></input>
          </div>
          <div className="modal-div">
            <div className="modal-div-1">
              <span>
                <Icon icon="mdi:checkerboard" />
              </span>{" "}
              <span>Theme</span>
            </div>
            <input className="modal-color-input" type="color"></input>
          </div>
        </div>
        <div className="modal-btn-action">
          <button className="modal-btn-cancel btn-div" onClick={handleClose}>
            Cancel
          </button>
          <button className="modal-btn-save btn-div">Save</button>
        </div>
      </div>
    </div>
  );
};

export default ConfigureTaskDialog;
