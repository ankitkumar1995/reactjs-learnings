import logo from "./logo.svg";
import "./App.css";
import StopChildComponentRendering from "./compoents/stop-child-component-rendering";
import ComponentLifecycleMethods from "./compoents/component-lifecycle-methods";

function App() {
  return (
    <div className="App">
      <StopChildComponentRendering />
      <div>
        <ComponentLifecycleMethods />
      </div>
    </div>
  );
}

export default App;
