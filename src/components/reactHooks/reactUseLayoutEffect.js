import React, { useLayoutEffect, useRef, useState } from "react";

const ReactUseLayoutEffect = () => {
  const containerRef = useRef(null);
  const [fontSize, setFontSize] = useState(20);
  useLayoutEffect(() => {
    const containerWidth = containerRef.current.clientWidth;

    const newFontSize = Math.min(30, containerWidth / 10);
    setFontSize(newFontSize);
  });
  return (
    <div
      ref={containerRef}
      style={{ border: "1px solid #ccc", padding: "10px", maxWidth: "300px" }}
    >
      <p style={{ fontSize: fontSize }}>dynamic font size</p>
    </div>
  );
};

export default ReactUseLayoutEffect;
