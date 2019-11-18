import React, { Component } from "react";
import Course_navbar from "../components/course/Course_navbar";
import NavBar from "../components/NavBar";
import StoreMenu from "../components/store/StoreMenu.js";

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
        <StoreMenu />
      </>
    );
  }
}

export default Store;
