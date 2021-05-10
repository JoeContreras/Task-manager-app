import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import { deleteTask } from "../../../actions/tasks";
import { useDispatch } from "react-redux";

function ModalExampleCloseIcon({ taskInfo, setId }) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleDelete = () => {
    dispatch(deleteTask(taskInfo._id));
    setId(taskInfo._id);
    setOpen(false);
  };

  return (
    <Modal
      closeIcon
      open={open}
      trigger={<Button>Delete</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon="trash" content="Delete Task" />
      <Modal.Content>
        <p>Are you sure you want to delete this task?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={() => setOpen(false)}>
          <Icon name="remove" /> No
        </Button>
        <Button color="green" onClick={handleDelete}>
          <Icon name="checkmark" /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalExampleCloseIcon;
