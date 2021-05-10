import React from "react";
import Modal from "../../Modal/Modal";
import { Link } from "react-router-dom";
import { deleteTask, getTask } from "../../../actions/tasks";
import { connect } from "react-redux";

class DeleteTask extends React.Component {
  constructor(props) {
    super(props);
  }
  onDelete = () => {
    this.props.deleteTask(this.props.id);
  };

  renderActions() {
    return (
      <React.Fragment>
        {/*<>*/}
        <button onClick={this.onDelete} className="ui button negative">
          Delete
        </button>
        <Link to="/tasks" className="ui button ">
          Cancel
        </Link>
        {/*</>*/}
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.id) {
      return " Are you sure you want to delete this stream?";
    }
    return `Are you sure you want to delete stream: ${this.props.id}`;
  }

  render() {
    return (
      <Modal
        title="Delete Task"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => this.props.history.push("/tasks")}
      />
    );
  }
}
/*

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
*/

export default connect(null, { getTask, deleteTask })(DeleteTask);
