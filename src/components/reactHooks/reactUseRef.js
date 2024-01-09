import React, { useRef } from "react";

const ReactUseRef = () => {
  const focusInputRef = useRef(null);
  const handleFocus = (inputRef) => {
    if (focusInputRef.current) {
      focusInputRef.current.blur();
    }
    inputRef.current.focus();

    focusInputRef.current = inputRef;
  };
  return (
    <div>
      React useRef
      <div>
        <label>
          First Name: <input ref={handleFocus} type="text" />
        </label>
        <label>
          Email: <input ref={handleFocus} type="email" />
        </label>
      </div>
    </div>
  );
};

export default ReactUseRef;
