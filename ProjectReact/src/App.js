import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Handmade,
  Navgation,
  Course,
  Cart,
  Member,
  Store,
  Teacher,
  Teacher_Subject,
  Ingredients
} from "./routes/index";
function App() {
  const [login, setLogin] = useState(false);
  const loginLocal = localStorage.getItem("member_id") || 0;
  useEffect(() => {
    if (loginLocal) {
      setLogin(true);
    }

    // localStorage.setItem(`courseCart${loginLocal}`, "[]");
    // localStorage.setItem(`ingreCart${loginLocal}`, "[]");
    if (!localStorage.getItem(`courseCart${loginLocal}`)) {
      localStorage.setItem(`courseCart${loginLocal}`, "[]");
    }
    if (!localStorage.getItem(`ingreCart${loginLocal}`)) {
      localStorage.setItem(`ingreCart${loginLocal}`, "[]");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [login]);
  const checkLogIn = () => {
    setLogin(!login);
  };

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Navgation}></Route>
          <Route
            path="/handmade/"
            exact
            component={() => (
              <Handmade login={{ login }} checkLogIn={checkLogIn} />
            )}
          ></Route>
          <Route
            path="/handmade/store/course/"
            exact
            component={() => (
              <Course login={{ login }} checkLogIn={checkLogIn} />
            )}
          ></Route>
          <Route
            path="/handmade/member/:id?"
            component={() => (
              <Member login={{ login }} checkLogIn={checkLogIn} />
            )}
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
        </Switch>
      </Router>
    </>
  );
}
export default App;
