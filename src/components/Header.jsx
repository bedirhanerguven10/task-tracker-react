import AddTaskForm from "./AddTaskForm";
import { useState } from "react";

const Header = ({tasks,setTasks}) => {
// const Header = ({tasks,setTasks,editTask,editDone,setEditDone}) => {
  const [show, setShow] = useState(false);
  const [btnStyle, setBtnStyle] = useState({
    name: "Show Add Task Bar",
    bgColor: "#FFC54D",
  });

  //! React, default olarak state'leri hemen degistirmeyebilir.
  //! Ekstra render'lari azaltmak icin state'leri toplu (batch) bir sekilde gunceller.
  //! Bir event handler icerisindeki ardasik state'ler event bitiminde toplu bir
  //! sekilde guncellenmis olur.State'lerin guncelenmesi gelis sirasina gorere yapilir.
  //! Ayni event icerisinde birbirine bagli state'leri kullanirken buna dikkat etmek gerkir.

  //? https://stackoverflow.com/questions/48563650/does-react-keep-the-order-for-state-updates

  const handleShow = () => {
    if (show) {
      setBtnStyle({
        name: "Show Add Task Bar",
        bgColor: "#FFC54D",
      });
    } else {
      setBtnStyle({
        name: "Close Add Task Bar",
        bgColor: "cadetblue",
      });
    }
    setShow(!show);
  };
  // console.log(show);

// console.log(editTask);






  return (
    <header className="header">
      <h1>TASK TRACKER</h1>
      <button className="btn" style={{backgroundColor:btnStyle.bgColor}} onClick={handleShow}>
        {btnStyle.name}
      </button>
      {show && <AddTaskForm tasks={tasks} setTasks={setTasks}/>}
      {/* <AddTaskForm tasks={tasks} setTasks={setTasks} /> */}
    </header>
  );
};

export default Header;
