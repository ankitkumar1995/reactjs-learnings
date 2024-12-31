import React, { useEffect, useState } from "react";

const useElementSize = (elementRef) => {
  const [elementSize, setElementSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const handleResize = () => {
      const currentElement = elementRef.current;
      setElementSize({
        width: currentElement.clientWidth,
        height: currentElement.clientHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return elementSize;
};

export default useElementSize;
