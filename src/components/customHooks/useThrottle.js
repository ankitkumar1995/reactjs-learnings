import React, { useCallback, useRef } from "react";

const useThrottle = (cb, delay = 500) => {
  const shouldWait = useRef(false);
  const waitingArgs = useRef(null);

  const timeoutFunc = useCallback(() => {
    if (waitingArgs.current == null) {
      shouldWait.current = false;
    } else {
      cb(...waitingArgs.current);
      waitingArgs.current = null;
      setTimeout(timeoutFunc, delay);
    }
  }, [cb, delay]);
  const throttleFunction = useCallback(
    (...args) => {
      return (...args) => {
        if (shouldWait) {
          waitingArgs.current = args;
        }
        cb(...args);
        shouldWait.current = true;
        setTimeout(timeoutFunc, delay);
      };
    },
    [cb, timeoutFunc, delay]
  );
  return throttleFunction;
};

export default useThrottle;
