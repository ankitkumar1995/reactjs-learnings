import React from "react";
class StopChildComponentRendering extends React.Component {
  constructor(props) {
    super();
    this.state = {
      counter: 0,
    };
  }
  // increment child counter for event counts
  // stop rendering parent and child if count is not even

  //   shouldComponentUpdate(nextProps, nextState) {
  //     if (nextState.counter !== this.state.counter) {
  //       return nextState.counter % 2 === 0;
  //     }
  //     return false;
  //   }
  incrementCounter = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };
  render() {
    console.log("parent component rendering", this.state);
    return (
      <div>
        <h3>Stop child component rendering</h3>
        <div>
          <button onClick={this.incrementCounter}>Increment Counter</button>
          <div>Increment Counter {this.state.counter}</div>
        </div>
        <div>
          <ChildComponent counter={this.state.counter} />
        </div>
      </div>
    );
  }
}
class ChildComponent extends React.Component {
  // stops rendering of child component if count is not even
  shouldComponentUpdate(nextProps) {
    return nextProps.counter % 2 === 0;
  }
  render() {
    console.log("child component rendering", this.props);
    return <div>Child Component - Even Counter {this.props.counter}</div>;
  }
}

export default StopChildComponentRendering;
