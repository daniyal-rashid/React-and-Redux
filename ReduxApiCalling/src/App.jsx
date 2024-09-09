import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./redux/slices/todoSlice";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  if (state.todo.isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <button onClick={(e) => dispatch(fetchTodos())}>fetch todos</button>
      {state.todo.data && state.todo.data.map((e) => <li>{e.title}</li>)}
    </div>
  );
}

export default App;
