import Header from "./components/header.js";
import GameBoard from "./components/gameboard";
import React from "react";
import Rules from "./components/rules";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0
    };
    this.changeScore = this.changeScore.bind(this);
    this.resetScore = this.resetScore.bind(this);
  }
  changeScore() {
    let newScore = this.state.score + 1;
    this.setState({ score: newScore });
  }
  resetScore() {
    let newScore = 0;
    this.setState({ score: newScore });
  }
  render() {
    return (
      <div>
        <Header score={this.state.score} />
        <GameBoard
          changeScore={this.changeScore}
          resetScore={this.resetScore}
        />
        <Rules />
      </div>
    );
  }
}

export default App;
