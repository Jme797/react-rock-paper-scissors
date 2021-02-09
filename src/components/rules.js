import React from "react";
import rulesImage from "../images/image-rules.svg";

class Rules extends React.Component {
  constructor() {
    super();
    this.state = {
      showRules: false
    };
  }
  toggleRules() {
    this.setState({ showRules: !this.state.showRules });
  }
  render() {
    if (this.state.showRules) {
      return (
        <div className="rulesCont">
          <h2
            className="closeIcon"
            onClick={() => {
              this.toggleRules();
            }}
          >
            X
          </h2>
          <img src={rulesImage} />
        </div>
      );
    }
    return (
      <div className="container">
        <button
          className="rulesButton"
          onClick={() => {
            this.toggleRules();
          }}
        >
          Rules
        </button>
      </div>
    );
  }
}

export default Rules;
