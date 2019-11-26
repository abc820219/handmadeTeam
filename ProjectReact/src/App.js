import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  BrowserRouter
} from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import {
  Handmade,
  Navgation,
  Course,
  Cart,
  Member,
  Store,
  Teacher,
  Teacher_Subject,
  Ingredients,
  MemberEmail,
  Course_detail,
  TestStore
} from "./routes/index";

import CartStore from "./components/cart/CartStore";
import {
  cartCourseReducer,
  cartIngreReducer,
  cartCheckoutReducer,
  courseCartCfReducer
} from "./components/cart/CartReducer";
export const cartPageInitState = { step: 0 };
function App() {
  const [login, setLogin] = useState(false);
  const loginLocal = localStorage.getItem("member_id") || 0;
  const { id, courseCartCf, courseCart, ingreCart, afterCoupon } = useContext(
    CartStore
  );
  const [cartCourseState, cartCourseDispatch] = useReducer(
    cartCourseReducer,
    courseCart
  );

  const [cartIngreState, cartIngreDispatch] = useReducer(
    cartIngreReducer,
    ingreCart
  );
  useEffect(() => {
    if (loginLocal) {
      setLogin(true);
    }

    if (!localStorage.getItem(`courseCart${loginLocal}`)) {
      localStorage.setItem(`courseCart${loginLocal}`, "[]");
    }
    if (!localStorage.getItem(`ingreCart${loginLocal}`)) {
      localStorage.setItem(`ingreCart${loginLocal}`, "[]");
    }
  }, [login]);
  const checkLogIn = () => {
    setLogin(!login);
  };

  return (
    <>
      <Router history={BrowserRouter}>
      
          <CartStore.Provider
            value={{
              id: id,
              cartCourseDispatch,
              courseCart: cartCourseState,
              cartIngreDispatch,
              ingreCart: cartIngreState
            }}
          >  <Switch>
            <Route path="/" exact component={Navgation}></Route>
            <Route
              path="/handmade/"
              exact
              component={() => (
                <Handmade login={{ login }} checkLogIn={checkLogIn} />
              )}
            ></Route>
            <Route
              path="/handmade/store/:sid/course/"
              exact
              component={() => (
                <Course login={{ login }} checkLogIn={checkLogIn} />
              )}
            ></Route>
            <Route
              path="/handmade/store/:sid?/course/:cSid"
              exact
              component={() => (
                <Course_detail login={{ login }} checkLogIn={checkLogIn} />
              )}
            ></Route>
            <Route
              path="/handmade/test"
              exact
              component={() => (
                <TestStore login={{ login }} checkLogIn={checkLogIn} />
              )}
            ></Route>
            <Route
              path="/handmade/member/:id?"
              component={() => (
                <Member login={{ login }} checkLogIn={checkLogIn} />
              )}
            ></Route>
            <Route
              path="/handmade/email/:sid?"
              component={() => <MemberEmail />}
            ></Route>
            <Route
              path="/handmade/store/"
              exact
              component={() => (
                <Store login={{ login }} checkLogIn={checkLogIn} />
              )}
            ></Route>
            <Route
              path="/handmade/teacher/"
              exact
              component={() => (
                <Teacher login={{ login }} checkLogIn={checkLogIn} />
              )}
            ></Route>
            <Route
              path="/handmade/teacher/subject/:image_id?"
              component={props => (
                <Teacher_Subject
                  {...props}
                  login={{ login }}
                  checkLogIn={checkLogIn}
                />
              )}
            ></Route>
            <Route
              path="/handmade/ingredients/:id?"
              component={() => (
                <Ingredients login={{ login }} checkLogIn={checkLogIn} />
              )}
            ></Route>
            <Route path="" component={()=>(404)} />
            </Switch>
          </CartStore.Provider>
      </Router>
    </>
  );
}
export default App;
