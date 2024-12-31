import React, { useState } from "react";
import { Circle, Rectangle, ShapeTypes, Square } from "./Shapes";
import Shape from "./Shape";
import "./style.css";

const PrototypePattern = () => {
  const [shapes, setShapes] = useState([]);
  const addShape = (shapeType) => {
    switch (shapeType) {
      case ShapeTypes.CIRCLE:
        setShapes([...shapes, new Circle(20)]);
        break;
      case ShapeTypes.RECTANGLE:
        setShapes([...shapes, new Rectangle(10, 20)]);
        break;
      case ShapeTypes.SQUARE:
        setShapes([...shapes, new Square(20, 20)]);
        break;
    }
  };
  return (
    <div className="flex flex-col p-2">
      <div className="flex gap-2 flex-wrap items-center">
        {shapes.map((shape) => (
          <Shape shape={shape} />
        ))}
      </div>
      <div className="flex gap-4 m-auto mt-4">
        <button
          className="shadow-md rounded-md py-1.5 px-3 hover:bg-indigo-700 hover:text-white"
          onClick={() => {
            addShape(ShapeTypes.CIRCLE);
          }}
        >
          Add Circle
        </button>
        <button
          className="shadow-md rounded-md py-1.5 px-3 hover:bg-indigo-700 hover:text-white"
          onClick={() => {
            addShape(ShapeTypes.SQUARE);
          }}
        >
          Add Square
        </button>
        <button
          className="shadow-md rounded-md py-1.5 px-3 hover:bg-indigo-700 hover:text-white"
          onClick={() => {
            addShape(ShapeTypes.RECTANGLE);
          }}
        >
          Add Rectangle
        </button>
      </div>
    </div>
  );
};

export default PrototypePattern;
