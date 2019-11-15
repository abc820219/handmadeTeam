import React, { Component } from "react";
import Course_navbar from "../components/course/Course_navbar";
import NavBar from "../components/NavBar";

class Store extends Component {
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
      </>
    );
  }
}

export default Store;
