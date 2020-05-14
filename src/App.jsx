import React from "react";
import "./App.css";
import Controls from "./components/Controls/Controls";
import TodoList from "./components/TodoList/TodoList";

function App(props) {
  return (
    <div className='App'>
      <Controls />
      <TodoList />
    </div>
  );
}

export default App;
