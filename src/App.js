import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>COUNTER {counter}</h1>
      <button onClick={() => dispatch(increment(5))}> + </button>
      <button onClick={() => dispatch(decrement())}> - </button>
      <br />
      <br />
      {isLogged ? <h3>INFO SHOWN </h3> : "INFO HIDDEN"}
    </div>
  );
}

export default App;
