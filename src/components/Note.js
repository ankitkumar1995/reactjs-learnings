import React, { forwardRef } from "react";

const Note = forwardRef(({ initialPosition, note, ...props }, ref) => {
  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        left: `${initialPosition?.x}px`,
        top: `${initialPosition?.y}px`,
        border: "1px solid",
        userSelect: "none",
        padding: "10px",
        width: "200px",
        cursor: "move",
      }}
      {...props}
    >
      📌 {note}
    </div>
  );
});

export default Note;
