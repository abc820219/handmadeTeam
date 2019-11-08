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
} from "./routes/index";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Navgation}></Route>
          <Route path="/handmade/" exact component={Handmade}></Route>
          <Route path="/handmade/store/course/:id?" component={Course}></Route>
          <Route path="/handmade/cart" component={Cart}></Route>
          <Route path="/handmade/member/:id?" component={Member}></Route>
          <Route path="/handmade/store/:id?" component={Store}></Route>
          <Route path="/handmade/teacher/:id?" component={Teacher}></Route>
          <Route
            path="/handmade/ingredients/:id?"
            component={Ingredients}
          ></Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;
