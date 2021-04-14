import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import LandingPage from "./components/LandingPage";
import UserHome from "./components/UserHome";
import Account from "./components/Account";
import Profile from "./components/Profile";
import Favorites from "./components/Favorites";
import Details from "./components/Details";
import Help from "./components/Help";
import UserHelp from "./components/UserHelp";
import Messages from "./components/Messages";
import Search from "./components/Search";
import Events from "./components/Events";
import About from "./components/About"
import Tasting from "./components/Tasting"
import Stories from "./components/Stories"
import News from "./components/News"


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
          <LandingPage />
        </Route>
        <Route path="/about" exact={true}>
          <About />
        </Route>
        <Route path="/tasting" exact={true}>
          <Tasting />
        </Route>
        <Route path="/stories" exact={true}>
          <Stories />
        </Route>
        <Route path="/news" exact={true}>
          <News />
        </Route>
        <Route path="/help" exact={true}>
          <Help />
        </Route>
        <ProtectedRoute path="/home" exact={true}>
          <UserHome />
        </ProtectedRoute>
        <ProtectedRoute path="/search" exact={true}>
          <Search />
        </ProtectedRoute>
        <ProtectedRoute path="/account" exact={true}>
          <Account />
        </ProtectedRoute>
        <ProtectedRoute path="/profile" exact={true}>
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute path="/favorites" exact={true}>
          <Favorites />
        </ProtectedRoute>
        <ProtectedRoute path="/userhelp" exact={true}>
          <UserHelp />
        </ProtectedRoute>
        <ProtectedRoute path="/messages" exact={true}>
          <Messages />
        </ProtectedRoute>
        <ProtectedRoute path="/events" exact={true}>
          <Events />
        </ProtectedRoute>
        <ProtectedRoute path="/details" exact={true}>
          <Details />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
