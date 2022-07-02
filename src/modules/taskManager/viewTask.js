import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import CreateTask from "./modals/CreateTask";
import "./task.css";
import { useLocation } from "react-router-dom";
const ViewTask = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("taskList");

    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const updateListArray = (obj, index) => {
    let tempList = taskList;
    console.log(tempList);
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const toggle = () => {
    setModal(!modal);
  };
  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(taskList);
    setModal(false);
  };

  return (
    <>
      <div className="header text-center">
        <h3 className="poppins_medium task_Manager_heading lightGrey_c mb-5">
          Task Manager
        </h3>
        <button
          className="task_btn white_c orange_bg"
          onClick={() => setModal(true)}
        >
          Create New Task
        </button>
      </div>
      <div className="task_div">
        <div className="row">
          {taskList &&
            taskList.map((obj, index) => (
              <div className="col-sm">
                <Card
                  taskObj={obj}
                  index={index}
                  deleteTask={deleteTask}
                  updateListArray={updateListArray}
                />
              </div>
            ))}
        </div>
      </div>

      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};

export default ViewTask;
