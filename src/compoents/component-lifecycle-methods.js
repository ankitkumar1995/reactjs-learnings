import React from "react";
class ComponentLifecycleMethods extends React.Component {
  //1. constructor
  constructor(props) {
    super();
    this.state = { todos: [], counter: 0 };
    console.log("Metgod -1 Construtor component being constructed");
  }

  // 2. componentWillMount method is deprecated
  // this method is called just before the component added to the dom
  UNSAFE_componentWillMount() {
    console.log(
      "*** deprecated *** 2. UNSAFE_componentWillMount - Component is about to mount"
    );
  }

  // this method is called before rendering when new props or state are being received
  static getDerivedStateFromProps(nextProps, nextState) {
    console.log(
      "3. getDerivedStateFromProps - called before rendering  when new props or state are being received",
      nextProps,
      nextState
    );
  }
  // this method is called after the component is added to the dom
  componentDidMount() {
    console.log("4. componentDidMount - component is now mounted to the dom");

    // fetch data from api after the component is mounted
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ todos: data });
      });
  }

  getDerivedStateFromProps(nextProps, nextState) {
    console.log(
      "5. getDerivedStateFromProps - called before rendering when new props or state are being received",
      nextProps,
      nextState
    );
  }

  // this method is called whenever the component is about to update
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "6. shouldComponentUpdate - called before rendering when new props or state are being received",
      nextProps,
      nextState
    );
    // decide whether the component should re-render
    return nextState.counter % 2 === 0;
  }

  // this method is called before rendering when new props or state being received
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      "7. getSnapshotBeforeUpdate - called after the component renders but before the result is commited to the dom",
      prevProps,
      prevState
    );
    // returning null means no snapshot
    return null;
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(
      "*** deprecated *** 8. UNSAFE_componentWillReceiveProps - component is receiving new props",
      nextProps
    );
  }

  // componentWillUpdate method is deprecated
  // this method is called just before the component is about to update

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log(
      "*** deprecated *** 9. UNSAFE_componentWillUpdate - component is about to update",
      nextProps,
      nextState
    );
  }
  // render()

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      "10. componentDidUpdate - called after the component renders and the update is commited to the dom",
      prevProps,
      prevState,
      snapshot
    );
  }

  componentWillUnmount() {
    console.log("11. componentWillUnmount - component is about to remove");
  }

  componentDidCatch(error, info) {
    console.log(
      "12. componentDidCatch - called when there is a error during rendering, in a lifecycle method , or in the constructor of any child component",
      error,
      info
    );
  }
  static getDerivedStateFromError(error) {
    console.log(
      "13. getDerivedStateFromError - called after the component is remove from the dom",
      error
    );
    // returning null means no state update is necessary
    return null;
  }
  render() {
    return <div>Class component lifecycle methods</div>;
  }
}

export default ComponentLifecycleMethods;
