import { TiTrash } from "react-icons/ti";
import { TiEdit } from "react-icons/ti";
import { useState } from "react";
import EditTask from "./EditTask";

const ShowTasks = ({ tasks, setTasks ,handleEditDone}) => {
  const [done, setDone] = useState(true);
  const [id, setId] = useState("");
console.log(id);
  const handleTaskThrough = (e) => {
    if (done) {
      e.target.classList.add("through");
      setDone(!done);
    } else {
      e.target.classList.remove("through");
      setDone(!done);
    }
  };

  const handleTaskDel = (event) => {
    setTasks(tasks.filter((item) => item.id !== event));
  };
  
  // console.log(id);

  return tasks.map((item) => {
    const { day, task, id } = item;
    // console.log(item.id);
    return (
      <div className="showContainer" key={id} onClick={handleTaskThrough}>
        <div>
          <p className="taskP">{task}</p>
          <p className="dayP">{day}</p>
        </div>
        <div className="edTras">
          <div>
            <TiEdit
              onClick={() => setId(id)}
              data-bs-toggle="modal"
              data-bs-target="#edit-modal"
              size="2em"
              style={{ cursor: "pointer" }}
            />
          </div>
          <div onClick={() => handleTaskDel(id)}>
            <TiTrash size="2em" style={{ cursor: "pointer" }} />
          </div>

          
          <EditTask  tasks={tasks} id={id}  handleEditDone={handleEditDone} />
        </div>
      </div>
    );
  });
};

export default ShowTasks;
