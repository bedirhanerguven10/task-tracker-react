import { useState } from "react";

const AddTaskForm = ({ tasks, setTasks }) => {
// const AddTaskForm = ({ tasks, setTasks, editTask, editDone, setEditDone }) => {
  const [task, setTask] = useState("");
  const [day, setDay] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = new Date().getTime();
    const newTask = { id: id, task: task, day: day, isDone: false };
    setTasks([...tasks, newTask]);
    setTask("");
    setDay("");
  };
  // console.log(editTask);
  
 

  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="task">Task</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="Add Task.."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="day">Date & Time</label>
          <input
            type="datetime-local"
            name="day"
            id="day"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit" className="btn btn-submit">
            Save Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskForm;
