import React, { useEffect } from "react";
import Modal from "../../Modal/Modal";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { deleteTask, getTask } from "../../../actions/tasks";
import { useDispatch } from "react-redux";

const TaskDelete = (task) => {
  const history = useHistory();
  const dispatch = useDispatch();

  /*
  useEffect(() => {
    dispatch(getTask(task._id));
  }, []);
*/

  const onDelete = () => {
    dispatch(deleteTask(task._id));
  };

  const renderActions = () => {
    return (
      <React.Fragment>
        {/*<>*/}
        <button onClick={onDelete} className="ui button negative">
          Delete
        </button>
        <Link to="/tasks" className="ui button ">
          Cancel
        </Link>
        {/*</>*/}
      </React.Fragment>
    );
  };

  const renderContent = () => {
    if (task) {
      return " Are you sure you want to delete this task?";
    }
    return `Are you sure you want to delete stream: ${this.props.match.params.id}`;
  };

  return (
    <Modal
      title="Delete Stream"
      content={renderContent()}
      actions={renderActions()}
      onDismiss={() => history.push("/tasks")}
    />
  );
};

export default TaskDelete;
