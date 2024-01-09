import logo from "./logo.svg";
import "./App.css";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";
import ErrorFallbackComponent from "./components/ErrorFallbackComponent";

function App() {
  return (
    <div>
      <ErrorBoundary fallbackComponent={ErrorFallbackComponent}>
        <FunctionalComponent />
      </ErrorBoundary>
      <ErrorBoundary>
        <ClassComponent />
      </ErrorBoundary>
    </div>
  );
}

export default App;
