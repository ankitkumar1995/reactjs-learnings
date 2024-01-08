import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({
      errorInfo,
    });
    console.error(error, errorInfo);
  }
  render() {
    const { hasError, errorInfo } = this.state;
    const { fallbackComponent: FallbackComponent, children } = this.props;
    if (hasError) {
      if (FallbackComponent) {
        <FallbackComponent
          error={this.state.error}
          errorInfo={this.state.errorInfo}
        />;
      }
      return (
        <div>
          <h3>something went wrong</h3>
          {errorInfo && <p>{errorInfo.componentStack}</p>}
        </div>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
