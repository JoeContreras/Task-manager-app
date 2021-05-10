import React, { useEffect, useState } from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import { createTask, updateTask } from "../../../actions/tasks";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function ModalExampleCloseIcon({ taskInfo, setId, currentId }) {
  const [taskData, setTaskData] = useState({ description: "" });
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const task = useSelector((state) =>
    currentId ? state.tasks.find((task) => task._id === currentId) : null
  );
  useEffect(() => {
    if (task) setTaskData(task);
  }, [task]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { description } = taskData;
    dispatch(updateTask(taskInfo._id, { description }));
    setId(taskInfo._id);
    setOpen(false);
  };

  /*
  const handleUpdate = () => {
    dispatch(updateTask(taskInfo._id));
    setId(taskInfo._id);
    setOpen(false);
  };

*/
  const EditForm = () => {
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
            Edit
          </button>
        </form>
      </div>
    );
  };

  return (
    <Modal
      closeIcon
      open={open}
      trigger={<Button className="ui primary button">Edit</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon="trash" content="Delete Task" />
      <Modal.Content>{EditForm()}</Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={() => setOpen(false)}>
          <Icon name="remove" /> Cancel
        </Button>
        <Button color="green" onClick={handleSubmit}>
          <Icon name="checkmark" /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalExampleCloseIcon;
