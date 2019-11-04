import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import {
  Handmade,
  Navgation,
  Course,
  Cart,
  Member,
  Store,
  Teacher,
  Ingredients
} from "./Pages/index";
function App() {
  return (
    <Router>
      <Route path='/' exact component={Navgation}></Route>
      <Route path='/handmade/:id?' component={Handmade}></Route>
      <Route path='/course' component={Course}></Route>
      <Route path='/cart' component={Cart}></Route>
      <Route path='/member' component={Member}></Route>
      <Route path='/store' component={Store}></Route>
      <Route path='/teacher' component={Teacher}></Route>
      <Route path='/ingredients' component={Ingredients}></Route>
    </Router>
  );
}
export default App;
