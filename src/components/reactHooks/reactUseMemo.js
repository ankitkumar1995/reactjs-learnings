import React, { useMemo, useState } from "react";

const ReactUseMemo = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const computeExpensiveResult = (data) => {
    return data.map((num) => num * 2);
  };
  const memoizeResult = useMemo(
    () => computeExpensiveResult(numbers),
    [numbers]
  );
  return (
    <div>
      React useMemo
      <div>
        <h3>Expensive computation component</h3>
        <p>original number: {numbers.join(", ")}</p>
        <p>memoize result: {memoizeResult.join(", ")}</p>
        <button
          onClick={() =>
            setNumbers([...numbers, Math.ceil(Math.random() * 10)])
          }
        >
          random number
        </button>
      </div>
    </div>
  );
};

export default ReactUseMemo;
