import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import {
  Handmade,
  Course,
  Cart,
  Member,
  Store,
  Teacher,
  Ingredients
} from "./routes/index";
function ProductPage() {
  return (
    <>
    
      <Switch>
        <Route path="/handmade/:id?" component={Handmade}></Route>
        <Route path="/course/:id?" component={Course}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/store/:id?" component={Store}></Route>
        <Route path="/teacher/:id?" component={Teacher}></Route>
        <Route path="/ingredients/:id?" component={Ingredients}></Route>
      </Switch>
    </>
  );
}
export default ProductPage;
