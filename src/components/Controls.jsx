import React from "react";
import { connect } from "react-redux";

const Controls = (props) => {
  return (
    <div className='Controls'>
      <h1>controles</h1>
      <button onClick={() => props.taskVisibility("ALL")}>All</button>
      <button onClick={() => props.taskVisibility("COMPLETED")}>
        Completed
      </button>
      <button onClick={() => props.taskVisibility("NO_COMPLETED")}>
        No complete
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({ state: state });
const mapDispacthToProps = (dispatch) => ({
  taskVisibility: (settings) =>
    dispatch({
      type: "CHANGE_VISIBILITY",
      payload: settings,
    }),
});

const connectedControls = connect(
  null,
  mapDispacthToProps
)(Controls);

export default connectedControls;
