import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import SplashPage from "./components/SplashPage";
import UserHome from "./components/UserHome";

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
        <ProtectedRoute path="/" exact={true}>
          <UserHome />
        </ProtectedRoute>
        {/* <Route path="/login" exact={true}>
          <LoginForm />
        </Route> */}
        {/* <ProtectedRoute path="/" exact={true}>
          <NavBar />
        </ProtectedRoute> */}
        {/* <ProtectedRoute path="/events" exact={true}>
          <EventForm />
          <Event></Event>
        </ProtectedRoute> */}
        {/* <Route path="/hosts" exact={true}>
          <Search />
        </Route> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
