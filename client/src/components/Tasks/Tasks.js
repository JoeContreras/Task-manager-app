import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Task from "./Task/Task";

function Tasks({ setCurrentId, currentId }) {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const renderList = () => {
    return tasks.map((task) => (
      <Task
        key={task._id}
        task={task}
        setCurrentId={setCurrentId}
        currentId={currentId}
      />
    ));
  };

  return <div className="ui celled list">{renderList()}</div>;
}

export default Tasks;
