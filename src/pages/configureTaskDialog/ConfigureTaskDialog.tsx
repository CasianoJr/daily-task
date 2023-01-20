import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { useRecoilCallback, useRecoilState } from "recoil";
import { modalTaskState, taskIdListState, taskStateFamily } from "../../store";

const ConfigureTaskDialog = () => {
  const [{ open, payload }, setModal] = useRecoilState(modalTaskState);
  const [localTask, setLocalTask] = useState(payload);
  const modalRef = useRef<any>();

  useEffect(() => {
    setLocalTask(payload);
  }, [payload.id]);

  useEffect(() => {
    if (open) modalRef.current.focus();
  }, [open]);
  
  const handleClose = () => {
    setModal((v) => ({ ...v, open: false }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.type === "number" ? parseInt(e.target.value, 10) : e.target.value;
    setLocalTask((v) => ({ ...v, [e.target.name]: val }));
  };

  const handleSave = useRecoilCallback(({ snapshot, set }) => async () => {
    const taskIdList = snapshot.getPromise(taskIdListState);
    let taskToSave: TaskProps = localTask;
    if (!(await taskIdList).includes(taskToSave.id)) {
      set(taskIdListState, (v) => [...v, taskToSave.id]);
      taskToSave = {
        ...taskToSave,
        runningTime: localTask.originalTime,
        timeCreated: Date.now(),
        timeUpdated: Date.now(),
      };
    }
    set(taskStateFamily(taskToSave.id), taskToSave);
    handleClose();
  });

  return (
    <div className="modal-background" style={{ display: open ? "" : "none" }}>
      <div className="modal-wrapper">
        <div className="modal-header">Configure Task</div>
        <div className="modal-content-wrap">
          <div className="modal-div">
            <input
              ref={modalRef}
              className="modal-title-input"
              onChange={handleChange}
              name="title"
              value={localTask.title}
            ></input>
          </div>
          <div className="modal-div">
            <div className="modal-div-1">
              <span>
                <Icon icon="ic:baseline-access-time" width={20} />
              </span>{" "}
              <span>Length (in minutes)</span>
            </div>
            <input
              className="modal-length-input"
              onChange={handleChange}
              type="number"
              name={"originalTime"}
              value={localTask.originalTime}
            ></input>
          </div>
          <div className="modal-div">
            <div className="modal-div-1">
              <span>
                <Icon icon="mdi:checkerboard" />
              </span>{" "}
              <span>Theme</span>
            </div>
            <input
              className="modal-color-input"
              name={"theme"}
              type="color"
              onChange={handleChange}
              value={localTask.theme}
            ></input>
          </div>
        </div>
        <div className="modal-btn-action">
          <button className="modal-btn-cancel btn-div" onClick={handleClose}>
            Cancel
          </button>
          <button className="modal-btn-save btn-div" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfigureTaskDialog;
