import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import SplashPage from "./components/SplashPage";
import UserHome from "./components/UserHome";
import BrowseHosts from "./components/BrowseHosts"
import LoginForm from "./components/forms/LoginForm";
import EventForm from "./components/forms/CreateEventForm";
import Event from "./components/Event";
// import EventCard from "./components/EventCard";

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
        <Route path="/hosts" exact={true}>
          <BrowseHosts />
        </Route>
        <ProtectedRoute path="/" exact={true}>
          <UserHome />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
