import React from "react";
import { connect } from "react-redux";

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
      <h1>controles</h1>
      <input type='text' id='todo-text' onKeyUp={addTodoEnter} />
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
