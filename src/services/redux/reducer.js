const initialState = {
  visibilityFilter: "ALL",
  todos: [
    { text: "Hacer la compra", id: Date.now(), completed: true },
    { text: "Cita peluquería", id: Date.now() + 1, completed: true },
    { text: "Recoger al niño", id: Date.now() + 2, completed: false },
  ],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_VISIBILITY":
      return {
        ...state,
        visibilityFilter: action.payload,
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payloads
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case "DELETE_TODO":
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload);
      return {
        ...state,
        todos: newTodos,
      };
    default:
      return state;
  }
}

export default reducer;
