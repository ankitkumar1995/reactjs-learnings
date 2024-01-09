import React from "react";

const ErrorFallbackComponent = ({ error, errorInfo }) => {
  return (
    <div>
      ErrorFallbackComponent
      <h3>Error fallback component</h3>
      <p>{error.toString()}</p>
      <p>{errorInfo.componentStack}</p>
    </div>
  );
};

export default ErrorFallbackComponent;
