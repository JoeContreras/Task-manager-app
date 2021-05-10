import React from "react";
import Modal from "./DeleteModal";
import EditModal from "./EditModal";

const Task = ({ task, setCurrentId, currentId }) => {
  const renderAdmin = (task) => {
    return (
      <div className="right floated content">
        <EditModal taskInfo={task} setId={setCurrentId} currentId={currentId} />
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
