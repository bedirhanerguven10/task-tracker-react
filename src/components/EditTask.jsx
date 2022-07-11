import React from "react";
import { useState } from "react";

const EditTask = ({ tasks, id, handleEditDone }) => {
  const [changeDay, setChangeDay] = useState(tasks.day);
  const [changeTask, setChangeTask] = useState("");

  const handleSave = (e) => {
    const newEditTask = {
      id: id,
      task: changeTask,
      day: changeDay,
      isDone: false,
    };
    // console.log(newEditTask);
    // setEditTask(newEditTask);
    handleEditDone(newEditTask);
  };

  return (
    <div className="modal fade" tabIndex="-1" id="edit-modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Task
              </label>
              <input
                type="text"
                className="form-control"
                name="task"
                id={tasks.id}
                placeholder="Enter your task"
                // value={task}
                required
                onChange={(e) => setChangeTask(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="desc" className="form-label">
                Date & Time
              </label>
              <input
                type="datetime-local"
                className="form-control"
                name="day"
                id="desc"
                placeholder="Enter your Description"
                // value={day}
                required
                onChange={(e) => setChangeDay(e.target.value)}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn "
              data-bs-dismiss="modal"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
