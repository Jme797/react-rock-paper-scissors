import React from "react";
import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";

class GameBoard extends React.Component {
  constructor() {
    super();
    this.handleSelection = this.handleSelection.bind(this);
    this.state = {
      gameState: "playerChoice",
      playerChoice: null,
      houseChoice: null,
    };
    this.houseChoice = this.houseChoice.bind(this);
  }
  handleSelection(sel) {
    this.setState({ gameState: "houseChoice", playerChoice: sel });
    this.houseChoice();
  }
  houseChoice() {
    let num = Math.floor(Math.random() * 3);
    let options = ["rock", "paper", "scissors"];

    setTimeout(() => {
      this.setState({ houseChoice: options[num] });
    }, 2000);
  }
  render() {
    if (this.state.gameState == "playerChoice") {
      return (
        <div className="options_container">
          <img
            onClick={() => {
              this.handleSelection("rock");
            }}
            className="option rock"
            src={rock}
          />
          <img
            onClick={() => {
              this.handleSelection("paper");
            }}
            className="option paper"
            src={paper}
          />
          <img
            onClick={() => {
              this.handleSelection("scissors");
            }}
            className="option scissors"
            src={scissors}
          />
        </div>
      );
    } else if (this.state.gameState == "houseChoice") {
      let choice;
      if (this.state.playerChoice == "rock") {
        choice = <img src={rock} className="option rock selection" />;
      } else if (this.state.playerChoice == "paper") {
        choice = <img src={paper} className="option paper selection" />;
      } else if (this.state.playerChoice == "scissors") {
        choice = <img src={scissors} className="option scissors selection" />;
      }
      let houseChoice;
      if (this.state.houseChoice == "rock") {
        houseChoice = <img src={rock} className="option rock selection" />;
      } else if (this.state.houseChoice == "paper") {
        houseChoice = <img src={paper} className="option paper selection" />;
      } else if (this.state.houseChoice == "scissors") {
        houseChoice = (
          <img src={scissors} className="option scissors selection" />
        );
      } else {
        houseChoice = <div className="spinner option selection"></div>;
      }

      return (
        <div className="container">
          <div className="choice">
            {choice}
            <h2>You chose</h2>
          </div>
          <div className="choice">
            {houseChoice}
            <h2>Houses Choice</h2>
          </div>
        </div>
      );
    }
  }
}

export default GameBoard;
