import React from "react";
import { connect } from "react-redux";
import "./Controls.css";

const Controls = (props) => {
  const addTodoEnter = (e) => {
    if (e.which === 13 && e.target.value.length > 0) {
      e.preventDefault();
      props.addTodo(e.target.value);
      e.target.value = "";
    }
  };

  return (
    <div className='Controls'>
      <div>
        <input type='text' id='todo-text' onKeyUp={addTodoEnter} />
      </div>
      <div>
        <button onClick={() => props.taskVisibility("ALL")}>All</button>
      </div>
      <div>
        <button onClick={() => props.taskVisibility("COMPLETED")}>
          Completed
        </button>
      </div>
      <div>
        <button onClick={() => props.taskVisibility("NO_COMPLETED")}>
          No completed
        </button>
      </div>
    </div>
  );
};

const mapDispacthToProps = (dispatch) => ({
  addTodo: (text) => {
    dispatch({
      type: "ADD_TODO",
      payload: {
        id: Date.now(),
        text: text,
        completed: false,
      },
    });
  },
  taskVisibility: (settings) =>
    dispatch({
      type: "CHANGE_VISIBILITY",
      payload: settings,
    }),
});

const connectedControls = connect(null, mapDispacthToProps)(Controls);

export default connectedControls;
