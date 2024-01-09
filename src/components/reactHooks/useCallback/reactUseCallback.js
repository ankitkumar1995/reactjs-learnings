import React, { useCallback, useState } from "react";

const ReactUseCallback = () => {
  const [count, setCount] = useState(0);
  const handleButttonAction = useCallback(() => {
    console.log("button click");
    setCount(count + 1);
  }, [count]);
  const childrens = ["child1", "child2", "child3"];
  return (
    <div>
      React useCallback
      <div>
        <h3>parent component</h3>
        <p>Parent count: {count}</p>
        {childrens.map((child, index) => (
          <ChildComponent
            key={index}
            label={child}
            onClick={handleButttonAction}
          />
        ))}
      </div>
    </div>
  );
};

const ChildComponent = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};
export default ReactUseCallback;
