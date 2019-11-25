import React, { Component } from "react";
import NavBar from "../components/NavBar";
import IngredientsAll from "../components/ingredients/IngredientsAll";


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
        <IngredientsAll />
      </>
    );
  }
}

export default Ingredients;