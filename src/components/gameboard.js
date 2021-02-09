import React from "react";
import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: "playerChoice"
    };
  }
  resetGame() {
    this.setState({
      gameState: "playerChoice",
      houseChoice: null,
      playerChoice: null,
      winner: null
    });
  }

  playerChoice(choice) {
    this.setState({ playerChoice: choice, gameState: "houseChoice" });
    this.houseChoice();
  }
  houseChoice() {
    let rand = Math.floor(Math.random() * 3);
    let options = ["rock", "paper", "scissors"];

    setTimeout(() => {
      this.setState({ houseChoice: options[rand] });
      this.chooseWinner();
    }, 2000);
  }
  chooseWinner() {
    if (this.state.playerChoice == this.state.houseChoice) {
      this.setState({ winner: "draw" });
    } else if (this.state.playerChoice == "rock") {
      if (this.state.houseChoice == "paper") {
        this.setState({ winner: "house" });
      } else {
        this.setState({ winner: "player" });
      }
    } else if (this.state.playerChoice == "paper") {
      if (this.state.houseChoice == "scissors") {
        this.setState({ winner: "house" });
      } else {
        this.setState({ winner: "player" });
      }
    } else if (this.state.playerChoice == "scissors") {
      if (this.state.houseChoice == "rock") {
        this.setState({ winner: "house" });
      } else {
        this.setState({ winner: "player" });
      }
    }
    if (this.state.winner == "player") {
      this.props.changeScore();
    } else if (this.state.winner == "house") {
      this.props.resetScore();
    }
    this.setState({ gameState: "result" });
  }
  render() {
    let rockDiv = (
      <div className="optionCont rockContainer">
        <img src={rock} className="option" />
      </div>
    );
    let paperDiv = (
      <div className="optionCont paperContainer">
        <img src={paper} className="option" />
      </div>
    );
    let scissorsDiv = (
      <div className="optionCont scissorsContainer">
        <img src={scissors} className="option" />
      </div>
    );
    let playerChoice;
    if (this.state.playerChoice == "rock") {
      playerChoice = rockDiv;
    } else if (this.state.playerChoice == "paper") {
      playerChoice = paperDiv;
    } else if (this.state.playerChoice == "scissors") {
      playerChoice = scissorsDiv;
    }

    let houseChoice;
    if (this.state.houseChoice == "rock") {
      houseChoice = rockDiv;
    } else if (this.state.houseChoice == "paper") {
      houseChoice = paperDiv;
    } else if (this.state.houseChoice == "scissors") {
      houseChoice = scissorsDiv;
    } else {
      houseChoice = (
        <div className="optionCont deciding">
          <div className="option "></div>
        </div>
      );
    }

    if (this.state.gameState == "playerChoice") {
      return (
        <div className="options_container">
          <div
            id="rock"
            onClick={() => {
              this.playerChoice("rock");
            }}
          >
            {rockDiv}
          </div>
          <div
            id="paper"
            onClick={() => {
              this.playerChoice("paper");
            }}
          >
            {paperDiv}
          </div>
          <div
            id="scissor"
            onClick={() => {
              this.playerChoice("scissors");
            }}
          >
            {scissorsDiv}
          </div>
        </div>
      );
    } else if (this.state.gameState == "houseChoice") {
      return (
        <div class="decisionsCont">
          <div>{playerChoice}</div>
          <div>{houseChoice}</div>
        </div>
      );
    } else if (this.state.gameState == "result") {
      if (this.state.winner == "draw") {
        return (
          <div className="decisionsCont">
            <div>{playerChoice}</div>
            <div>{houseChoice}</div>
            <div className="promt">
              <h2>{this.state.winner}</h2>
              <button
                onClick={() => {
                  this.resetGame();
                }}
              >
                Play Again
              </button>
            </div>
          </div>
        );
      } else {
        return (
          <div className="decisionsCont">
            <div
              className={
                this.state.winner == "player" && this.state.winner != "draw"
                  ? "winner"
                  : "loser"
              }
            >
              {playerChoice}
            </div>
            <div
              className={
                this.state.winner == "house" && this.state.winner != "draw"
                  ? "winner"
                  : "loser"
              }
            >
              {houseChoice}
            </div>
            <div className="promt">
              <h2>{this.state.winner} Wins</h2>
              <button
                onClick={() => {
                  this.resetGame();
                }}
              >
                Play Again
              </button>
            </div>
          </div>
        );
      }
    }
  }
}

export default GameBoard;
