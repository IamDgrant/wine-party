import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import SplashPage from "./components/SplashPage";
import UserHome from "./components/UserHome";
import LoginForm from "./components/auth/LoginForm";
import EventForm from "./components/auth/EventForm";
import Event from "./components/Event";
import EventCard from "./components/EventCard";

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
        {/* <Route path="/login" exact={true}>
          <LoginForm />
        </Route> */}
        <ProtectedRoute path="/" exact={true}>
          <UserHome />
          {/* <EventCard /> */}
        </ProtectedRoute>
        {/* <ProtectedRoute path="/" exact={true}>
          <NavBar />
        </ProtectedRoute> */}
        {/* <ProtectedRoute path="/events" exact={true}>
          <EventForm />
          <Event />
          <EventCard />
        </ProtectedRoute> */}
        {/* <Route path="/hosts" exact={true}>
          <Search />
        </Route> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
