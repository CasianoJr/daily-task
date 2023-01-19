import React from "react";
import { Icon } from "@iconify/react";

const ConfigureTaskDialog = () => {
  return (
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
        <button className="modal-btn-cancel">Cancel</button>
        <button className="modal-btn-save">Save</button>
      </div>
    </div>
  );
};

export default ConfigureTaskDialog;
