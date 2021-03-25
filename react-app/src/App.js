import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import SplashPage from "./components/SplashPage";
import UserHome from "./components/UserHome";
import BrowseHosts from "./components/BrowseHosts";
import FindHost from "./components/FindHost"
import SearchResult from "./components/SearchResults";
import EventForm from "./components/auth/forms/CreateEventForm";
// import LoginForm from "./components/forms/LoginForm";
// import Event from "./components/Event";
// import FindHost from "./components/FindHost"

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
        <Route path="/" exact={true}>
          <SplashPage />
        </Route>
        <Route path="/hosts" exact={true}>
          <BrowseHosts />
          {/* <FindHost /> */}
          {/* <SearchResult /> */}
        </Route>
        <ProtectedRoute path="/home" exact={true}>
          <UserHome />
        </ProtectedRoute>
        <ProtectedRoute path="/events" exact={true}>
          <EventForm />
        </ProtectedRoute>
        <ProtectedRoute path="/search" exact={true}>
          <SearchResult />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
