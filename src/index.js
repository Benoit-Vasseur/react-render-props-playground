import "./styles.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";

function Wizard({ children }) {
  const [step, setStep] = useState(0);
  function goToNext() {
    setStep(step + 1);
  }
  return <div onClick={goToNext}>{children({ goToNext, step })}</div>;
}

export function Foo() {
  return (
    <Wizard>
      {({ step, goToNext }) => (
        <button
          onClick={() => {
            console.log("Click");
          }}
        >
          Hello {step}
        </button>
      )}
    </Wizard>
  );
}

const app = document.querySelector("#app");
ReactDOM.render(<Foo />, app);
/*
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

ReactDOM.render(<Toggle />, app);
*/
