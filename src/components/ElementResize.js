import React, { useRef } from "react";
import useElementSize from "./customHooks/useElementSize";

const ElementResize = () => {
  const parentDiv = useRef(null);
  console.log(parentDiv);
  const { width, height } = useElementSize(parentDiv);
  return (
    <div ref={parentDiv}>
      ElementResize
      <div>
        <div>
          {width} {height}
        </div>
      </div>
    </div>
  );
};

export default ElementResize;
