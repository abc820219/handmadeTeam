import React, { Component } from "react";
import { Link } from "react-router-dom";

class Handmade extends Component {
  render() {
    return (
      <>
       
        <Link to="/handmade/store/course">course</Link>
        <br></br>
        <Link to="/handmade/member">member</Link>
        <br></br>
        <Link to="/handmade/store">store</Link>
        <br></br>
        <Link to="/handmade/teacher">teacher</Link>
        <br></br>
        <Link to="/handmade/ingredients">ingredients</Link>
        <br></br>
      </>
    );
  }
}

export default Handmade;
