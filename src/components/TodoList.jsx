import React from "react";
import { connect } from "react-redux";

const TodoList = (props) => {
  return (
    <div className='TodoList'>
      {props.state.todos.map((task) => {
        let result = "";
        if (props.state.visibilityFilter === "ALL") {
          result = <div key={task.id}>{task.text}</div>;
        } else if (
          props.state.visibilityFilter === "COMPLETED" &&
          task.completed
        ) {
          result = <div key={task.id}>{task.text}</div>;
        } else if (
          props.state.visibilityFilter === "NO_COMPLETED" &&
          !task.completed
        ) {
          result = <div key={task.id}>{task.text}</div>;
        }
        return result;
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({ state: state });
const mapDispacthToProps = (dispacth) => ({
  addrandomTodo: () =>
    dispacth({
      type: "ADD_TODO",
      payload: "borra esta tarea!",
    }),
});

const connectedTodoList = connect(
  mapStateToProps,
  mapDispacthToProps
)(TodoList);

export default connectedTodoList;
