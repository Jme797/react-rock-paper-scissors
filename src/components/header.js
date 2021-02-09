import React from "react";
import logo from "../images/logo.svg";
import "../styles/header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header_container">
        <img src={logo} />
        <div className="scroeboard_container">
          <p>SCORE</p>
          <h2>{this.props.score}</h2>
        </div>
      </div>
    );
  }
}

export default Header;
