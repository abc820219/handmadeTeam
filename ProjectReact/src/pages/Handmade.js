import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class Handmade extends Component {
  render() {
    return (
      <>
        <Link to="course">course</Link>
        <br></br>
        <Link to="cart">cart</Link>
        <br></br>
        <Link to="member">member</Link>
        <br></br>
        <Link to="store">store</Link>
        <br></br>
        <Link to="teacher">teacher</Link>
        <br></br>
        <Link to="ingredients">ingredients</Link>
        <br></br>
      </>
    );
  }
}

export default Handmade;
