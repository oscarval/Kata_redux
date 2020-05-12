import React from "react";
import "./App.css";
import Controls from "./components/Controls/Controls";
import TodoList from "./components/TodoList/TodoList";
// import { connect } from "react-redux";

function App(props) {
  return (
    <div className='App'>
      <Controls />
      <TodoList />
    </div>
  );
}

// const mapStateToProps = (state) => ({ state: state });
// const mapDispacthToProps = (dispacth) => ({
//   addrandomTodo: () =>
//     dispacth({
//       type: "ADD_TODO",
//       payload: "borra esta tarea!",
//     }),
// });

// const connectedApp = connect(mapStateToProps, mapDispacthToProps)(App);

export default App;
