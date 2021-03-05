import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import EventForm from "./components/auth/EventForm";
import ReviewForm from "./components/auth/ReviewForm";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
// import UsersList from "./components/UsersList";
// import User from "./components/User";
import SplashPage from "./components/SplashPage";
import UserHome from "./components/UserHome";
import Event from "./components/Event";

import { restoreUser } from "./store/session";

const App = () => {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch(restoreUser()).then(() => {
      setLoaded(true);
    });
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/splash" exact={true}>
          <SplashPage />
        </Route>
        <Route path="/" exact={true}>
          <UserHome />
        </Route>
        {/* <Route path="/login" exact={true}>
          <LoginForm />
        </Route> */}
        {/* <ProtectedRoute path="/" exact={true}>
          <NavBar />
          
        </ProtectedRoute> */}
        <ProtectedRoute path="/events" exact={true}>
          {/* <NavBar /> */}
          <EventForm />
          <Event></Event>
        </ProtectedRoute>
        <Route path="/hosts" exact={true}>
          <Search />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
