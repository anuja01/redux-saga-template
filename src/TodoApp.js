import React from "react";

import AddTodo from "./components/AddTodo";
// import TodoList from "./components/TodoList";
// import VisibilityFilters from "./components/VisibilityFilters";
import "./styles.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
