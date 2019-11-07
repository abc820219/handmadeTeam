import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {
  Handmade,
  Navgation,
  Course,
  Cart,
  Member,
  Store,
  Teacher,
  Ingredients
} from "./Routes/index";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Navgation}></Route>
          <Route path="/handmade/:id?" component={Handmade}></Route>
          <Route path="/course/:id?" component={Course}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/member/:id?" component={Member}></Route>
          <Route path="/store/:id?" component={Store}></Route>
          <Route path="/teacher/:id?" component={Teacher}></Route>
          <Route path="/ingredients/:id?" component={Ingredients}></Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;
