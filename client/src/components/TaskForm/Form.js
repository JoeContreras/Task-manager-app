import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTask } from "../../actions/tasks";
import { useHistory } from "react-router-dom";

const Form = ({ currentId, setCurrentId }) => {
  const [taskData, setTaskData] = useState({ description: "" });
  const task = useSelector((state) =>
    currentId ? state.tasks.find((task) => task._id === currentId) : null
  );
  const dispatch = useDispatch();
  // const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (task) setTaskData(task);
  }, [task]);

  const clear = () => {
    setCurrentId("");
    setTaskData(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(createTask(taskData));
    clear();
  };

  return (
    <div className="ui segment">
      <form
        className="ui form"
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="field">
          <label>Description</label>
          <input
            name="description"
            type="text"
            onChange={(e) =>
              setTaskData({ ...taskData, description: e.target.value })
            }
          />
        </div>
        <button className="ui button" type="submit">
          Create Task
        </button>
      </form>
    </div>
  );
};
export default Form;
