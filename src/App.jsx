import React from "react";
import "./App.css";
import { connect } from "react-redux";

function App(props) {
  return (
    <div className='App'>
      <pre>{JSON.stringify(props, null, 2)}</pre>
      <button onClick={() => props.addrandomTodo()}>add todo</button>
    </div>
  );
}

const mapStateToProps = (state) => ({ state: state });
const mapDispacthToProps = (dispacth) => ({
  addrandomTodo: () =>
    dispacth({
      type: "ADD_TODO",
      payload: "borra esta tarea!",
    }),
});

const connectedApp = connect(mapStateToProps, mapDispacthToProps)(App);

export default connectedApp;
