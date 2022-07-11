import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import ShowTasks from "../components/ShowTasks";
// import data from "../helper/starterData";

const Home = () => {
  // const [editDone, setEditDone] = useState(false);

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  // const [editTask, setEditTask] = useState("");
  // console.log(editTask);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  // console.log(editTask);
  // console.log(tasks);

  // console.log(editTask);
  const handleEditDone = (editTask) => {
    const filtered = tasks.filter((item) => item.id !== editTask.id);

    console.log(filtered);

    setTasks([...filtered, editTask]);
  };

  return (
    <div className="complatedContainer">
      <div className="childContainer">
        <Header
          tasks={tasks}
          setTasks={setTasks}
          // editTask={editTask}
          // setEditDone={setEditDone}
        />
        <ShowTasks
          tasks={tasks}
          setTasks={setTasks}
          // setEditTask={setEditTask}
          handleEditDone={handleEditDone}
        />
      </div>
    </div>
  );
};

export default Home;
