import React, { useEffect, useState } from "react";

const useDebounce = ({ value, delay = 500 }) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounceValue;
};
export default useDebounce;

// function debounce(cb, delay) {
//   let timer = null;
//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       cb(...args);
//     }, delay);
//   };
// }
// function throttle(cb, delay = 1000) {
//   let shouldWait = false;
//   let waitingArgs;
//   const timeoutFunc = () => {
//     if (waitingArgs == null) {
//       shouldWait = false;
//     } else {
//       cb(...waitingArgs);
//       waitingArgs = null;
//       setTimeout(timeoutFunc, delay);
//     }
//   };
//   return (...args) => {
//     if (shouldWait) {
//       waitingArgs = args;
//       return;
//     }
//     cb(...args);
//     shouldWait = true;
//     setTimeout(timeoutFunc, delay);
//   };
// }
