import React, { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
const ReactUseReducer = () => {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      React useReducer
      <div>
        <p>count: {state.count}</p>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default ReactUseReducer;
