import React from "react";
import { connect } from "react-redux";
import "./TodoList.css";

const TodoList = (props) => {
  return (
    <div className='TodoList'>
      {props.state.todos.map((task) => {
        let result = "";
        if (props.state.visibilityFilter === "ALL") {
          result = (
            <div
              key={task.id}
              className={`todo ${
                task.completed ? "completed" : "no-completed"
              }`}>
              <div className='todo-text'>{task.text}</div>
              <div className='todo-actions'>
                <button onClick={() => props.toggleTodo(task.id)}>
                  {task.completed ? "No complete" : "To complete"}
                </button>
                <button onClick={() => props.deleteTodo(task.id)}>
                  Delete
                </button>
              </div>
            </div>
          );
        } else if (
          props.state.visibilityFilter === "COMPLETED" &&
          task.completed
        ) {
          result = (
            <div key={task.id} className='todo completed'>
              <div className='todo-text'>{task.text}</div>
              <div className='todo-actions'>
                <button onClick={() => props.toggleTodo(task.id)}>
                  No complete
                </button>
                <button onClick={() => props.deleteTodo(task.id)}>
                  Delete
                </button>
              </div>
            </div>
          );
        } else if (
          props.state.visibilityFilter === "NO_COMPLETED" &&
          !task.completed
        ) {
          result = (
            <div key={task.id} className='todo no-completed'>
              <div className='todo-text'>{task.text}</div>
              <div className='todo-actions'>
                <button onClick={() => props.toggleTodo(task.id)}>
                  No completed
                </button>
                <button onClick={() => props.deleteTodo(task.id)}>
                  Delete
                </button>
              </div>
            </div>
          );
        }
        return result;
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({ state: state });
const mapDispacthToProps = (dispacth) => ({
  toggleTodo: (taskId) => {
    dispacth({
      type: "TOGGLE_TODO",
      payload: taskId,
    });
  },
  deleteTodo: (taskId) => {
    dispacth({
      type: "DELETE_TODO",
      payload: taskId,
    });
  },
});

const connectedTodoList = connect(
  mapStateToProps,
  mapDispacthToProps
)(TodoList);

export default connectedTodoList;
