import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
// import ProtectedRoute from "./components/auth/ProtectedRoute";
// import UsersList from "./components/UsersList";
// import User from "./components/User";
import SplashPage from "./components/SplashPage";
import { restoreUser } from "./store/session";
import LoginModal from "./components/modals/LogInModal";
import SignUpModal from "./components/modals/SignUpModal";
import SignUpButton from "./components/auth/SignUpButton"

const App = () => {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch(restoreUser()).then(() => {
      setLoaded(true);
    });
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route>
          <SplashPage path="/" exact={true}></SplashPage>
          <NavBar></NavBar>
        </Route>
        {/* <Route path="/login" exact={true}>
          <SignUpButton />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route> */}
        {/* <ProtectedRoute path="/users" exact={true}>
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/" exact={true}>
          <h1>Wine Party</h1>
        </ProtectedRoute> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
