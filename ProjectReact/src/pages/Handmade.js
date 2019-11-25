import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Handmade from "../components/handmade/Handmade";


class Ingredients extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <NavBar
          login={this.props.login}
          checkLogIn={this.props.checkLogIn}
        ></NavBar>
        <Handmade />
      </>
    );
  }
}

export default Ingredients;