import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteTask } from "../../../actions/tasks";
import Modal from "./DeleteModal";
import TaskDelete from "./TaskDelete";
import EditModal from "./EditModal";

const Task = ({ task, setCurrentId, currentId }) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const history = useHistory();

  /*
  const handleDelete = () => {
    dispatch(deleteTask(task._id));
    setCurrentId(task._id);
  };
*/

  const renderAdmin = (task) => {
    return (
      <div className="right floated content">
        {/*
        <button
          onClick={() => setCurrentId(task._id)}
          className="ui button primary"
        >
          Edit
        </button>
*/}
        <EditModal taskInfo={task} setId={setCurrentId} currentId={currentId} />
        {/*
        <button onClick={handleDelete} className="ui button negative">
          Delete
        </button>
*/}
        <Modal taskInfo={task} setId={setCurrentId} />
      </div>
    );
  };

  return (
    <div className="item" key={task._id}>
      {renderAdmin(task)}
      <i className="large middle aligned icon tasks" />
      <div className="content">
        <div className="header">
          <p>{task.description}</p>
        </div>
        <div className="description">
          <p>{task.completed ? "Completed" : "Incomplete"}</p>
        </div>
      </div>
    </div>
  );
};

export default Task;
