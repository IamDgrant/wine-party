import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import SplashPage from "./components/SplashPage";
import UserHome from "./components/UserHome";
import BrowseResults from "./components/BrowseResults";
import FindHost from "./components/FindHost"
import Account from "./components/Account"
import Profile from "./components/Profile"
import SearchResult from "./components/SearchResults";
import Events from "./components/Events";
import FAQ from "./components/FAQ"
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
          <BrowseResults />
        </Route>
        <Route path="/faq" exact={true}>
          <FAQ />
        </Route>
        <ProtectedRoute path="/home" exact={true}>
          <UserHome />
        </ProtectedRoute>
        <ProtectedRoute path="/account" exact={true}>
          <Account />
        </ProtectedRoute>
        <ProtectedRoute path="/profile" exact={true}>
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute path="/account" exact={true}>
          <Account />
        </ProtectedRoute>
        <ProtectedRoute path="/events" exact={true}>
          <Events />
        </ProtectedRoute>
        <ProtectedRoute path="/search" exact={true}>
          <SearchResult />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
