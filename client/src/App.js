import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignupForm from "./components/Auth/Auth";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignupForm} />
        <Route path="/tasks" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
